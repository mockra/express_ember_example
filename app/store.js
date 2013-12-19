App.Store = DS.Store.extend({
  revision: 13
});

DS.RESTAdapter.reopen({
  namespace: 'api/1',
  serializer: DS.RESTSerializer.extend({
    primaryKey: function(type) {
      return '_id';
    }
  })
});
