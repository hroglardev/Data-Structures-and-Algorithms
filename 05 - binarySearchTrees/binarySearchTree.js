class Queue {
  #nodes
  constructor() {
    this.#nodes = []
  }

  enqueue(node) {
    this.#nodes.push(node)
  }

  dequeue() {
    return this.#nodes.shift()
  }

  size() {
    return this.#nodes.length
  }

  peek() {
    return this.#nodes[0]
  }
}

class BinarySearchTree {
  constructor(rootValue) {
    this.root = rootValue
    this.left = null
    this.right = null
  }

  insert(value) {
    if (value < this.root) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(value)
      } else {
        this.right.insert(value)
      }
    }
  }

  lookValueDepthFirst(value) {
    if (this.root === null) {
      return null
    }
    if (value === this.root) {
      return this
    } else if (value < this.root) {
      return this.left.lookValueDepthFirst(value)
    } else {
      return this.right.lookValueDepthFirst(value)
    }
  }

  lookValueBreadthFirst(value) {
    const queue = new Queue(this)
    while (queue.size() > 0) {
      const currentNode = queue.dequeue()

      if (currentNode.root === value) {
        return currentNode
      }

      if (currentNode.left !== null) {
        queue.enqueue(currentNode.left)
      }

      if (currentNode.right !== null) {
        queue.enqueue(currentNode.right)
      }
    }

    return null
  }
}
