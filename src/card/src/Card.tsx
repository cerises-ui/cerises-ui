export default (props) => {
  return (
    <>
      <div class="w-full p-6 border-1 space-y-6">
        <div>{props.title}</div>
        <div>{props.children}</div>
      </div>
    </>
  );
};
