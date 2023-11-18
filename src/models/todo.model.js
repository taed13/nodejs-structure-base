const mongoose = require("mongoose");

const { Schema } = mongoose;

const TodoSchema = Schema({
  name: String,
});

const TodoModel = mongoose.model("Todos", TodoSchema, "todos");

module.exports = TodoModel;
