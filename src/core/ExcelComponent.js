import DOMListener from '@core/DOMListener';

export default class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.observer = options.observer;

    this.prepare();
  }

  prepare() {}

  // Возвращает шаблон компонента
  toHTMl() {
    return '';
  }

  init() {
    this.createDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }
}
