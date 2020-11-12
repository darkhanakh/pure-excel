'use strict';

import { clone, normalize } from '@core/utils';
import { defaultStyles, defaultTitle } from '@/constants';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {}, // {0:1: 'aa'}
  stylesState: {},
  currentText: '',
  title: defaultTitle,
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON(),
};

export const normalizeInitialState = (state) =>
  state ? normalize(state) : clone(defaultState);
