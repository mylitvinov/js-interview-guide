// Let
// let a = 'Variable a'
// let b = 'Variable b'
// {
//   a = 'New Variable A'
//   let b = 'Local Variable B'
//   console.log('Scope A', a) //Scope A New Variable A
//   console.log('Scope B', b) // Local Variable B
//   // console.log('Scope C', c)
//   // let c = 'Something'
// }
// console.log('A:', a) // New Variable A
// console.log('B:', b) // Variable b

// Const
const PORT = 8080
const array = ['Javascript', 'is', 'Awesome']
array.push('!')
array[0] = 'JS'
console.log(array)

const obj = {}
obj.name = 'Max'
obj.age = 33

console.log(obj)

delete obj.name

console.log(obj)

