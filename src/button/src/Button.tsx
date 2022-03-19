import { createEffect, children, createMemo } from 'solid-js';

import '../styles/index.scss';

export default (props) => {
  const { disabled } = props;

  const vars = {
    '--c-button-background': props.background,
    '--c-button-color': props.color,
    '--c-button-cursor': 'pointer',
  };

  if (disabled) {
    vars['--c-button-cursor'] = 'not-allowed';
  }

  const cssVars = createMemo(() => vars);

  return (
    <>
      <button
        disabled={disabled}
        class={`c-button${props.class ? ' ' + props.class : ''}`}
        style={cssVars()}
      >
        {cssVars()}
        {props.children}
      </button>
    </>
  );
};
