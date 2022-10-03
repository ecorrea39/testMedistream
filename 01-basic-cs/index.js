'use strict';

const _ = require('lodash'); // https://lodash.com/docs/4.17.4
const assert = require('assert');
const database = require('./database.json');

const arrHatsId = [];

_.map(database, function (el) {
  if (el.hats.length > 0) {
    _.each(el.hats, function (h) {
      arrHatsId.push({ id: h.id });
    });
  }
});

const total = _.chain(arrHatsId).countBy('id').sortBy().slice(-3).sum().value(); // TODO

// Throws error on failure
assert.equal(total, 23, `Invalid result: ${total} != 23`);

console.log('Success!');

/**
 * Time and space complexity in O() notation is:
 *   - time complexity: TODO
 *   - space complexity: TODO
 */
