const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const StringBuilder = require('../stringBuilder');

describe ('StringBuilder', function () {
  it('should be a function', function () {
    expect(StringBuilder).to.be.a('function');
  });

  it('should have a reverse method', function(){
    expect(StringBuilder("foo").reverse().to.equal("oof"));
  });



});