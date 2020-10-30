'use strict';

const CODES = {
  A: 65,
  Z: 91,
};

const createCell = (_, col) => /*html*/ `
    <div class="cell" contenteditable data-col="${col + 1}"></div>
  `;

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

export { CODES, createCell, createCol, createRow, toChar };
