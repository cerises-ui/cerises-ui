import { Input } from './interface';

export default (props: Input) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};
