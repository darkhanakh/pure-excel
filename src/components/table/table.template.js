const CODES = {
  A: 65,
  Z: 91,
};

// const createCell = (el) => {
//   return `
//     <div class="cell" contenteditable>${el}</div>
//   `;
// };

const createCol = (col) => {
  return `
    <div class="column">${col}</div>
  `;
};

const createRow = (content) => {
  return `
  <div class="excel__table-row row">
    <div class="row__info"></div>
    <div class="row__data">${content}</div>
  </div>
  `;
};

const toChar = (_, index) => String.fromCharCode(CODES.A + index);

export default function createTable(rowsCount = 25) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];

  const cols = new Array(colsCount).fill('').map(toChar).map(createCol).join('');

  rows.push(createRow(cols));

  for (let i = 0; i <= rowsCount; i++) {
    rows.push(createRow(''));
  }

  return rows.join('');
}
