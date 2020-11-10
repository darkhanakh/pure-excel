import ExcelComponent from '@core/ExcelComponent';
import $ from '@core/dom';

export default class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      subscribe: ['currentText'],
      ...options,
    });
  }

  toHTML() {
    return /*html*/ `
      <div class="excel__formula-icon">fx</div>
      <div class="excel__formula-input" id="formula-input" contenteditable spellcheck="false"></div>
    `;
  }

  init() {
    super.init();

    this.formula = this.$root.find('#formula-input');

    this.$on('table:select', ($cell) => {
      this.formula.text($cell.text());
    });
  }

  storeChanged({ currentText }) {
    this.formula.text(currentText);
  }

  onInput(e) {
    this.$trigger('formula:input', $(e.target).text());
  }

  onKeydown(e) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(e.key)) {
      e.preventDefault();

      this.$trigger('formula:done');
    }
  }
}
