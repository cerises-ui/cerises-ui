import { RouteDefinition } from 'solid-app-router';
import { lazy } from 'solid-js';

export default {
  path: 'docs',
  children: [
    {
      path: 'components',
      children: [
        {
          path: 'button',
          component: lazy(() => import('docs/components/button.mdx')),
        },
        {
          path: 'card',
          component: lazy(() => import('docs/components/card.mdx')),
        },
        {
          path: 'tabs',
          component: lazy(() => import('docs/components/tabs.mdx')),
        },
      ],
    },
    {
      path: 'installation',
      children: [
        {
          path: 'theme',
          component: lazy(() => import('docs/installation/theme.mdx')),
        },
      ],
    },
  ],
} as { children: RouteDefinition[] };
