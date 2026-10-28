/* =========================================================
   Arcanum - Catálogo de Jogos
   Organização: 1) dados  2) estado  3) funções  4) eventos
   ========================================================= */

// 1) DADOS ---------------------------------------------------
const jogos = [
  { id: 1,  titulo: "Hollow Knight",         categoria: "Aventura", ano: 2017, plataforma: "PC, Switch, PS4", nota: 9.4, cores: ["#1f2a60", "#7b2fe0"],
    descricao: "Explore o reino subterrâneo de Hallownest em um metroidvania desenhado à mão, com combates desafiadores, chefes memoráveis e uma atmosfera melancólica." },
  { id: 2,  titulo: "The Witcher 3",         categoria: "RPG",      ano: 2015, plataforma: "PC, PS4, Xbox One", nota: 9.7, cores: ["#3d1a78", "#e11d48"],
    descricao: "Interprete o caçador de monstros Geralt em um mundo aberto enorme, repleto de missões com escolhas que mudam o rumo da história." },
  { id: 3,  titulo: "Celeste",               categoria: "Plataforma", ano: 2018, plataforma: "PC, Switch, PS4", nota: 9.2, cores: ["#7b2fe0", "#b388ff"],
    descricao: "Ajude Madeline a escalar a montanha Celeste em fases precisas e difíceis, acompanhadas por uma história sensível sobre ansiedade e superação." },
  { id: 4,  titulo: "DOOM Eternal",          categoria: "Ação",     ano: 2020, plataforma: "PC, PS4, Xbox One", nota: 8.8, cores: ["#7a0b1f", "#e11d48"],
    descricao: "Tiroteio frenético em primeira pessoa onde você precisa alternar armas e habilidades o tempo todo para sobreviver contra hordas de demônios." },
  { id: 5,  titulo: "Stardew Valley",        categoria: "Simulação", ano: 2016, plataforma: "PC, Switch, Mobile", nota: 9.0, cores: ["#2f6b3a", "#7b2fe0"],
    descricao: "Herde uma fazenda, plante, crie animais, pesque, minere e conquiste a amizade dos moradores da vila neste simulador relaxante." },
  { id: 6,  titulo: "Hades",                 categoria: "Ação",     ano: 2020, plataforma: "PC, Switch, PS5", nota: 9.3, cores: ["#5a0f2b", "#e11d48"],
    descricao: "Fuja do submundo grego como Zagreu em um roguelike rápido, com combate fluido, narrativa que avança a cada tentativa e ótima trilha sonora." },
  { id: 7,  titulo: "Civilization VI",       categoria: "Estratégia", ano: 2016, plataforma: "PC, Switch", nota: 8.6, cores: ["#1d3b5c", "#7b2fe0"],
    descricao: "Construa um império do zero até a era moderna, gerenciando cidades, pesquisa, diplomacia e guerra em partidas por turnos." },
  { id: 8,  titulo: "Elden Ring",            categoria: "RPG",      ano: 2022, plataforma: "PC, PS5, Xbox Series", nota: 9.5, cores: ["#4a3a10", "#7b2fe0"],
    descricao: "Mundo aberto sombrio criado pela FromSoftware, com liberdade de exploração, builds variadas e chefes que exigem paciência e estratégia." },
  { id: 9,  titulo: "Portal 2",              categoria: "Puzzle",   ano: 2011, plataforma: "PC, PS3, Xbox 360", nota: 9.5, cores: ["#0f4c75", "#b388ff"],
    descricao: "Resolva quebra-cabeças com portais e física em laboratórios cheios de humor, ótimos diálogos e um modo cooperativo muito elogiado." },
  { id: 10, titulo: "Forza Horizon 5",       categoria: "Corrida",  ano: 2021, plataforma: "PC, Xbox", nota: 9.0, cores: ["#b45309", "#7b2fe0"],
    descricao: "Corra livremente por um México virtual com centenas de carros, eventos sazonais e gráficos impressionantes." },
  { id: 11, titulo: "Minecraft",             categoria: "Simulação", ano: 2011, plataforma: "Todas", nota: 9.1, cores: ["#256d3a", "#3d1a78"],
    descricao: "Mundo de blocos onde você coleta recursos, constrói qualquer coisa que imaginar e sobrevive à noite, sozinho ou com amigos." },
  { id: 12, titulo: "Hades II: Ecos",        categoria: "Aventura", ano: 2024, plataforma: "PC", nota: 8.9, cores: ["#2b0b4d", "#e11d48"],
    descricao: "Título fictício usado como exemplo: uma aventura de exploração com feitiços, chefes e escolhas que alteram o caminho da jornada." },
  { id: 13, titulo: "Resident Evil 4",       categoria: "Terror",   ano: 2023, plataforma: "PC, PS5, Xbox Series", nota: 9.0, cores: ["#2a0a12", "#e11d48"],
    descricao: "Refilmagem do clássico de sobrevivência em que o agente Leon S. Kennedy precisa resgatar a filha do presidente em uma vila isolada, com combate tenso, recursos escassos e muita ação." }
];

