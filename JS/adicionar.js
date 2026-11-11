// Página "Adicionar jogo" -----------------------------------------
// Os jogos ficam salvos no localStorage, na chave abaixo.
// O JS/index.js lê essa mesma chave e junta os jogos ao catálogo.
(() => {
  const CHAVE_JOGOS = "arcanum:jogos-custom";
  const CHAVE_FAVORITOS = "arcanum:favoritos";

  const CATEGORIAS_BASE = [
    "Ação", "Aventura", "Corrida", "Esporte", "Estratégia", "Luta",
    "Plataforma", "Puzzle", "RPG", "Simulação", "Terror", "Tiro"
  ];

  const PRESETS = [
    ["#3d1a78", "#e11d48"],
    ["#1f2a60", "#7b2fe0"],
    ["#0f4c75", "#b388ff"],
    ["#2f6b3a", "#7b2fe0"],
    ["#b45309", "#7a0b1f"],
    ["#111111", "#e11d48"],
    ["#f2d600", "#7b2fe0"],
    ["#1d4f5c", "#b45309"]
  ];

  const $ = (id) => document.getElementById(id);
  const $form = $("formJogo");
  const campos = {
    titulo: $("titulo"),
    categoria: $("categoria"),
    ano: $("ano"),
    nota: $("nota"),
    notaRange: $("notaRange"),
    plataforma: $("plataforma"),
    descricao: $("descricao"),
    cor1: $("cor1"),
    cor2: $("cor2")
  };
  const $mensagem = $("mensagem");
  const $listaSalvos = $("listaSalvos");
  const $resumo = $("resumoSalvos");
  const $presets = $("presets");

  // ---------- armazenamento ----------
  function lerSalvos() {
    try {
      const lista = JSON.parse(localStorage.getItem(CHAVE_JOGOS) || "[]");
      return Array.isArray(lista) ? lista : [];
    } catch (erro) {
      return [];
    }
  }

  function gravarSalvos(lista) {
    try {
      localStorage.setItem(CHAVE_JOGOS, JSON.stringify(lista));
      return true;
    } catch (erro) {
      return false;
    }
  }

  // ---------- utilidades ----------
  // Remove caracteres que quebrariam o HTML do catálogo (<, > e aspas duplas).
  const limpar = (texto) => String(texto).replace(/[<>"]/g, "").replace(/\s+/g, " ").trim();
  const gradiente = (c1, c2) => `linear-gradient(135deg, ${c1}, ${c2})`;

  function lerNota() {
    const n = parseFloat(String(campos.nota.value).replace(",", "."));
    return Number.isFinite(n) ? Math.min(10, Math.max(0, n)) : NaN;
  }

  function mostrarMensagem(texto, tipo) {
    $mensagem.className = "mt-3 " + (tipo === "erro" ? "alert-arcanum-erro" : "alert-arcanum-ok");
    $mensagem.textContent = texto;
  }

  function limparMensagem() {
    $mensagem.className = "mt-3";
    $mensagem.textContent = "";
  }

  // ---------- categorias (datalist) ----------
  function atualizarCategorias() {
    const usadas = lerSalvos().map((j) => j.categoria);
    const todas = [...new Set([...CATEGORIAS_BASE, ...usadas])].sort((a, b) => a.localeCompare(b, "pt-BR"));
    $("listaCategorias").replaceChildren(...todas.map((cat) => {
      const op = document.createElement("option");
      op.value = cat;
      return op;
    }));
  }

  // ---------- pré-visualização ----------
  function atualizarPreview() {
    const nota = lerNota();
    $("prevCapa").style.background = gradiente(campos.cor1.value, campos.cor2.value);
    $("prevTitulo").textContent = limpar(campos.titulo.value) || "Nome do jogo";
    $("prevNota").textContent = "★ " + (Number.isFinite(nota) && nota > 0 ? nota.toFixed(1) : "—");
    $("prevCategoria").textContent = limpar(campos.categoria.value) || "Categoria";
    $("prevAno").textContent = campos.ano.value || "Ano";
    $("prevDescricao").textContent = limpar(campos.descricao.value) || "A descrição aparece aqui enquanto você digita.";
    $("contadorDescricao").textContent = `${campos.descricao.value.length}/400`;

    $presets.querySelectorAll(".preset").forEach((b) => {
      const igual = b.dataset.c1 === campos.cor1.value && b.dataset.c2 === campos.cor2.value;
      b.setAttribute("aria-pressed", igual);
    });
  }

  function criarPresets() {
    $presets.replaceChildren(...PRESETS.map(([c1, c2]) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "preset";
      b.style.background = gradiente(c1, c2);
      b.dataset.c1 = c1;
      b.dataset.c2 = c2;
      b.setAttribute("aria-label", `Combinação de cores ${c1} e ${c2}`);
      b.setAttribute("aria-pressed", "false");
      return b;
    }));
  }

  // ---------- validação ----------
  function validar() {
    const nota = lerNota();
    const ano = Number(campos.ano.value);
    const regras = [
      [campos.titulo, limpar(campos.titulo.value).length > 0],
      [campos.categoria, limpar(campos.categoria.value).length > 0],
      [campos.ano, Number.isInteger(ano) && ano >= 1950 && ano <= 2100],
      [campos.nota, Number.isFinite(nota)],
      [campos.descricao, limpar(campos.descricao.value).length > 0]
    ];
    let valido = true;
    let primeiroInvalido = null;
    regras.forEach(([campo, ok]) => {
      campo.classList.toggle("is-invalid", !ok);
      if (!ok) {
        valido = false;
        primeiroInvalido = primeiroInvalido || campo;
      }
    });
    if (primeiroInvalido) primeiroInvalido.focus();
    return valido;
  }

  // ---------- lista de jogos salvos ----------
  function renderizarSalvos() {
    const lista = lerSalvos();
    $resumo.textContent = lista.length
      ? `${lista.length} ${lista.length === 1 ? "jogo adicionado" : "jogos adicionados"} por você.`
      : "Você ainda não adicionou nenhum jogo. Os que você salvar aparecem aqui.";

    $listaSalvos.replaceChildren(...lista.map((j) => {
      const li = document.createElement("li");
      li.className = "item-salvo";

      const amostra = document.createElement("div");
      amostra.className = "amostra";
      amostra.style.background = gradiente(j.cores[0], j.cores[1]);

      const info = document.createElement("div");
      info.className = "info";
      const nome = document.createElement("strong");
      nome.textContent = j.titulo;
      const detalhe = document.createElement("span");
      detalhe.textContent = `${j.categoria} · ${j.ano} · nota ${Number(j.nota).toFixed(1)}`;
      info.append(nome, detalhe);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-sm btn-remover";
      btn.textContent = "Remover";
      btn.dataset.id = j.id;
      btn.setAttribute("aria-label", `Remover ${j.titulo}`);

      li.append(amostra, info, btn);
      return li;
    }));
  }

  function removerJogo(id) {
    const lista = lerSalvos();
    const jogo = lista.find((j) => j.id === id);
    if (!jogo) return;
    if (!confirm(`Remover "${jogo.titulo}" do catálogo?`)) return;

    gravarSalvos(lista.filter((j) => j.id !== id));

    // tira o jogo dos favoritos também, para o contador não ficar errado
    try {
      const favs = JSON.parse(localStorage.getItem(CHAVE_FAVORITOS) || "[]");
      localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favs.filter((f) => f !== id)));
    } catch (erro) { /* ignora */ }

    atualizarCategorias();
    renderizarSalvos();
    mostrarMensagem(`"${jogo.titulo}" foi removido.`, "ok");
  }

  // ---------- salvar ----------
  function salvarJogo(e) {
    e.preventDefault();
    limparMensagem();
    if (!validar()) {
      mostrarMensagem("Corrija os campos destacados e tente de novo.", "erro");
      return;
    }

    const lista = lerSalvos();
    const titulo = limpar(campos.titulo.value);

    if (lista.some((j) => j.titulo.toLowerCase() === titulo.toLowerCase())) {
      campos.titulo.classList.add("is-invalid");
      campos.titulo.focus();
      mostrarMensagem(`Você já adicionou "${titulo}". Remova o anterior ou use outro nome.`, "erro");
      return;
    }

    // ids dos jogos criados aqui começam em 1000 para nunca colidir com os do catálogo base
    const id = Math.max(1000, ...lista.map((j) => j.id)) + 1;

    const jogo = {
      id,
      titulo,
      categoria: limpar(campos.categoria.value),
      ano: Number(campos.ano.value),
      plataforma: limpar(campos.plataforma.value) || "Não informada",
      nota: Math.round(lerNota() * 10) / 10,
      cores: [campos.cor1.value, campos.cor2.value],
      descricao: limpar(campos.descricao.value)
    };

    lista.push(jogo);
    if (!gravarSalvos(lista)) {
      mostrarMensagem("Não foi possível salvar. O navegador pode estar bloqueando o armazenamento local.", "erro");
      return;
    }

    atualizarCategorias();
    renderizarSalvos();
    mostrarMensagem(`"${jogo.titulo}" foi salvo e já está no catálogo.`, "ok");
    resetarCampos();
  }

  function resetarCampos() {
    $form.reset();
    campos.ano.value = new Date().getFullYear();
    campos.nota.value = "8.0";
    campos.notaRange.value = "8";
    campos.cor1.value = "#3d1a78";
    campos.cor2.value = "#e11d48";
    $form.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));
    atualizarPreview();
  }

  // ---------- eventos ----------
  $form.addEventListener("submit", salvarJogo);
  $form.addEventListener("input", (e) => {
    if (e.target.classList.contains("is-invalid")) e.target.classList.remove("is-invalid");
    atualizarPreview();
  });

  campos.notaRange.addEventListener("input", () => {
    campos.nota.value = Number(campos.notaRange.value).toFixed(1);
    atualizarPreview();
  });
  campos.nota.addEventListener("input", () => {
    const n = lerNota();
    if (Number.isFinite(n)) campos.notaRange.value = n;
  });

  $presets.addEventListener("click", (e) => {
    const b = e.target.closest(".preset");
    if (!b) return;
    campos.cor1.value = b.dataset.c1;
    campos.cor2.value = b.dataset.c2;
    atualizarPreview();
  });

  $("btnInverter").addEventListener("click", () => {
    [campos.cor1.value, campos.cor2.value] = [campos.cor2.value, campos.cor1.value];
    atualizarPreview();
  });

  $("btnLimpar").addEventListener("click", () => {
    resetarCampos();
    limparMensagem();
  });

  $listaSalvos.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-remover");
    if (btn) removerJogo(Number(btn.dataset.id));
  });

  // ---------- início ----------
  criarPresets();
  atualizarCategorias();
  resetarCampos();
  renderizarSalvos();
})();