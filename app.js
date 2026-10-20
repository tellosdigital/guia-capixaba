// Navegação por hash: #/  ·  #/vila-velha  ·  #/vila-velha/praias
const app = document.getElementById("app");
const voltar = document.getElementById("voltar");

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const linkMaps = (lugar, cidade) =>
  lugar.maps ||
  "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(`${lugar.nome}, ${cidade.nome} - ES`);

function telaInicio() {
  return `
    <section class="hero">
      <p class="hero-oi">Bem-vindo a bordo! 🚗</p>
      <h1>Pra onde vamos<br>depois daqui?</h1>
      <p class="hero-sub">Escolha uma cidade e veja as melhores dicas de quem roda o ES todo dia.</p>
    </section>
    <section class="cidades">
      ${CIDADES.map(
        (c, i) => `
        <a class="cidade" href="#/${c.id}" style="--i:${i}">
          <img src="${c.foto}" alt="" loading="${i < 2 ? "eager" : "lazy"}">
          <span class="cidade-nome">${esc(c.nome)}</span>
          <span class="cidade-destaque">${esc(c.destaque)}</span>
        </a>`
      ).join("")}
    </section>`;
}

function telaCidade(cidade) {
  return `
    <section class="capa" style="--foto:url('${cidade.foto}')">
      <span class="capa-nome">${esc(cidade.nome)}</span>
    </section>
    <p class="instrucao">O que você quer conhecer?</p>
    <section class="categorias">
      ${Object.keys(cidade.categorias)
        .map((k, i) => {
          const cat = CATEGORIAS[k];
          const n = cidade.categorias[k].length;
          return `
          <a class="categoria cor-${cat.cor}" href="#/${cidade.id}/${k}" style="--i:${i}">
            <span class="categoria-icone">${cat.icone}</span>
            <span class="categoria-texto">
              <strong>${esc(cat.titulo)}</strong>
              <small>${n} ${n === 1 ? "dica" : "dicas"}</small>
            </span>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>`;
        })
        .join("")}
    </section>`;
}

function telaLista(cidade, chave) {
  const cat = CATEGORIAS[chave];
  const lugares = cidade.categorias[chave];
  return `
    <section class="lista-topo cor-${cat.cor}">
      <span class="lista-icone">${cat.icone}</span>
      <div>
        <small>${esc(cidade.nome)}</small>
        <h1>${esc(cat.titulo)}</h1>
      </div>
    </section>
    <p class="instrucao">👆 Toque no lugar para abrir a rota no Maps</p>
    <ol class="lugares">
      ${lugares
        .map(
          (l, i) => `
        <li style="--i:${i}">
          <a class="lugar" href="${esc(linkMaps(l, cidade))}" target="_blank" rel="noopener">
            <span class="lugar-num">${i + 1}</span>
            <span class="lugar-texto">
              <strong>${esc(l.nome)}</strong>
              ${l.desc ? `<small>${esc(l.desc)}</small>` : ""}
            </span>
            <span class="lugar-maps" aria-label="Abrir no Maps">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9.5" r="2.5" fill="currentColor"/></svg>
            </span>
          </a>
        </li>`
        )
        .join("")}
    </ol>`;
}

function render() {
  const [idCidade, chave] = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const cidade = CIDADES.find((c) => c.id === idCidade);

  if (cidade && chave && cidade.categorias[chave]) {
    app.innerHTML = telaLista(cidade, chave);
    voltar.dataset.destino = `#/${cidade.id}`;
    document.title = `${CATEGORIAS[chave].titulo} em ${cidade.nome} · Guia Capixaba`;
  } else if (cidade) {
    app.innerHTML = telaCidade(cidade);
    voltar.dataset.destino = "#/";
    document.title = `${cidade.nome} · Guia Capixaba`;
  } else {
    app.innerHTML = telaInicio();
    delete voltar.dataset.destino;
    document.title = "Guia Capixaba";
  }
  voltar.hidden = !voltar.dataset.destino;
  window.scrollTo(0, 0);
}

voltar.addEventListener("click", () => (location.hash = voltar.dataset.destino));
window.addEventListener("hashchange", render);
render();

// ---------- Patrocínio Gold Vibes ----------
document.getElementById("patrocinio").href = PATROCINIO.link;
document.getElementById("anuncio-botao").href = PATROCINIO.link;
document.getElementById("anuncio-texto").textContent = PATROCINIO.chamada;

const anuncio = document.getElementById("anuncio");
const CHAVE_ANUNCIO = "gc-anuncio-visto";
const jaViu = () => { try { return sessionStorage.getItem(CHAVE_ANUNCIO) === "1"; } catch { return false; } };
const fecharAnuncio = () => {
  anuncio.classList.remove("aberto");
  setTimeout(() => (anuncio.hidden = true), 250);
  try { sessionStorage.setItem(CHAVE_ANUNCIO, "1"); } catch {}
};

if (!jaViu()) {
  setTimeout(() => {
    anuncio.hidden = false;
    requestAnimationFrame(() => anuncio.classList.add("aberto"));
  }, 5000);
}
document.getElementById("anuncio-fechar").addEventListener("click", fecharAnuncio);
document.getElementById("anuncio-depois").addEventListener("click", fecharAnuncio);
document.getElementById("anuncio-botao").addEventListener("click", fecharAnuncio);
anuncio.addEventListener("click", (e) => e.target === anuncio && fecharAnuncio());
document.addEventListener("keydown", (e) => e.key === "Escape" && !anuncio.hidden && fecharAnuncio());
