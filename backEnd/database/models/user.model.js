const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const problemLog = new Schema({
  area: { type: String, required: true },
  attempts: { type: Number, required: false },
  color: { type: String, required: true },
  dateSet: { type: Date, required: true },
  dyno: { type: Boolean, required: false },
  flashed: { type: Boolean, required: false },
  grade: { type: Number, required: false },
  notes: { type: String, required: false }, 
  number: { type: Number, required: true },
  project: { type: Boolean, required: false },
  sends: { type: Number, required: false },
  wcw: { type: Boolean, required: false },
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