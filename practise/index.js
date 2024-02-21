const factorial = (number) => {
  if (number < 0) return "Number can't be negative"
  if (number === 0) return 1
  if (number === 1 || number === 2) return number

  return number * factorial(number - 1)
}

const loopFactorial = (number) => {
  if (number < 0) return "Number can't be negative"
  if (number === 0) return 1
  if (number === 1 || number === 2) return number
  let result = 1
  for (let i = 1; i <= number; i++) {
    result *= i
  }
  return result
}

console.log(loopFactorial(-1))
console.log(loopFactorial(0))
console.log(loopFactorial(1))
console.log(loopFactorial(2))

console.log(loopFactorial(3))

console.log(loopFactorial(4))
console.log(loopFactorial(5))
console.log(loopFactorial(6))
