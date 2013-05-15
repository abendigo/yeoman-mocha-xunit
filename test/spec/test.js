/*global describe, it */
'use strict';
(function () {
    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('assert false', function () {
                assert.isTrue(false);
            });
            it('expect', function () {
                expect(false).to.be.true
            });
            it('should', function() {
                false.should.be.true
            })
        });
        describe('maybe a bit more context here', function () {
            it('assert true', function () {
                assert.isTrue(true);
            });
            it('expect', function () {
                expect(true).to.be.true
            });
            it('should', function() {
                true.should.be.true
            })
        });
    });
})();
