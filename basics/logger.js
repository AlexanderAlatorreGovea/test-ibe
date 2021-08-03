const EventEmiter = require("events");
//we get rid of emitter because we are extending the class
//EventEmiter
//const emitter = new EventEmiter();

var url = "http://mylogger.io/log";

class Logger extends EventEmiter {
  log(message) {
    //Send an HTTP request
    console.log(message);

    //raise an event
    //emitter.emit('messagedLogged', {id: 1, url: 'http://'});
    //you can replace emitter with this
    this.emit("messagedLogged", { id: 1, url: "http://" });
  }
}

module.exports.log = Logger;
