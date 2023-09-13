---
nav:
  order: 2
  title: 指南
group:
  title: 介绍
  order: -1
title: 简介
---

# 这是什么🎈？

这是一个React组件库，由一群热爱`coding`的同学一起探索、建设。我们尝试<mark>从零到一</mark>完整实现一个还不错的组件库，当然我们并不是要重复造轮子
目前我们的库基于`dumi`研发，如果你还不了解`dumi`那么有必要在开发前先花个几分钟阅读相关文档配置：

- [文档主题配置](https://dumi-theme-antd-style.arvinx.app/config)
- [dumi相关配置](https://d.umijs.org/config)
  :::warning
  目前该项目还处于初期建设中，很多方案还没有落地。如果你有不错的`ideas`或者一些关于组件库研发的最佳实践，欢迎贡献此文档或者加入😊😊
  :::

## 问题反馈

如果在使用过程中发现任何问题、或者有改善建议，欢迎在 GitHub Issues 进行反馈：[https://github.com/GeorgeHcc/g-design/issues](https://github.com/GeorgeHcc/g-design/issues)

如果你有不错的`ideas`也可以在Github Discussions上讨论：[https://github.com/GeorgeHcc/g-design/discussions](https://github.com/GeorgeHcc/g-design/discussions)
或加入我们的讨论群：

<img src="https://cdn.jsdelivr.net/gh/GeorgeHcc/GeorgeHcc@main/assets/blog/g-design-wx.jpg" width='430px' height="600px"/>

### 为什么要有这个组件库？

市场上已经有了许多成熟的组件库，为什么我们还要去做？重复造轮子？
@刚刚 不同类型的项目需要的组件、功能不同，更有些项目有着特殊的组件需求，因而尽管市场上有成熟的组件库，但可能在某些方面不能满足用户的需求，比如性能、UI设计或者技术。时代在不断的发展，新的技术和框架不断涌现，利用最新的技术和工具开发新的组件库是组件库革新进步的必然选择，除此之外，开发组件库，也可以开发人员(we)有学习和尝试的机会，在通过构建开放组件库的过程中深入了解新技术、设计模式和最佳实践，提高我们的开发效率。

### 我们的组件库能解决项目开发中什么痛点？

### 我们的组件库有什么优势？

- 精美的UI，交互性能良好
- 通过提炼出业务中的一些最佳实践，让开发更加符合直觉
- 通过脚手架提供一套基于gdesign的最佳实践（画个饼🍪）

## 什么是g-design？

（名字瞎取的，不是重点！）g-design是一个react开源组件库，目前阶段我们致力于抄 借鉴社区一些优秀实现（避免重复造轮子），自己研发一套具有以下特色的企业级组件库（可以不限于toB）
我们期望它有以下特性

- 轻量级
- 高性能
- 组件互联（流程自动化）

### 轻量级

更小的生产体积，支持tree-shaking，按需导入

### 高性能

默认无需做性能优化，我们提供一键提升性能。如普通表格->高性能表格

```javascript
<Table />//默认普通组件

<Table pref/>//手动开启高性能组件

<Table pref='auto'/>//由系统（core）接管数据，进行状态检测，性能分析等自动提升性能
```

### 组件互联@cherry

- 什么是组件互联？
  通过内部维护一个core实现一系列组件状态的流程自动化

## 怎样做好这个项目?

## 开始

### 1. 给项目取一个响亮的名字

万事开头难，取一个合适的名字更是难上加难，取名的时候记得先去npm搜索一下名称是否被占用哦😝

- CI-design 从特性出发（CI：Components Interconnection组件互联、connected intelligence智能互联）
-

### 2. 落地UI风格

组件库的整体风格也是我们这个项目的KPI，目前市场上已经有很多成熟的组件库，而我们的产品定位在轻量级，和同级别的竞争我们至少得有一个突出的亮点，比如一眼就能吸引用户的UI 设计.....

目前我们的团队是没有UI的😥但我们挑选了一些还不错的设计风格

:::info{title=UI可参考的资源}

- https://www.radix-ui.com/themes/docs/theme/color
- https://ant-design.antgroup.com/docs/spec/introduce-cn antd设计风格

:::

## 研发框架

目前我们的项目是基于`dumi`研发，dumi是一款为组件开发场景而生的静态站点框架，与 `father`一起为开发者提供一站式的组件开发体验（类似antd）
:::success{title=注意}
Core 分支也可以做这件事情，研发一套我们自己的架构
:::

## 样式编写方案选择

- 原子化CSS
  - 使用`tailwind css`
  - 基于`unocss引擎`打造一套适用于该项目的原子级CSS
- [cssinJS](https://cssinjs.org/?v=v10.10.0)
- `Sass`、`Less`等css module

## 分支管理

目前主要有以下几个分支

- `master` 主分支
- `docs` 组件库文档
- `basic-features` 基础/通用组件、其他
- `features` 高性能组件/其他特性 可单独抽离出npm包发布
- `core` 内核（一些工程化的东西）、其他
- `test` 测试分支

---

## 加入这个项目你能收获什么？

1. 了解一个开源项目从零到发布
2. 独立完成具有挑战性的项目，提升解决问题能力✨
3. 。。。。
