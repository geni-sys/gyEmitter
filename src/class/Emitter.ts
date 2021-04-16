import { IEmitter, IEventsChannelDTO } from "./IEmitter";

class Emitter implements IEmitter {
  private events: IEventsChannelDTO;

  constructor() {
    this.events = {};
  }

  on(eventName: string, callback: (...args: string[]) => void): void {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  }

  emit(eventName: string, ...args: string[]): void {
    if (!(eventName in this.events)) {
      return;
    }

    this.events[eventName].map((callback) => callback(...args));
  }
}

export { Emitter };
