const express = require("express");
const router = express.Router();

let Todos = require("../models/todo");

// route for when user edits a todo item
//router.put('/todo/:id', function (req, res) {
router.put('/todo/:id' , function(req, res){
    Todos.updateOne({_id: req.params.id}, { todo : req.body.todo}, function(err, doc){
        if(err)  throw err;
        console.log("item edited");

        //send response where item is edited
        res.send(doc);
    });
});

   
// route for when user edits a checkbox
router.put('/check/:id', function (req, res) {
    // update the document in the database that matches the id with updated checkbox data
    Todos.updateOne({ _id: req.params.id }, { check: req.body.check },function (err, doc) {
        if (err) throw err;
        console.log("checkbox edited!");

        // send response back with the document object that was edited
        res.send(doc);
    });
});
 module.exports = router;