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

function addNewTask() {
    let todolist = document.getElementById("todolist");
    let newNode = document.createElement('li');
    let taskName = document.getElementById("todolistName").value;
    let recycleBinImage = document.createElement('input');
    if(taskName.length <= 0){
        alert("Error: Invalid Task Name")
        return;
    }
    recycleBinImage.type = "image"
    recycleBinImage.src = ".././resources/recycle-bin.png";
    recycleBinImage.height = 20;
    recycleBinImage.width = 20;
    recycleBinImage.onclick = function() {deleteElement(newNode)};
    newNode.appendChild(document.createTextNode(taskName));
    newNode.appendChild(recycleBinImage)

    todolist.appendChild(newNode);
}

function deleteElement(newNode) {
    let todolist = document.getElementById("todolist");
    todolist.removeChild(newNode)
}