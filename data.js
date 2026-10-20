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
      turisticos: [
        { nome: "Convento da Penha",                   desc: "Cartão-postal do ES, com vista da baía",        maps: noMaps("Convento da Penha, Vila Velha - ES") },
        { nome: "Morro do Moreno",                     desc: "Trilha e vista panorâmica da cidade",           maps: noMaps("Morro do Moreno, Vila Velha - ES") },
        { nome: "Farol de Santa Luzia",                desc: "Farol histórico à beira-mar",                   maps: noMaps("Farol de Santa Luzia, Vila Velha - ES") },
        { nome: "Parque da Prainha",                   desc: "Onde começou a colonização do ES",              maps: noMaps("Parque da Prainha, Vila Velha - ES") },
        { nome: "Casa da Memória",                     desc: "História da cidade e do Espírito Santo",        maps: noMaps("Casa da Memória de Vila Velha - ES") },
        { nome: "Igreja Nossa Senhora do Rosário",     desc: "Uma das igrejas mais antigas do estado",        maps: noMaps("Igreja Nossa Senhora do Rosário, Prainha, Vila Velha - ES") },
        { nome: "Forte São Francisco Xavier da Barra", desc: "Forte histórico (área militar, confira o acesso)", maps: noMaps("Forte São Francisco Xavier da Barra, Vila Velha - ES") },
        { nome: "Pedra da Sereia",                     desc: "Cenário de pedras e mar na Praia da Costa",     maps: noMaps("Pedra da Sereia, Praia da Costa, Vila Velha - ES") },
        { nome: "Fábrica de Chocolates Garoto",        desc: "A história do chocolate capixaba",              maps: noMaps("Chocolates Garoto, Vila Velha - ES") },
        { nome: "Orla da Praia da Costa",              desc: "Calçadão com quiosques e vista do mar",         maps: noMaps("Orla da Praia da Costa, Vila Velha - ES") },
      ],
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
    categorias: {
      praias: [
        { nome: "Praia Grande (Ilha do Boi)", desc: "Águas calmas e sombra natural",               maps: noMaps("Praia Grande, Ilha do Boi, Vitória - ES") },
        { nome: "Praia das Castanheiras",     desc: "Pequena, com pedras e piscinas naturais",     maps: noMaps("Praia das Castanheiras, Ilha do Boi, Vitória - ES") },
        { nome: "Curva da Jurema",            desc: "Quiosques, stand-up paddle e dia de praia",   maps: noMaps("Curva da Jurema, Vitória - ES") },
        { nome: "Praia do Nenel",             desc: "Recanto discreto e sossegado",                maps: noMaps("Praia do Nenel, Vitória - ES") },
        { nome: "Praia de Camburi",           desc: "6 km pra caminhar, pedalar e curtir quiosques", maps: noMaps("Praia de Camburi, Vitória - ES") },
        { nome: "Praia da Direita",           desc: "Mar abrigado na Ilha do Boi",                 maps: noMaps("Praia da Direita, Ilha do Boi, Vitória - ES") },
        { nome: "Praia da Guarderia",         desc: "Esportes náuticos e vista da baía",           maps: noMaps("Praia da Guarderia, Vitória - ES") },
        { nome: "Praia de Santa Helena",      desc: "Orla urbana perto da Praça dos Desejos",      maps: noMaps("Praia de Santa Helena, Vitória - ES") },
        { nome: "Praia do Canto",             desc: "Orla com bares e restaurantes",               maps: noMaps("Praia do Canto, Vitória - ES") },
        { nome: "Praia da Ilha do Frade",     desc: "Cantinho reservado e bonito",                 maps: noMaps("Praia da Ilha do Frade, Vitória - ES") },
      ],
      turisticos: [
        { nome: "Praça do Papa",                   desc: "Vista da baía e pôr do sol",                maps: noMaps("Praça do Papa, Vitória - ES") },
        { nome: "Palácio Anchieta",                desc: "Palácio histórico no Centro",               maps: noMaps("Palácio Anchieta, Vitória - ES") },
        { nome: "Catedral Metropolitana",          desc: "Arquitetura neogótica e vitrais",           maps: noMaps("Catedral Metropolitana de Vitória - ES") },
        { nome: "Parque Pedra da Cebola",          desc: "Jardins, lagos e formações rochosas",       maps: noMaps("Parque Pedra da Cebola, Vitória - ES") },
        { nome: "Parque Moscoso",                  desc: "Parque histórico no Centro",                maps: noMaps("Parque Moscoso, Vitória - ES") },
        { nome: "Basílica de Santo Antônio",       desc: "Templo imponente e cheio de detalhes",      maps: noMaps("Basílica de Santo Antônio, Vitória - ES") },
        { nome: "Parque Botânico Vale",            desc: "Passeio tranquilo na natureza",             maps: noMaps("Parque Botânico Vale, Vitória - ES") },
        { nome: "Mirante da Fonte Grande",         desc: "Vitória inteira vista do alto",             maps: noMaps("Mirante da Fonte Grande, Vitória - ES") },
        { nome: "Píer de Iemanjá",                 desc: "Ponto clássico da orla de Camburi",         maps: noMaps("Píer de Iemanjá, Camburi, Vitória - ES") },
        { nome: "Praça dos Namorados",             desc: "Passeio à beira-mar e feira de artesanato", maps: noMaps("Praça dos Namorados, Vitória - ES") },
      ],
      restaurantes: [
        { nome: "Tero Brasa e Vinho",        desc: "Carnes na brasa · Praia do Canto",     maps: noMaps("Tero Brasa e Vinho, Vitória - ES") },
        { nome: "O Quintal Parrilla Bar",    desc: "Parrilla · Praia do Canto",            maps: noMaps("O Quintal Parrilla Bar, Vitória - ES") },
        { nome: "Restaurante São Pedro",     desc: "Moqueca capixaba · Praia do Suá",      maps: noMaps("Restaurante São Pedro, Praia do Suá, Vitória - ES") },
        { nome: "Restaurante Pirão",         desc: "Culinária capixaba · Praia do Canto",  maps: noMaps("Restaurante Pirão, Vitória - ES") },
        { nome: "Ilha do Caranguejo",        desc: "Caranguejo e frutos do mar · Jardim Camburi", maps: noMaps("Ilha do Caranguejo, Jardim Camburi, Vitória - ES") },
        { nome: "Coco Bambu",                desc: "Frutos do mar · Praia do Canto",       maps: noMaps("Coco Bambu Vitória - ES") },
        { nome: "Balthazar",                 desc: "Contemporâneo · Praia do Canto",       maps: noMaps("Balthazar restaurante, Vitória - ES") },
        { nome: "Vilelê Gastrobar",          desc: "Petiscos e drinks · Praia do Canto",   maps: noMaps("Vilelê Gastrobar, Vitória - ES") },
        { nome: "Soeta",                     desc: "Autoral · Praia do Canto",             maps: noMaps("Soeta restaurante, Vitória - ES") },
        { nome: "El Libertador",             desc: "Sul-americano · Mata da Praia",        maps: noMaps("El Libertador Restaurante, Vitória - ES") },
      ],
    } },
  { id: "serra",            nome: "Serra",            foto: "img/serra.jpg",
    categorias: { praias: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
  { id: "cariacica",        nome: "Cariacica",        foto: "img/cariacica.jpg",
    categorias: {
      turisticos: [
        { nome: "Monte Mochuara",                 desc: "Cartão-postal natural, trilhas e fotos",     maps: noMaps("Monte Mochuara, Cariacica - ES") },
        { nome: "Nova Orla de Cariacica",         desc: "Calçadão de frente pra Baía de Vitória",     maps: noMaps("Orla de Cariacica - ES") },
        { nome: "Mirante da Orla",                desc: "Vista da baía no fim de tarde",              maps: noMaps("Mirante da Orla de Cariacica - ES") },
        { nome: "Parque da Biquinha",             desc: "Lagoas, árvores e espaço pras crianças",     maps: noMaps("Parque da Biquinha, Cariacica - ES") },
        { nome: "Parque O Cravo e a Rosa",        desc: "Área verde com nascentes",                   maps: noMaps("Parque Municipal O Cravo e a Rosa, Cariacica - ES") },
        { nome: "Igreja Matriz São João Batista", desc: "Marco histórico de Cariacica-Sede",          maps: noMaps("Igreja Matriz São João Batista, Cariacica - ES") },
        { nome: "Fazenda Parque Vale do Moxuara", desc: "Turismo rural (confira agendamento)",        maps: noMaps("Fazenda Parque Vale do Moxuara, Cariacica - ES") },
        { nome: "Bosque dos Pássaros",            desc: "Caminhada no verde",                         maps: noMaps("Parque Municipal Bosque dos Pássaros, Cariacica - ES") },
        { nome: "Corredeiras de Maricará",        desc: "Água corrente e pedras na zona rural",       maps: noMaps("Corredeiras de Maricará, Cariacica - ES") },
        { nome: "Bica de Roda D'Água",            desc: "Passeio rural com água natural",             maps: noMaps("Bica de Roda D'Água, Cariacica - ES") },
      ],
      restaurantes: [
        { nome: "Tyler Steakhouse",             desc: "Carnes e hambúrgueres · Vera Cruz",     maps: noMaps("Tyler Steakhouse, Vera Cruz, Cariacica - ES") },
        { nome: "Churrascaria Espeto de Prata", desc: "Churrasco · Serra do Anil",             maps: noMaps("Churrascaria Espeto de Prata, Cariacica - ES") },
        { nome: "Churrascaria Valentim",        desc: "Churrasco e buffet · Campo Grande",     maps: noMaps("Churrascaria Valentim, Campo Grande, Cariacica - ES") },
        { nome: "Sabor da Vila",                desc: "Comida caseira · Vila Capixaba",        maps: noMaps("Sabor da Vila Restaurante, Vila Capixaba, Cariacica - ES") },
        { nome: "Restaurante Colodetti",        desc: "Buffet econômico · Vila Capixaba",      maps: noMaps("Restaurante Colodetti, Cariacica - ES") },
        { nome: "Vita Nutri",                   desc: "Buffet variado · Itacibá",              maps: noMaps("Vita Nutri Restaurante, Itacibá, Cariacica - ES") },
        { nome: "Partei Steak & Beer",          desc: "Carnes e porções · Vila Palestina",     maps: noMaps("Partei Steak & Beer, Cariacica - ES") },
        { nome: "Pizzamore Pizzaria",           desc: "Pizzas · Campo Grande",                 maps: noMaps("Pizzamore Pizzaria, Campo Grande, Cariacica - ES") },
        { nome: "Pizzaria Nº1",                 desc: "Pizzas · Porto de Cariacica",           maps: noMaps("Pizzaria Nº1, Porto de Cariacica, Cariacica - ES") },
        { nome: "Paiol Bar e Restaurante",      desc: "Peixes e moqueca · Nova Campo Grande",  maps: noMaps("Paiol Bar e Restaurante, Cariacica - ES") },
      ],
    } },
  { id: "viana",            nome: "Viana",            foto: "img/viana.jpg",
    categorias: { natureza: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
  { id: "domingos-martins", nome: "Domingos Martins", foto: "img/domingos-martins.jpg",
    categorias: { natureza: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
  { id: "guarapari",        nome: "Guarapari",        foto: "img/guarapari.jpg",
    categorias: { praias: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
];
