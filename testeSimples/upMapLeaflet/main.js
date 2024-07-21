document.querySelector('#inputs').innerHTML = `
    <form id='form-control'>
        <label for='lan'>Latitude</label>
        <input type='text' name='lan' id='lan' placeholder='lan' />

        <label for='lon'>Longitude</label>
        <input type='text' name='lon' id='lon' placeholder='lon' />

        <button type='submit'>dados</button>
   </form>
   <br>
   <br>
`;

let map;
// Função para inicializar o mapa
function initMap() {
    if(map) {
        return map;
    }
    // Crie um mapa com Leaflet
    map = L.map('map').setView([0, 0], 2); // Inicialize com coordenadas padrão e zoom

    // Adicione uma camada de mosaico do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return map;
}

// Função para atualizar o mapa com novos dados
function updateMap(map, newData) {
    // Limpar camadas existentes (marcadores, polígonos, etc.) se necessário
    map.eachLayer(function (layer) {
        if (!layer._url) { // Verifica se não é uma camada de tile (como a do OpenStreetMap)
            map.removeLayer(layer);
        }
    });

    // Atualize o centro do mapa com base nos novos dados
    map.setView([newData.coord.lat, newData.coord.lon], 10);

    // Adicione um marcador novo com base nos novos dados
    L.marker([newData.coord.lat, newData.coord.lon]).addTo(map);
}

// Exemplo de uso
// document.addEventListener('DOMContentLoaded', function () {
//
//     document.querySelector("#form-control").addEventListener('submit', (e) => {
//         e.preventDefault();
//
//         const lan = document.querySelector('#lan').value.trim();
//         const lon = document.querySelector('#lon').value.trim();
//         console.log('lan:',lan,' lon:',lon)
//         // Inicialize o mapa quando o DOM estiver pronto
//     var map = initMap();
//
//     // Exemplo de dados de atualização (substitua com sua lógica de obtenção de dados)
//     var newData = {
//         coord: {
//             lat: lan,
//             lon: lon
//         }
//         // Outros dados que você deseja atualizar no mapa
//     };
//
//     // Atualize o mapa com os novos dados
//     updateMap(map, newData);
//  })
// });

document.querySelector("#form-control").addEventListener('submit', (e) => {
        e.preventDefault();

        const lan = document.querySelector('#lan').value.trim();
        const lon = document.querySelector('#lon').value.trim();
        console.log('lan:',lan,' lon:',lon)
        // Inicialize o mapa quando o DOM estiver pronto
        // var map = initMap();
         // Verifique se o mapa está inicializado
        if (!map) {
            // Se o mapa não estiver inicializado, inicialize-o
            map = initMap();
        }

        // Exemplo de dados de atualização (substitua com sua lógica de obtenção de dados)
        var newData = {
            coord: {
                lat: lan,
                lon: lon
            }
            // Outros dados que você deseja atualizar no mapa
        };

        // Atualize o mapa com os novos dados
        updateMap(map, newData);
 })

