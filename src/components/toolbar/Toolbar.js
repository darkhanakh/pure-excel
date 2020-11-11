import createToolbar from "@/components/toolbar/toolbar.template";
import ExcelStateComponent from "@core/ExcelStateComponent";
import $ from "@core/dom";

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
    const initialState = {
      textAlign: "left",
      fontWeight: "normal",
      textDecoration: "none",
      fontStyle: "normal",
    };
    this.initState(initialState);
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
        this.setState({
          [key]: style[key],
        });
        console.log(this.state);
      }
    }
  }
}
