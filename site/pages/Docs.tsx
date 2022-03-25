import { Outlet } from 'solid-app-router';
import SideMenu from 'site/components/SideMenu';
export default () => {
  return (
    <>
      <main class="flex divide-x">
        <div class="w-60 p-4">
          <SideMenu />
        </div>
        <div class="p-4 w-full">
          <Outlet />
        </div>
      </main>
    </>
  );
};
