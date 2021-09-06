const Todo = require("../models/todo");

// exports.createTodo = async (req, res, next) => {

//   const item = req.body.item;
//   const todo = new Todo({
//     item: item,
//   });
//   try {
//     await todo.save();
//     // await Todo.findOne({
//     //   type: "TODO",
//     // });
//     res.status(201).json({
//       message: "Todo created successfully",
//       todo: todo,
//     });
//   } catch (err) {
//     console.log(err);
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };
exports.createTodo = (req, res) => {
  // we will get json data from the frontend i.e. req.body
  const todo = new Todo(req.body);

  // create a todo instance by passing 'task' field from 'req.body'
  todo.save((err, task) => {
    if (err || !task) {
      console.log(err);
      return res.status(400).json({
        error: "something went wrong",
      });
    }
    // todo is created
    // send the created todo as json response
    res.json({ task });
  });
};
//get
exports.getTodo = (req, res) => {
  // this is pretty simple because we've already defined a middleware
  // to get a todo from the URL id
  // this req.todo is coming from that middleware
  return res.json(req.todo);
};

//get all todos
exports.getAllTodos = (req, res) => {
  // simply use .find() method and it will return all the todos
  Todo.find()
    .sort("-createdAt")
    .exec((err, todos) => {
      // error checking
      if (err || !todos) {
        return res.status(400).json({
          error: "Something went wrong in finding all todos",
        });
      }
      // return all the todos in json format
      res.json(todos);
    });
};

//delete
exports.deleteTodo = (req, res) => {
  // take req.todo from getTodoById() middleware and
  // fetch the todo that user wants to delete
  const todo = req.todo;
  // call .remove() method to delete it
  todo.remove((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "something went wrong while deleting the todo",
      });
    }
    // send deleted todo and success message as a json response
    res.json({
      task_deleted: task,
      message: "Todo deleted successfully!",
    });
  });
};
