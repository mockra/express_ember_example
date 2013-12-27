App.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});

App.TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('todos');
  }
});

App.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter(App.Todo, function (todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});

App.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter(App.Todo, function (todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});
