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
    if (taskName.length <= 0) {
        alert("Error: Invalid Task Name")
        return;
    }
    recycleBinImage.type = "image"
    recycleBinImage.src = ".././resources/recycle-bin.png";
    recycleBinImage.height = 20;
    recycleBinImage.width = 20;
    recycleBinImage.onclick = function () { deleteElement(newNode) };
    newNode.appendChild(document.createTextNode(taskName));
    newNode.appendChild(recycleBinImage)

    todolist.appendChild(newNode);
}

function deleteElement(newNode) {
    let todolist = document.getElementById("todolist");
    todolist.removeChild(newNode)
}

// let fruits = ['Apple', 'Banana', 'Orange']
// let fruits = new Array("Apple", "Banana", "Orange");
// console.log(fruits)
// fruits.splice(1,1,'Apple')

// fruits.slice()

// fruits.forEach((value)=>console.log(value.toUpperCase()))

// console.log(fruits.filter(value=> value == "Apple"))

// let htmlListItems = fruits.map(value => "<li>" + value + "</li>")
// console.log(htmlListItems)

// result, currentValue, definition, defaultValue
// let values = [1,2,5,8,9]
// let result = values.reduce((acc, val,)=>acc * val, 1)
// console.log(result)

// let result = fruits.reduce((acc, val,)=> "<li>"+ val +"</li>" + acc, "</ul>\n")
// console.log("<ul>"+result)

// let values = [1,2,5,8,9]
// console.log(values.reduce((acc, val,)=> val > acc ? acc = val : acc, values[0]))

// let values = [[1,2,5,8,9],[9,10]];
// console.log(values.reduce((acc, val)=> acc.concat(val), []))

// let valueSet = [1,3,5,1];
// let value = 3;
// let displayMessage = "Heello" + value;
// console.log(displayMessage)
// displayMessage = `Hello ${value}`
// console.log(displayMessage)
// console.log(displayMessage[0])
// console.log(displayMessage.charAt(0))
// displayMessage[0] = 'a'
// console.log(displayMessage)

// displayMessage = displayMessage.replace('H', 'a')
// console.log(displayMessage)

// let values = [[1,2,5,8,9],[9,10]];
// let result = values.join()
// console.log(result)

// let person = {
//     name: 'Hashim',
//     age: 25,
//     isStudent: true,
//     registeredCourses: {
//         course1: {
//             title: 'PF',
//             isPassed: true
//         },
//         course2: {
//             title: 'OOP',
//             isPassed: true
//         }
//     },
//     displayName: function () {
//         return this.name
//     }
// };

// let course3 = {
//     title: 'Web',
//     isPassed: true
// }
// person['registeredCourses']['course3'] = course3
// person.Prototype.semesterStart = true
// person.Prototype.greet = function(){
//     return `Hello ${this.name}`
// }

// console.log(person.Prototype)
// console.log(person)
// console.log(person.displayName())
// console.log(person.name)
// console.log(person['name'])
// delete person['name']
// console.log(person['registeredCourses']['course1']['title'])

// console.log(Object.keys(person))
// console.log(Object.values(person))
// for (key in person){
//     console.log(person[key]);
// }

// let {name, isStudent} = person
// console.log(name, isStudent)

// let currentStudent = {... person}
// console.log(currentStudent)
// function add(...val){
//     return 1;
// }

// function createPerson(name,isStudent){
//     this.name = name;
//     this.isStudent = isStudent;
// }

// let person3 = new createPerson('Hashim', true)
// console.log(person3)

// Object.freeze(person)
// Object.seal(person)

// let person1 = new Object();
// person1.name = 'Talha'
// person1.isStudent = true
// console.log(person1)

// let person2 = Object.create(null);
// person2.name = 'Yousaf'
// console.log(person2)

// Task
// Page Display
// Student Names[checkboxes][edit,view] Offered Courses [List]