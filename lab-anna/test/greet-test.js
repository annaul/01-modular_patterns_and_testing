'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#hello', function() {
    it('should return hello anna', function() {
      var result = greet.hello('anna');
      console.log(result);
      assert.ok(result === 'hello anna', 'not equal to hello anna');
    })

    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.hello();
      }, 'error not thrown');
    })
  })
})
