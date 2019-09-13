const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const problemLog = new Schema({
  number: { type: Number, required: true },
  attempts: { type: Number, required: false },
  sends: { type: Number, required: false },
  flashed: { type: Boolean, required: false },
  project: { type: Boolean, required: false },
  notes: { type: String, required: false }, 
}, {
  timestamps: true,
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
    match: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
  },
  problemLog: [problemLog]
}, {
    timestamps: true,
  });

const User = mongoose.model('User', userSchema);

module.exports = User;