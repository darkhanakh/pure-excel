export default class Observer {
  constructor() {
    this.subscribers = {};
  }

  // Уведомлять слушателей если они есть
  /*
   * 'focus', 'make-it-work'
   * {}
   */
  trigger(eventName, ...args) {
    if (!Array.isArray(this.subscribers[eventName])) {
      return false;
    }
    this.subscribers[eventName].forEach((subscriber) => {
      subscriber(...args);
    });
    return true;
  }

  // Подписываемся на уведомление добавление подписчика
  subscribe(eventName, cb) {
    this.subscribers[eventName] = this.subscribers[eventName] || [];
    this.subscribers[eventName].push(cb);
    return () => {
      this.subscribers[eventName] = this.subscribers[eventName].filter(
        (subscriber) => subscriber !== cb,
      );
    };
  }
}
