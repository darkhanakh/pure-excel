import DOMListener from '@core/DOMListener';

export default class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }

  // Возвращает шаблон компонента
  toHTMl() {
    return '';
  }

  init() {
    this.createDOMListeners();
  }
}
