import { Emitter } from "./class/Emitter";

const EventEmitter = new Emitter();

EventEmitter.on("net-connect", () => {
  console.log("-------------------------------------");
  console.log("-- NET-CONNECTION-ERROR: refused ---");
  console.log("-------------------------------------");
});

EventEmitter.emit("net-connect");

export default EventEmitter;
