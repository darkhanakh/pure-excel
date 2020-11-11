"use strict";
import { camelCaseToDashCase, range } from "@core/utils";
import { defaultStyles } from "@/constants";

const CODES = {
  A: 65,
  Z: 91,
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 24;

const createCell = (state, row) => {
  return (_, col) => {
    const id = `${row + 1}:${col + 1}`;
    const data = state.dataState[id] || "";
    const styles = Object.keys(defaultStyles)
      .map((key) => `${camelCaseToDashCase(key)}: ${defaultStyles[key]}`)
      .join("; ");

    return /*html*/ `
    <div 
      class="cell" 
      contenteditable 
      data-col="${col + 1}" 
      data-id="${id}" 
      style="${styles}; width: ${getWidth(state.colState, col + 1)}px"
      data-type="cell"
      > ${data}
    </div>
    `;
  };
};

const createCol = ({ col, index, width }) => /*html*/ `
    <div class="column" data-type="resizable" data-col="${
      index + 1
    }" style="width: ${width}px">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;

const createRow = (i, content, state) => {
  const height = getHeight(state, i);
  return /*html*/ `
  <div class="row" data-type="resizable" data-row = "${i}" style="height: ${height}">
    <div class="row__info">
      ${i}
      ${i ? /*html*/ `<div class="row-resize" data-resize="row"></div>` : ""}
    </div>
    <div class="row__data">${content}</div>
  </div>
  `;
};

const toChar = (_, index) => String.fromCharCode(CODES.A + index);

const shouldResize = (e) => {
  return e.target.dataset.resize;
};

const isCell = (e) => e.target.dataset.type === "cell";

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

const nextSelector = (key, { col, row }) => {
  const MIN_VALUE = 1;
  switch (key) {
    case "Enter":
    case "ArrowDown":
      row++;
      break;
    case "Tab":
    case "ArrowRight":
      col++;
      break;
    case "ArrowLeft":
      if (col - 1 < MIN_VALUE) {
        col = MIN_VALUE;
      } else {
        col--;
      }
      break;
    case "ArrowUp":
      if (row - 1 < MIN_VALUE) {
        row = MIN_VALUE;
      } else {
        row--;
      }
      break;
  }

  return `[data-id="${row}:${col}"]`;
};

function getWidth(state = {}, index) {
  return state[index] || DEFAULT_WIDTH;
}

function getHeight(state, index) {
  return (state[index] || DEFAULT_HEIGHT) + "px";
}

const withWidthFrom = (state) => {
  return (col, index) => {
    return {
      col,
      index,
      width: getWidth(state.colState, index + 1),
    };
  };
};

export {
  CODES,
  createCell,
  createCol,
  createRow,
  toChar,
  shouldResize,
  isCell,
  matrix,
  nextSelector,
  getWidth,
  withWidthFrom,
};
