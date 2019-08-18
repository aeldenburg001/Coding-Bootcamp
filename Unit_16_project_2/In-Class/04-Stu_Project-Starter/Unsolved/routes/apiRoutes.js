/*
    My App: Movie Maverick

    - Gets where/what/why/when of all movies that have Tom Cruise in them.
    - Can search for particular movies that Tom Cruise was in.
         PSUEDOCODE;
            - A paramater (lets name it "q") that contains a string
                with some text to search movies by can be added to the
                request to get the list of movies.
*/

var db = require("../models");
const request = require("request");

const apiKey = "trilogy";

// the "base" for all my OMDB api calls
const OMDB_API_BASE_URL = `http://www.omdbapi.com/?apikey=${apiKey}`;

const BASE_URL_WITH_PARAMETERS = `${OMDB_API_BASE_URL}&t=`;

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // 1. request from the client -> server
  // MIDDLEWARE IS HERE
  // 2. server generates response -> client

  app.get("/api/movies", function (req, res) {
    // get the q parameter from the request
    const queryParam = req.query.q;

    let url = "";

    // if there are params that the client sent, use the BASE_URL_WITH_PARAMETERS
    if (queryParam) {
        url = BASE_URL_WITH_PARAMETERS + queryParam;
        // url = ${OMDB_API_BASE_URL}&q=${queryParam}
        // assumeing apiKey = 92rw3t8j83jt3 and the client query = "top gun"
        // url = http://www.omdbapi.com/?apikey=92rw3t8j83jt3&q=top+gun
    } else {
        url = OMDB_API_BASE_URL;
    }

    // request the OMDB api
    request(url, function(err, omdbRes, body) {
        // if there was an error talking to OMDB, let us know
        if (err) {
            throw err;
        }

        // since the body is in JSON 
        // (the body is json bc OMDB said it would be)
        // I can just take the body of my ajax call
        // and send it back to the client
        res.json(body);
    });
  });
};
