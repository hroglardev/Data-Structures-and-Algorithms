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

  size() {
    return this.#nodes.length
  }

  peek() {
    return this.#nodes[0]
  }

  isEmpty() {
    return this.#nodes.length === 0
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
  size() {
    return this.#nodes.length
  }

  peek() {
    return this.#nodes[0]
  }

  isEmpty() {
    return this.#nodes.length === 0
  }
}
