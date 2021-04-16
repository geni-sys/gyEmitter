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
    if (!(eventName in this.events)) return;

    this.events[eventName].map((callback) => callback(...args));
  }

  removeEvent(eventName: string, handler: () => void): number {
    if (!(eventName in this.events)) return 0;

    const handlerPosition = this.events[eventName].indexOf(handler);
    this.events[eventName].splice(handlerPosition, 1);

    return handlerPosition;
  }
}

export { Emitter };
