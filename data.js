// ============================================================
// CONTEÚDO DO GUIA — edite só este arquivo para trocar os lugares.
//
// Cada lugar aceita:
//   nome:  "Praia da Costa"                (obrigatório)
//   desc:  "Orla linda pra caminhar"       (opcional, frase curta)
//   maps:  "https://maps.app.goo.gl/..."   (opcional — se não tiver,
//          o link é montado buscando "nome + cidade, ES" no Maps)
// ============================================================

const PATROCINIO = {
  nome: "Gold Vibes",
  chamada: "Acessórios em aço que brilham com você.",
  link: "https://www.goldvibes.com.br", // trocar pelo Instagram/site real
};

const CATEGORIAS = {
  praias:       { titulo: "Melhores praias",       icone: "🏖️", cor: "ocean" },
  natureza:     { titulo: "Natureza e mirantes",   icone: "⛰️", cor: "leaf" },
  turisticos:   { titulo: "Pontos turísticos",     icone: "📍", cor: "coral" },
  restaurantes: { titulo: "Melhores restaurantes", icone: "🍽️", cor: "sun" },
};

// Lugares de exemplo só para visualizar o layout — substituir pelo conteúdo real.
const exemplo = (n = 4) =>
  Array.from({ length: n }, (_, i) => ({
    nome: `Lugar de exemplo ${i + 1}`,
    desc: "Aqui vai uma frase curta sobre o lugar.",
  }));

const CIDADES = [
  {
    id: "vila-velha",
    nome: "Vila Velha",
    foto: "img/vila-velha.jpg",
    destaque: "Convento da Penha",
    categorias: { praias: exemplo(), turisticos: exemplo(), restaurantes: exemplo() },
  },
  {
    id: "vitoria",
    nome: "Vitória",
    foto: "img/vitoria.jpg",
    destaque: "Terceira Ponte",
    categorias: { praias: exemplo(), turisticos: exemplo(), restaurantes: exemplo() },
  },
  {
    id: "serra",
    nome: "Serra",
    foto: "img/serra.jpg",
    destaque: "Igreja dos Reis Magos",
    categorias: { praias: exemplo(), turisticos: exemplo(), restaurantes: exemplo() },
  },
  {
    id: "cariacica",
    nome: "Cariacica",
    foto: "img/cariacica.jpg",
    destaque: "Monte Mochuara",
    categorias: { natureza: exemplo(), turisticos: exemplo(), restaurantes: exemplo() },
  },
  {
    id: "viana",
    nome: "Viana",
    foto: "img/viana.jpg",
    destaque: "Igreja Matriz",
    categorias: { natureza: exemplo(), turisticos: exemplo(), restaurantes: exemplo() },
  },
  {
    id: "domingos-martins",
    nome: "Domingos Martins",
    foto: "img/domingos-martins.jpg",
    destaque: "Pedra Azul",
    categorias: { natureza: exemplo(), turisticos: exemplo(), restaurantes: exemplo() },
  },
];
