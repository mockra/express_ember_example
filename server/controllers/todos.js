var Todo = require('../models/todo');

exports.index = function(req, res) {
  Todo.find(function(err, todos) {
    res.send({
      todos: todos
    });
  });
};

exports.create = function(req, res) {
  res.send(new Todo(req.body.todo).save());
};

exports.update = function(req, res) {
  Todo.findByIdAndUpdate(req.params.id, req.body.todo, function(err, todo) {
    res.send(todo);
  });
};

exports.destroy = function(req, res) {
  Todo.findByIdAndRemove(req.params.id, function(err, todo) {
    res.send(todo);
  });
};
