const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const StringBuilder = require('../stringBuilder');
var sb = new StringBuilder('foo');

describe ('StringBuilder', function () {
  it('should be a function', function () {
    expect(StringBuilder).to.be.a('function');
  });

  it('should have a reverse method', function(){
    sb.should.have.property('reverse');
  });

  it('should have a capitalize method', function () {
    sb.should.have.property('capitalize');
  });

});