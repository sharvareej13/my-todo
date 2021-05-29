const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: String,
    check: Boolean,
    username: String,
    date: Date

});
module.exports = mongoose.model('Todos' , todoSchema);