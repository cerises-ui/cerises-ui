export default (props) => {
  return (
    <>
      <div
        class={
          'w-full p-6 border-1 space-y-6 rounded' +
          (props.class ? ' ' + props.class : '')
        }
      >
        <span class="text-xl">{props.title}</span>
        <div>{props.children}</div>
      </div>
    </>
  );
};
