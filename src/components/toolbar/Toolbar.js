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
        const key = Object.keys(style)[0];

        this.$trigger('toolbar:applyStyle', style);

        this.setState({
          [key]: style[key],
        });
      }
    }
  }
}
