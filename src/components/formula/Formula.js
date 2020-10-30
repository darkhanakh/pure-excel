import ExcelComponent from '@core/ExcelComponent';

export default class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: [],
    });
  }

  toHTML() {
    return `
      <div class="excel__formula-icon">fx</div>
      <div class="excel__formula-input" contenteditable spellcheck="false"></div>
    `;
  }
}
