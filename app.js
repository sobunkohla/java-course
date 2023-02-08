let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

let bool = !false;
console.log(bool);

let subscribed = false;
let loggedIn = true;
if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell the user to upgrade ");
} else {
  console.log("tell user to log into an account");
}

let cash = 50;
let price = 60;
let difference = cash - price;
if (cash > price) {
  console.log(`you payed extra money here's your ${difference} dollar change`);
} else if (cash === price) {
  console.log("you payed the exact amount have a nice day");
} else {
  console.log(`not enough money-  you still owe ${difference * -1} dollars`);
}

let cash2 = 50;
let price2 = 40;
let isStoreOpen = false;

if (cash2 >= price2 && !isStoreOpen) {
  console.log("print recipt");
}

let val = "";

if (val) {
  console.log(val);
} else {
  console.log(!!val);
}

let fire = true;

fire ? console.log("hot") : console.log("cold");

let subscribe = false;
let loggIn = true;

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

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> frontend simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} -> frontend`);
  } else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`);
  } else if (i % 3 !== 0 || i % 5 !== 0) {
    console.log(`${i} -> ${i}`);
  }
}

const frontEnd = "Frontend Simplified";

for (let i = 0; i < frontEnd.length; i++) {
  console.log(`${i} -> ${frontEnd[i]}`);
}
//function definition
function welcomePersonToFES(name, lastName) {
  console.log(`Welcome to FES, ${name} ${lastName}`);
}
//function calling
welcomePersonToFES("sobza", "Nkohla");

function sumOfTwoNumbers(firstNum, secondNum) {
  return firstNum / secondNum;
}

console.log(sumOfTwoNumbers(10, 10));

//convert celsius to fahrenheit
//first Way of calling a function
function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
console.log(convertCelsiusToFahrenheit(30));

//second way of calling a function
const convertCelToFah = (celsius) => {
  return celsius * 1.8 + 32;
};

console.log(convertCelToFah(30));

let shoppingItemsPrice = [20, 30, 40, 50, 100];

//first item of an array

console.log(`first item -> ${shoppingItemsPrice[0]}`);

//last item of an array

console.log(
  `last item -> ${shoppingItemsPrice[shoppingItemsPrice.length - 1]}`
);

//add element onto end of  array

shoppingItemsPrice.push(200);

console.log(shoppingItemsPrice);

let newArr = shoppingItemsPrice.filter((element) => element < 50);

console.log(newArr);

let TestMarks = ["A+", "A", "FAIL"];
//long way

// let newTestMark = TestMarks.filter( (element) => {
//  return element !== "FAIL"
// })

// console.log(newTestMark)

//Short way

// let newTestMark = TestMarks.filter( element => element !== "FAIL"  )

// console.log(newTestMark)
let newTestMarks = [];
for (let i = 0; i < TestMarks.length; i++) {
  if (TestMarks[i] !== "FAIL") {
    newTestMarks.push(TestMarks[i]);
  }
}

//array.map function
console.log(newTestMarks);

let arr = [1, 16, 20, 50];

let newArray = arr.map((element) => "Dog");

console.log(newArray);

//test
//long way

// let dollars = [0,10,20,1,5,10,3]

// let cents = dollars.map ((element) => {
//     return element*100
// //})
//short way

let dollars = [0, 10, 20, 1, 5, 10, 3];

let cents = dollars.map((element) => element * 100);

console.log(cents);
//brute force solution
// let dollars2 = [0,10,20,1,5,10,3]
// let cents2 = []
// for (let i = 0 ; dollars2.length;i++) {
//     cents2.push(dollars2[i] * 100);
// }

// console.log(cents2)

let users = [
  {
    username: "sobu",
    email: "sobunkohla@gmail.com",
    password: "sobunkohla",
    subsriptionStaus: "VIP",
    discord: "sobu#0000",
    lessonsCompeted: [0, 1],
  },
  {
    username: "Mitri",
    email: "Mitrinkohla@gmail.com",
    password: "Mitrinkohla",
    subsriptionStaus: "VIP",
    discord: "Mitri#0000",
    lessonsCompeted: [0, 1],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      console.log("user exists");
      if (users[i].password === password) {
        console.log("Correct password");
      } else {
        console.log("incorrect password");
      }
      return;
    }
  }
  console.log("user not found");
}

login("sobunkohla@gmail.com", "sobunkohla");

function register(regiterObj) {
  
  users.push(regiterObj);
}

register({
  username: "Dimitri",
  email: "Dimitri@gmail.com",
  password: "Dim",
  subsriptionStaus: "VIP",
  discord: "Dim#011",
  lessonsCompeted: [0, 1, 2],
});

console.log(users);
