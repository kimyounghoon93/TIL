// 반복 1 - while 문
let i = 0
while (i < 10) {
    console.log(i)
    i++
}

// 반복 2 - for 문
// let j=0; << 반복문 돌기 전에 시행되는 코드 한 줄,
// j < 10; << 조건문
// j++ 탈출을 위한 동작 조건문

for (let j=0; j < 10; j++) {
    console.log(j)
}

// 반복 3 - for of
for (let number of [1,2,3,4,5]) { // const로도 선언 가능 리스트 안에 하나씩 꺼내와서 반복 돌림
    console.log(number)
}

// Array (배열)
const numbers = [1,2,3,4]

console.log(numbers[0])
console.log(numbers[-1])
console.log(numbers[-1])

// Object 처음 시작 할 때 중괄호 닫지 말고 컨트롤 앤터
// ********* 한 번 지정하면 바꿀 수 없음! ************
// const me = {
//     name: 'young',
//     'phone number': '01012345678',
//     appleProducts: {
//         ipad: true,
//         iphone: 'x'
//     }
// }
// me['name'],
// me.name
// me.appleProducts
// me.appleProducts.ipad
// me.appleProducts.iphone

// JSON - JavaScript Object Notation (JS 객체 표기법)
// JSON.stringify() // Object -> JSON String
// JSON.parse() // JSON -> Object

// > jsonData
// '{}'
// > typeof jsonData
// 'string'
// const parseData = JSON.parse(jsonData)
// parseData

// 함수를 정의하는 function < 옛날 방식
// 방법.1 - 선언식
function add(num1, num2) {
    return num1 + num2
}
console.log('add: ' + add(1, 2))

// 방법.2 - 표현식
const sub = function (num1, num2) {
    return num1 - num2
}
console.log('sub: ' + sub(5, 3))

typeof add // function
typeof sub // function

// 옛날 버전을 현대로
// const mul = function (num1, num2) {
//     return num1 * num2
// }
// Arrow Function < 현대 방식
// Arrow
const mul = (num1, num2) => {
    return num1 * num2
}
// 한줄 작성
let square = (num) => {
    return num ** 2
}
// return과 중괄호, let을 생략할 수 있다
square = (num) => num ** 2 
// ()안의 인자가 하나 뿐이면 ()도 생략 가능
square = num => num ** 2
// 인자가 없을 때는 괄호를 넣어서 사용해야함
let noArgs = () => 'No args'

// Object를 return한다면? 괄호가 없으면 {}를 함수의 {}로 인식하기 때문에 ()가 필요!
let returnObject = () => { return {key:'value'}}
let returnObject = () => ({key:'value'})


// 함수의 기본 인자
const sayHello = (name='noName') => `hi ${name}`
sayHello('john')
sayHello()

// 함수의 이름이 정의 되지 않은 '익명 함수'
function (num) { return num ** 3 } // 세제곱
(num) => { return num ** 0.5 } // 제곱근

// 익명 함수 즉시 호출
(function (num) { return num ** 3})(3) // (함수)(값)

