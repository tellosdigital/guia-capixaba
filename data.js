// ============================================================
// CONTEÚDO DO GUIA — edite só este arquivo para trocar os lugares.
//
// Cada lugar aceita:
//   nome:  "Praia da Costa"                (obrigatório)
//   desc:  "Orla linda pra caminhar"       (opcional, frase curta)
//   maps:  "https://maps.app.goo.gl/..."   (opcional — se não tiver,
//          o link é montado buscando "nome + cidade, ES" no Maps)
//   foto:  "img/lugares/mahai.jpg"         (opcional — logo ou foto quadrada;
//          sem ela aparece uma mini placa com o ícone da categoria)
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

// Monta o link do Maps a partir do nome exato do lugar no Google Maps.
const noMaps = (busca) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(busca);

// Lugares de exemplo só para visualizar o layout — substituir pelo conteúdo real.
const exemplo = (n = 4) =>
  Array.from({ length: n }, (_, i) => ({
    nome: `Lugar de exemplo ${i + 1}`,
    desc: "Aqui vai uma frase curta sobre o lugar.",
  }));

const CIDADES = [
  { id: "vila-velha",       nome: "Vila Velha",       foto: "img/vila-velha.jpg",
    categorias: {
      praias: [
        { nome: "Praia da Costa",          desc: "Calçadão, quiosques e estrutura pra passar o dia", maps: noMaps("Praia da Costa, Vila Velha - ES") },
        { nome: "Praia de Itapuã",         desc: "Tradicional, com quiosques e restaurantes",        maps: noMaps("Praia de Itapuã, Vila Velha - ES") },
        { nome: "Praia de Itaparica",      desc: "Orla extensa, boa pra surfe e caminhada",          maps: noMaps("Praia de Itaparica, Vila Velha - ES") },
        { nome: "Praia da Sereia",         desc: "Enseada entre pedras, ótima pra relaxar",          maps: noMaps("Praia da Sereia, Vila Velha - ES") },
        { nome: "Praia Secreta",           desc: "Escondida entre rochas, rende ótimas fotos",       maps: noMaps("Praia Secreta, Vila Velha - ES") },
        { nome: "Praia do Ribeiro",        desc: "Recanto reservado perto do Morro do Moreno",       maps: noMaps("Praia do Ribeiro, Vila Velha - ES") },
        { nome: "Praia da Concha",         desc: "Pequena e cercada de natureza",                    maps: noMaps("Praia da Concha, Vila Velha - ES") },
        { nome: "Praia da Barra do Jucu",  desc: "Clima de vila, cultura capixaba e surfe",          maps: noMaps("Praia da Barra do Jucu, Vila Velha - ES") },
        { nome: "Praia de Ponta da Fruta", desc: "Clima de balneário, bem tranquila",                maps: noMaps("Praia de Ponta da Fruta, Vila Velha - ES") },
        { nome: "Praia do Sol",            desc: "Litoral sul, paisagens naturais",                  maps: noMaps("Praia do Sol, Vila Velha - ES") },
      ],
      turisticos: exemplo(),
      restaurantes: [
        { nome: "Mahai",                        desc: "Contemporâneo · Praia da Costa",    maps: noMaps("Mahai Praia da Costa, Vila Velha - ES") },
        { nome: "Coco Bambu",                   desc: "Frutos do mar · Praia da Costa",    maps: noMaps("Coco Bambu Vila Velha - ES") },
        { nome: "La Cuchilla",                  desc: "Carnes · Itaparica",                maps: noMaps("La Cuchilla Restaurante, Vila Velha - ES") },
        { nome: "Tyler Steakhouse",             desc: "Steakhouse · Itaparica",            maps: noMaps("Tyler Steakhouse - Restaurante Itaparica, Vila Velha - ES") },
        { nome: "Marinato Cucina Italiana",     desc: "Italiana · Praia da Costa",         maps: noMaps("Marinato Cucina Italiana, Vila Velha - ES") },
        { nome: "Japatê",                       desc: "Japonesa · Praia da Costa",         maps: noMaps("Japatê Vila Velha - ES") },
        { nome: "Maledita Pizzeria Napoletana", desc: "Pizza napolitana · Praia da Costa", maps: noMaps("Maledita Pizzeria Napoletana Praia da Costa, Vila Velha - ES") },
        { nome: "Spaghetti Trattoria",          desc: "Massas · Praia da Costa",           maps: noMaps("Spaghetti Trattoria, Vila Velha - ES") },
        { nome: "Restaurante Atlântica",        desc: "Frutos do mar · Praia da Costa",    maps: noMaps("Restaurante Atlântica Praia da Costa, Vila Velha - ES") },
        { nome: "Parrilla Bull Steakhouse",     desc: "Carnes · Centro",                   maps: noMaps("Parrilla Bull Steakhouse, Vila Velha - ES") },
      ],
    } },
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
  { id: "guarapari",        nome: "Guarapari",        foto: "img/guarapari.jpg",
    categorias: { praias: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
];
