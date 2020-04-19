const mongoose = require('mongoose');
const uuid = require('uuid');
const Column = require('../columns/column.model');

const boardSchema = new mongoose.Schema(
  {
    title: String,
    column: [Column],
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
