var express = require("express");
var app = express();

//testing that localhost server returns some JSON
//i.e I have my first node webserver with an endpoint 
app.get("/url", (req, res, next) => {
    res.json(["Dave","Garrehy","Food"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});