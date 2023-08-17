// server/models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  name: String,
});

module.exports = mongoose.model('Comment', commentSchema);
