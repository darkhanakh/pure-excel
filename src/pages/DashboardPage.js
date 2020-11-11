import Page from '@core/Page';
import $ from '@core/dom';

export default class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'dashboard').html(/*html*/ `
      <header class="dashboard__header">
        <h1 class="dashboard__header-title">Excel Dashboard</h1>
      </header>

      <div class="dashboard__new">
        <div class="dashboard__wrapper">
          <a href="#" class="dashboard__create">
            Новая <br />
            Таблица
          </a>
        </div>
      </div>

      <div class="dashboard__list dashboard__wrapper">
        <div class="dashboard__list-header">
          <span>Название</span>
          <span>Дата открытия</span>
        </div>

        <ul class="dashboard__list-ul">
          <li class="dashboard__record">
            <a href="#">Таблица номер 1</a>
            <strong>26.10.2020</strong>
          </li>
          <li class="dashboard__record">
            <a href="#">Таблица номер 1</a>
            <strong>26.10.2020</strong>
          </li>
          <li class="dashboard__record">
            <a href="#">Таблица номер 1</a>
            <strong>26.10.2020</strong>
          </li>
          <li class="dashboard__record">
            <a href="#">Таблица номер 1</a>
            <strong>26.10.2020</strong>
          </li>
        </ul>
      </div>
    `);
  }
}
