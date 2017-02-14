'use strict';

module.exports = exports = {};

exports.hello = function(name) {
  if (arguments.length === 0) throw Error('name not provided');
  return `hello ${name}`;
};
