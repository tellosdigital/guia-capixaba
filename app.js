// Navegação por hash: #/  ·  #/vila-velha  ·  #/vila-velha/praias
const app = document.getElementById("app");
const voltar = document.getElementById("voltar");
const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches || typeof anime === "undefined";

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const linkMaps = (lugar, cidade) =>
  lugar.maps ||
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${lugar.nome}, ${cidade.nome} - ES`);

// Pictogramas no estilo das placas brasileiras de atrativo turístico
const PICTOGRAMAS = {
  praia: `<path d="M12 4a8.5 8.5 0 0 1 8.5 8.5h-17A8.5 8.5 0 0 1 12 4z"/><path d="M11.2 12.5h1.6V20h-1.6z"/><path d="M2 21.2c1.7-1.2 3.3-1.2 5 0s3.3 1.2 5 0 3.3-1.2 5 0 3.3 1.2 5 0" fill="none" stroke="currentColor" stroke-width="1.6"/>`,
  monumento: `<path d="M11.2 1.5h1.6v2h2v1.6h-2v2h-1.6v-2h-2V3.5h2z"/><path d="M12 7.5l7 5.5v9H5v-9zM10 22v-5a2 2 0 0 1 4 0v5z" fill-rule="evenodd"/>`,
  talheres: `<path d="M5 2h1.4v6H7.6V2H9v6H10.2V2h1.4v7a3 3 0 0 1-2.3 2.9V22H7.3V11.9A3 3 0 0 1 5 9z"/><path d="M18.6 2v20h-2V14h-2.2c0-6 .9-10.6 4.2-12z"/>`,
  montanha: `<path d="M1.5 21L9 7.5l4.2 7 2.6-3.8L22.5 21z"/><circle cx="18" cy="5.5" r="2.2"/>`,
};
const picto = (nome) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">${PICTOGRAMAS[nome]}</svg>`;
const SETA = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h14M12.5 5.5L19 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="square"/></svg>`;

function telaInicio() {
  return `
    <section class="abertura">
      <p class="sobretitulo">Dicas de quem roda o ES todo dia</p>
      <h1>Escolha a cidade</h1>
    </section>
    <nav class="cidades" aria-label="Cidades">
      ${CIDADES.map(
        (c, i) => `
        <a class="cidade" href="#/${c.id}">
          <img src="${c.foto}" alt="" ${i > 1 ? 'loading="lazy"' : ""}>
          <span class="cidade-nome">${esc(c.nome)}</span>
        </a>`
      ).join("")}
    </nav>`;
}

function telaCidade(cidade) {
  return `
    <section class="capa">
      <img src="${cidade.foto}" alt="">
      <h1 class="capa-nome">${esc(cidade.nome)}</h1>
    </section>
    <p class="instrucao">O que você quer conhecer?</p>
    <nav class="placas" aria-label="Categorias">
      ${Object.keys(cidade.categorias)
        .map((k) => {
          const cat = CATEGORIAS[k];
          return `
          <a class="placa" href="#/${cidade.id}/${k}">
            <span class="placa-picto">${picto(cat.pictograma)}</span>
            <span class="placa-texto">${esc(cat.titulo)}</span>
            <span class="placa-seta">${SETA}</span>
          </a>`;
        })
        .join("")}
    </nav>`;
}

function telaLista(cidade, chave) {
  const cat = CATEGORIAS[chave];
  return `
    <section class="lista-topo">
      <div class="placa placa-grande">
        <span class="placa-picto">${picto(cat.pictograma)}</span>
        <span class="placa-texto"><small>${esc(cidade.nome)}</small>${esc(cat.titulo)}</span>
      </div>
    </section>
    <p class="instrucao">Toque no lugar para abrir a rota</p>
    <ul class="lugares">
      ${cidade.categorias[chave]
        .map(
          (l) => `
        <li>
          <a class="lugar" href="${esc(linkMaps(l, cidade))}" target="_blank" rel="noopener">
            ${l.foto
              ? `<img class="lugar-foto" src="${esc(l.foto)}" alt="" loading="lazy">`
              : `<span class="lugar-foto lugar-foto-vazia">${picto(cat.pictograma)}</span>`}
            <span class="lugar-texto">
              <strong>${esc(l.nome)}</strong>
              ${l.desc ? `<small>${esc(l.desc)}</small>` : ""}
            </span>
            <span class="lugar-rota">Rota ${SETA}</span>
          </a>
        </li>`
        )
        .join("")}
    </ul>`;
}

// ---------- Movimento: uma coreografia por tela ----------
function animar(tela) {
  if (semMovimento) return;
  const ease = "cubicBezier(.2,.8,.2,1)";
  if (tela === "inicio") {
    anime.timeline({ easing: ease })
      .add({ targets: ".abertura > *", translateY: [18, 0], opacity: [0, 1], duration: 600, delay: anime.stagger(80) })
      .add({ targets: ".cidade", clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"], duration: 750, delay: anime.stagger(90) }, "-=350")
      .add({ targets: ".cidade-nome", letterSpacing: ["0.2em", "0.02em"], opacity: [0, 1], duration: 900, delay: anime.stagger(90) }, "-=950");
  } else if (tela === "cidade") {
    anime.timeline({ easing: ease })
      .add({ targets: ".capa img", scale: [1.12, 1], duration: 1400 })
      .add({ targets: ".capa-nome", translateY: [24, 0], opacity: [0, 1], duration: 700 }, 150)
      // as placas "passam pela janela", da direita para a esquerda
      .add({ targets: ".placa", translateX: [60, 0], opacity: [0, 1], duration: 650, delay: anime.stagger(110) }, 300)
      .add({ targets: ".instrucao", opacity: [0, 1], duration: 400 }, 300);
  } else {
    anime.timeline({ easing: ease })
      .add({ targets: ".placa-grande", translateX: [60, 0], opacity: [0, 1], duration: 650 })
      .add({ targets: ".lugares li", translateY: [16, 0], opacity: [0, 1], duration: 500, delay: anime.stagger(60) }, 200);
  }
}

function render() {
  const [idCidade, chave] = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const cidade = CIDADES.find((c) => c.id === idCidade);
  let tela;

  if (cidade && chave && cidade.categorias[chave]) {
    tela = "lista";
    app.innerHTML = telaLista(cidade, chave);
    voltar.dataset.destino = `#/${cidade.id}`;
    document.title = `${CATEGORIAS[chave].titulo} em ${cidade.nome} · Guia Capixaba`;
  } else if (cidade) {
    tela = "cidade";
    app.innerHTML = telaCidade(cidade);
    voltar.dataset.destino = "#/";
    document.title = `${cidade.nome} · Guia Capixaba`;
  } else {
    tela = "inicio";
    app.innerHTML = telaInicio();
    delete voltar.dataset.destino;
    document.title = "Guia Capixaba";
  }
  document.body.dataset.tela = tela;
  voltar.hidden = !voltar.dataset.destino;
  window.scrollTo(0, 0);
  animar(tela);
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
  setTimeout(() => (anuncio.hidden = true), 300);
  try { sessionStorage.setItem(CHAVE_ANUNCIO, "1"); } catch {}
};

if (!jaViu()) {
  setTimeout(() => {
    anuncio.hidden = false;
    requestAnimationFrame(() => anuncio.classList.add("aberto"));
  }, 3000);
}
document.getElementById("anuncio-fechar").addEventListener("click", fecharAnuncio);
document.getElementById("anuncio-depois").addEventListener("click", fecharAnuncio);
document.getElementById("anuncio-botao").addEventListener("click", fecharAnuncio);
anuncio.addEventListener("click", (e) => e.target === anuncio && fecharAnuncio());
document.addEventListener("keydown", (e) => e.key === "Escape" && !anuncio.hidden && fecharAnuncio());
