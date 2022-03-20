import type { ButtonProps } from './interface';
import { createEffect, children, createMemo } from 'solid-js';
import { composite } from 'seemly';
import { createHoverColor, createPressedColor } from '@/_utils/color';

import '../styles/index.scss';

export default (props: ButtonProps) => {
  const { disabled, background } = props;

  const vars = {
    '--c-button-background': '--c-',
    '--c-button-color': props.color,
    '--c-button-cursor': 'pointer',
    '--c-button-background-hover': createHoverColor(background),
    '--c-button-background-pressed': createPressedColor(background),
  };

  if (background) {
    vars['--c-button-background'] = background;
    vars['--c-button-background-hover'] = composite(background, '#ffffff4d');
    vars['--c-button-background-pressed'] = composite(background, '#00000033');
  }

  if (disabled) {
    vars['--c-button-background'] = composite(
      vars['--c-button-background'],
      '#ffffff88',
    );
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
