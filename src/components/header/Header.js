import ExcelComponent from '@core/ExcelComponent';
import $ from "@core/dom";
import {changeTitle} from "@/store/actions/actions";
import {defaultTitle} from "@/constants";
import {debounce} from "@core/utils";

export default class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    });
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300);
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
    console.log('input');
    const $target = $(e.target);
    this.$dispatch(changeTitle($target.text()));
  }
}
