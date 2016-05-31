// function getTempCallback (location, callback) {
//   callback(undefined, 78)
//   callback('City not found')
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err)
//   } else {
//     console.log('success', temp)
//   }
// })

// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79)
//       reject('City not found')
//     }, 1000)
//   })
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp)
// }, function (err) {
//   console.log('promise error', err)
// })

// Challenge area

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var result
      if ( typeof a === 'number' && typeof b === 'number' ) {
        result = a + b
        resolve(result)
      } else {
        reject('Not a valid use of function')
      }
    }, 1000)

  })
}

addPromise(5, 'four').then(function (result) {
  console.log('Yes, numbers. Here is the sum', result)
}, function (err) {
  console.log('Sum error', err)
})
