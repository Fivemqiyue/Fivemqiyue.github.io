# 🎮 Fivem 七月文档

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![VitePress](https://img.shields.io/badge/VitePress-1.0-green.svg)](https://vitepress.dev/)
[![ESX](https://img.shields.io/badge/ESX-1.9.0+-blue.svg)](https://github.com/esx-framework/esx-core)

专业的 FiveM 中文文档站，提供 ESX 框架开发教程、代码片段、脚本资源和实战经验分享。

🌐 **在线访问：** https://fivemqiyue.github.io

---

## 📚 内容导航

- **🏠 首页** - 功能概览和快速导航
- **📝 私人笔记** - 开发笔记和代码片段
  - 💻 代码区 - ESX 常用代码、API、配置模板
  - 🚗 车辆区 - 车辆系统问题解决方案
- **💰 付费脚本** - 高质量脚本展示
- **🌐 资源整合** - 官方资源和社区链接
- **📖 ESX 文档** - ESX 框架 API 参考

---

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 浏览器访问
http://localhost:5173
```

### 构建部署

```bash
# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

---

## 📝 如何添加内容

### 1. 添加新页面

在 `docs/` 目录下创建 `.md` 文件：

```markdown
---
layout: doc
---

# 页面标题

内容...
```

### 2. 添加导航链接

编辑 `docs/.vitepress/config.mts`：

```typescript
nav: [
  { text: '新页面', link: '/path/to/page' }
]
```

### 3. 添加下载文件

将文件放到 `docs/public/downloads/` 目录，然后添加链接：

```markdown
<a href="/downloads/文件名.zip" download>
  📥 下载文件
</a>
```

---

## 🤝 Git 提交规范

```bash
# 新增功能
git commit -m "feat: 添加新功能描述"

# 修复 Bug
git commit -m "fix: 修复问题描述"

# 文档更新
git commit -m "docs: 更新文档说明"

# 样式修改
git commit -m "style: 优化样式"

# 代码重构
git commit -m "refactor: 重构代码"
```

---

## 📦 项目结构

```
docs/
├── .vitepress/          # 配置和主题
│   ├── config.mts      # 核心配置
│   └── theme/          # 自定义主题
├── public/             # 静态资源
│   └── downloads/      # 下载文件
├── qiyue/              # 私人笔记
├── ffcj/               # 付费脚本
├── resources/          # 资源整合
└── index.md            # 网站首页
```

---

## 📞 联系方式

- **QQ：** 2048732953
- **邮箱：** 2048732953@qq.com
- **讨论组：** [https://qm.qq.com/q/2sSpck8P76](https://qm.qq.com/q/2sSpck8P76)

---

**📖 持续更新中... 最后更新：2025年**
