function playNext() {
    var audioSource = document.getElementById("audio");
    audioSource.src = "resources/videoplayback.mp3";
    audioSource.play();
}

function playBack() {
    var audioSource = document.getElementById("audio");
    audioSource.src = "resources/videoplayback (1).mp3";
    audioSource.play();
}

let map, marker;

function getLocation() {
    const x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const x = document.getElementById("demo");
    x.innerHTML = `Latitude: ${lat}<br>Longitude: ${lng}`;

    if (!map) {
        map = L.map('map').setView([lat, lng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);
    }

    if (marker) {
        map.removeLayer(marker);
    }
    marker = L.marker([lat, lng]).addTo(map).bindPopup("You are here!").openPopup();
    map.setView([lat, lng], 13);
}

function showError(error) {
    const x = document.getElementById("demo");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
    }
}
