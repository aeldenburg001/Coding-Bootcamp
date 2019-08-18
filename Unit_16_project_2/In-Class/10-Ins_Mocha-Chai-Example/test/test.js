var expect = require("chai").expect;
var should = require("chai").should;
var multiply = require("../index");


describe("Multiply", function() {
  it("should multiply properly when passed numbers", function() {
    expect(multiply(2, 4)).to.equal(8);
  });

  it("should throw when not passed numbers", function() {
    expect(function() {
      multiply(2, "4");
    }).to.throw(Error);
  });
});

describe("titleize", function() {
    it("should capitalize the first letter of each word", function() {
        var result = titlelize("martha stewart");
        result.should.be.a("string");
        var words = result.split(" ");
        // get the first letters of each word, and then check if they're capitals
        words.forEach(function (word) {
            var firstLetter = word[0];

            // if the first letter is still the same after being uppercased, 
            // then it must have been uppercase to begin with!
            firstLetter.should.equal(firstLetter.toUpperCase());
        })

    });
      
    it("adds a title to the beginning / first word", function () {

    });
});
