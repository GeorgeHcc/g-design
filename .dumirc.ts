import { defineConfig } from 'dumi';
//https://d.umijs.org/config配置文档
import { SiteThemeConfig } from 'dumi-theme-antd-style';
import { featuresZh } from './config/features';
import { name } from './package.json';
const themeConfig: SiteThemeConfig = {
  name,
  logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',

  hero: {
    'zh-CN': {
      description: 'React组件库',
      actions: [
        {
          type: 'primary',
          text: '开始使用',
          link: '/guide',
        },
        {
          text: 'Github',
          link: 'https://github.com/GeorgeHcc/g-design',
          openExternal: true,
        },
      ],
      features: featuresZh,
    },
    'en-US': {
      description: 'dumi2 theme similar to antd v5 website',
      actions: [
        {
          type: 'primary',
          text: 'Start',
          link: '/guide-en',
        },
        {
          text: 'Config',
          link: '/config-en',
        },
      ],
    },
  },
  // socialLinks: { github: homepage },
  apiHeader: {
    pkg: name,
    sourceUrl: `{github}/tree/master/src/components/{atomId}/index.tsx`,
    docUrl: `{github}/tree/master/example/docs/components/{atomId}.{locale}.md`,
  },
  footer: ` Made with ❤️ by every ${name} members `,
};
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig,
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'src/components',
      },
    ],
  },
});
