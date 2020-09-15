
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require("../Node_Pokemon_API");

chai.use(chaiHttp);

describe('/GET pokemon', () => {
  
	it("should GET a pokemon description", (done) => {
		chai.request("http://localhost:3000")
			.get('/pokemon/charizard')
      	    .end((err, res) => {
				res.should.have.status(200);
				res.body.should.have.property('description');
		done();
		});	
	})	

	it("should GET a no pokemon found error", (done) => {
		chai.request("http://localhost:3000")
			.get('/pokemon/DaveG')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.equal("Sorry we dont have that Pokemon");
		done();
		});	
	})
});