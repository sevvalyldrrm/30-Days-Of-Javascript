// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

/*
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
*/


const array = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
//console.log(array)


const webTech = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies
  
  console.log(webTech)        // all the array items
  console.log(webTech.length) // => to know the size of the array, which is 7
  console.log(webTech[0])     //  -> HTML
  console.log(webTech[6])     //  -> MongoDB




// indexOf
// To check if an item exist in an array. If it exists it returns the index else it returns -1.
const number = [1, 2, 3, 4, 5]

console.log(number.indexOf(5)) // -> 4
console.log(number.indexOf(0)) // -> -1
console.log(number.indexOf(1)) // -> 0
console.log(number.indexOf(6)) // -> -1


// lastIndexOf
// It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const number1 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(number1.lastIndexOf(2)) // 7
console.log(number1.lastIndexOf(0)) // -1


//includes
//To check if an item exist in an array. If it exist it returns the true else it returns false.

const number2 = [1, 2, 3, 4, 5]

console.log(number2.includes(5)) // true
console.log(number2.includes(0)) // false
console.log(number2.includes(1)) // true
console.log(number2.includes(6)) // false


//Array.isArray
//To check if the data type is an array
const isArray = [1, 2, 3, 4, 5]
console.log(Array.isArray(isArray)) // true

const _isArray = 100
console.log(Array.isArray(_isArray)) // false


//toString
//Converts array to string

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

//join
//It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. 

/*
console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook
*/

//slice

const number3 = [1,2,3,4,5]

console.log(number3.slice()) // -> it copies all  item
console.log(number3.slice(0)) // -> it copies all  item
console.log(number3.slice(0, number3.length)) // it copies all  item
console.log(number3.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position


//splice
//It takes three parameters:Starting position, number of times to be removed and number of items to be added.

const number4 = [1, 2, 3, 4, 5]
number4.splice()
console.log(number4)                // -> remove all items


//push
// adding item in the end. To add item to the end of an existing array we use the push method.

const arrPush  = ['item1', 'item2','item3']
arrPush.push('new item')
console.log(arrPush)
// ['item1', 'item2','item3','new item']


//pop
//Removing item in the end.

const numberPop = [1, 2, 3, 4, 5]
numberPop.pop() // -> remove one item from the end
//console.log(numberPop) // -> [1,2,3,4]


//shift 
//Removing one array element in the beginning of the array.

numberPop.shift() // -> remove one item from the beginning
//console.log(numberPop) // -> [2,3,4,5]


