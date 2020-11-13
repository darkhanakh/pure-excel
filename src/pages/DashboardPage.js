import Page from '@core/Page';
import $ from '@core/dom';
import {createRecordsTable} from "@/pages/dashboard.functions";

export default class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString();
    return $.create('div', 'dashboard').html(/*html*/ `
      <header class="dashboard__header">
        <h1 class="dashboard__header-title">Excel Панель управления</h1>
      </header>
    
      <div class="dashboard__new">
        <div class="dashboard__wrapper">
          <a href="#excel/${now}" class="dashboard__create">
            Новая <br /> 
            Таблица
          </a>
        </div>
      </div>

      <div class="dashboard__list dashboard__wrapper">
        ${createRecordsTable()}
      </div>
    `);
  }
}
