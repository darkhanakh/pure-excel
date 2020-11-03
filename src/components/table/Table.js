import ExcelComponent from '@core/ExcelComponent';
import createTable from './table.template';
import resizeHandler from './table.resizeHandler';
import { isCell, matrix, nextSelector, shouldResize } from './table.helpers';
import TableSelection from './TableSelection';
import $ from '@core/dom';

export default class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown'],
      ...options,
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

    this.$on('formula:input', (data) => {
      this.selection.current.text(data);
    });
  }

  onMousedown(e) {
    if (shouldResize(e)) {
      resizeHandler(this.$root, e);
    } else if (isCell(e)) {
      const $target = $(e.target);
      if (e.shiftKey) {
        const $selectedCells = matrix($target, this.selection.current).map((id) =>
          this.$root.find(`[data-id="${id}"]`),
        );
        this.selection.selectGroup($selectedCells);
      } else {
        this.selection.select($target);
      }
    }
  }

  onKeydown(e) {
    const keys = ['Enter', 'Tab', 'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'];

    const { key } = e;

    if (keys.includes(key) && !e.shiftKey) {
      e.preventDefault();
      const id = this.selection.current.id(true);

      const $next = this.$root.find(nextSelector(key, id));
      this.selection.select($next);
    }
  }
}
