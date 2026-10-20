# Guia Capixaba

Guia rápido (acessado por QR code no carro) com praias, pontos turísticos e restaurantes de Vila Velha, Vitória, Serra, Cariacica, Viana e Domingos Martins. Oferecimento: Gold Vibes.

Site estático (HTML/CSS/JS puro), sem build.

## Editar o conteúdo
Tudo fica em **`data.js`**: cidades, categorias, lugares e o link do patrocínio.
Cada lugar: `{ nome, desc, maps }` — `maps` é opcional (sem ele, o link busca "nome, cidade - ES" no Google Maps).

## Rodar localmente
```bash
node servidor-local.js . 5174
```
Abra http://localhost:5174 (ou, no celular na mesma rede Wi-Fi, http://IP-DO-PC:5174).

## Créditos das fotos (Wikimedia Commons)
- Vila Velha — [Convento da Penha e palmeiras](https://commons.wikimedia.org/wiki/File:Convento_da_Penha_e_palmeiras.jpg)
- Vitória — [VitorJubini TerceiraPonte Vitoria ES](https://commons.wikimedia.org/wiki/File:VitorJubini_TerceiraPonte_Vitoria_ES_(27121005458).jpg)
- Serra — [Igreja dos Reis Magos, Nova Almeida](https://commons.wikimedia.org/wiki/File:Igreja_dos_Reis_Magos-_Nova_Almeida_-_Serra_-_ES_-_Brasil_-_panoramio_(2).jpg)
- Cariacica — [Vista parcial de Cariacica com o Monte Mochuara](https://commons.wikimedia.org/wiki/File:Vista_parcial_da_sede_de_Cariacica_ES_com_o_Monte_Mochuara_ao_fundo.JPG)
- Viana — [Igreja Matriz Viana](https://commons.wikimedia.org/wiki/File:Igreja_Matriz_Viana.JPG)
- Domingos Martins — [Pedra Azul](https://commons.wikimedia.org/wiki/File:Pedra_Azul_-_Domingos_Martins_-_ES.jpg)
