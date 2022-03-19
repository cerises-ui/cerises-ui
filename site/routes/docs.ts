
import { RouteDefinition } from 'solid-app-router';
import { lazy } from 'solid-js';

export default { path: 'docs', children: [{ path: 'components', children: [{ path: 'button', component: lazy(() => import('docs/components/button.mdx'))}] }] } as { children: RouteDefinition[] };
