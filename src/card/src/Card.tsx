export default (props) => {
  return (
    <>
      <div class="w-full p-6 border-1 space-y-6 rounded">
        <span class="text-xl">{props.title}</span>
        <div>{props.children}</div>
      </div>
    </>
  );
};
