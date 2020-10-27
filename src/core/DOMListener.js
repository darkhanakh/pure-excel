'use strict';

export default class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided to DOMListener class');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  createDOMListeners() {
    console.log(this.listeners);
  }

  removeDOMListeners() {}
}
