var should = require('chai').should();
var mr = require('../utils/multi-return');

var testDataA = {
  height: 10
};
var testDataB = {
  width: 10
};
var testDataC = [{
  height: 10
},{
  width: 10
}];

describe('Test return condition is true', function () {
  it('should merge A B then return an array equal C', function () {

    var result = mr(
      true,
      testDataA,
      testDataB
    );
    result.should.deep.equal(testDataC);

  });
});
describe('Test return condition is false', function () {
  it('should return empty array', function () {

    var result = mr(
      false,
      testDataA,
      testDataB
    );
    result.should.deep.equal([]);

  });
});