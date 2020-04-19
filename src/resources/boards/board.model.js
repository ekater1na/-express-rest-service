const mongoose = require('mongoose');
const uuid = require('uuid');

const boardSchema = new mongoose.Schema(
  {
    title: String,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Column' },
    columns: [
      { title: String, order: Number, by: mongoose.Schema.Types.ObjectId }
    ],
    _id: {
      type: String,
      default: uuid
    }
  },
  {
    versionKey: false
  }
);

boardSchema.statics.toResponse = board => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
