var express = require("express");
var app = express()
var bodyParser = require("body-parser");
var userRoutes = require("./routes/user");

var db = require("./db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
    res.status(200).json("Server running at port " + port);
});

var port = process.env.PORT || 8080;

app.listen(port, () => {
console.log("Server Running");
});