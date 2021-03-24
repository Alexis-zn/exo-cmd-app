const readlineSync = require('readline-sync')
const chalk = require('chalk')

let count = 0

let question1 = ['Langage', 'Compilateur']
  let index1 = readlineSync.keyInSelect(question1, 'Question 1: Le C++ est un:')
  switch (index1) {
    case 0:
      count++
      break
    case 1:
      break
    default:
      console.log(chalk.red('Please select between réponse 1 or réponse 2'))
  }

  let question2 = ['Vrai', 'Faux']
  let index2 = readlineSync.keyInSelect(question2, 'TypeScript est une évolution de Javascript:')
  switch (index2) {
    case 0:
      count++
      break
    case 1:
      break
    default:
      console.log(chalk.red('Please select between réponse 1 or réponse 2'))
  }

  let question3 = ['Vrai', 'Faux']
  let index3 = readlineSync.keyInSelect(question3, 'Lire les cours avant de faire les exercices est inutile:')
  switch (index3) {
    case 0:
      break
    case 1:
      count++
      break
    default:
      console.log(chalk.red('Please select between réponse 1 or réponse 2'))
  }

  let question4 = ['Vrai', 'Faux']
  let index4 = readlineSync.keyInSelect(question4, 'react.js a été developpé par Google:')
  switch (index4) {
    case 0:
      break
    case 1:
      count++
      break
    default:
      console.log(chalk.red('Please select between réponse 1 or réponse 2'))
  }

  let question5 = ['Vrai', 'Faux']
  let index5 = readlineSync.keyInSelect(question5, 'Ethereum est une blockchain publique:')
  switch (index5) {
    case 0:
      count++
      break
    case 1:
      break
    default:
      console.log(chalk.red('Please select between réponse 1 or réponse 2'))
  }

console.log(chalk.green(`Vous avez ${count} points sur 5!`))