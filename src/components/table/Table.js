import ExcelComponent from '@core/ExcelComponent';
import createTable from './table.template';
import resizeHandler from './table.resizeHandler';
import { isCell, matrix, nextSelector, shouldResize } from './table.helpers';
import TableSelection from './TableSelection';
import $ from '@core/dom';
import * as actions from '@/store/actions/actions';
import { defaultStyles } from '@/constants';

export default class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options,
    });
  }

  toHTML() {
    return createTable(50, this.store.getState());
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.find('[data-id="1:1"]');
    this.selectCell($cell);

    this.$on('formula:input', (data) => {
      this.selection.current.text(data);
      this.updateTextInStore(data);
    });

    this.$on('formula:done', () => {
      this.selection.current.focus();
    });

    this.$on('toolbar:applyStyle', (val) => {
      this.selection.applyStyle(val);
      this.$dispatch(
        actions.applyStyle({
          val,
          ids: this.selection.selectedIds,
        })
      );
    });
  }

  selectCell($cell) {
    this.selection.select($cell);
    this.$trigger('table:select', $cell);
    const styles = $cell.getStyles(Object.keys(defaultStyles));
    // console.log('styles to dispatch', styles);
    this.$dispatch(actions.changeStyles(styles));
  }

  async resizeTable(e) {
    try {
      const data = await resizeHandler(this.$root, e);
      this.$dispatch(actions.tableResize(data));
    } catch (e) {
      console.error('Resize error', e);
    }
  }

  onMousedown(e) {
    if (shouldResize(e)) {
      this.resizeTable(e);
    } else if (isCell(e)) {
      const $target = $(e.target);
      if (e.shiftKey) {
        const $selectedCells = matrix(
          $target,
          this.selection.current
        ).map((id) => this.$root.find(`[data-id="${id}"]`));
        this.selection.selectGroup($selectedCells);
      } else {
        this.selectCell($target);
      }
    }
  }

  onKeydown(e) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowDown',
      'ArrowUp',
      'ArrowLeft',
      'ArrowRight',
    ];

    const { key } = e;

    if (keys.includes(key) && !e.shiftKey) {
      e.preventDefault();
      const id = this.selection.current.id(true);

      const $next = this.$root.find(nextSelector(key, id));
      this.selectCell($next);
    }
  }

  updateTextInStore(value) {
    this.$dispatch(
      actions.changeText({
        id: this.selection.current.id(),
        value,
      })
    );
  }

  onInput(e) {
    // this.$trigger('table:input', $(e.target));
    this.updateTextInStore($(e.target).text());
  }
}
