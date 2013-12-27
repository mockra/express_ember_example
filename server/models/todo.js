var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  is_completed: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);
