// importing the required modules for app.js
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const dataSchema = require("./configuration/database");


const app = express();

//view engine
app.set("view engine", "ejs");


//making the connection through mongoose to our mongoDb database
mongoose.connect(dataSchema.config.uri, dataSchema.config.options);
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, "error in connection"));
// up and running then print the message
db.once('open', function(){
    console.log('Connected to Database');
});

//storing cookies using cookie-session
cookieSession
app.use(
  cookieSession({
    keys: ["randomStringASyoulikehjudfsdrsertrttutuy"],
  })
);

// middlewares for express routes
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'cat dog humanbeing', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// express routes that exist
app.use('/add', require('./routes/add'));
app.use('/remove', require('./routes/remove'));
app.use('/edit', require('./routes/edit'));
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/index'));

// functions for persistant sessions
passport.serializeUser(function (user_id, done) { done(null, user_id); });
passport.deserializeUser(function (user_id, done) { done(null, user_id); });












app.listen(process.env.PORT || 7999, function () {
    console.log("listening on port 7999!");
  });