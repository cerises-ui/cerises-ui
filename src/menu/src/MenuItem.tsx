import { MenuProps } from './interface';

export default (props: MenuProps) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};
