// function sayHelloTo(name) {
//   const message = 'Hello, ' + name

//   return function() {
//     console.log(message)
//   }
// }

// const helloToSofia = sayHelloTo('Sofia')
// const helloToMax = sayHelloTo('Max')

// helloToSofia()
// helloToMax()

function createFrameworkManager() {
  const fwArr = ['Angular', 'React']

  return {
    print: () => {
      console.log(fwArr.join(' '))
    },
    add:(framework) => {
      fwArr.push(framework)
    }
  }
}

 const manager = createFrameworkManager()
 console.log(manager) // { print: [Function: print], add: [Function: add] }
manager.print() // Angular React
 manager.add('VueJS') 
 manager.print() //Angular React VueJS

// setTimeout

const fib = [1, 2, 3, 5, 8, 13];

// старый способ с var в цикле, вызываем функцию сама себя
// for (var i = 0; i < fib.length; i++) {
//   (function(j) {
//     setTimeout(function () {
//       console.log(`fib[${j}] = ${fib[j]}`)
//     }, 1500)
//   })(i)
// }
// c let проще:
for (let i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500);
}

/* 
fib[0] = 1;
fib[1] = 2;
fib[2] = 3;
fib[3] = 5;
fib[4] = 8;
fib[5] = 13;
*/
