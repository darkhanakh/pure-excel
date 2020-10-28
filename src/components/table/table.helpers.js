'use strict';

const CODES = {
  A: 65,
  Z: 91,
};

const createCell = () => {
  return `
    <div class="cell" contenteditable></div>
  `;
};

const createCol = (col) => {
  return `
    <div class="column">${col}</div>
  `;
};

const createRow = (i, content) => {
  return `
  <div class="excel__table-row row">
    <div class="row__info">${i}</div>
    <div class="row__data">${content}</div>
  </div>
  `;
};

const toChar = (_, index) => String.fromCharCode(CODES.A + index);

export { CODES, createCell, createCol, createRow, toChar };
