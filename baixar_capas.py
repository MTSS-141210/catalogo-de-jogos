#
""""" 
Baixa a imagem oficial (capa com o logo) de cada jogo de JS/jogos.js e salva em IMG/capas/.
Fonte: loja da Steam (sem chave, sem cadastro).

Como usar (precisa de Python 3 e internet):
    python baixar_capas.py             -> baixa só as que faltam
    python baixar_capas.py --refazer   -> apaga as antigas e baixa tudo de novo

Jogos que não existem na Steam (Zelda, Mario, Minecraft, Valorant...) ficam
listados em capas_faltando.txt: coloque essas imagens à mão em IMG/capas/.
"""
import difflib
import json
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

RAIZ = Path(__file__).resolve().parent
ARQUIVO_JOGOS = RAIZ / "JS" / "jogos.js"
PASTA_CAPAS = RAIZ / "IMG" / "capas"
BUSCA = "https://store.steampowered.com/api/storesearch/"
CDN = "https://cdn.akamai.steamstatic.com/steam/apps/{id}/{arq}"
ARQUIVOS = ["library_600x900.jpg", "header.jpg"]  # capa vertical; se não houver, banner
UA = {"User-Agent": "Mozilla/5.0 (ArcanumCatalogo; projeto academico)"}
EXTS = ("jpg", "png", "webp")

# Jogos que estão na Steam com nome diferente: código (appid) fixo.
APPIDS_FIXOS = {
    "civilization-vi": 289070,
    "sekiro-shadows-die-twice": 814380,
    "final-fantasy-vii-remake": 1462040,
    "microsoft-flight-simulator": 1250410,
    "counter-strike-global-offensive": 730,
    "life-is-strange": 319630,
    "rocket-league": 252950,
    "fall-guys": 1097150,
    "horizon-zero-dawn": 1151640,
    "ghost-of-tsushima": 2215430,
    "death-stranding": 1190460,
    "control": 870780,
    "call-of-duty-4-modern-warfare": 7940,
    "call-of-duty-modern-warfare-ii": 1938090,
    "dragon-quest-xi-s-echoes-of-an-elusive-age": 1295510,
    "burnout-paradise": 1238080,
    "darksiders-ii": 388410,
}

SUFIXOS_OK = ("edition", "remastered", "remaster", "directorscut", "goty", "gameoftheyear", "complete",
              "definitive", "ultimate", "deluxe", "anniversary", "intergrade", "enhanced", "legendary")
PREFIXOS_OK = ("sidmeiers", "tomclancys", "microsoft")


def slug(texto: str) -> str:
    """Mesma regra do site: "Baldur's Gate 3" -> "baldurs-gate-3"."""
    t = unicodedata.normalize("NFD", texto)
    t = "".join(c for c in t if unicodedata.category(c) != "Mn")
    t = t.lower().replace("'", "")
    return re.sub(r"[^a-z0-9]+", "-", t).strip("-")


