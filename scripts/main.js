var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

var myVariable;
myVariable = 'Bob';


//Conditional
var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('Yay, I love chocolate ice cream!');
// }   else {
//     alert('Aww, but chocolate is my favorite...')
// };

//Function
var myVariable = document.querySelector('h1');
//alert('Hello!');

//
// function multiply(num1, num2) {
//   var result = num1 * num2;
//   return result;
// }

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
//
// document.querySelector('html').onclick = function(){
//   alert('Ouch!');
// }
//
// var myHTML = document.querySelector('html');
// myHTML.onclick= function() {};

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc =  myImage.getAttribute('src');
  if(mySrc === 'images/firefox.jpg') {
    myImage.setAttribute('src', 'images/howler.jpg');
  } else {
    myImage.setAttribute ('src', 'images/firefox.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}
