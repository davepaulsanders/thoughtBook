const { Schema, model } = require("mongoose");
const dateFormat = require("../utils");
const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: DateTime.local(),
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});