def normalizar(texto: str) -> str:
    texto = re.sub(r"[™®©]", "", texto)
    t = unicodedata.normalize("NFD", texto)
    t = "".join(c for c in t if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", "", t.lower().replace("&", "and").replace("'", ""))


def limpar_busca(titulo: str) -> str:
    return re.sub(r"\s*\((?:19|20)\d\d\)", "", titulo).strip()  # tira "(2018)"


def ler_titulos() -> list[str]:
    if not ARQUIVO_JOGOS.exists():
        sys.exit(f"Não achei {ARQUIVO_JOGOS}. Coloque o script na pasta principal do projeto.")
    texto = ARQUIVO_JOGOS.read_text(encoding="utf-8")
    achados = re.findall(r'titulo:\s*"((?:[^"\\]|\\.)*)"', texto)
    return [json.loads(f'"{t}"') for t in achados]


def pedir(url: str, tentativas: int = 4) -> bytes:
    for i in range(tentativas):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 404:
                raise
            if i < tentativas - 1:
                time.sleep(3 * (i + 1))
                continue
            raise
        except urllib.error.URLError:
            if i < tentativas - 1:
                time.sleep(2)
                continue
            raise
    raise RuntimeError("falha ao baixar")


def nota_nome(titulo: str, candidato: str) -> float:
    base = limpar_busca(titulo)
    a, b = normalizar(base), normalizar(candidato)
    if a == b:
        return 1.0
    if b.startswith(a):
        resto = b[len(a):]
        # "Sekiro" aceita "... GOTY Edition", mas "Alan Wake" NÃO aceita "Alan Wake 2"
        if any(resto.startswith(x) for x in SUFIXOS_OK) or candidato[len(base):].lstrip()[:1] in (":", "-", "–"):
            return 0.9
    if b.endswith(a) and b[: len(b) - len(a)] in PREFIXOS_OK:
        return 0.9
    return min(0.75, difflib.SequenceMatcher(None, a, b).ratio())


def achar_app_steam(titulo: str):
    """Procura na Steam e só aceita um resultado cujo nome seja realmente parecido."""
    params = urllib.parse.urlencode({"term": limpar_busca(titulo), "cc": "us", "l": "english"})
    dados = json.loads(pedir(f"{BUSCA}?{params}"))
    melhor, melhor_nota = None, 0.0
    for item in dados.get("items", []):
        if item.get("type") != "app":
            continue
        nota = nota_nome(titulo, item.get("name", ""))
        if nota > melhor_nota:
            melhor, melhor_nota = item, nota
    return melhor if melhor_nota >= 0.8 else None


def baixar_imagem(app_id: int):
    for arq in ARQUIVOS:
        try:
            return pedir(CDN.format(id=app_id, arq=arq))
        except urllib.error.HTTPError:
            continue
    return None


def apagar_existentes(nome: str) -> None:
    for ext in EXTS:
        (PASTA_CAPAS / f"{nome}.{ext}").unlink(missing_ok=True)


def main() -> None:
    refazer = "--refazer" in sys.argv
    titulos = ler_titulos()
    PASTA_CAPAS.mkdir(parents=True, exist_ok=True)
    print(f"{len(titulos)} jogos encontrados em JS/index.js\n")

    faltando = []
    for n, titulo in enumerate(titulos, 1):
        nome = slug(titulo)
        if refazer:
            apagar_existentes(nome)
        elif any((PASTA_CAPAS / f"{nome}.{e}").exists() for e in EXTS):
            print(f"[{n}/{len(titulos)}] já existe   {titulo}")
            continue
        try:
            if nome in APPIDS_FIXOS:
                app = {"id": APPIDS_FIXOS[nome], "name": "código fixo"}
            else:
                app = achar_app_steam(titulo)
            if not app:
                raise RuntimeError("não encontrado na Steam")
            imagem = baixar_imagem(app["id"])
            if not imagem:
                raise RuntimeError("Steam sem imagem")
            (PASTA_CAPAS / f"{nome}.jpg").write_bytes(imagem)
            print(f"[{n}/{len(titulos)}] baixada     {titulo}  ->  {app['name']}")
        except Exception as erro:  # noqa: BLE001
            print(f"[{n}/{len(titulos)}] FALHOU      {titulo} ({erro})")
            faltando.append(f"{nome}.jpg   <- {titulo}")
        time.sleep(0.4)

    arq_falta = RAIZ / "capas_faltando.txt"
    if faltando:
        arq_falta.write_text("\n".join(faltando), encoding="utf-8")
        print(f"\n{len(faltando)} sem imagem. Veja capas_faltando.txt e coloque esses arquivos à mão em IMG/capas/.")
    else:
        arq_falta.unlink(missing_ok=True)
        print("\nPronto! Todas as capas foram baixadas.")


if __name__ == "__main__":
    main()