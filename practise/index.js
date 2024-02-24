let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let sortAndRemoveDuplicates = [...new Set(array.sort((a, b) => a - b))]
let sorted = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
let firstLeft = [1, 3, 4, 5, 7]
let firstRight = [9, 23, 67, 324, 6345]

let firstrightFirstLeft = [9, 23]
let firstrightFirstRight = [324, 6345]

/*
                                         8
                                       /   \
                                     4      67
                                   /  \    /  \
                                 1     5  9    324  
                                  \     \  \     \
                                   3     7  23   6345 
                                                
                                                 
                                                  
                                                  
*/

class Tree {
  constructor(array) {
    this.sortAndRemoveDuplicates = [...new Set(array.sort((a, b) => a - b))]
    this.root = sortAndRemoveDuplicates[Math.floor(sortAndRemoveDuplicates.length / 2)]
    this.left = null
    this.right = null
  }

  buildTree(array) {
    if (array.length === 0) return null
    const middle = Math.floor(array.length / 2)
    const newNode = new Tree(array[middle])
  }
}

console.log(sortAndRemoveDuplicates)
