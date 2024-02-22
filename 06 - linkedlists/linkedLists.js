class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value)
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = new Node(value)
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value)
    } else {
      let newNode = new Node(value)
      newNode.next = this.head
      this.head = newNode
    }
  }

  size() {
    let counter = 0
    if (this.head === null) {
      return counter
    } else {
      let current = this.head
      while (current !== null) {
        current = current.next
        counter++
      }
      return counter
    }
  }

  getHead() {
    return this.head
  }

  getTail() {
    let last = this.head
    while (last.next !== null) {
      last = last.next
    }
    return last
  }

  at(index) {
    let current = this.head
    if (index < 0) {
      return 'index must be positive'
    }

    if (current === null) {
      return 'list is empty'
    }

    let counter = 0
    while (current !== null) {
      if (counter === index) {
        return current
      } else {
        counter++
        current = current.next
      }
    }

    return 'Not a valid index'
  }

  pop() {
    let current = this.head
    if (current === null) {
      return 'list is empty'
    }

    if (current.next === null) {
      this.head = null
      return
    }

    let previous = null

    while (current.next !== null) {
      previous = current
      current = current.next
    }

    previous.next = null
  }

  contains(value) {
    let current = this.head
    if (current === null) {
      return 'List is empty'
    }

    while (current !== null) {
      if (current.value === value) {
        return true
      }
      current = current.next
    }

    return false
  }

  find(value) {
    let current = this.head
    if (current === null) {
      return 'List is empty'
    }
    let counter = 0
    while (current !== null) {
      if (current.value === value) {
        return `Element is at index ${counter}`
      } else {
        current = current.next
        counter++
      }
    }
    return 'Value not found'
  }

  toString() {
    let result = ''
    let current = this.head
    while (current !== null) {
      result += `${current.value} -> `
      current = current.next
    }

    result += 'null'
    return result
  }

  insertAt(value, index) {
    if (index === 0) {
      return this.prepend(value)
    }
    let length = this.size()

    if (index < 0 || index > length) {
      return `Index must be between 0 and ${length}`
    }

    const newNode = new Node(value)
    let previousNode = this.at(index - 1)
    newNode.next = previousNode.next
    previousNode.next = newNode
  }

  removeAt(index) {
    if (index === 0) {
      return (this.head = this.head.next)
    }

    let length = this.size()
    if (index < 0 || index > length) {
      return `Index must be between 0 and ${length}`
    }

    const previousNode = this.at(index - 1)
    previousNode.next = previousNode.next.next
  }
}
