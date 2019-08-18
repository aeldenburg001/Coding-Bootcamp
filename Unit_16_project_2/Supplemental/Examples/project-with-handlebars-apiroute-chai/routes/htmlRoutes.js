var db = require("../models");
const request = require("request");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/movies", function(req, res) {
    request("http://localhost:3000/api/movies?q=top+gun", function (err, resp, body) {
        console.log(body);
        res.render("movies", {
            movies: JSON.parse(body)
        });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
