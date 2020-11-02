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

export { capitalize, range };
