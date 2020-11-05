// Чистая функция
import { TABLE_RESIZE } from '../actions/types.actions';
export default function rootReducer(state, action) {
  let field;
  let prevState;
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState';
      prevState = state[field] || {};
      prevState[action.data.id] = action.data.value;
      return { ...state, [field]: prevState }; // id value type
    default:
      return state;
  }
}
