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
    categorias: {
      praias: [
        { nome: "Praia de Manguinhos",       desc: "Mar calmo e restaurantes de frutos do mar",  maps: noMaps("Praia de Manguinhos, Serra - ES") },
        { nome: "Praia de Bicanga",          desc: "Clima de vila de pescadores",                maps: noMaps("Praia de Bicanga, Serra - ES") },
        { nome: "Praia Ponta dos Fachos",    desc: "Paisagem natural e rústica",                 maps: noMaps("Praia Ponta dos Fachos, Serra - ES") },
        { nome: "Praia de Carapebus",        desc: "Natureza e ondas fortes",                    maps: noMaps("Praia de Carapebus, Serra - ES") },
        { nome: "Praia de Jacaraípe",        desc: "Orla movimentada, quiosques e surfe",        maps: noMaps("Praia de Jacaraípe, Serra - ES") },
        { nome: "Praia da Baleia",           desc: "Boa pra caminhar e sossegar",                maps: noMaps("Praia da Baleia, Serra - ES") },
        { nome: "Praia de Nova Almeida",     desc: "Recifes e piscinas naturais na maré baixa",  maps: noMaps("Praia de Nova Almeida, Serra - ES") },
        { nome: "Praia de Costa Bela",       desc: "Longe da agitação, clima natural",           maps: noMaps("Praia de Costa Bela, Serra - ES") },
        { nome: "Praia Enseada",             desc: "Banho de mar e gastronomia em Manguinhos",   maps: noMaps("Praia Enseada, Manguinhos, Serra - ES") },
        { nome: "Praia da Chaleirinha",      desc: "Trecho diferente do litoral de Manguinhos",  maps: noMaps("Praia da Chaleirinha, Serra - ES") },
      ],
      turisticos: [
        { nome: "Igreja e Residência dos Reis Magos", desc: "Patrimônio jesuítico em Nova Almeida",   maps: noMaps("Igreja e Residência dos Reis Magos, Nova Almeida, Serra - ES") },
        { nome: "Mestre Álvaro",                      desc: "Montanha, trilhas e vista panorâmica",    maps: noMaps("Mestre Álvaro, Serra - ES") },
        { nome: "Parque da Cidade",                   desc: "Caminhada, bike e skate",                 maps: noMaps("Parque da Cidade, Serra - ES") },
        { nome: "Jardim Botânico da Serra",           desc: "Passeio tranquilo no verde",              maps: noMaps("Jardim Botânico da Serra - ES") },
        { nome: "Falésias de Nova Almeida",           desc: "Paredões com vista do litoral",           maps: noMaps("Falésias de Nova Almeida, Serra - ES") },
        { nome: "Praça Encontro das Águas",           desc: "Pôr do sol em Jacaraípe",                 maps: noMaps("Praça Encontro das Águas, Jacaraípe, Serra - ES") },
        { nome: "Museu Histórico da Serra",           desc: "Casarão com a história do município",     maps: noMaps("Museu Histórico da Serra - ES") },
        { nome: "Sítio Histórico do Queimado",        desc: "Memória da Insurreição de 1849",          maps: noMaps("Sítio Histórico de São José do Queimado, Serra - ES") },
        { nome: "Lagoa Juara",                        desc: "Lagoa com paisagem e gastronomia",        maps: noMaps("Lagoa Juara, Serra - ES") },
        { nome: "Igreja Matriz N. Sra. da Conceição", desc: "Centro histórico de Serra-Sede",          maps: noMaps("Igreja Matriz Nossa Senhora da Conceição, Serra - ES") },
      ],
      restaurantes: [
        { nome: "Mahai Serra",              desc: "Contemporâneo · Civit II",                 maps: noMaps("Mahai Serra - ES") },
        { nome: "Picanha na Brasa",         desc: "Churrasco · Porto Canoa",                  maps: noMaps("Picanha na Brasa, Porto Canoa, Serra - ES") },
        { nome: "Restaurante Tropical",     desc: "Buffet e churrasco · Serra Centro",        maps: noMaps("Restaurante Tropical, Serra - ES") },
        { nome: "Berro D'Água",             desc: "Moqueca e frutos do mar · Jacaraípe",      maps: noMaps("Restaurante Berro D'Água, Jacaraípe, Serra - ES") },
        { nome: "Enseada de Manguinhos",    desc: "Culinária capixaba · Manguinhos",          maps: noMaps("Enseada de Manguinhos restaurante, Serra - ES") },
        { nome: "Ninho da Roxinha",         desc: "Restaurante com vista · Nova Almeida",     maps: noMaps("Ninho da Roxinha, Nova Almeida, Serra - ES") },
        { nome: "Pierrot da Praia",         desc: "Peixes e churrasco · Manguinhos",          maps: noMaps("Pierrot da Praia, Manguinhos, Serra - ES") },
        { nome: "Cabana do Luiz",           desc: "Frutos do mar e pizza · Jacaraípe",        maps: noMaps("Cabana do Luiz, Jacaraípe, Serra - ES") },
        { nome: "Restaurante Lagoa Juara",  desc: "Peixes à beira da lagoa · Jacaraípe",      maps: noMaps("Restaurante Lagoa Juara, Serra - ES") },
        { nome: "Casa do Mestre Pizzaria",  desc: "Pizza artesanal · Manguinhos",             maps: noMaps("Casa do Mestre Pizzaria, Manguinhos, Serra - ES") },
      ],
    } },
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
    categorias: {
      turisticos: [
        { nome: "Rampa do Urubu",                   desc: "Mirante e voo livre com vista da Grande Vitória", maps: noMaps("Rampa do Urubu, Viana - ES") },
        { nome: "Mirante da Biquinha",              desc: "Parada na BR-262 com vista das montanhas",        maps: noMaps("Mirante da Biquinha, Viana - ES") },
        { nome: "Cachoeira do Aloísio",             desc: "Cachoeira e trilhas pra família",                 maps: noMaps("Cachoeira do Aloísio, Viana - ES") },
        { nome: "Parque Túnel da Alegria",          desc: "Dia ao ar livre perto do Rio Santo Agostinho",    maps: noMaps("Parque Túnel da Alegria, Viana - ES") },
        { nome: "Parque Rota das Garças",           desc: "Mata Atlântica (confira agendamento)",            maps: noMaps("Parque Natural Municipal Rota das Garças, Viana - ES") },
        { nome: "Estação Ferroviária",              desc: "Patrimônio histórico de 1895",                    maps: noMaps("Estação Ferroviária de Viana - ES") },
        { nome: "Igreja N. Sra. da Conceição",      desc: "Igreja histórica de duas torres",                 maps: noMaps("Igreja Nossa Senhora da Conceição, Viana - ES") },
        { nome: "Ruínas da Igreja N. Sra. de Belém", desc: "Ruínas coloniais no distrito de Jucu",           maps: noMaps("Ruínas da Igreja Nossa Senhora de Belém, Viana - ES") },
        { nome: "Cachoeira de Piapitangui",         desc: "Queda d'água na zona rural (confira o acesso)",   maps: noMaps("Cachoeira de Piapitangui, Viana - ES") },
        { nome: "Pontilhão Santo Agostinho",        desc: "Paisagem pra fotos (cuidado com os trilhos)",     maps: noMaps("Pontilhão Santo Agostinho, Viana - ES") },
      ],
      restaurantes: [
        { nome: "Recanto dos Lagos",             desc: "Brasileira e churrasco · Universal",   maps: noMaps("Recanto dos Lagos Restaurante, Viana - ES") },
        { nome: "Vista da Mata",                 desc: "Comida caseira · Ribeira",             maps: noMaps("Vista da Mata Bar e Restaurante, Viana - ES") },
        { nome: "Restaurante do Dalto",          desc: "Comida caseira · Primavera",           maps: noMaps("Restaurante do Dalto, Viana - ES") },
        { nome: "Quinta de Viana",               desc: "Brasileira e frutos do mar · Viana",   maps: noMaps("Restaurante Quinta de Viana, Viana - ES") },
        { nome: "Cantim di Minas",               desc: "Comida mineira · Universal",           maps: noMaps("Cantim di Minas, Viana - ES") },
        { nome: "Divina Rota",                   desc: "Restaurante e conveniência · Jucu",    maps: noMaps("Divina Rota Restaurante e Conveniência, Viana - ES") },
        { nome: "Churrascaria Brasa Grill",      desc: "Churrasco · Areinha",                  maps: noMaps("Restaurante Churrascaria Brasa Grill, Viana - ES") },
        { nome: "Pesque e Pague do Neném",       desc: "Pesca e restaurante · São Paulo de Viana", maps: noMaps("Pesque e Pague do Neném, Viana - ES") },
        { nome: "Mimonb Forneria",               desc: "Pizza artesanal · Ribeira",            maps: noMaps("Mimonb Forneria, Viana - ES") },
        { nome: "Deveras Burguer",               desc: "Hambúrgueres · Vila Bethânia",         maps: noMaps("Deveras Burguer, Viana - ES") },
      ],
    } },
  { id: "domingos-martins", nome: "Domingos Martins", foto: "img/domingos-martins.jpg",
    categorias: { natureza: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
  { id: "guarapari",        nome: "Guarapari",        foto: "img/guarapari.jpg",
    categorias: { praias: exemplo(), turisticos: exemplo(), restaurantes: exemplo() } },
];
