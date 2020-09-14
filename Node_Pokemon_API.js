var express = require("express");
var app = express();

//For parsing out the pokemon entered in URL
//const url = require('url');

app.get("/pokemon/:pokemonid", (req, res, next) => {
    //Dynamically get the pokemon character which will be 
    //last param in the url
    res.send("pokemon is " + req.params.pokemonid);
    //res.json(["Dave","Garrehy","Food"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});