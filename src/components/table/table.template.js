'use strict';

import { CODES, createCell, createCol, createRow, toChar } from './table.helpers';

export default function createTable(rowsCount = 25) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];

  const cols = new Array(colsCount).fill('').map(toChar).map(createCol).join('');

  rows.push(createRow('', cols));

  for (let i = 0; i <= rowsCount; i++) {
    const cells = new Array(colsCount).fill('').map(createCell).join('');
    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}