// 2) ESTADO --------------------------------------------------
const estado = {
  categoria: "Todos",
  busca: "",
  ordem: "nome",
  apenasFavoritos: false,
  favoritos: new Set(JSON.parse(localStorage.getItem("arcanum:favoritos") || "[]")),
  jogoAberto: null
};

// 3) REFERÊNCIAS AO DOM -------------------------------------
const $lista = document.getElementById("listaJogos");
const $filtros = document.getElementById("filtrosCategoria");
const $busca = document.getElementById("busca");
const $ordenar = document.getElementById("ordenar");
const $vazio = document.getElementById("estadoVazio");
const $info = document.getElementById("resultadoInfo");
const $contador = document.getElementById("contadorFavoritos");
const $btnFav = document.getElementById("btnVerFavoritos");
// O modal é criado só ao abrir, para os cards aparecerem mesmo se o JS do Bootstrap demorar/falhar
const $modalEl = document.getElementById("modalJogo");
function abrirModal() {
  if (typeof bootstrap === "undefined") {
    alert("Não foi possível carregar o Bootstrap. Verifique sua conexão com a internet.");
    return;
  }
  bootstrap.Modal.getOrCreateInstance($modalEl).show();
}

// 4) FUNÇÕES -------------------------------------------------
const gradiente = (cores) => `linear-gradient(135deg, ${cores[0]}, ${cores[1]})`;

function salvarFavoritos() {
  localStorage.setItem("arcanum:favoritos", JSON.stringify([...estado.favoritos]));
  $contador.textContent = estado.favoritos.size;
}

function jogosFiltrados() {
  const termo = estado.busca.trim().toLowerCase();
  return jogos
    .filter(j => estado.categoria === "Todos" || j.categoria === estado.categoria)
    .filter(j => j.titulo.toLowerCase().includes(termo))
    .filter(j => !estado.apenasFavoritos || estado.favoritos.has(j.id))
    .sort((a, b) => {
      if (estado.ordem === "nota") return b.nota - a.nota;
      if (estado.ordem === "ano") return b.ano - a.ano;
      return a.titulo.localeCompare(b.titulo, "pt-BR");
    });
}

function criarCard(jogo) {
  const favorito = estado.favoritos.has(jogo.id);
  const estrelas = "★".repeat(Math.round(jogo.nota / 2)) + "☆".repeat(5 - Math.round(jogo.nota / 2));
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-lg-4 col-xl-3";
  col.innerHTML = `
    <article class="flip-card" tabindex="0" aria-label="${jogo.titulo}. Pressione Enter para virar o card.">
      <div class="flip-inner">

        <!-- FRENTE -->
        <div class="game-card flip-face flip-front">
          <div class="game-capa" style="background:${gradiente(jogo.cores)}">
            <span class="game-nota">★ ${jogo.nota.toFixed(1)}</span>
            <button type="button" class="btn-coracao ${favorito ? "ativo" : ""}"
                    data-acao="favoritar" data-id="${jogo.id}"
                    aria-pressed="${favorito}" aria-label="Favoritar ${jogo.titulo}">♥</button>
            ${jogo.titulo}
          </div>
          <div class="game-body">
            <div class="d-flex gap-2 mb-2 flex-wrap">
              <span class="tag">${jogo.categoria}</span>
              <span class="tag tag-vermelha">${jogo.ano}</span>
            </div>
            <h3 class="game-titulo">${jogo.titulo}</h3>
            <p class="dica-virar mt-auto mb-0">↻ Clique no card para ver a descrição</p>
          </div>
        </div>

        <!-- VERSO -->
        <div class="game-card flip-face flip-back" style="--c1:${jogo.cores[0]}">
          <h3 class="game-titulo">${jogo.titulo}</h3>
          <p class="estrelas" aria-label="Nota ${jogo.nota.toFixed(1)} de 10">${estrelas}</p>
          <p class="verso-desc">${jogo.descricao}</p>
          <p class="verso-info mb-3"><strong>Plataformas:</strong> ${jogo.plataforma}</p>
          <div class="d-flex gap-2 mt-auto">
            <button type="button" class="btn btn-arcanum btn-sm flex-fill" data-acao="detalhes" data-id="${jogo.id}">Detalhes</button>
            <button type="button" class="btn btn-outline-arcanum btn-sm flex-fill ${favorito ? "ativo-fav" : ""}"
                    data-acao="favoritar" data-id="${jogo.id}">${favorito ? "♥ Favorito" : "♡ Favoritar"}</button>
          </div>
        </div>

      </div>
    </article>`;
  return col;
}

