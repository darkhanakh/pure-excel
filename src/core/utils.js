import {defaultStyles} from "@/constants";

function capitalize(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const range = (s, e) => {
  if (s > e) {
    [e, s] = [s, e];
  }
  return new Array(e - s + 1).fill('').map((_, index) => index + s);
};

const storage = (key, data = null) => {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
};

const isEqual = (a, b) => {
  if (typeof a === 'object' && b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return a === b;
};

const camelCaseToDashCase = str => str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);

const toInlineStyles = (styles = {}) => {
  return Object.keys(styles)
      .map((key) => `${camelCaseToDashCase(key)}: ${styles[key]}`)
      .join("; ");
};

const normalize = s => ({
  ...s,
  currentStyles: defaultStyles,
  currentText: ''
});

export { capitalize, range, storage, isEqual, camelCaseToDashCase, toInlineStyles, normalize };
