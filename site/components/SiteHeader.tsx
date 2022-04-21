import logo from 'site/assets/cerises.svg';
import './SiteHeader.scss';

export default () => {
  return (
    <>
      <div class="header">
        <div class="flex items-center">
          <img class="h-10 w-10" src={logo} />
          <span class="ml-2">cerises-ui</span>
        </div>
      </div>
    </>
  );
};
