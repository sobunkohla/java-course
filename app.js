let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);


let bool =  !false ;
console.log(bool)

let subscribed = false;
let loggedIn = true
if (subscribed === true) {
    console.log('show the video');
}
else if (loggedIn === true) {
 console.log( 'tell the user to upgrade ')
}
else {
    console.log ('tell user to log into an account');
}


let cash = 50
let price = 60
let difference = cash - price;
if (cash > price) {
    console.log(`you payed extra money here's your ${difference} dollar change`)
}
else if (cash === price) {
    console.log("you payed the exact amount have a nice day")
}
else  {
 console.log(`not enough money-  you still owe ${difference * -1} dollars`);
}

let cash2 = 50;
let price2 = 40;
let isStoreOpen = false;

if ( cash2 >= price2 && !isStoreOpen) {
 console.log('print recipt')
}

let val = ""
 
if (val) {
    console.log(val);
} else {
    console.log(!!val);
}

let fire = true;

fire ? console.log('hot') : console.log('cold');

let subscribe = false ;
let loggIn = true ;

let str = subscribe && loggIn ? "show video" : "hide video";
console.log(str);

let cash3 = 50;
let price3 = 40;
let openStore = false;

let recipt = cash3 >= price3 && openStore ? "Give recipt" : "Don't give recipt";
console.log(recipt);

// let count = 1
// // while (count <= 100) {
// //     console.log(count);
// //     count ++;
    
// // }

for (let i = 1; i <=100; i++ ) {
    console.log(i)
}

for (let i = 1; i<= 20; i++) {
    
    if (i % 3 ===0 && i %5 ===0 ) {
        console.log(`${i} -> frontend simplified`)
     }
   else if (i % 3 ===0) {
        console.log(`${i} -> frontend`)
    }
    else if (i %5 ===0) {
        console.log(`${i} -> Simplified`)
    }
    else if (i % 3 !==0 || i %5 !==0) {
        console.log(`${i} -> ${i}`)
    }


    
}

const frontEnd = "Frontend Simplified";

for(let i = 0; i < frontEnd.length; i++) {
   console.log(`${i} -> ${frontEnd[i]}`);
}
//function definition
function welcomePersonToFES(name, lastName) {
    console.log(`Welcome to FES, ${name} ${lastName}`);
}
//function calling 
welcomePersonToFES("sobza","Nkohla");

function sumOfTwoNumbers(firstNum, secondNum) {
    return firstNum / secondNum
    
}

console.log(sumOfTwoNumbers(10, 10))

//convert celsius to fahrenheit
//first Way of calling a function
function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32
}
console.log(convertCelsiusToFahrenheit(30))

//second way of calling a function 
const convertCelToFah = (celsius) => {
   return celsius * 1.8 + 32
}

console.log(convertCelToFah(30))
