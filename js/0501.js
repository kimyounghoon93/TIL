// Array Helper Methods

// case 1.
// ES5
// var colors = ['red', 'blue', 'green']

// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }
// node 0501.js

//ES6+ - forEach
const colors = ['red', 'blue', 'green']

colors.forEach(function(color){ // callback function
    console.log(color)
})

// case 2.
// ES5
// var numbers = [1,2,3]
// var doubleNumbers = []

// for (var i = 0; i < numbers.length; i++) {
//     doubleNumbers.push(numbers[i] * 2)
// }
// console.log(doubleNumbers)
// ES6+ - map (아이템 하나하나 순회하며 적용시킴{새로운 배열을 만들어 주는 것})
const numbers = [1,2,3]
const doubleNumbers = numbers.map(function(number){
    return number * 2
})
console.log(doubleNumbers)

// case 3.
// ES6+ - filter
const products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'carrot', type: 'vegetable'},
    {name: 'apple', type: 'fruit'},
]
const fruitProducts = products.filter(function(product){
    return product.type === 'fruit'
    /// 해당 조건이 true일 경우 item을 가져와 배열에 넣음
})

console.log(fruitProducts)

// case 4.
// ES6+ - find
const user = [
    {name: 'nwith'},
    {name: 'admin'},
    {name: 'zzuli'},
]

const foundUser = user.find(function(user){
    return user.name === 'admin'
})

console.log(foundUser)

// case 5.
// ES6+ - every & some
const computers = [
    {name: 'macbook', ram: 16},
    {name: 'gram', ram: 8},
    {name: 'series9', ram: 32},
]
// and 느낌(모두면 T 아니면 F)
const everyComputersAvailable = computers.every(function(computer){
    return computer.ram > 16
})
// or 느낌
const someComputersAvailable = computers.some(function(computer){
    return computer.ram > 16
})

console.log(everyComputersAvailable)
console.log(someComputersAvailable)