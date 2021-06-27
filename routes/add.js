const express = require('express');
const router = express.Router();

let Todos = require('../models/todo');

// route for when user submits new todo
router.post('/todo', function(req, res){
    //create todo model where data is passed from request n saved in database
    Todos({
        todo: req.body.todo,
        check: req.body.check,
        username: req.session.user,
        todoDate: Date.now()
    }).save(function(err, doc){
        if(err) throw err;
        console.log("item is saved");
        
        //send response back with doc object created
        res.send(doc);
    });

});
module.exports = router;