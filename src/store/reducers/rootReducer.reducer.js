// Чистая функция
import {CHANGE_TEXT, CHANGE_STYLES, TABLE_RESIZE} from "../actions/types.actions";
export default function rootReducer(state, action) {
  let field;
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === "col" ? "colState" : "rowState";
      return { ...state, [field]: value(state, field, action) }; // id value type
    case CHANGE_TEXT:
      return {
        ...state,
        currentText: action.data.value,
        [field]: value(state, field, action),
      };
    case CHANGE_STYLES:
      return {...state, currentStyles: action.data};
    default:
      return state;
  }
}

function value(state, field, action) {
  const val = state[field] || {};
  val[action.data.id] = action.data.value;
  return val;
}
