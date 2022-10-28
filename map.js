//map object


function buildmap() {
	const pos = navigator.geolocation.getCurrentPosition(resolve, reject)

    function resolve(pos) {
        let lat = pos.coords.latitude
        let long = pos.coords.longitude
        let map = L.map('map').setView([lat, long], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const marker = L.marker([lat, long]);
            marker.addTo(map).bindPopup('<p1><b>Current Location</b></p1>').openPopup();
        
    }

    function reject() {
        console.alert('Your current location cannot be found.')
    }
}

buildmap()


//listeners for submit button
document.getElementById('submit').addEventListener('click',function() {
    let place = document.getElementById('selectPlace').value
    console.log(place)
})