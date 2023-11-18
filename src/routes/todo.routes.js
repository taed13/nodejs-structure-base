const express = require("express");
const TodoController = require("../controllers/todo.controller");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("Calling getAllTodos route handler");
    const todos = await TodoController.getAllTodos();
    console.log("Todos received:", todos);
    res.status(200).json({
      todos,
    });
  } catch (error) {
    console.error("Error in getAllTodos route handler:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

router.get("/all", TodoController.getAllTodos);
module.exports = router;
