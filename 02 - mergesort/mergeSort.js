const case1 = [3, 2, 1, 13, 8, 5, 0, 1] /* [0, 1, 1, 2, 3, 5, 8, 13]*/
const case2 = [105, 79, 100, 110] /* [79, 100, 105, 110]*/

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  const leftSorted = mergeSort(left)
  const rightSorted = mergeSort(right)

  return merge(leftSorted, rightSorted)
}

const merge = (left, right) => {
  const result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)]
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))

/* 
                                                          [3, 2, 1, 13, 8, 5, 0, 1]

                                [3, 2, 1, 13]                                                [8, 5, 0, 1]                                                  

                  [3, 2]                   [1, 13]                                     [8, 5]          [0, 1]

          [3]         [2]               [1]     [13]                               [8]     [5]      [0]        [1]


                 [2, 3]                    [1, 13]
*/
