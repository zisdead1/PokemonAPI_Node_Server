# PokemonAPI_Node_Server
A restful API written in node/express which returns the shakespearean description of pokemon characters

To install and test this REST Endpoint

1. Clone the following public git repo to your local machine using your prefered method (zip file available if needed)
        https://github.com/zisdead1/PokemonAPI_Node_Server

2.  Install docker for your test machine from
        https://docs.docker.com/engine/install/

3. Go to the root directory of the app downloaded from git in step 1 using the command line (i.e where Node_Pokemon_API.js lives)

4. run the following command  "docker build -t webapp ." (without quotes)   (or change webapp to any name that suits)

5. run the following command "docker run -p 3000:3000 webapp" (without quotes)  (or use the name you decided in step 4)

6. You should now have a docker container with a Server listening on Port 3000

7. Go to your browser and enter  http://localhost:3000/pokemon/charizard   and you should see a description returned

9. For any issues or help needed contact davegarrehy@gmail.com