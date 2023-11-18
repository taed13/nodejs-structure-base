const express = require("express");
import TodoController from "../controllers/todo.controller";

const router = express.Router();

router.get("/", (req, res) => TodoController.getAllTodos());

export default router;
