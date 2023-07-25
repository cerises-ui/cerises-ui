import type { ButtonProps } from './interface';

import '../styles/index.scss';

export default (props: ButtonProps) => {
  return (
    <>
      <button
        class={`c-button${props.class ? ' ' + props.class : ''}`}
        style={props.style}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
};
