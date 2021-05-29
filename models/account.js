const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    username:{
    type: String,
    unique:true
    },
    password:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Accounts', accountSchema);
