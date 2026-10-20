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

// pictograma: praia | monumento | talheres | montanha
const CATEGORIAS = {
  praias:       { titulo: "Praias",            pictograma: "praia" },
  natureza:     { titulo: "Natureza",          pictograma: "montanha" },
  turisticos:   { titulo: "Pontos turísticos", pictograma: "monumento" },
  restaurantes: { titulo: "Restaurantes",      pictograma: "talheres" },
};

// Lugares de exemplo só para visualizar o layout — substituir pelo conteúdo real.
const exemplo = (n = 4) =>
  Array.from({ length: n }, (_, i) => ({
    nome: `Lugar de exemplo ${i + 1}`,
    desc: "Aqui vai uma frase curta sobre o lugar.",
  }));

const CIDADES = [
  { id: "vila-velha",       nome: "Vila Velha",       foto: "img/vila-velha.jpg",
    categorias: { praias: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
  { id: "vitoria",          nome: "Vitória",          foto: "img/vitoria.jpg",
    categorias: { praias: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
  { id: "serra",            nome: "Serra",            foto: "img/serra.jpg",
    categorias: { praias: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
  { id: "cariacica",        nome: "Cariacica",        foto: "img/cariacica.jpg",
    categorias: { natureza: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
  { id: "viana",            nome: "Viana",            foto: "img/viana.jpg",
    categorias: { natureza: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
  { id: "domingos-martins", nome: "Domingos Martins", foto: "img/domingos-martins.jpg",
    categorias: { natureza: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
];
