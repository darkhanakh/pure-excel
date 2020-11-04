import { TABLE_RESIZE } from './types.actions';

// Action creator
export const tableResize = (data) => {
  return {
    type: TABLE_RESIZE,
    data,
  };
};
