const Todo = require('../models/Todos');

const getTodos = (req, res) => {
  Todo.find((error, todos) => {
    if (error) {
      res.send(error);
    }
    res.json(todos);
  });
};

const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    reps: req.body.reps,
    load: req.body.reps,
  });

  todo.save((error, todo) => {
    if (error) {
      res.send(error);
    }
    res.json(todo);
  });
};

const updateTodo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        title: req.body.title,
        reps: req.body.reps,
        load: req.body.load,
      },
    },
    { new: true },
    (error, Todo) => {
      if (error) {
        res.send(error);
      } else res.json(Todo);
    }
  );
};

const deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: 'workout deleted' }))
    .catch((error) => res.send(error));
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
