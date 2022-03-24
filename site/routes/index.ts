import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';
import docs from './docs';

import Home from 'site/pages/Home';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: 'docs',
    component: lazy(() => import('site/pages/Docs')),
    children: docs.children,
  },
  // ...docs.children,
  {
    path: '**',
    component: lazy(() => import('site/pages/404')),
  },
];
