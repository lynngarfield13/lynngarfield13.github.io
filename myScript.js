

// console.log("Hello World!");
// alert("Hello Class!");

var age = 25;
var grade = 96;

// age = age + 1;
// age += 1;
age++;
age--;

console.log(age);

var evenNumber = 0;
evenNumber += 2;
console.log(evenNumber);
evenNumber += 2;
console.log(evenNumber);
evenNumber -= 2;
console.log(evenNumber);

var grade = 0;
grade += 95;
grade = (grade + 85) / 2;
console.log(grade);

var name;
var account = 100;
account = 5 * 2.5;
console.log("Account = " + account);

var greeting = "Hello"
greeting = 5;

account = "Hello";
console.log(account);
account += 5
console.log(account);
account = 5;
account += 5;
console.log(account);

var professorLewisIsAwesome = true;


// professorLewisIsAwesome = false;
// professorLewisIsAwesome = 10;
// professorLewisIsAwesome = "probably";


if (professorLewisIsAwesome) {
    grade = 95;
} else {
    grade = 70;
}

if (5==5) {
    test = "The condition is true"
}
console.log(test);

if (grade > 90 ) {
    grade = "A"
}


function sayGoodbye() {

    document.getElementById("page-header").innerHTML = "Goodbye Class";
    document.getElementById("welcome-paragraph").innerHTML = grade;

}


function colorBlue() {
    document.body.style.backgroundColor = "blue";
}

function colorRed() {
    document.body.style.backgroundColor = "red";
}


document.getElementById("done-button").onclick = sayGoodbye;


// --------------------------------------------------------------

var imageNumber = 1;

var timer = setInterval(switchImage, 2000);

function switchImage() {
    imageNumber += 1;
    if (imageNumber > 5) {
        imageNumber = 1;
    }

    document.getElementById("my-fall-pics").src = "./img/" + imageNumber + ".jpg";
}

document.getElementById("image-button").onclick = switchImage;


