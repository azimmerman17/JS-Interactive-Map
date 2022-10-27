let map = L.map('map').setView([51.505, -0.09], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

