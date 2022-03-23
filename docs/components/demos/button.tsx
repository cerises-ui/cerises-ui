import CButton from '@/button/index';
import Theme from '@/theme';

export default (props) => {
  return (
    <>
      <Theme>
        <CButton>{props.children}</CButton>
      </Theme>
    </>
  );
};
