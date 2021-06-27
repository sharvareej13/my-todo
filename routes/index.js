const express = require("express");
const router = express.Router();
var moment = require("moment");
let Todos = require("../models/todo");

// route for when the user views the index of the website
router.get("/", authenticateUser(), function(req, res) {
    Todos.find({ username: req.session.user }, function(err, result) {
      if (err) throw err;
  
      res.render("index", { todos: result, username: req.session.user , moment: moment});
    });
  });
  
  // middleware which checks if user is authenticated when visiting a specific route
  function authenticateUser() {
    return function(req, res, next) {
      if (req.isAuthenticated()) {
        console.log("authentication = " + req.isAuthenticated());
        return next();
      }
      res.redirect("login");
    };
  }
  
  module.exports = router;  