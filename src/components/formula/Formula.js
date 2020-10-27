import ExcelComponent from '@core/ExcelComponent';

export default class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  toHTML() {
    return `
    <div class="excel__formula-icon">fx</div>
    <div class="excel__formula-input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(e) {
    console.log('Formula: On Input', e);
  }
}
