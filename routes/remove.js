const express = require('express');
const router = express.Router();

let Todos = require('../models/todo');
//route for when a user deletes a todo item

router.delete('/todo/:id',function(req, res){
    //remove the document in the database that mathches the selected id
    Todos.find({_id: req.params.id}).remove(function(err, doc){
        if(err) throw err;
        //send response back to the user with the item deleted
        res.send(doc);
    });
});

module.exports = router;