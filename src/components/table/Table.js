import ExcelComponent from '@core/ExcelComponent';
import createTable from './table.template';

export default class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mousemove'],
    });
  }

  toHTML() {
    return createTable(50);
  }

  onClick() {
    console.log('Click');
  }

  onMousedown() {
    console.log('mousedown');
  }

  onMousemove() {
    console.log('mousemove');
  }
}
