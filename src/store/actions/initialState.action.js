'use strict';

import {normalize, storage} from '@core/utils';
import {defaultStyles, defaultTitle} from "@/constants";

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {}, // {0:1: 'aa'}
  stylesState: {},
  currentText: '',
  title: defaultTitle,
  currentStyles: defaultStyles,
};

export const initialState = storage('excel-state') ? normalize(storage('excel-state')) : defaultState;
