// Iterated function with 2 parameters: sign and number.
const pyramid = (nb, sign) => {
  for (let i = 1; i <= nb; i += 1) {
    console.log(sign.repeat(i))
  }
}
// check if there is the correct number of arguments. 
if (process.argv.length !== 4) {
  console.log('Incorrect number of arguments')
  process.exit(1)
}
// check if the thrid argument is a number or not.
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

const nb = Number(process.argv[2])
const sign = (process.argv[3])

pyramid(nb, sign)