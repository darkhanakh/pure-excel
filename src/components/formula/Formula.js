import ExcelComponent from '@core/ExcelComponent';

export default class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options,
    });
  }

  toHTML() {
    return `
      <div class="excel__formula-icon">fx</div>
      <div class="excel__formula-input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(e) {
    e.preventDefault();
    const text = e.target.textContent.trim();
    this.$trigger('formula:input', text);
  }
}
