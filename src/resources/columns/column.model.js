const mongoose = require('mongoose');
const uuid = require('uuid');

const columnSchema = new mongoose.Schema(
  {
    title: String,
    order: Number,
    _id: {
      type: String,
      default: uuid
    }
  },
  {
    versionKey: false
  }
);

columnSchema.statics.toResponse = column => {
  const { id, title, order } = column;
  return { id, title, order };
};

const Column = mongoose.model('Column', columnSchema);

module.exports = Column;
