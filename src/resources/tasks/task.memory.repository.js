const taskItems = [
  {
    id: '1',
    title: 'Task1',
    order: 'order1',
    description: 'description1',
    userId: 'userId1',
    boardId: 'boardId1',
    columnId: 'columnId1'
  },
  {
    id: '2',
    title: 'Task2',
    order: 'order2',
    description: 'description2',
    userId: 'userId2',
    boardId: 'boardId2',
    columnId: 'columnId2'
  },
  {
    id: '3',
    title: 'Task3',
    order: 'order3',
    description: 'description3',
    userId: 'userId3',
    boardId: 'boardId3',
    columnId: 'columnId3'
  }
];

const getAll = async boardId => {
  // TODO: mock implementation. should be replaced during task development
  return taskItems.filter(item => item.boardId === boardId);
  // return taskItems;
};

module.exports = { getAll };
