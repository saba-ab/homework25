// 1
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// 2
let i = 0;
while (i < 50) {
  console.log(i);
  i++;
}

// 3
let animalsArray = ["rabbit", "crocodile", "tiger", "snake", "bear"];
console.log(animalsArray);
animalsArray.pop();
console.log(animalsArray);
animalsArray.shift();
console.log(animalsArray);
animalsArray.push("giraffe");
console.log(animalsArray);
animalsArray.unshift("wolf");
console.log(animalsArray);

// 4

let doubledNumbers = [];
let number = 0;
while (number < 10000) {
  number++;
  let doubledNumber = number * number;
  doubledNumbers.push(doubledNumber);
}
console.log(doubledNumbers);

// 5

let oddNumbers = [1, 3, 5, 7, 9];
let sum = 0;
for (i = 0; i < oddNumbers.length; i++) {
  sum += oddNumbers[i];
}
console.log(sum);

// 6

function isOdd(number) {
  if (number % 2 === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isOdd(2123);

// 7

function upperToLowercase(string) {
  let lowerCaseString = string.toLowerCase();
  console.log(lowerCaseString);
}
upperToLowercase("TRANSFORM THIS TEXT TO LOWERCASE");

// 8

let unFilteredNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
function filterNumbers(number) {
  let evenNumbers = number.filter((number) => number % 2 === 0);
  console.log(evenNumbers);
}
filterNumbers(unFilteredNumbers);
