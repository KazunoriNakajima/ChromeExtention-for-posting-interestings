const popup = require("../popup.js");
const { expect } = require("chai");

describe("popup", () => {
  it("should find total population", (done) => {
    // Setup
    const expected = 561453504;
    // Exercise
    populatron.totalPopulation((actual) => {
      // Assert
      expect(actual).to.equal(expected);
      // Teardown
      done();
    });
  });
});
