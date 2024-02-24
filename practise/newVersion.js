let array = [8, 8, 5, 4, 3, 2, 1, 9, 8, 2, 5]
let sortAndRemoveDuplicates = [...new Set(array.sort((a, b) => a - b))]
let sorted = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]

class Tree {
  constructor(array) {
    this.sortAndRemoveDuplicates = [...new Set(array.sort((a, b) => a - b))]
    this.root = this.buildTree(this.sortAndRemoveDuplicates, 0, this.sortAndRemoveDuplicates.length - 1)
  }

  buildTree(array, start, end) {
    if (start > end) {
      return null
    }

    const middleIndex = Math.floor((start + end) / 2)
    const root = new Node(array[middleIndex])

    root.left = this.buildTree(array, start, middleIndex - 1)
    root.right = this.buildTree(array, middleIndex + 1, end)

    return root
  }

  insert(value, root = this.root) {
    if (value === root.value) {
      return
    }

    if (value < root.value) {
      if (root.left === null) {
        root.left = new Node(value)
      } else {
        this.insert(value, root.left)
      }
    } else {
      if (root.right === null) {
        root.right = new Node(value)
      } else {
        this.insert(value, root.right)
      }
    }
  }

  delete(value, root = this.root) {
    if (root === null) {
      return root
    }
    if (value < root.value) {
      root.left = this.delete(value, root.left)
    } else if (value > root.value) {
      root.right = this.delete(value, root.right)
    } else {
      if (root.left === null) return root.right
      else if (root.right === null) return root.left

      let min = this.findMin(root.right)
      root.value = min.value
      root.right = this.delete(min.value, root.right)
    }
    return root
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left
    }
    return node
  }

  find(value, root = this.root) {
    if (root === null) {
      return null
    }
    if (root.value === value) {
      return root
    }

    if (value < root.value) {
      return this.find(value, root.left)
    } else {
      return this.find(value, root.right)
    }
  }

  levelOrder(callback) {
    const myQueue = new Queue()
    myQueue.enqueue(this.root)

    const arr = []
    while (myQueue.size() > 0) {
      const currentNode = myQueue.dequeue()
      if (callback === undefined) {
        arr.push(currentNode.value)
        if (currentNode.left !== null) {
          myQueue.enqueue(currentNode.left)
        }
        if (currentNode.right !== null) {
          myQueue.enqueue(currentNode.right)
        }
      } else {
        callback(currentNode)
        if (currentNode.left !== null) {
          myQueue.enqueue(currentNode.left)
        }
        if (currentNode.right !== null) {
          myQueue.enqueue(currentNode.right)
        }
      }
    }
    return arr
  }

  inOrder(callback, root = this.root, arr = []) {
    if (this.root === null) {
      return arr
    }
    if (callback === undefined) {
      if (root === null) {
        return
      }

      if (root.left !== null) {
        this.inOrder(...[,], root.left, arr)
      }
      arr.push(root.value)
      if (root.right !== null) {
        this.inOrder(...[,], root.right, arr)
      }
      console.log(arr)
      return arr
    } else {
      if (root.left !== null) {
        this.inOrder(callback, root.left, ...[,])
      }
      callback(root)
      if (root.right !== null) {
        this.inOrder(callback, root.right, ...[,])
      }
      return
    }
  }
  preOrder(callback) {}
  postOrder(callback) {}
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Queue {
  nodes
  constructor() {
    this.nodes = []
  }

  enqueue(node) {
    this.nodes.push(node)
  }

  dequeue() {
    return this.nodes.shift()
  }

  size() {
    return this.nodes.length
  }

  peek() {
    return this.nodes[0]
  }

  isEmpty() {
    return this.nodes.length === 0
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`)
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
  }
}

const myTree = new Tree([12, 5, 3, 1, 7, 9, 15, 13, 17, 19])
myTree.insert(6)
myTree.insert(18)
myTree.insert(19)
myTree.delete(7)
myTree.find(3)
prettyPrint(myTree.root)

const printNode = (node) => {
  console.log(node.value)
}

myTree.inOrder(printNode)
