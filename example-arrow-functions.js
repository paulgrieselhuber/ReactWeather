var names = ['Francesca', 'Jane', 'Gisele']

// names.forEach(function (name) {
//   console.log('forEach: ', name)
// })
//
// names.forEach((name => {
//   console.log('arrowFunc', name)
// }))

// names.forEach((name) => console.log(name))

// var returnMe = (name) => name + '!'
// console.log(returnMe('Paul'))

var person = {
  name: 'Paul',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    })
  }
}

person.greet()

function add(a, b) {
  return a + b
}

// console.log(add(1,3))
// console.log(add(9,0))

// Arrow function as statement

var statement = (a,b) => {
  return a + b
}

console.log(statement(5,2))
console.log(statement(7,9))

// Arrow function as expression

var expression = (a,b) => a+b

console.log(expression(2,2))
console.log(expression(2,9))
