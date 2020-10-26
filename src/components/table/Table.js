import ExcelComponent from '@core/ExcelComponent';

export default class Table extends ExcelComponent {
  static className = 'excel__table';

  toHTML() {
    return `
      <div class="excel__table-row row">
      <div class="row__info"></div>

      <div class="row__data">
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">A</div>
      </div>
    </div>

    <div class="row">
      <div class="row__info">1</div>

      <div class="row__data">
        <div class="cell selected" contenteditable>1</div>
        <div class="cell" contenteditable>2</div>
        <div class="cell" contenteditable>3</div>
      </div>
    </div>

    <div class="row">
      <div class="row__info">2</div>

      <div class="row__data">
        <div class="cell">1</div>
        <div class="cell">2</div>
        <div class="cell">3</div>
      </div>
    </div>
    `;
  }
}
