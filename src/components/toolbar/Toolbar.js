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
    const $parent = $target.parent('[data-type="button"]');
    if ($parent) {
      if ($parent.dataset.value) {
        const style = JSON.parse($parent.dataset.value);

        this.$trigger('toolbar:applyStyle', style);
      }
    }
  }

  storeChanged(changes) {
    this.setState(changes.currentStyles);
  }
}
