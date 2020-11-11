import ExcelComponent from '@core/ExcelComponent';
import $ from "@core/dom";
import {changeTitle} from "@/store/actions/actions";
import {defaultTitle} from "@/constants";

export default class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    });
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle;
    return `
      <input type="text" class="excel__header-input" value="${title}" />

      <div class="excel__header-buttons">
        <div class="excel__header-button button">
          <span class="material-icons"> delete </span>
        </div>

        <div class="excel__header-button button">
          <span class="material-icons"> exit_to_app </span>
        </div>
      </div>
    `;
  }

  onInput(e) {
    const $target = $(e.target);
    this.$dispatch(changeTitle($target.text()));
  }
}
