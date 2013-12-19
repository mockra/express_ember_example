window.App = Ember.Application.create();

require('store');
require('router');

var folderOrder = [ 'routes', 'models', 'views', 'controllers', 'helpers',
                    'templates', 'components' ];

folderOrder.forEach(function(folder) {
  window.require.list().filter(function(module) {
    return new RegExp("^" + folder + "/").test(module);
  }).forEach(function(module) {
    require(module);
  });
})
