const TodoModel = require("../models/todo.model");

class TodoController {
  async getAllTodos(req, res, next) {
    try {
      console.log("Calling getAllTodos controller");
      const todos = await TodoModel.find({});
      console.log("Result from find operation:", todos);

      if (todos.length > 0) {
        console.log("Todos received:", todos);
        res.status(200).json({
          todos,
        });
      } else {
        console.log("No todos found");
        res.status(404).json({
          message: "Todos not found",
        });
      }
    } catch (error) {
      console.error("Error in getAllTodos controller:", error);
      next(error); // Pass the error to the next middleware (error handler)
    }
  }
}

module.exports = new TodoController();
