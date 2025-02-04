// Task
// Page Display
// Student Names[checkboxes][edit,view] Offered Courses [List]

var studentsList = new Object()

function addNewStudent() {
    let studentName = String(document.getElementById("studentName").value).toUpperCase();
    if (studentName.length <= 0) {
        alert("Error: Invalid Student Name")
        return;
    }

    let ol = document.getElementById('studentlist');
    let node = ol.firstChild.nextSibling;
    while (node) {
        if (node.textContent == studentName)
        {
            alert(`Error: Student ${studentName} is already registered!`)
            return;
        }
        node = node.nextSibling;
    }

    let todolist = document.getElementById("studentlist");
    let newNode = document.createElement('li');
    let recycleBinImage = document.createElement('input');
    let radioButton = document.createElement('input');
    studentsList[studentName] = new Set();
    radioButton.type = "radio"
    radioButton.name = "students"
    radioButton.onclick = function () { checkCheckBoxesForThisStudent(studentName) };
    radioButton.value = studentName
    newNode.value = studentName
    recycleBinImage.value = studentName
    recycleBinImage.type = "image"
    recycleBinImage.src = ".././resources/recycle-bin.png";
    recycleBinImage.height = 20;
    recycleBinImage.width = 20;
    recycleBinImage.onclick = function () { deleteStudentElement(newNode) };
    newNode.appendChild(radioButton)
    newNode.appendChild(document.createTextNode(studentName));
    newNode.appendChild(recycleBinImage)

    todolist.appendChild(newNode);
}

function checkCheckBoxesForThisStudent(studentName) {
    let courses = studentsList[studentName]
    let ol = document.getElementById('courselist');
    let node = ol.firstChild.nextSibling;
    while (node) {
        if (node.tagName === 'LI') {
            if (courses.has(node.textContent))
            {
                node.firstChild.checked = true;
            }
            else
            {
                node.firstChild.checked = false;
            }
        }
        node = node.nextSibling;
    }
}

function deleteStudentElement(newNode) {
    let todolist = document.getElementById("studentlist");
    todolist.removeChild(newNode)
    delete studentsList[newNode.textContent]
}

function addNewCourse() {
    let courseName = String(document.getElementById("courseName").value).toUpperCase();
    if (courseName.length <= 0) {
        alert("Error: Invalid Course Name")
        return;
    }

    let ol = document.getElementById('courselist');
    let node = ol.firstChild.nextSibling;
    while (node) {
        if (node.textContent == courseName)
        {
            alert(`Error: Course ${courseName} is already registered!`)
            return;
        }
        node = node.nextSibling;
    }

    let todolist = document.getElementById("courselist");
    let newNode = document.createElement('li');
    let recycleBinImage = document.createElement('input');
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox"
    checkBox.value = courseName
    checkBox.id = courseName
    newNode.id = courseName+"id"
    checkBox.onclick = function () { addCourseInStudentList(courseName) };
    recycleBinImage.type = "image"
    recycleBinImage.src = ".././resources/recycle-bin.png";
    recycleBinImage.height = 20;
    recycleBinImage.width = 20;
    recycleBinImage.onclick = function () { deleteCourseElement(newNode) };
    newNode.appendChild(checkBox)
    newNode.appendChild(document.createTextNode(courseName));
    newNode.appendChild(recycleBinImage)

    todolist.appendChild(newNode);
}

function addCourseInStudentList (courseName) {
    let studentName = null;
    let ol = document.getElementById('studentlist');
    let li = [];
    let node = ol.firstChild.nextSibling;
    while (node) {
        if (node.tagName === 'LI') {
            if (node.firstChild.checked)
            {
                studentName = node.textContent
            }
            li.push(node);
        }
        node = node.nextSibling;
    }

    let isChecked = document.getElementById(courseName).checked;
    if (isChecked && studentName != null)
    {
        let studentCourseList = studentsList[studentName]
        studentCourseList.add(courseName)
    }
    else if (studentName != null)
    {
        studentsList[studentName].delete(courseName)
    }
}

function deleteCourseElement(newNode) {
    let courseName = newNode.textContent
    let todolist = document.getElementById("courselist");
    todolist.removeChild(newNode)
    for (const [key, value] of Object.entries(studentsList)) {
        value.delete(courseName)
    }
}

// function fun1() {
//     console.log("I am involved");
// }

// fun1();

let great = function(name) {
    return `Welcome ${name}`;
}

function displayDuplicate(array){
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     for (let index2 = 0; index2 < array.length; index2++) {
    //         if (element == array[index2] && index != index2)
    //         {
    //             console.log(element)
    //         }
    //     }
    // }

    // newArray = array.reduce(((total,currentElement,index,array)=>(array.reduce(((total,currentElement,currentIndex)=>(currentElement == array[index] && currentIndex != index) ? total.push(currentElement) : total),[]))),[])
    // console.log(newArray)

    for (let index = 0; index < array.length; index++) {
        let newArray = (array.reduce(((total,currentElement,currentIndex)=>(currentElement == array[index] && currentIndex != index) ? console.log(currentElement) : total),[]))
        console.log(newArray)
    }
}

function arrFunc(acc, x)
{
    console.log(acc)
    console.log(x)
    console.log(typeof(acc))
    return acc.unshift(x)
}


let multiply = function (a, b) {
    return a * b
}
let add = function (a, b) {
    return a + b
}
let manipulator = function (val1, val2, func) {
    return func(val1,val2)
}

// console.log(manipulator(1,2, add))

function counter() {
    let count = 0;
    return function(){
        return count++;
    }
}

let increment = counter()

function mul(...val) {
    return val.reduce(((acc,value)=>acc*value), 1)
}
// Function Generators