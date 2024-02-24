import { Node } from './node.mjs'

class ChessBoard {
  constructor() {
    this.board = []
    this.buildChessBoard()
  }

  buildChessBoard() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const node = new Node(i, j)
        this.board.push(node)
      }
    }
    for (const node of this.board) {
      this.addKnightMoves(node)
    }
  }

  checkValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8
  }

  getNode(x, y) {
    return this.board.find((node) => node.x === x && node.y === y)
  }

  addKnightMoves(node) {
    const moves = [
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1]
    ]

    for (const [x, y] of moves) {
      const newX = node.x + x
      const newY = node.y + y

      if (this.checkValidMove(newX, newY)) {
        const connection = this.getNode(newX, newY)
        node.addConnection(connection)
      }
    }
  }
}

const myBoard = new ChessBoard()

console.log(myBoard.board)
