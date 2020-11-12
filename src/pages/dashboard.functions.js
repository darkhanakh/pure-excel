import {storage} from "@core/utils";

const toHTML = (key) => {
  const model = storage(key);
  const id = key.split(':')[1];
  console.log(model);
  return /*html*/ `
      <li class="dashboard__record">
          <a href="#excel/${id}">${model.title}</a>
          <strong>
            ${new Date(model.openedData).toLocaleDateString()}           
            ${new Date(model.openedData).toLocaleTimeString()}
          </strong>
      </li>
    `;
};

// excel: id(123)
const getAllKeys = () => {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('excel')) {
      continue;
    } else {
      keys.push(key);
    }
  }
  return keys;
};

export const createRecordsTable = () => {
  const keys = getAllKeys();

  if (!keys.length) {
    return `<p class="records-none">Вы пока не создали ни одной записи</p>`;
  }

  return /*html*/ `
        <div class="dashboard__list-header">
          <span>Название</span>
          <span>Дата открытия</span>
        </div>

        <ul class="dashboard__list-ul">
            ${keys.map(toHTML).join('')}
        </ul>
    `;
};
