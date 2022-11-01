// index.js
// to import the doSomeMath from the math.js with or without extension
const math = require('./math.js');
console.log(math.addTwo(1,2));

// import only what you need
const {multiply} = require('./math.js');
console.log(multiply(1,2));