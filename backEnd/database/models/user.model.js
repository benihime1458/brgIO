const mongoose = require('mongoose');
const climbSchema = require('./climb.model');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  climbingLog: [climbSchema]
}, {
    timestamps: true,
  });

const User = mongoose.model('User', userSchema);

module.exports = User;