// Lógica do site (index.html e catalogo.html)
// Depende do array `jogos`, que fica em JS/index.js (carregado antes deste arquivo).

(() => {
"use strict";

const CHAVE_JOGOS = "arcanum:jogos-custom";
const CHAVE_FAVORITOS = "arcanum:favoritos";
const PASTA_CAPAS = "IMG/capas/";
const EXTENSOES = ["jpg", "png", "webp"];

// `jogos` vem do JS/index.js
const BASE_JOGOS = (typeof jogos !== "undefined" && Array.isArray(jogos)) ? jogos : [];
if (!BASE_JOGOS.length) console.error("Arcanum: o array `jogos` não foi encontrado. Confira se JS/index.js está na pasta JS e carrega antes do app.js.");

// ESTADO --------------------------------------------------
function lerJogosCustomizados() {
  try {
    const lista = JSON.parse(localStorage.getItem(CHAVE_JOGOS) || "[]");
    return Array.isArray(lista) ? lista : [];
  } catch (erro) {
    return [];
  }
}

function obterCatalogo() {
  return [...BASE_JOGOS, ...lerJogosCustomizados()];
}

function lerFavoritos() {
  try {
    return new Set(JSON.parse(localStorage.getItem(CHAVE_FAVORITOS) || "[]"));
  } catch (erro) {
    return new Set();
  }
}

const estado = {
  categoria: "Todos",
  busca: "",
  ordem: "nome",
  apenasFavoritos: document.body?.dataset?.pagina === "favoritos",
  favoritos: lerFavoritos(),
  jogoAberto: null
};

// DOM -----------------------------------------------------
// Se o JS/index.js antigo (com a lógica velha) ainda estiver na página,
// clonar os elementos remove os listeners antigos e evita comportamento duplicado.
function renovar(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  const copia = el.cloneNode(true);
  el.replaceWith(copia);
  return copia;
}
const $lista = renovar("listaJogos");
const $filtros = renovar("filtrosCategoria");
const $busca = renovar("busca");
const $ordenar = renovar("ordenar");
const $btnFav = renovar("btnVerFavoritos");
const $modalFavorito = renovar("modalFavorito");
const $vazio = document.getElementById("estadoVazio");
const $info = document.getElementById("resultadoInfo");
const $contador = document.getElementById("contadorFavoritos");
const $modalEl = document.getElementById("modalJogo");
const $fan = document.getElementById("fanFavoritos");

let fanIndice = 0;
let fanTimer = null;
let fanToqueX = null;

// UTILIDADES ----------------------------------------------
const gradiente = (cores) => `linear-gradient(135deg, ${cores[0]}, ${cores[1]})`;

function esc(texto) {
  return String(texto)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// "Baldur's Gate 3" -> "baldurs-gate-3"
function slug(texto) {
  return String(texto)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function notaNumerica(jogo) {
  return Number.isFinite(Number(jogo?.nota)) ? Number(jogo.nota) : 0;
}
function formatarNota(jogo) {
  const n = notaNumerica(jogo);
  return n > 0 ? n.toFixed(1) : "—";
}
function formatarAno(jogo) {
  return Number.isFinite(jogo?.ano) && jogo.ano !== null ? jogo.ano : "Indefinido";
}
function estrelasTexto(jogo) {
  const n = notaNumerica(jogo);
  if (n <= 0) return "Sem nota";
  const cheias = Math.round(n / 2);
  return "★".repeat(cheias) + "☆".repeat(5 - cheias);
}

// CAPAS ---------------------------------------------------
// Procura IMG/capas/<titulo-em-slug>.jpg (depois .webp e .png).
// Jogos adicionados pelo usuário usam o campo `imagem`.
// Se nenhuma imagem existir, aparece o gradiente com o nome do jogo.
function capaHTML(jogo) {
  const base = jogo.imagem ? "" : PASTA_CAPAS + slug(jogo.titulo);
  const src = jogo.imagem || `${base}.${EXTENSOES[0]}`;
  const extra = base ? ` data-base="${esc(base)}" data-i="0"` : "";
  return `<span class="capa-titulo">${esc(jogo.titulo)}</span>` +
         `<img src="${esc(src)}" alt="Capa de ${esc(jogo.titulo)}" loading="lazy" decoding="async"${extra}>`;
}

// <img> não "borbulha" o evento de erro, por isso usamos a fase de captura
document.addEventListener("error", (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || !img.closest(".capa")) return;
  const proxima = Number(img.dataset.i) + 1;
  if (img.dataset.base && proxima < EXTENSOES.length) {
    img.dataset.i = proxima;
    img.src = `${img.dataset.base}.${EXTENSOES[proxima]}`;
  } else {
    img.remove(); // sem imagem: fica o gradiente com o título
  }
}, true);

// Ajuda: no console do navegador, digite listarNomesDeCapas() para ver os nomes de arquivo esperados.
window.listarNomesDeCapas = () => {
  const nomes = obterCatalogo().filter(j => !j.imagem).map(j => `${slug(j.titulo)}.jpg`);
  console.log(nomes.join("\n"));
  return nomes;
};

// RENDERIZAÇÃO --------------------------------------------------
function notificarFavoritos() {
  if ($contador) $contador.textContent = estado.favoritos.size;
}

function salvarFavoritos() {
  try {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify([...estado.favoritos]));
  } catch (erro) { /* localStorage bloqueado */ }
  notificarFavoritos();
}

function jogosFiltrados() {
  const termo = estado.busca.trim().toLowerCase();
  return obterCatalogo()
    .filter(j => !estado.apenasFavoritos || estado.favoritos.has(j.id))
    .filter(j => j.titulo.toLowerCase().includes(termo))
    .filter(j => estado.categoria === "Todos" || j.categoria === estado.categoria)
    .sort((a, b) => {
      if (estado.ordem === "nota") return notaNumerica(b) - notaNumerica(a);
      if (estado.ordem === "ano") return (Number(b.ano) || 0) - (Number(a.ano) || 0);
      return a.titulo.localeCompare(b.titulo, "pt-BR");
    });
}

function criarCard(jogo) {
  const fav = estado.favoritos.has(jogo.id);
  const el = document.createElement("article");
  el.className = "card-jogo";
  el.innerHTML = `
    <div class="capa" style="background:${gradiente(jogo.cores)}" data-acao="detalhes" data-id="${jogo.id}">
      ${capaHTML(jogo)}
      <span class="nota"><i>★</i> ${formatarNota(jogo)}</span>
      <button type="button" class="btn-coracao ${fav ? "ativo" : ""}" data-acao="favoritar" data-id="${jogo.id}"
              aria-pressed="${fav}" aria-label="Favoritar ${esc(jogo.titulo)}">♥</button>
    </div>
    <div class="card-corpo">
      <div class="tags">
        <span class="tag">${esc(jogo.categoria)}</span>
        <span class="tag tag-ano">${formatarAno(jogo)}</span>
      </div>
      <h3>${esc(jogo.titulo)}</h3>
      <p class="estrelas" aria-label="Nota ${formatarNota(jogo)} de 10">${estrelasTexto(jogo)} <small>${formatarNota(jogo)}</small></p>
      <p class="desc">${esc(jogo.descricao)}</p>
      <div class="acoes">
        <button type="button" class="btn btn-arcanum btn-sm" data-acao="detalhes" data-id="${jogo.id}">Detalhes</button>
        <button type="button" class="btn btn-outline-arcanum btn-sm btn-fav ${fav ? "ativo-fav" : ""}"
                data-acao="favoritar" data-id="${jogo.id}" aria-label="${fav ? "Remover dos favoritos" : "Favoritar"} ${esc(jogo.titulo)}">${fav ? "♥" : "♡"}</button>
      </div>
    </div>`;
  return el;
}

function renderizarCatalogo() {
  if (!$lista) return;
  const lista = jogosFiltrados();
  $lista.replaceChildren(...lista.map(criarCard));
  if ($vazio) $vazio.classList.toggle("d-none", lista.length > 0);
  if ($info) {
    const [um, varios] = estado.apenasFavoritos ? ["favorito", "favoritos"] : ["jogo", "jogos"];
    $info.textContent = `${lista.length} ${lista.length === 1 ? um : varios}`;
  }
}

// Vitrine da página inicial: cinco jogos do catálogo em destaque.
function renderizarFan() {
  if (!$fan) return;
  const catalogo = [...obterCatalogo()].sort((a, b) => notaNumerica(b) - notaNumerica(a));
  if (!catalogo.length) return;

  const inicio = fanIndice % catalogo.length;
  const lista = Array.from({ length: 5 }, (_, i) => catalogo[(inicio + i) % catalogo.length]);
  const meio = 2;

  $fan.replaceChildren(...lista.map((j, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "fan-card";
    b.dataset.d = Math.floor(Math.abs(i - meio));
    b.dataset.acao = "detalhes";
    b.dataset.id = j.id;
    b.setAttribute("aria-label", `Ver detalhes de ${j.titulo}`);
    b.innerHTML = `<div class="capa" style="background:${gradiente(j.cores)}">${capaHTML(j)}</div>`;
    return b;
  }));

  const legenda = document.getElementById("fanLegenda");
  if (legenda) legenda.textContent = "Clique em um card para ver os detalhes do jogo.";
}

function mudarFan(delta) {
  const total = Math.min(10, obterCatalogo().length);
  if (!total) return;
  fanIndice = (fanIndice + delta + total) % total;
  renderizarFan();
}

function reiniciarFan() {
  renderizarFan();
  if (fanTimer) clearInterval(fanTimer);
  fanTimer = setInterval(() => {
    mudarFan(1);
  }, 3500);
}

const $fanAnterior = document.getElementById("fanAnterior");
const $fanProximo = document.getElementById("fanProximo");
$fanAnterior?.addEventListener("click", () => reiniciarFanComDelta(-1));
$fanProximo?.addEventListener("click", () => reiniciarFanComDelta(1));

function reiniciarFanComDelta(delta) {
  mudarFan(delta);
  if (fanTimer) clearInterval(fanTimer);
  fanTimer = setInterval(() => mudarFan(1), 3500);
}

$fan?.addEventListener("touchstart", (e) => {
  fanToqueX = e.touches[0].clientX;
}, { passive: true });
$fan?.addEventListener("touchend", (e) => {
  if (fanToqueX === null) return;
  const distancia = e.changedTouches[0].clientX - fanToqueX;
  if (Math.abs(distancia) > 45) reiniciarFanComDelta(distancia > 0 ? -1 : 1);
  fanToqueX = null;
}, { passive: true });

function renderizarFiltros() {
  if (!$filtros) return;
  const categorias = ["Todos", ...new Set(obterCatalogo().map(j => j.categoria))];
  $filtros.replaceChildren(...categorias.map(cat => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (cat === estado.categoria ? " ativo" : "");
    b.textContent = cat;
    b.dataset.categoria = cat;
    return b;
  }));
}

function renderizarEstatisticas() {
  const catalogo = obterCatalogo();
  const notas = catalogo.map(j => Number(j.nota)).filter(n => Number.isFinite(n));
  const media = notas.length ? notas.reduce((s, n) => s + n, 0) / notas.length : 0;
  const valores = {
    statTotal: catalogo.length,
    statCategorias: new Set(catalogo.map(j => j.categoria)).size,
    statNota: media ? media.toFixed(1) : "—"
  };
  Object.entries(valores).forEach(([id, valor]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  });
}

function renderizarTudo() {
  renderizarCatalogo();
  reiniciarFan();
}

// MODAL ---------------------------------------------------
function abrirModal() {
  if (typeof bootstrap === "undefined") {
    alert("Não foi possível carregar o Bootstrap. Verifique sua conexão com a internet.");
    return;
  }
  bootstrap.Modal.getOrCreateInstance($modalEl).show();
}

function atualizarBotaoModal() {
  const b = document.getElementById("modalFavorito");
  if (!b) return;
  const fav = estado.favoritos.has(estado.jogoAberto);
  b.textContent = fav ? "♥ Remover dos favoritos" : "♡ Adicionar aos favoritos";
  b.classList.toggle("ativo-fav", fav);
}

function abrirDetalhes(id) {
  const j = obterCatalogo().find(item => item.id === id);
  if (!j) return;
  estado.jogoAberto = id;
  const capa = document.getElementById("modalCapa");
  capa.style.background = gradiente(j.cores);
  capa.innerHTML = capaHTML(j);
  document.getElementById("modalTitulo").textContent = j.titulo;
  document.getElementById("modalDescricao").textContent = j.descricao;
  document.getElementById("modalEstrelas").innerHTML = `${estrelasTexto(j)} <small>${formatarNota(j)} / 10</small>`;
  document.getElementById("modalInfo").textContent = `Plataformas: ${j.plataforma} · Lançamento: ${formatarAno(j)}`;
  document.getElementById("modalTags").innerHTML =
    `<span class="tag">${esc(j.categoria)}</span><span class="tag tag-ano">${formatarAno(j)}</span>`;
  atualizarBotaoModal();
  abrirModal();
}

function alternarFavorito(id) {
  if (estado.favoritos.has(id)) estado.favoritos.delete(id);
  else estado.favoritos.add(id);
  salvarFavoritos();
  renderizarTudo();
  if (estado.jogoAberto === id) atualizarBotaoModal();
}

// EVENTOS -------------------------------------------------
document.addEventListener("click", (e) => {
  const alvo = e.target.closest("[data-acao]");
  if (!alvo) return;
  const id = Number(alvo.dataset.id);
  if (alvo.dataset.acao === "favoritar") alternarFavorito(id);
  if (alvo.dataset.acao === "detalhes") abrirDetalhes(id);
});

$filtros?.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  estado.categoria = chip.dataset.categoria;
  renderizarFiltros();
  renderizarCatalogo();
});

