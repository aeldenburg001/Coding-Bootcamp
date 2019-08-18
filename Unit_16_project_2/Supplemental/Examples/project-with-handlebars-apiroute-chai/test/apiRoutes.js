var request = require("request");
var expect = require("chai").expect;

describe("api/movies", function () {
    it("should return OMDB data when requested with a string parameter (q)", function () {
        request("http://localhost:3000/api/movies?q=top+gun", function (err, resp, body) {
            let parsedBody = JSON.parse(body);
            parsedBody = JSON.parse(parsedBody);

            if (err) {
                console.log(err);
            }

            // expect we did not get an HTTP error (404, 500, 403 etc)
            expect(resp.statusCode).to.equal(200);

            // expect that the request doesn't have an error
            expect(parsedBody).to.not.have.property('Error');

            // expect the response to have a title property
            expect(parsedBody).to.have.property('Title');

            // expect the title to have "top gun" in it
            let lowerCaseWithSpacesRemovedTitle = parsedBody.Title.toLowerCase();
            lowerCaseWithSpacesRemovedTitle = lowerCaseWithSpacesRemovedTitle.split(/\s/).join("");

            // should look like "topgun"

            const queryStringToTest = "topgun";

            // expect a lowercased and space-removed version of the response title to equal the 
            // query string
            expect(lowerCaseWithSpacesRemovedTitle).to.equal(queryStringToTest);
            
        });
    })  
});