const express = require("express");
const TodoController = require("../controllers/todo.controller");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Gọi hàm xử lý từ controller và chờ kết quả
    const todos = await TodoController.getAllTodos();

    // Gửi phản hồi về client với dữ liệu từ controller
    res.json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = router;
