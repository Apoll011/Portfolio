# FolioSpace

[English Version](README.md)

![preview](srcssets/folio_space.gif)
> **📱 作者的 FolioSpace**: [https://simonaking.com/](https://simonaking.com/) - 看看 FolioSpace 在实际中的应用

FolioSpace 是一个 3D 项目展示工具，可以帮你创建具有流畅转场动画的在线作品集。

## 🚀 亮点功能

1. 🎭 **3D演示效果**
   - 基于 impress.js 的流畅3D转场动画
   - 沉浸式的项目浏览体验
   - 支持键盘、鼠标和触摸操作

2. 🗺️ **智能导航**
   - 创新的 MiniMap 导航系统
   - 实时显示当前位置和浏览进度
   - 可点击快速跳转到任意项目

3. 📱 **响应式设计**
   - 完美适配桌面端、平板和移动设备
   - 触摸友好的交互设计
   - 优雅的动画和过渡效果

4. 🌐 **GitHub 集成**
   - 实时获取并显示 GitHub 项目 star 数
   - 自动同步项目信息
   - 支持多种链接类型（演示、源码、文档等）

## 📝 使用说明

### 添加新项目

1. 在 `src/constants/projectsData.ts` 中添加项目配置
2. 准备项目预览图片和资源
3. 配置项目的3D位置和展示信息
4. 构建并部署更新

### 项目配置示例

```typescript
{
  id: 'my-project',
  name: '项目名称',
  title: '显示标题',
  icon: 'fas fa-star',
  status: 'completed', // 或 'in-progress'
  position: { x: 1000, y: 500, z: 0 },
  description: '项目描述...',
  tech: ['React', 'TypeScript'],
  links: [
    { type: 'demo', url: 'https://demo.com', text: '在线体验' },
    { type: 'code', url: 'https://github.com', text: '源码' }
  ],
  layout: 'standard', // 或 'reverse'
  image: './src/assets/project-preview.gif'
}
```

### 🎮 交互方式

- **键盘**: 空格键/方向键导航
- **鼠标**: 点击按钮或地图节点
- **触摸**: 滑动手势支持
- **地图**: 点击节点快速跳转

## 📁 项目结构

```
FolioSpace/
├── src/                    # 主要源代码
│   ├── components/         # React 组件
│   │   ├── MiniMap/       # 导航地图组件
│   │   ├── OverviewSlide/ # 概览幻灯片
│   │   ├── ProgressBar/   # 进度条组件
│   │   ├── ProjectCard/   # 项目卡片组件
│   │   ├── ProjectSlide/  # 项目详情幻灯片
│   │   ├── TitleSlide/    # 标题幻灯片
│   │   ├── Toolbar/       # 工具栏组件
│   │   └── ui/            # 通用 UI 组件
│   ├── constants/         # 配置文件
│   │   ├── impressConfig.ts  # impress.js 配置
│   │   ├── projectsData.ts   # 项目数据
│   │   ├── slideIds.ts       # 幻灯片 ID
│   │   └── userConfig.ts     # 用户配置
│   ├── types/             # TypeScript 类型定义
│   │   ├── global.d.ts    # 全局类型
│   │   ├── project.ts     # 项目类型
│   │   └── userConfig.ts  # 用户配置类型
│   ├── assets/            # 静态资源
│   ├── App.tsx            # 主应用组件
│   └── index.tsx          # 应用入口
├── public/                # 公共文件
│   └── index.html         # HTML 模板
├── rsbuild.config.mjs     # 构建配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看开发环境

### 构建项目

```bash
npm run build
# 或
pnpm build
```

## 🎨 主要组件

### TitleSlide
项目的标题页面，展示个人信息和简介。

### OverviewSlide
项目概览页面，显示所有项目的缩略图和统计信息。

### ProjectSlide
单个项目的详细展示页面，包含项目描述、技术栈、链接等。

### MiniMap
创新的项目地图功能：
- 实时显示当前位置
- 可点击快速导航
- 支持展开大地图
- 动画聚焦效果

### ProgressBar
显示浏览进度的进度条组件。

### Toolbar
提供导航控制和设置选项的工具栏。

## 🔧 自定义配置

### 用户信息配置

在 `src/constants/userConfig.ts` 中配置个人信息：

```typescript
export const USER_CONFIG = {
  AVATAR_URL: 'your-avatar-url',
  NAME: 'Your Name',
  JOB_TITLE: 'Your Job Title',
  BIO: [
    '你的个人简介第一行',
    '你的个人简介第二行',
    '你的个人简介第三行',
  ],
  CONTACT_LINKS: [
    {
      type: 'github',
      url: 'https://github.com/yourusername',
      icon: 'fab fa-github',
      text: 'GitHub',
    },
    // 更多联系方式...
  ],
};
```

### 项目数据配置

在 `src/constants/projectsData.ts` 中添加你的项目：

```typescript
export const PROJECTS_DATA = [
  {
    id: 'project-1',
    name: '项目名称',
    title: '项目标题',
    icon: 'fas fa-star',
    status: 'completed',
    position: { x: 1000, y: 500, z: 0 },
    description: '项目详细描述...',
    tech: ['React', 'TypeScript', 'Node.js'],
    links: [
      { type: 'demo', url: 'https://demo.com', text: '在线演示' },
      { type: 'code', url: 'https://github.com', text: '源码' },
    ],
    image: './src/assets/project-preview.gif',
    layout: 'standard'
  },
  // 更多项目...
];
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

<div align="center">

**感谢你的关注与支持！**

如果你喜欢这个项目，别忘了点个 ⭐ 哦~

Made with ❤️ by [SimonAKing](https://github.com/SimonAKing)

</div>