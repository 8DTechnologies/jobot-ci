'use strict';
var assert = require('assert');
var jobotCi = require('../');

describe('jobot-ci node module', function () {
  it('must have at least one test', function () {
    jobotCi();
    assert(false, 'I was too lazy to write any tests. Shame on me.');
  });
});
