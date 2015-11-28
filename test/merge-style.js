var should = require('chai').should();
var ms = require('../utils/merge-style');

var testDataA = {
  height: 10
};
var testDataB = {
  width: 10
};
var testDataC = {
  display: 'inline-block'
}
var testDataD = {
  height: 10,
  display: 'inline-block',
  width: 10
};

describe('Test merge condition is true', function () {
  it('should merge A B C and equal D', function () {
    var result = ms(
      testDataA,
      true && testDataB,
      true && testDataC
    );
    result.should.deep.equal(testDataD);
  });
});
describe('Test merge condition is false', function () {
  it('should merge A but not B C then equal A', function () {
    var result = ms(
      testDataA,
      false && testDataB,
      false && testDataC
    );
    result.should.deep.equal(testDataA);
  });
});