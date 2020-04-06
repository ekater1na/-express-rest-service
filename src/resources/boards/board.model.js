const uuid = require('uuid');

class Board {
  constructor({
    id = uuid(),
    title = 'BOARD',
    order = 'board',
    description = 'description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(board) {
    const { id, title, order } = board;
    return { id, title, order };
  }
}

module.exports = Board;
