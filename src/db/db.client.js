const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const User = require('../resources/users/user.model');
// const Board = require('../resources/boards/board.model');
// const Task = require('../resources/tasks/task.model');

const connectToDb = callback => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const users = [
    new User({ name: 'user1', login: 'admin', password: 'admin' }),
    new User({ name: 'user2', login: 'login2', password: 'password2' })
  ];

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Database connected');
    // db.dropDatabase();
    users.forEach(user => {
      user.save();
    });
    callback();
  });
};

module.exports = connectToDb;
