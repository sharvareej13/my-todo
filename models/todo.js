const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: String,
    check: Boolean,
    username: String,
    todoDate: {
        type: Date,
        default: Date.now
        }

});
module.exports = mongoose.model('Todos' , todoSchema);