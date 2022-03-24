import type { Component } from 'solid-js';
import { useRoutes, useLocation } from 'solid-app-router';
import { routes } from './routes';
import './styles/index.scss';

import SiteHeader from 'site/layout/SiteHeader';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <>
      <div class="container mx-auto">
        <SiteHeader />
        <Route />
      </div>
    </>
  );
};

export default App;
