import { getAllRoutes } from './generator.js';
import fs from 'fs-extra';

const template = `
import { RouteDefinition } from 'solid-app-router';
import { lazy } from 'solid-js';

export default ${await getAllRoutes('docs')} as { children: RouteDefinition[] };
`;

fs.writeFileSync('site/routes/docs.ts', template);
