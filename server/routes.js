var todos = require('./controllers/todos');

module.exports = function(app) {
  app.namespace('/api/1/', function() {
    app.get('todos', todos.index);
    app.post('todos', todos.create);
    app.put('todos/:id', todos.update);
    app.del('todos/:id', todos.destroy);
  });
};
