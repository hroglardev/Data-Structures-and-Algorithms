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

  getCapacity() {
    let counter = 0
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined && this.table[i].head !== null) {
        counter++
      }
    }
    return (counter * 100) / this.size / 100
  }

  growTable() {
    const oldTable = this.table
    this.size *= 2
    this.table = new Array(this.size)
    for (let i = 0; i < oldTable.length; i++) {
      const oldBucket = oldTable[i]
      if (oldBucket !== undefined && oldBucket.head !== null) {
        let current = oldBucket.head
        while (current !== null) {
          const newHash = this.hash(current.key)
          if (this.table[newHash] === undefined) {
            this.table[newHash] = new LinkedList()
          }
          this.table[newHash].append(current.key, current.value)
          current = current.next
        }
      }
    }
  }

  set(key, value) {
    const currentCapacity = this.getCapacity()
    if (currentCapacity > this.loadFactor) {
      this.growTable()
    }

    const hashedKey = this.hash(key)
    let bucket = this.table[hashedKey]
    if (bucket === undefined) {
      bucket = new LinkedList()
      bucket.append(key, value)
      this.table[hashedKey] = bucket
      return
    } else {
      const node = bucket.find(key)
      if (node === null) {
        bucket.append(key, value)
        return
      } else {
        node.value = value
        return
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
}
