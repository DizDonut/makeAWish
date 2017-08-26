require("dotenv").config();

var mysql = require("mysql");
var express = require("express");
var exphlbr = require("express-handlebars");

var app = express();
var PORT = 3000;

app.engine("handlebars", exphlbr({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "wishes_db"
});

connection.connect(function(err){
  if (err) throw err;
  console.log("Connected as ID: " + connection.threadId);
});

// get route to display the items in the database
app.get("/", function(req, res){
  connection.query("SELECT * FROM wishes", function(err, results){
    if (err) throw err;

    res.render("index", { wishes: results });
  })
}); //end get / function

app.post("/", function(req, res){
  connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function(err, data){
    if(err) throw err;

    res.redirect("/");
  })
}); //end post / function

app.listen(PORT);
