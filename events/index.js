const logEvents = require("./logEvents");

const EventEmitter = require("events");
const logEvent = require("./logEvents");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("log", (msg) => {
  logEvent(msg);
});

setTimeout(() => {
  myEmitter.emit("log", "Log event emitted\n");
}, 2000);
