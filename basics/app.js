//const EventEmiter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//Register a listener
emitter.on("messagedLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");

// const os = require('os');

// const totalMemory = os.totalmem();
// var freeMemory = os.freemem()

// console.log('Total Memory:' + totalMemory)

// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

// const path = require('path');

// var pathObj = path.parse(__filename);

// const logger = require('./logger');

// logger.log('message')

// console.log(logger)

//global variables and methods

// console.log()

// setTimeout()

// clearTimeout()

// setInterval()
// clearInterval()

// //escoped only on this file
// var message = '';
// global.setTimeout;

//module
//not available outside of the module
