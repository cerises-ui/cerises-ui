import logo from 'site/public/logo.png';
import Tag from '@/tag';
import Button from '@/button';

export default () => {
  return (
    <>
      <main class="flex flex-col justify-center items-center space-y-6 mt-4">
        <img src={logo} alt="" />
        <div class="relative flex items-start space-x-4">
          <h1 class="text-5xl font-bold sm:2xl">CerisusUi 官方文档</h1>
          <div
            class="absolute right-0 sm:hidden"
            style="transform: translate3d(calc(100% + 10px),0,0)"
          >
            <Tag>
              <span class="text-xl font-bold">v0.0.1</span>
            </Tag>
          </div>
        </div>
        <span class="text-xl text-gray-500">
          一个基于{' '}
          <span class="px-2 py-1 bg-gray-200 rounded text-black font-bold">
            SolidJS
          </span>{' '}
          的高性能轻量级组件库
        </span>

        <div class="space-x-6">
          <Button primary>开始</Button>
          <Button>了解更多</Button>
        </div>
      </main>
    </>
  );
};
