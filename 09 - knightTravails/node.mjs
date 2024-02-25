export class Node {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.isVisited = false
    this.connections = []
  }
  addConnection(connection) {
    this.connections.push(connection)
  }
  setVisited() {
    this.isVisited = true
  }

  removeVisited() {
    this.isVisited = false
  }
}
