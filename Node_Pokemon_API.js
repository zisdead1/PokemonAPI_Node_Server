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
            //this is where we find the pokemon description in the returned object
            var pokemonDesc = response.flavor_text_entries[6].flavor_text;
            //dont want to be dealing with Line feeds/breaks remove them
            pokemonDesc = pokemonDesc.replace(/(\r\n|\n|\r)/gm, "");
            //now get string ready for a URL based API call
            pokemonDesc = encodeURI(pokemonDesc);
            //Now make call to Shakespeare translator API 
            var apiBaseString = "https://api.funtranslations.com/translate/shakespeare.json?text=";
            makePostRequest(apiBaseString+pokemonDesc, pokemon);
        } else {
            res.json('Sorry we dont have that Pokemon');
        }
    });

    async function makePostRequest(url, pokemonName) {
        console.log(url);
        try
        {
            let postRes = await axios.post(url);
            var output = new Object();
            output.name = pokemonName;
            output.description = postRes.data.contents.translated;
            res.json(output);
        }catch (error) {
            res.json('To many API calls this hour');
        }
    }
});

if(!module.parent){
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//module.exports = server;
}