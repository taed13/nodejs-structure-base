const express = require("express");
const todoRouter = require("./todo.routes");

const apiRoute = express();

apiRoute.use("/todo", todoRouter);

module.exports = apiRoute;
