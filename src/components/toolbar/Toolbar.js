import createToolbar from "@/components/toolbar/toolbar.template";
import ExcelStateComponent from "@core/ExcelStateComponent";
import $ from "@core/dom";
import {defaultStyles} from "@/constants";

export default class Toolbar extends ExcelStateComponent {
  static className = "excel__toolbar";

  constructor($root, options) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
      subscribe: ['currentStyles'],
      ...options,
    });
  }

  prepare() {
    this.initState(defaultStyles);
  }

  get template() {
    return createToolbar(this.state);
  }

  toHTML() {
    return this.template;
  }

  onClick(e) {
    const $target = $(e.target);

    if ($target.dataset.type === 'button') {
      const value = JSON.parse($target.dataset.value);
      this.$trigger('toolbar:applyStyle', value);
    }
  }

  storeChanged(changes) {
    this.setState(changes.currentStyles);
  }
}
