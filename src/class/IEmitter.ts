interface IEventsChannelDTO {
  eventName?: [() => void];
}

interface IEmitter<T = void> {
  /**
   * call an event in events stack
   *
   * @param eventName event to register
   * @param callback function to throw when call the eventName
   */
  on(eventName: string, callback: (...args: string[]) => T): void;

  /**
   * registre a new event
   *
   * @param eventName event to call
   */
  emit(eventName: string, ...args: string[]): void;
}

export { IEmitter, IEventsChannelDTO };
