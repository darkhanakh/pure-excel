import ExcelComponent from '@core/ExcelComponent';
import createTable from './table.template';
import resizeHandler from './table.resizeHandler';
import { isCell, shouldResize } from './table.helpers';
import TableSelection from './TableSelection';
import $ from '@core/dom';

export default class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'click'],
    });
  }

  toHTML() {
    return createTable(50);
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.find('[data-id="1:1"]');
    this.selection.select($cell);
  }

  onMousedown(e) {
    if (shouldResize(e)) {
      resizeHandler(this.$root, e);
    }
  }

  onClick(e) {
    if (isCell(e)) {
      const target = $(e.target);
      this.selection.select(target);
    }
  }
}
