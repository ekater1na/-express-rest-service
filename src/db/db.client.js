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
      title: 'Project1',
      columns: [
        {
          title: 'plan',
          order: '1'
        },
        {
          title: 'dev',
          order: '2'
        },
        {
          title: 'test',
          order: '3'
        },
        {
          title: 'done',
          order: '4'
        }
      ]
    }),
    new Board({
      title: 'Project2',
      columns: [
        {
          title: 'plan',
          order: '1'
        },
        {
          title: 'dev',
          order: '2'
        },
        {
          title: 'test',
          order: '3'
        },
        {
          title: 'done',
          order: '4'
        }
      ]
    })
  ];

  const tasks = [
    new Task({
      title: 'Task1',
      order: '1',
      description: 'description1',
      userId: '44dea638-7e0a-4b54-8346-2d4297f8fd71',
      boardId: 'boardId1',
      columnId: 'columnId1'
    }),
    new Task({
      title: 'Task2',
      order: '2',
      description: 'description2',
      userId: '44dea638-7e0a-4b54-8346-2d4297f8fd71',
      boardId: 'boardId2',
      columnId: 'columnId2'
    }),
    new Task({
      title: 'Task3',
      order: '3',
      description: 'description3',
      userId: 'ffc683d9-3350-4be6-b346-43c8a931aa61',
      boardId: 'boardId3',
      columnId: 'columnId3'
    })
  ];

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database connected');
    mongoose.connection.collection('users').drop();
    mongoose.connection.collection('boards').drop();
    mongoose.connection.collection('tasks').drop();
    users.forEach(user => user.save());
    boards.forEach(board => board.save());
    tasks.forEach(task => task.save());
    callback();
  });
};

module.exports = connectToDb;
