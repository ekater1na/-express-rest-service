const uuid = require('uuid');

const boardItems = [
  {
    id: '1',
    title: 'Project1',
    columns: [
      {
        id: '1',
        title: 'plan',
        order: '1'
      },
      {
        id: '2',
        title: 'dev',
        order: '2'
      },
      {
        id: '3',
        title: 'test',
        order: '3'
      },
      {
        id: '4',
        title: 'done',
        order: '4'
      }
    ]
  },
  {
    id: '2',
    title: 'Project2',
    columns: [
      {
        id: '1',
        title: 'plan',
        order: '1'
      },
      {
        id: '2',
        title: 'dev',
        order: '2'
      },
      {
        id: '3',
        title: 'test',
        order: '3'
      },
      {
        id: '4',
        title: 'done',
        order: '4'
      }
    ]
  }
];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return boardItems;
};

const getBoard = async id => {
  const board = boardItems.find(element => element.id === id);
  if (!board) {
    return;
  }
  return board;
};

const postBoard = async board => {
  if (!board.title || !board.columns) {
    return;
  }
  board.id = uuid();
  boardItems.push(board);
  return board;
};

const putBoard = async (id, board) => {
  if (!board.title || !board.columns) {
    return;
  }
  const index = boardItems.findIndex(element => element.id === id);
  boardItems[index] = board;
  return boardItems[index];
};

module.exports = { getAll, getBoard, postBoard, putBoard };
