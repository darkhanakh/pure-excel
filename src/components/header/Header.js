import ExcelComponent from '@core/ExcelComponent';

export default class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
      <input type="text" class="excel__header-input" value="Новая таблица" />

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
}
