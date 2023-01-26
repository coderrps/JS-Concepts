let cars = []
cars[0] ="Saab"
cars[1] = "Volvo"
cars[2] = "BMW"
cars[3] = false
cars[4] = 4
const fruits = ["Banana", "Orange", "Mango", "Apple"]

//Using the keyword
let Cars = new Array("Saab", "Volvo", "BMW")
//Access the Array
let car = cars[0]

//changing the value of the Array
cars[0] = "Benz"
//console.log.apply(cars)

//Lenth
let length = fruits.length
//Access the last element of the array
console.log(fruits)
console.log(fruits[fruits.length - 1])
console.log(length)

let sortedArray = cars.sort()
//console.log(sortedArray)

let fruit = fruits.pop()

console.log(fruit)
console.log(fruits)

fruits.push("Watermelon")
console.log(fruits)

// shift
let shiftedFruit = fruits.shift()
console.log(fruits)
console.log(shiftedFruit)

//unshift
fruits.unshift("Strawberry")
console.log(fruits)


//concat()
let vegetables = ["Potato", "Tomato", "Carrot"]
let seeds = ["Pumpkin", "Watermelon", "Sunflower", "Flax", "Chia"]
//let newArray = vegetables.concat(fruits, seeds, "Onion")
let newArray = [...vegetables,...fruits,...seeds, "Onion"]

console.log(newArray)

//splice(start, deleteCount,...items) used to add new items to the array

fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits)

//slice(start, elementsToRemoveCount)
//will not remice any elements from the array will return an array
let slicedFruits = fruits.slice(1) // it will start from 1 to all the elements
console.log(slicedFruits)

let SlicedFruits = fruits.slice(1, 3) //it will start from 1 to 3
console.log(SlicedFruits)

let fruitString = fruits.toString()
console.log(fruitString)

