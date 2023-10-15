// IF
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} //  3 is a positive number


// IF-ELSE

let number = 3
if (number > 0) {
  console.log(`${number} is a positive number`)
} else {
  console.log(`${number} is a negative number`)
} //  3 is a positive number


// IF - ELSE IF - ELSE
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
} // 0 is not a number


//SWITCH
//Switch is an alternative for if else if else else. 

let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
} // It might be cold, you need a jacket.