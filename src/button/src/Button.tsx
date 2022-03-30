import type { ButtonProps } from './interface';

import '../styles/index.scss';

export default (props: ButtonProps) => {
  return (
    <>
      <button
        disabled={props.disabled}
        class={`c-button${props.class ? ' ' + props.class : ''}`}
      >
        {props.children}
      </button>
    </>
  );
};
