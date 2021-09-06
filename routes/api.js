const express = require("express");
const todoController = require("../controllers/api");
//const validateMiddleware = require("../validateMiddleware");
const routes = express.Router();

//post
routes.post("/todo", todoController.createTodo);

//get all
routes.get("/todos/", todoController.getAllTodos);

// to get a single todo
routes.get("/todo/:todoId/", todoController.getTodo);

//delete
routes.delete("/todo/:todoId/delete", todoController.deleteTodo);

module.exports = routes;
