'use strict';

import { capitalize } from './utils';

export default class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided to DOMListener class');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  createDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      /* 
      root обьект без метода addEventListener и я прописал метод on 
      что копирует функционал метода addEventListener это я смог реализовать 
      потомучто у обьекта $root есть нативный элемент $el у которого присутсвует вышесказанный метод 
      */
      if (!this[method]) {
        throw new Error(`No such method ${method} in Component ${this.name}`);
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

function getMethodName(eventType) {
  return `on${capitalize(eventType)}`;
}
