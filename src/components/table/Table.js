import ExcelComponent from '@core/ExcelComponent';
import $ from '@core/dom';
import createTable from './table.template';

export default class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(50);
  }

  onMousedown(e) {
    if (e.target.dataset.resize) {
      const $resizer = $(e.target),
        $parent = $resizer.parent('[data-type="resizable"]'),
        coordinates = $parent.getCoordinates(),
        $cells = this.$root.findAll(`[data-col="${$parent.dataset.col}"]`);

      document.onmousemove = (event) => {
        const val = `${coordinates.width + (event.pageX - coordinates.right)}px`;
        $parent.$el.style.width = val;

        $cells.forEach((el) => (el.style.width = val));
      };
      document.onmouseup = () => (document.onmousemove = null);
    }
  }
}
