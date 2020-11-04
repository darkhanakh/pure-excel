'use strict';

import { CODES, createCell, createCol, createRow, toChar, withWidthFrom } from './table.helpers';

export default function createTable(rowsCount = 25, state = {}) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(withWidthFrom(state))
    .map(createCol)
    .join('');

  rows.push(createRow('', cols));

  for (let row = 0; row <= rowsCount; row++) {
    const cells = new Array(colsCount).fill('').map(createCell(state, row)).join('');
    rows.push(createRow(row + 1, cells));
  }

  return rows.join('');
}
