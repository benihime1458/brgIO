const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const climbSchema = new Schema({
  number: { type: Number, required: true },
  area: { type: String, required: true },
  grade: { type: Number, required : true },
  wcw: { type: Boolean, required: true },
  color: { type: String, required: true },
}, {
    timestamps: true,
  });

const Climb = mongoose.model('Climb', climbSchema);

modules.exports = Climb;