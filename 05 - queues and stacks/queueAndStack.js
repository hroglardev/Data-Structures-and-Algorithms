class Queue {
  #nodes
  constructor() {
    this.#nodes = []
  }

  enqueue(data) {
    this.#nodes.push(data)
  }

  dequeue() {
    return this.#nodes.shift()
  }

  getNode(index) {
    return this.#nodes[index]
  }
}

const myQueue = new Queue()

myQueue.nodes.pop()

class Stack {
  #nodes
  constructor() {
    this.#nodes = []
  }

  push(node) {
    this.#nodes.unshift(node)
  }
  pop() {
    return this.#nodes.shift()
  }
}
