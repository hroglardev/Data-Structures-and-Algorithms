const binarySearch = (number, array, start = 0, end = array.length - 1) => {
  if (start > end) {
    return -1
  }
  const middle = Math.floor((start + end) / 2)

  if (number === array[middle]) {
    return middle
  }

  if (number < array[middle]) {
    return binarySearch(number, array, start, middle - 1)
  }

  if (number > array[middle]) {
    return binarySearch(number, array, middle + 1, end)
  }
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = binarySearch(9, sortedArray)
console.log(result)
