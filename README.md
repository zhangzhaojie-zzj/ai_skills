# AI Skills 项目

本项目包含两个自定义 AI Skill，用于内容生成和转换。

## 📁 项目结构

```
.
├── .trae/
│   └── skills/
│       ├── baoyu-xhs-images/     # 小红书信息图生成器
│       └── zzj_images/           # 文章转PPT生成器
├── xhs-images/                   # 小红书信息图输出目录
├── zzj-output/                   # PPT输出目录
└── README.md
```

## 🎨 Skills 说明

### 1. baoyu-xhs-images
**功能**: 将文章内容转换为小红书风格的信息图

**触发方式**:
```
/baoyu-xhs-images [文章链接或内容]
```

**特点**:
- 11种视觉风格（cute、notion、chalkboard等）
- 8种布局方式
- 支持1-10张图片生成
- 自动生成提示词文件

### 2. zzj_images
**功能**: 将文章链接转换为PPT风格的HTML页面

**触发方式**:
```
/zzj_images [文章链接]
```

**特点**:
- 自动提取文章内容
- 生成幻灯片式HTML
- 支持键盘/触摸导航
- 可导出为PDF

## 🚀 使用方法

1. 在 Trae IDE 中安装 skills
2. 提供文章链接或内容
3. 按照提示完成生成

## 📄 示例输出

- `xhs-images/android-architecture-evolution/` - Android架构演进小红书图
- `zzj-output/android-architecture-evolution/` - Android架构演进PPT

## 📦 安装 Skills

将 `.trae/skills/` 目录下的 skill 文件夹复制到你的项目 `.trae/skills/` 目录即可。

## 📝 配置

首选项文件位置:
- `.baoyu-skills/baoyu-xhs-images/EXTEND.md`

## 🤝 贡献

欢迎提交 Issue 和 PR！

## 📄 License

MIT
