const index = require('../index');
const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();


//problem 1
describe('test capitalizeText function', function() {

    it('test that the function takes a string  it will return a string ', function() {
        expect(index.capitalizeText('hamada')).to.be.a('string')
    })


    it('add two positive numbers', function() {
        expect(index.capitalizeText('hamada')).to.equal('HAMADA')
    })

    it('test if the function takes number it will throw type error says parameter should be string', function() {

        expect(
            function() {
                index.capitalizeText(5)
            }
        ).to.throw(TypeError, 'parameter should be string')
    })
})

//problem 2
describe('test createArray function', function() {

    let x = 1;
    this.beforeEach(function() {
        x++
    })
    it('test that the return value of type array', function() {
        index.createArray(2).should.be.an("array").that.includes(1)
    })

    it(`test if we pass 2 it will return array of length 3 and test it's include 1`, function() {
        assert.exists(index.createArray(x), 1);

    })

})


setTimeout(function() {

    run()

}, 5000)

// mocha.run();