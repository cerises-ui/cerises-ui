import type { ButtonProps } from './interface';

import '../styles/index.scss';

export default (props: ButtonProps) => {
  console.log(props);
  return (
    <>
      <button
        class={`c-button${props.class ? ' ' + props.class : ''}`}
        style={props.style}
        size={props.size}
        type={props.type}
        plain={props.plain}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
};
