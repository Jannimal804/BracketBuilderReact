const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");
var passport = require("passport");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Require routes here
require("./routes/api-routes")(app);


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
  

// db.sequelize.sync({ force: true}).then(function(){
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("listening on: " + PORT);
    });
});
