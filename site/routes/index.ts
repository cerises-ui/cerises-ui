import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';

import Home from 'site/pages/home';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/components',
    children: [
      {
        path: '/button',
        component: lazy(() => import('docs/components/button.mdx')),
      },
    ],
  },
  {
    path: '**',
    component: lazy(() => import('site/pages/404')),
  },
];
