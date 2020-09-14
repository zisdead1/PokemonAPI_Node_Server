//const { Console } = require("console");
var axios = require('axios');
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

    //now need to make a call to the 
    //PokeAPI to get a description for the
    //pokemon character sent in the URL
    //https://pokeapi.co/api/v2/pokemon-species/
    //has an embedded description of a given pokemon
    P.getPokemonSpeciesByName(pokemon, function(response, error) { // with callback
        if(!error) {
            //this is where we find a description in the returned object
            var pokemonDesc = response.flavor_text_entries[6].flavor_text;
            //Now make call to Shakespeare translator API 
            var apiBaseString = "https://api.funtranslations.com/translate/shakespeare.json?text=";
            //Take care of escaping the relavant characters in the string
            var escapedStr = encodeURI(apiBaseString+pokemonDesc);
            //res.send(escapedStr);
            //console.log(escapedStr);
            makePostRequest(escapedStr);
        } else {
            res.status(404).json('Sorry we dont have that Pokemon');
        }
    });

    async function makePostRequest(url) {
        //Generic POST HTTP call
        var escapedStr = encodeURI(url);
        //console.log(escapedStr);
        let postRes = await axios.post("https://api.funtranslations.com/translate/shakespeare.json?text=CHARIZARD%20flies%20around%20the%20sky");
        res.send(postRes.data);
        console.log(res.data);
    }
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});