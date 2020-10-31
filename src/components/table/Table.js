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
        $cells = this.$root.findAll(`[data-col="${$parent.dataset.col}"]`),
        type = $resizer.dataset.resize;

      document.onmousemove = (event) => {
        if (type === 'col') {
          $parent.css({
            width: `${coordinates.width + (event.pageX - coordinates.right)}px`,
          });

          $cells.forEach(
            (el) => (el.style.width = `${coordinates.width + (event.pageX - coordinates.right)}px`),
          );
        } else {
          const delta = event.pageY - coordinates.bottom;
          $parent.css({
            height: `${coordinates.height + delta}px`,
          });
        }
      };
      document.onmouseup = () => (document.onmousemove = null);
    }
  }
}
