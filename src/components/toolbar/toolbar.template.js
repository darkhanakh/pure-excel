const toButton = button => {
  return `
      <div 
      class="excel__toolbar-button button ${button.active ? 'button--active' : ''}" 
      data-type="button"
      data-value=${JSON.stringify(button.value)}
      >
        <span class="material-icons"> ${button.icon} </span>
      </div>
    `;
};


export default function createToolbar() {
  const buttons = [
      {
          icon: 'format_align_left',
          active: false,
          value: {textAlign: 'left'},
      },
      {
          icon: 'format_align_justify',
          active: false,
          value: {textAlign: 'center'},
      },
      {
          icon: 'format_align_right',
          active: false,
          value: {textAlign: 'right'},
      },
      {
          icon: 'format_bold',
          active: false,
          value: {fontWeight: 'bold'},
      },
      {
          icon: 'format_italic',
          active: false,
          value: {fontStyle: 'italic'},
      },
      {
          icon: 'format_underlined',
          active: false,
          value: {textDecoration: 'underline'},
      },
  ];
  return buttons.map(toButton).join('');
}
