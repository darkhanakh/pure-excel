import DOMListener from '@core/DOMListener';

export default class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

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
