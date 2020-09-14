const { Console } = require("console");
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
    //https://pokeapi.co/api/v2/pokemon-species/
    //has an embedded description of a given pokemon
    P.getPokemonSpeciesByName(pokemon, function(response, error) { // with callback
        if(!error) {
          res.json(response.flavor_text_entries[6].flavor_text);
        } else {
          res.status(404).json('Sorry we dont have that Pokemon');
        }
    });
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});