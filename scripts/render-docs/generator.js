import path from 'path';
import fs from 'fs-extra';

// module.exports = {
//   traverse,
// };

export async function traverse() {
  const res = getAll('docs');
  //   const res = await fs.readdirSync('docs');
  console.log(res);
}

const getAll = function (dir) {
  var filesNameArr = [];
  // 用个hash队列保存每个目录的深度
  var mapDeep = {};
  mapDeep[dir] = 0;
  // 先遍历一遍给其建立深度索引
  function getMap(dir, curIndex) {
    var files = fs.readdirSync(dir); //同步拿到文件目录下的所有文件名
    files.map(function (file) {
      //var subPath = path.resolve(dir, file) //拼接为绝对路径
      var subPath = path.join(dir, file); //拼接为相对路径
      var stats = fs.statSync(subPath); //拿到文件信息对象
      // 必须过滤掉node_modules文件夹
      mapDeep[file] = curIndex + 1;
      if (stats.isDirectory()) {
        //判断是否为文件夹类型
        return getMap(subPath, mapDeep[file]); //递归读取文件夹
      }
    });
  }
  getMap(dir, mapDeep[dir]);
  function readdirs(dir) {
    var files = fs.readdirSync(dir); //同步拿到文件目录下的所有文件名
    let children = files.map(function (file) {
      //var subPath = path.resolve(dir, file) //拼接为绝对路径
      var subPath = path.join(dir, file); //拼接为相对路径
      var stats = fs.statSync(subPath); //拿到文件信息对象
      if (stats.isDirectory()) {
        //判断是否为文件夹类型
        return readdirs(subPath, file, file); //递归读取文件夹
      }
      return `{ path: '${file.substring(
        0,
        file.lastIndexOf('.'),
      )}', component: lazy(() => import('${file}')), type: 'file'}`;
    });

    if (!Array.isArray(children) && !children.length > 0) children = `[]`;

    var result = `{ path: '${path.basename(dir)}', children: ${children} }`;
    return result; //返回数据
  }
  filesNameArr.push(readdirs(dir));
  return filesNameArr;
};
