'use strict';

const CODES = {
  A: 65,
  Z: 91,
};

const createCell = () => {
  return /*html*/ `
    <div class="cell" contenteditable></div>
  `;
};

const createCol = (col) => {
  return /*html*/ `
    <div class="column">
      ${col}
      <div class="col-resize"></div>
    </div>
    
  `;
};

const createRow = (i, content) => {
  const resizer = i ? /*html*/ `<div class="row-resize"></div>` : '';

  return /*html*/ `
  <div class="excel__table-row row">
    <div class="row__info">
      ${i}
      ${resizer}
    </div>
    <div class="row__data">${content}</div>
  </div>
  `;
};

const toChar = (_, index) => String.fromCharCode(CODES.A + index);

export { CODES, createCell, createCol, createRow, toChar };
