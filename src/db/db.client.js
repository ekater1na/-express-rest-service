const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const connectToDb = callback => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const users = [
    new User({ name: 'user1', login: 'admin', password: 'admin' }),
    new User({ name: 'user2', login: 'login2', password: 'password2' })
  ];

  const boards = [
    new Board({
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
    }),
    new Board({
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
    })
  ];

  const tasks = [
    new Task({
      id: '1',
      title: 'Task1',
      order: 'order1',
      description: 'description1',
      userId: 'userId1',
      boardId: 'boardId1',
      columnId: 'columnId1'
    }),
    new Task({
      id: '2',
      title: 'Task2',
      order: 'order2',
      description: 'description2',
      userId: 'userId2',
      boardId: 'boardId2',
      columnId: 'columnId2'
    }),
    new Task({
      id: '3',
      title: 'Task3',
      order: 'order3',
      description: 'description3',
      userId: 'userId3',
      boardId: 'boardId3',
      columnId: 'columnId3'
    })
  ];

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database connected');
    db.dropDatabase();
    users.forEach(user => user.save());
    boards.forEach(board => board.save());
    tasks.forEach(task => task.save());
    callback();
  });
};

module.exports = connectToDb;
