import type { ButtonProps } from './interface';
import { createMemo, mergeProps } from 'solid-js';
import { composite } from 'seemly';
import { createHoverColor, createPressedColor } from '@/_utils/color';
import { useTheme } from '@/theme/ThemeProvider';
import defaultButtonTheme from '@/button/styles';

import '../styles/index.scss';

export default (props: ButtonProps) => {
  // merge props 合并属性，将默认属性和传入的属性合并
  const theme = mergeProps(
    defaultButtonTheme,
    useTheme() || props?.theme || {},
  );

  const cssVars = createMemo(() => {
    const vars = {
      '--c-button-background': theme.background,
      '--c-button-color': theme.buttonTextColor,
      '--c-button-cursor': 'pointer',
      '--c-button-border-width': theme.buttonBorderWidth,
      '--c-button-border-color': theme.buttonBorderColor,
      '--c-button-border-radius': theme.buttonBorderRadius,
      '--c-button-background-hover': createHoverColor(theme.background),
      '--c-button-background-pressed': createPressedColor(theme.background),
    };

    // type 类型
    if (props.type === 'primary') {
      vars['--c-button-background'] = theme.primaryDefault;
      vars['--c-button-color'] = '#ffffff';
      vars['--c-button-border-color'] = theme.primarySuppl;
      vars['--c-button-background-hover'] = theme.primaryHover;
      vars['--c-button-background-pressed'] = theme.primaryActive;
    } else if (props.type === 'info') {
      vars['--c-button-background'] = theme.infoColor;
      vars['--c-button-color'] = '#ffffff';
      vars['--c-button-border-color'] = theme.infoColorSuppl;
      vars['--c-button-background-hover'] = theme.infoColorHover;
      vars['--c-button-background-pressed'] = theme.infoColorActive;
    } else if (props.type === 'success') {
      vars['--c-button-background'] = theme.successColor;
      vars['--c-button-color'] = '#ffffff';
      vars['--c-button-border-color'] = theme.successColorSuppl;
      vars['--c-button-background-hover'] = theme.successColorHover;
      vars['--c-button-background-pressed'] = theme.successColorActive;
    } else if (props.type === 'warning') {
      vars['--c-button-background'] = theme.warningColor;
      vars['--c-button-color'] = '#ffffff';
      vars['--c-button-border-color'] = theme.warningColorSuppl;
      vars['--c-button-background-hover'] = theme.warningColorHover;
      vars['--c-button-background-pressed'] = theme.warningColorActive;
    } else if (props.type === 'error') {
      vars['--c-button-background'] = theme.errorColor;
      vars['--c-button-color'] = '#ffffff';
      vars['--c-button-border-color'] = theme.errorColorSuppl;
      vars['--c-button-background-hover'] = theme.errorColorHover;
      vars['--c-button-background-pressed'] = theme.errorColorActive;
    }

    if (props.disabled) {
      vars['--c-button-background'] = composite(
        vars['--c-button-background'],
        '#ffffff88',
      );
      vars['--c-button-border-color'] = composite(
        vars['--c-button-border-color'],
        '#ffffff88',
      );
      vars['--c-button-color'] = composite(
        vars['--c-button-color'],
        '#ffffff88',
      );
      vars['--c-button-cursor'] = 'not-allowed';
    }
    return vars;
  });

  return (
    <>
      <button
        disabled={props.disabled}
        class={`xs c-button${props.class ? ' ' + props.class : ''}`}
        style={cssVars()}
      >
        {props.children}
      </button>
    </>
  );
};
