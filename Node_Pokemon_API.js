var express = require("express");
var app = express();

//Needed to call the PokeAPI using Node
//friendly wrapper
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

app.get("/pokemon/:pokemonid", (req, res, next) => {
    //Dynamically get the pokemon character which will be 
    //last param in the url
    var pokemon = req.params.pokemonid;
    if(pokemon === "")
    {
        throw new Error("A pokemon string was not included in the URL");
    }

    //now need to make a call to the 
    //PokeAPI to get a description for the
    //pokemon character sent in the URL
    P.getPokemonByName(34, function(response, error) { // with callback
        if(!error) {
          res.json(response);
        } else {
          res.send(error);
        }
    });
    
    
    //res.json(["Dave","Garrehy","Food"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});