// this file isn't transpiled, so must use CommonJS and ES5

// register babel to tranqpile before our test run.
require('babel-register')();

//disable webpack feqtures the Mocha doesn't understand

require.extensions['.css'] = function() {};
