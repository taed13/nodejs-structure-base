const TodoService = require("../services/todo.service.js");
const TodoController = {};

TodoController.getAllTodos = async (req, res) => {
  try {
    const todos = await TodoService.getAllTodos();
    res.status(200).json({
      todos,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = TodoController;
