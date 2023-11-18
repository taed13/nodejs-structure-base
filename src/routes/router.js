const todoRouter = require("./todo.routes");

function routes(app) {
  console.log(app);
  app.use("/todo", todoRouter);
}

module.exports = routes;
