const mongoose = require('mongoose');
const config = require('../config');


const { dBB: { usernamedb, password, server, database } } = config;


module.exports.config = {
    uri: `mongodb+srv://${usernamedb}:${password}@${server}/${database}retryWrites=true&w=majority`,
    options: {
        dbName: 'my-todo13',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,    
    },
}

