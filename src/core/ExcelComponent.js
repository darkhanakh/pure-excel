import DOMListener from '@core/DOMListener';

export default class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.observer = options.observer;
    this.unsubsribers = [];
    this.store = options.store;
    this.storeUnsub = null;

    this.prepare();
  }

  prepare() {}

  // Возвращает шаблон компонента
  toHTMl() {
    return '';
  }

  // оболочка для триггера и уведомление подписчиков
  $trigger(eventName, ...args) {
    this.observer.trigger(eventName, ...args);
  }

  // Подписка на event и оболочка для подписки
  $on(eventName, cb) {
    const unsub = this.observer.subscribe(eventName, cb);
    this.unsubsribers.push(unsub);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  $subscribe(cb) {
    this.storeUnsub = this.store.subscribe(cb);
  }

  init() {
    this.createDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubsribers.forEach((fn) => fn());
    this.storeUnsub();
  }
}
