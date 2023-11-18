// routes.js
const todoRoutes = require("./todo.routes");

function setupRoutes(app) {
  app.use("/api/todos", todoRoutes);

  app.get("/api", (req, res) => {
    res.json({
      message: "HOME API ROUTER",
    });
  });
}

module.exports = setupRoutes;
