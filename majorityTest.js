// Ne marche pas à 100% pour le moment !

const readlineSync = require('readline-sync')

let name = readlineSync.question('Your Name: ')
let surname = readlineSync.question('Your Surname: ')
let age = readlineSync.question('Your Age: ')

age = Number(age)

// Stop the program if name length's is too short or if it's a number.
if(name.length < 2) {
  console.log('Error: incorrect format. ')
  process.exit(1)
}
// Stop the program if surname length's is too short or if it's a number.
if(surname.length < 2) {
  console.log('Error: incorrect format. ') 
  process.exit(1)
}
// Stop the program if age is not a number.
if(isNaN(age)) {
  console.log('Error: incorrect format.') 
  process.exit(1)
}
// Check if age is > or < 18.
/* if(age > 18) {
  console.log(`${name} ${surname}, vous êtes majeur, vous pouvez voter :) !`)
} else {
  console.log(`${name} ${surname}, vous êtes mineur, vous ne pouvez pas voter :( ! `)
} */