$busca?.addEventListener("input", () => { estado.busca = $busca.value; renderizarCatalogo(); });
$ordenar?.addEventListener("change", () => { estado.ordem = $ordenar.value; renderizarCatalogo(); });

$btnFav?.addEventListener("click", () => {
  estado.apenasFavoritos = !estado.apenasFavoritos;
  $btnFav.setAttribute("aria-pressed", estado.apenasFavoritos);
  $btnFav.classList.toggle("ativo", estado.apenasFavoritos);
  renderizarCatalogo();
});

$modalFavorito?.addEventListener("click", () => alternarFavorito(estado.jogoAberto));

window.addEventListener("storage", (e) => {
  if (e.key === CHAVE_JOGOS) {
    renderizarEstatisticas();
    renderizarFiltros();
    renderizarTudo();
    return;
  }
  if (e.key !== CHAVE_FAVORITOS) return;
  try {
    estado.favoritos = new Set(JSON.parse(e.newValue || "[]"));
  } catch (erro) {
    estado.favoritos = new Set();
  }
  notificarFavoritos();
  renderizarTudo();
});

// INICIALIZAÇÃO -------------------------------------------
function inicializar() {
  renderizarEstatisticas();
  renderizarFiltros();
  notificarFavoritos();
  salvarFavoritos();
  renderizarTudo();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializar);
} else {
  inicializar();
}

})();