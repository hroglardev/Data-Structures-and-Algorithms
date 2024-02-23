class HashMap {
  constructor() {
    this.table = new Array(16)
    this.size = this.table.length
    this.loadFactor = 0.8
  }

  hash(key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size
    }

    return hashCode
  }

  set(key, value) {
    const hashedKey = this.hash(key)
    let bucket = this.table[hashedKey]
    if (bucket === undefined) {
      bucket = new LinkedList()
      bucket.append(key, value)
      this.table[hashedKey] = bucket
    } else {
      const node = bucket.find(key)
      if (node === null) {
        bucket.append(key, value)
      } else {
        node.value = value
      }
    }
  }

  get(key) {
    const hashedKey = this.hash(key)
    if (key < 0 || key >= this.size) {
      return null
    }

    let bucket = this.table[hashedKey]
    if (bucket === undefined || bucket.head === null) {
      return null
    }

    let node = bucket.find(key)
    if (node === null) {
      return null
    }
    return node.value
  }

  has(key) {
    const hashedKey = this.hash(key)
    if (key < 0 || key >= this.size) {
      return false
    }

    let bucket = this.table[hashedKey]
    if (bucket === undefined || bucket.head === null) {
      return false
    }

    return bucket.contains(key)
  }

  remove(key) {
    const hashedKey = this.hash(key)
    if (key < 0 || key >= this.size) {
      return false
    }

    let bucket = this.table[hashedKey]
    if (bucket === undefined || bucket.head === null) {
      return false
    }

    if (bucket.head.key === key) {
      bucket.head = bucket.head.next
      return true
    }

    let previous = bucket.head
    let current = previous.next

    while (current !== null) {
      if (current.key === key) {
        previous.next = current.next
        return true
      }
      previous = current
      current = current.next
    }
    return false
  }

  length() {
    let counter = 0
    for (const bucket of this.table) {
      if (bucket !== undefined && bucket.head !== null) {
        counter += bucket.size()
      }
    }
    return counter
  }

  clear() {
    for (const bucket of this.table) {
      bucket.head = null
    }
  }

  keys() {
    let keysArray = []
    for (const bucket of this.table) {
      if (bucket !== undefined && bucket.head !== null) {
        let current = bucket.head
        while (current !== null) {
          keysArray.push(current.key)
          current = current.next
        }
      }
    }
    return keysArray
  }

  values() {
    let valuesArray = []
    for (const bucket of this.table) {
      if (bucket !== undefined && bucket.head !== null) {
        let current = bucket.head
        while (current !== null) {
          valuesArray.push(current.value)
          current = current.next
        }
      }
    }
    return valuesArray
  }

  entries() {
    let entriesArray = []
    for (const bucket of this.table) {
      if (bucket !== undefined && bucket.head !== null) {
        let current = bucket.head
        while (current !== null) {
          entriesArray.push([current.key, current.value])
          current = current.next
        }
      }
    }
    return entriesArray
  }
}

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(key, value) {
    if (this.head === null) {
      this.head = new Node(key, value)
      return
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = new Node(key, value)
      return
    }
  }

  prepend(key, value) {
    if (this.head === null) {
      this.head = new Node(key, value)
      return
    } else {
      let newNode = new Node(key, value)
      newNode.next = this.head
      this.head = newNode
      return
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
    return
  }

  contains(key) {
    let current = this.head
    if (current === null) {
      return false
    }

    while (current !== null) {
      if (current.key === key) {
        return true
      }
      current = current.next
    }

    return false
  }

  find(key) {
    let current = this.head
    if (current === null) {
      return null
    }
    while (current !== null) {
      if (current.key === key) {
        return current
      } else {
        current = current.next
      }
    }
    return null
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

  insertAt(key, value, index) {
    if (index === 0) {
      return this.prepend(key, value)
    }
    let length = this.size()

    if (index < 0 || index > length - 1) {
      return `Index must be between 0 and ${length - 1}`
    }

    if (index === length) {
      this.append(key, value)
      return
    }

    const newNode = new Node(key, value)
    let previousNode = this.at(index - 1)
    newNode.next = previousNode.next
    previousNode.next = newNode
    return
  }

  removeAt(index) {
    if (index === 0) {
      return (this.head = this.head.next)
    }

    let length = this.size()
    if (index < 0 || index > length - 1) {
      return `Index must be between 0 and ${length - 1}`
    }

    if (index === length - 1) {
      this.pop()
      return
    }

    const previousNode = this.at(index - 1)
    previousNode.next = previousNode.next.next
    return
  }
}
