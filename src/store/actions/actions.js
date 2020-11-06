import { CHANGE_TEXT, TABLE_RESIZE } from './types.actions';

// Action creator
export const tableResize = (data) => {
  return {
    type: TABLE_RESIZE,
    data,
  };
};

export const changeText = (data) => {
  return {
    type: CHANGE_TEXT,
    data,
  };
};
