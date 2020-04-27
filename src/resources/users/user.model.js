const uuid = require('uuid');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid
    },
    name: String,
    login: String,
    password: String
  },
  {
    versionKey: false
  }
);

userSchema.statics.toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

userSchema.pre('save', async function cb(next) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.pre('findOneAndUpdate', async function cb(next) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  this._update.password = await bcrypt.hash(this._update.password, salt);
  next();
});

userSchema.methods.comparePassword = function compare(plaintext, cb) {
  return cb(null, bcrypt.compare(plaintext, this.password));
};

const User = mongoose.model('User', userSchema);

module.exports = User;
