const TodoModel = require("../models/todo.model");
const mongoose = require("mongoose");

class TodoController {
  async getAllTodos(req, res, next) {
    try {
      const todos = await TodoModel.find({});
      if (todos.length > 0) {
        res.status(200).json({
          todos,
        });
      } else {
        res.status(404).json({
          message: "Todos not found",
        });
      }
    } catch (error) {
      console.error("Error in getAllTodos controller:", error);
      next(error); // Pass the error to the next middleware (error handler)
    }
  }

  async getOneTodoById(req, res, next) {
    try {
      const todoId = req.params.id;

      // Validate if todoId is a valid MongoDB ObjectId, you may use a library like 'mongoose'
      if (!mongoose.isValidObjectId(todoId)) {
        return res.status(400).json({
          message: "Invalid todo ID",
        });
      }

      const todo = await TodoModel.findById(todoId);

      if (!todo) {
        return res.status(404).json({
          message: "Todo not found",
        });
      }

      res.status(200).json({
        todo,
      });
    } catch (error) {
      console.error("Error in getOneTodoById controller:", error);
      next(error); // Pass the error to the next middleware (error handler)
    }
  }
}

module.exports = new TodoController();
