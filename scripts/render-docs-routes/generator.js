import path from 'path';
import fs from 'fs-extra';

export const getAllRoutes = function (dir) {
  const routes = [];
  const mapDeep = {
    [dir]: 0,
  };
  function getMap(dir, curIndex) {
    const files = fs.readdirSync(dir);
    files.map(function (file) {
      const subPath = path.join(dir, file);
      const stats = fs.statSync(subPath);
      mapDeep[file] = curIndex + 1;
      if (stats.isDirectory()) return getMap(subPath, mapDeep[file]);
    });
  }
  getMap(dir, mapDeep[dir]);
  function readdir(dir) {
    const files = fs.readdirSync(dir);
    if (files.length === 0) return;
    let child = [];
    for (let file of files) {
      const subPath = path.join(dir, file).replace(/\\/g, '/');
      const stats = fs.statSync(subPath);
      if (stats.isDirectory()) {
        const res = readdir(subPath, file, file);
        res && child.push(res);
      }
      if (file.endsWith('.mdx')) {
        child.push(
          `{ path: '${file.substring(
            0,
            file.lastIndexOf('.'),
          )}', component: lazy(() => import('${subPath}'))}`,
        );
      }
    }
    if (child.length === 0) return;
    return `{ path: '${path.basename(dir)}', children: [${child}] }`;
  }
  const dirTemplate = readdir(dir);
  if (dirTemplate) routes.push(dirTemplate);
  return `${routes.join(', ')}`;
};
