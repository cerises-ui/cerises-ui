import './SiteHeader.module.css';
import logo from 'site/public/logo.png';

export default () => {
  return (
    <>
      <div class="header flex justify-between items-center p-4 border-b-1">
        <div class="flex items-center">
          <img class="h-10 w-10" src={logo} />
          <span class="ml-2">cerises-ui</span>
        </div>
      </div>
    </>
  );
};
