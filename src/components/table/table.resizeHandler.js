'use strict';
import $ from '@core/dom';

export default function resizeHandler($root, e) {
  return new Promise((resolve) => {
    const $resizer = $(e.target),
      $parent = $resizer.parent('[data-type="resizable"]'),
      type = $resizer.dataset.resize,
      coordinates = $parent.getCoordinates(),
      sideProp = type === 'col' ? 'bottom' : 'right';

    let value;

    $resizer.css({
      opacity: 1,
      [sideProp]: '-5000px',
    });

    document.onmousemove = (event) => {
      if (type === 'col') {
        const delta = event.pageX - coordinates.right;
        value = coordinates.width + delta;

        $resizer.css({ right: -delta + 'px' });
      } else {
        const delta = event.pageY - coordinates.bottom;
        value = coordinates.height + delta;
        $resizer.css({ bottom: -delta + 'px' });
      }
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;

      if (type === 'col') {
        $parent.css({
          width: `${value}px`,
        });
        $root
          .findAll(`[data-col="${$parent.dataset.col}"]`)
          .forEach((el) => (el.style.width = `${value}px`));
      } else {
        $parent.css({
          height: `${value}px`,
        });
      }

      resolve({
        value,
        type,
        id: $parent.dataset[type],
      });

      $resizer.css({
        opacity: 0,
        bottom: 0,
        right: 0,
      });
    };
  });
}
