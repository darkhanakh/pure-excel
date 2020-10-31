import ExcelComponent from '@core/ExcelComponent';
import createTable from './table.template';
import resizeHandler from './table.resizeHandler';
import { shouldResize } from './table.helpers';

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
    if (shouldResize(e)) {
      resizeHandler(this.$root, e);
    }
  }
}
