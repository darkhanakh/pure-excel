'use strict';

class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    } else {
      return this.$el.outerHTMl.trim();
    }
  }

  text(text) {
    this.$el.textContent = text;
  }

  clear() {
    this.html('');
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }

    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb);
  }

  off(eventType, cb) {
    this.$el.removeEventListener(eventType, cb);
  }

  parent(selector) {
    return $(this.$el.closest(selector));
  }

  getCoordinates() {
    return this.$el.getBoundingClientRect();
  }

  get dataset() {
    return this.$el.dataset;
  }

  find(sel) {
    return $(this.$el.querySelector(sel));
  }

  findAll(sel) {
    return this.$el.querySelectorAll(sel);
  }

  /* 
    {
      width: 100%,
      bgColor: red
    }
  */
  css(styles = {}) {
    Object.keys(styles).forEach((key) => (this.$el.style[key] = styles[key]));
  }

  addClass(...className) {
    this.$el.classList.add(...className);
  }

  removeClass(...className) {
    this.$el.classList.remove(...className);
  }

  hasClass(sel) {
    if (this.$el.classList.contains(sel)) {
      return true;
    }
    return false;
  }

  id(parse) {
    if (parse) {
      const parsed = this.id().split(':');
      return {
        row: +parsed[0],
        col: +parsed[1],
      };
    }
    return this.dataset.id;
  }

  focus() {
    this.$el.focus();
    return this;
  }
}

export default function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }

  return $(el);
};
