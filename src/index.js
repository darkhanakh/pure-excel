import './scss/style.scss';
import Excel from './components/excel/Excel';
import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';
import Formula from './components/formula/Formula';
import Table from './components/table/Table';
import rootReducer from './store/rootReducer.reducer';
import Store from './core/Store';

const store = new Store(rootReducer, {
  tableTitle: 'lalal',
});

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store,
});

excel.render();
