import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';
import docs from './docs';

import Home from 'site/pages/home';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  ...docs.children,
  {
    path: '**',
    component: lazy(() => import('site/pages/404')),
  },
];
