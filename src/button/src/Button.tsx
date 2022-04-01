import type { ButtonProps } from './interface';

import '../styles/index.scss';

export default (props: ButtonProps) => {
  console.log(props);
  return (
    <>
      <button
        class={`c-button${props.class ? ' ' + props.class : ''}`}
        size={props.size}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
};
