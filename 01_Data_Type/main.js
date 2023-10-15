//non-primitive data types

let nums = [1,2,3];
nums[0] = 10;

console.log(nums); //[10, 2 ,3]

// Even if two non-primitive data types have the same properties and values, they are not strictly equal.
let nmbrs = [1 , 2 , 3];
let numbers = [1, 2 ,3];

console.log(nmbrs == numbers); //false


//Two objects are only strictly equal if they refer to the same underlying object.
let nmbrs1 = [1, 2, 3];
let numbers1 = nmbrs1;

console.log(nmbrs1 == numbers1); //true


//declaring number data types

let age = 35;
const gravity = 9.81;
let mass= 72;
const PI = 3.14

console.log(age, gravity, mass, PI)


//math object

console.log(Math.round(PI)); // 3 to round values to the nearest number
console.log(Math.floor(PI)); // 3 rounding down
console.log(Math.ceil(PI)); // 4 rounding up
console.log(Math.min(-5,3,20,4,5,10)); //-5, returns the min value
console.log(Math.max(-5,3,20,4,5,10)); //20, returns the max value

const randNum = Math.random() //random number between 0 to 0.999999
console.log(randNum);

//absolute value
console.log(Math.abs(-10)); //10

//square root
console.log(Math.sqrt(100)); //10

//power
console.log(Math.pow(3,2)); //9


//strings
let space = ' ' //an empty space string
let firstName = 'Sevval'
let lastName = 'Yildirim'
let country = ' Turkey'

let fullName = firstName + space + lastName;
console.log(fullName); //Sevval Yildirim


//escape sequences in strings 


/*
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
*/



//template literals

let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // inject the data dynamically



//string methods

let js = 'Javascript'
let str = 'Finland'
console.log(js.length)   //10

console.log(js.toUpperCase()) //JAVASCRIPT
console.log(js.toLowerCase()) //javascript

console.log(js.substring(4,6))   //sc
console.log(str.substring(4,6))  //an

let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]


let love = 'love'
console.log(love.repeat(10)) // lovelovelovelovelovelovelovelovelovelove





