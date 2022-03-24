import { Outlet } from 'solid-app-router';

export default () => {
  return (
    <>
      <main class="flex divide-x">
        <div class="w-60 p-4">TODOs</div>
        <div class="p-4 w-full">
          <Outlet />
        </div>
      </main>
    </>
  );
};
