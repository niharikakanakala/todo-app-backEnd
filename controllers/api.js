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
  const todo = new Todo(req.body);

  // create a todo
  todo.save((err, task) => {
    if (err || !task) {
      console.log(err);
      return res.status(400).json({
        error: "something went wrong",
      });
    }
    res.json({ task });
  });
};
//get
exports.getTodo = (req, res) => {
  return res.json(req.todo);
};

//get all todos
exports.getAllTodos = (req, res) => {
  Todo.find()
    .sort("-createdAt")
    .exec((err, todos) => {
      // error checking
      if (err || !todos) {
        return res.status(400).json({
          error: "Something went wrong in finding all todos",
        });
      }
      res.json(todos);
    });
};

//delete
exports.deleteTodo = (req, res) => {
  const todo = req.todo;
  // call .remove() method to delete it
  todo.remove((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "something went wrong while deleting the todo",
      });
    }
    res.json({
      task_deleted: task,
      message: "Todo deleted successfully!",
    });
  });
};
