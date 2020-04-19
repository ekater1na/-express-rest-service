const mongoose = require('mongoose');
const uuid = require('uuid');

const taskShema = new mongoose.Schema(
  {
    title: String,
    order: String,
    description: String,
    userId: String,
    boardId: String,
    columnId: String,
    _id: {
      type: String,
      default: uuid
    }
  },
  {
    versionKey: false
  }
);

taskShema.statics.toResponse = task => {
  const { id, title, order, description, userId, boardId, columnId } = task;
  return { id, title, order, description, userId, boardId, columnId };
};

const Task = mongoose.model('Task', taskShema);

module.exports = Task;
