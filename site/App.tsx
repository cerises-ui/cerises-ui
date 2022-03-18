import type { Component } from 'solid-js';
import { useRoutes, useLocation } from 'solid-app-router';
import Button from '../docs/components/button.mdx';
import { routes } from './routes';

import SiteHeader from 'site/layout/SiteHeader';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <>
      <div class="container mx-auto">
        <SiteHeader />
        <main class="flex divide-x">
          <div class="w-60 p-4">TODOs</div>
          <div class="p-4 min-h-min">
            <Route />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
