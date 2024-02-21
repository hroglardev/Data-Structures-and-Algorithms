const fibonacciIterative = (number) => {
  if (number <= 0) return "Can't be 0 or negative"

  let array = []

  for (let i = 0; i < number; i++) {
    if (i === 0 || i === 1) {
      array.push(i)
    } else {
      const next = array[i - 1] + array[i - 2]
      array.push(next)
    }
  }

  return array
}

const fibonacciRecursive = (number) => {
  if (number <= 0) return "Number can't be 0 or negative"
  if (number === 1) return [0]
  if (number === 2) return [0, 1]

  const fibArray = fibonacciRecursive(number - 1)
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])

  return fibArray
}
