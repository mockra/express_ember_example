var todos = require('./controllers/todos');

module.exports = function(app) {
  app.get('/api/1/todos', todos.index);
  app.post('/api/1/todos', todos.create);
  app.put('/api/1/todos/:id', todos.update);
  app.del('/api/1/todos/:id', todos.destroy);
};
