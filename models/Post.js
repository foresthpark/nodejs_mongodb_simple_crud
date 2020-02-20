const mongooese = require('mongoose');

const PostSchema = new mongooese.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }

});

module.exports = mongooese.model('Posts', PostSchema);