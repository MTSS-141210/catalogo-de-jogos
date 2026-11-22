// Modo claro / escuro 
(() => {
  const CHAVE = "arcanum:tema";
  const raiz = document.documentElement;

  function temaSalvo() {
    try {
      const t = localStorage.getItem(CHAVE);
      if (t === "light" || t === "dark") return t;
    } catch (erro) { /* localStorage bloqueado */ }
    return "dark"; // padrão do site
  }

  function atualizarBotao() {
    const b = document.getElementById("btnTema");
    if (!b) return;
    const claro = raiz.getAttribute("data-bs-theme") === "light";
    const icone = b.querySelector(".tema-icone");
    if (icone) icone.textContent = claro ? "☾" : "☀";
    const rotulo = claro ? "Ativar modo escuro" : "Ativar modo claro";
    b.setAttribute("aria-label", rotulo);
    b.title = rotulo;
  }

  function aplicar(tema, salvar) {
    raiz.setAttribute("data-bs-theme", tema);
    if (salvar) {
      try { localStorage.setItem(CHAVE, tema); } catch (erro) { /* ignora */ }
    }
    atualizarBotao();
  }

  aplicar(temaSalvo(), false);

  document.addEventListener("DOMContentLoaded", () => {
    atualizarBotao();
    document.getElementById("btnTema")?.addEventListener("click", () => {
      const atual = raiz.getAttribute("data-bs-theme");
      aplicar(atual === "light" ? "dark" : "light", true);
    });
  });

  // mantém várias abas sincronizadas
  window.addEventListener("storage", (e) => {
    if (e.key === CHAVE && (e.newValue === "light" || e.newValue === "dark")) aplicar(e.newValue, false);
  });
})();