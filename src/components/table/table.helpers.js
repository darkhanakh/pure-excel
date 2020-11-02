'use strict';
import { range } from '@core/utils';

const CODES = {
  A: 65,
  Z: 91,
};

// const createCell = (_, col) => /*html*/ `
//     <div class="cell" contenteditable data-col="${col + 1}"></div>
//   `;

const createCell = (row) => {
  return (_, col) => /*html*/ `
  <div 
    class="cell" 
    contenteditable 
    data-col="${col + 1}" 
    data-id="${row + 1}:${col + 1}" 
    data-type="cell">
  </div>
    `;
};

const createCol = (col, index) => /*html*/ `
    <div class="column" data-type="resizable" data-col="${index + 1}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;

const createRow = (i, content) => /*html*/ `
  <div class="row" data-type="resizable">
    <div class="row__info">
      ${i}
      ${i ? /*html*/ `<div class="row-resize" data-resize="row"></div>` : ''}
    </div>
    <div class="row__data">${content}</div>
  </div>
  `;

const toChar = (_, index) => String.fromCharCode(CODES.A + index);

const shouldResize = (e) => {
  return e.target.dataset.resize;
};

const isCell = (e) => e.target.dataset.type === 'cell';

const matrix = ($target, $current) => {
  const target = $target.id(true);
  const current = $current.id(true);
  const cols = range(current.col, target.col);
  const rows = range(current.row, target.row);

  return cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`));
    return acc;
  }, []);
};

export { CODES, createCell, createCol, createRow, toChar, shouldResize, isCell, matrix };
