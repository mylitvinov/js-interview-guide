console.log(sum(1, 41))

function sum(a, b) {
  return a + b
}

var i
console.log(i) // undefined
i = 42
console.log(i)

// console.log(num) // ReferenceError: Cannot access 'num' before initialization
let num = 42
console.log(num)

// Function Expression & Function Declaration


// function square(num) {
//   return num ** 2
// }

const square = function(num) {
  return num ** 2
}

console.log(square(25))
