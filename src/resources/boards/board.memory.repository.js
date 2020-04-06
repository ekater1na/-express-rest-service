const boardItems = [
  {
    id: '0',
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

module.exports = { getAll };
