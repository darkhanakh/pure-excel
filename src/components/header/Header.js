import ExcelComponent from '@core/ExcelComponent';
import $ from "@core/dom";
import {changeTitle} from "@/store/actions/actions";
import {defaultTitle} from "@/constants";
import {debounce} from "@core/utils";
import ActiveRoute from "@core/routes/ActiveRoute";

export default class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
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
        <div class="excel__header-button button" data-type="delete">
          <span class="material-icons" data-type="delete"> delete </span>
        </div>

        <div class="excel__header-button button" data-type="exit">
          <span class="material-icons" data-type="exit"> exit_to_app </span>
        </div>
      </div>
    `;
  }

  onInput(e) {
    console.log('input');
    const $target = $(e.target);
    this.$dispatch(changeTitle($target.text()));
  }

  onClick(e) {
    const $target = $(e.target);
    const type = $target.dataset.type;
    if (type === 'delete') {
      const decision = confirm('Вы действительно хотите удалить данную страницу?');

      if (decision) {
        localStorage.removeItem(`excel:${ActiveRoute.param}`);
        ActiveRoute.navigate('');
      }
    } else if(type === 'exit') {
      ActiveRoute.navigate('');
    }
  }
}