function renderizarCatalogo() {
  const lista = jogosFiltrados();
  $lista.replaceChildren(...lista.map(criarCard));
  $vazio.classList.toggle("d-none", lista.length > 0);
  $info.textContent = `${lista.length} ${lista.length === 1 ? "jogo encontrado" : "jogos encontrados"}`;
}

function renderizarFiltros() {
  const categorias = ["Todos", ...new Set(jogos.map(j => j.categoria))];
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
  const media = jogos.reduce((soma, j) => soma + j.nota, 0) / jogos.length;
  const valores = {
    statTotal: jogos.length,
    statCategorias: new Set(jogos.map(j => j.categoria)).size,
    statNota: media.toFixed(1)
  };
  // Só preenche os números se a página tiver esses elementos (a página do catálogo não tem)
  Object.entries(valores).forEach(([id, valor]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  });
}

function alternarFavorito(id) {
  estado.favoritos.has(id) ? estado.favoritos.delete(id) : estado.favoritos.add(id);
  salvarFavoritos();
  renderizarCatalogo();
  if (estado.jogoAberto === id) atualizarBotaoModal();
}

function atualizarBotaoModal() {
  const fav = estado.favoritos.has(estado.jogoAberto);
  document.getElementById("modalFavorito").textContent = fav ? "♥ Remover dos favoritos" : "♡ Adicionar aos favoritos";
}

function abrirDetalhes(id) {
  const j = jogos.find(item => item.id === id);
  estado.jogoAberto = id;
  document.getElementById("modalCapa").style.background = gradiente(j.cores);
  document.getElementById("modalTitulo").textContent = j.titulo;
  document.getElementById("modalDescricao").textContent = j.descricao;
  document.getElementById("modalInfo").textContent = `Plataformas: ${j.plataforma} · Lançamento: ${j.ano} · Nota: ${j.nota.toFixed(1)}`;
  document.getElementById("modalTags").innerHTML =
    `<span class="tag">${j.categoria}</span><span class="tag tag-vermelha">${j.ano}</span>`;
  atualizarBotaoModal();
  abrirModal();
}

// 5) EVENTOS -------------------------------------------------
$filtros.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  estado.categoria = chip.dataset.categoria;
  renderizarFiltros();
  renderizarCatalogo();
});

// Clique: botões internos têm prioridade; clicar no resto do card vira ele
$lista.addEventListener("click", (e) => {
  const alvo = e.target.closest("[data-acao]");
  if (alvo) {
    const id = Number(alvo.dataset.id);
    if (alvo.dataset.acao === "favoritar") alternarFavorito(id);
    if (alvo.dataset.acao === "detalhes") abrirDetalhes(id);
    return;
  }
  const card = e.target.closest(".flip-card");
  if (card) card.classList.toggle("virado");
});

// Teclado: Enter ou Espaço viram o card focado
$lista.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("flip-card")) {
    e.preventDefault();
    e.target.classList.toggle("virado");
  }
});

$busca.addEventListener("input", () => { estado.busca = $busca.value; renderizarCatalogo(); });
$ordenar.addEventListener("change", () => { estado.ordem = $ordenar.value; renderizarCatalogo(); });

$btnFav.addEventListener("click", () => {
  estado.apenasFavoritos = !estado.apenasFavoritos;
  $btnFav.setAttribute("aria-pressed", estado.apenasFavoritos);
  renderizarCatalogo();
  document.getElementById("catalogo")?.scrollIntoView();
});

document.getElementById("modalFavorito").addEventListener("click", () => alternarFavorito(estado.jogoAberto));

// 6) INICIALIZAÇÃO ------------------------------------------
renderizarEstatisticas();
renderizarFiltros();
salvarFavoritos();
renderizarCatalogo();