const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const StringBuilder = require('../stringBuilder');

describe ('StringBuilder', function () {
  var sb;

  beforeEach(function (){
    sb = new StringBuilder('foo');
    badsb = new StringBuilder(12);
  });

  it('should be a function', function () {
    expect(StringBuilder).to.be.a('function');
  });

  it('should have a string property', function(){
    sb.string.should.be.equal('foo');
  });

  it('should return false unless string is passed', function(){
    sb.string.should.be.a('string');
  });

  it('should have a reverse method', function(){
    sb.should.have.property('reverse');
  });

  it('reverse method should reverse string', function () {
    expect(sb.reverse()).to.equal('oof');
  });

  it('should have a capitalize method', function () {
    sb.should.have.property('capitalize');
  });

  it ('should have a toArray method', function (){
    sb.should.have.property('toArray');
  });

  it ('should have a append method', function () {
    sb.should.have.property('append');
  });

  it('append method should append string', function(){
    expect(sb.append('hey')).to.equal('foohey');
  });

  it('should have a toString method', function(){
    sb.should.have.property('toString');
  });


});