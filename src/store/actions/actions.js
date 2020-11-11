import {CHANGE_TEXT, CHANGE_STYLES, TABLE_RESIZE} from './types.actions';

// Action creator
export const tableResize = data => {
  return {
    type: TABLE_RESIZE,
    data,
  };
};

export const changeText = data => {
  return {
    type: CHANGE_TEXT,
    data,
  };
};

export const changeStyles = data => {
  return {
    type: CHANGE_STYLES,
    data
  };
};
