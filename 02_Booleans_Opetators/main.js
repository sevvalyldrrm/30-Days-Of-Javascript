let numOne = 4;
let numTwo = 3;

let sum = numOne + numTwo; //addition
let diff = numOne - numTwo; //subtraction
let mult = numOne * numTwo; //multiplication
let div = numOne / numTwo; //division
let remainder = numOne % numTwo; //modulus
let powerOf = numOne ** numTwo; //exponential

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1,64

const PI = 3.14;
let radius = 100; //length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); //  314 m

/*
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

*/

// && ampersand operator example

const check = 4 > 3 && 10 > 5; // true && true -> true
const check1 = 4 > 3 && 10 < 5; // true && false -> false
const check2 = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example

const check3 = 4 > 3 || 10 > 5; // true  || true -> true
const check4 = 4 > 3 || 10 < 5; // true  || false -> true
const check5 = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples

let check6 = 4 > 3; // true
let check7 = !(4 > 3); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true

//Increment Operator

let count = 0;
console.log(++count); // 1
console.log(count); // 1

let _count = 0;
console.log(_count++); // 0
console.log(_count); // 1

//Ternary Operators

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

isRaining = false;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");


//Window methods

//alert()
alert('Welcome to 30DaysOfJavaScript')


//prompt()
let number = prompt('Enter number', 'number goes here')
console.log(number)


//confirm()
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box


//creating a time object
const now = new Date()
console.log(now)


//getting full year

const nowYear = new Date()
console.log(nowYear.getFullYear()) // 2023

  
//getting month

const nowMonth = new Date()
console.log(nowMonth.getMonth()) //9, October, month(0-11)


//getting date

const nowDate = new Date()
console.log(nowDate.getDate()) //14, day(1-31)

