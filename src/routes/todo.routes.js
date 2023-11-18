const express = require("express");
const TodoController = require("../controllers/todo.controller");

const router = express.Router();

router.get("/all", TodoController.getAllTodos);

router.get("/:id", TodoController.getOneTodoById);

router.get("/", (req, res) => {
  res.json({
    message: "HOME API TODO ROUTER",
  });
});

module.exports = router;
