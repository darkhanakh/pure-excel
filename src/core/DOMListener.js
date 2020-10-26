'use strict';

export default class DOMListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No $root provided to DOMListener class');
    }
    this.$root = $root;
  }
}
