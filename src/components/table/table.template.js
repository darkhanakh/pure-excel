'use strict';

import { CODES, createCell, createCol, createRow, toChar } from './table.helpers';

export default function createTable(rowsCount = 25) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];

  const cols = new Array(colsCount).fill('').map(toChar).map(createCol).join('');

  rows.push(createRow('', cols));

  for (let row = 0; row <= rowsCount; row++) {
    const cells = new Array(colsCount).fill('').map(createCell(row)).join('');
    rows.push(createRow(row + 1, cells));
  }

  return rows.join('');
}
