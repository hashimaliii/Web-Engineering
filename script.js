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

getLocation()
function getLocation() {
    const x = document.getElementById("location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const x = document.getElementById("location");
    x.innerHTML = `Latitude: ${lat}<br>Longitude: ${lng}`;
}
