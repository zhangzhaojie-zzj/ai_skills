# Android架构演进史 - 小红书信息图生成指南

## 📁 文件结构

```
xhs-images/android-architecture-evolution/
├── analysis.md                    # 内容分析报告
├── outline.md                     # 大纲文件
├── GENERATION_GUIDE.md            # 本文件
├── prompts/                       # 图片生成提示词
│   ├── 01-cover-android-architecture.md
│   ├── 02-content-primitive-mvc.md
│   ├── 03-content-mvp-mvvm.md
│   ├── 04-content-rxjava-agera.md
│   └── 05-ending-recommendations.md
└── [生成的图片将保存在这里]
    ├── 01-cover-android-architecture.png
    ├── 02-content-primitive-mvc.png
    ├── 03-content-mvp-mvvm.png
    ├── 04-content-rxjava-agera.png
    └── 05-ending-recommendations.png
```

## 🎨 生成参数

### 通用设置
- **比例**: 3:4 (小红书竖图标准)
- **风格**: Notion 简约手绘线条风
- **配色**: 米白/奶油色背景 + 黑色线条 + 点缀色

### 生成顺序（重要！）
1. **先生成封面图 (01)** - 作为视觉锚点
2. **使用封面图作为参考生成其余图片** - 保持风格一致

## 📝 提示词概览

### P1 - 封面
**主题**: Android架构演进史  
**Hook**: "从原始到现代，一文看懂"  
**布局**: sparse (稀疏布局，突出重点)

### P2 - 原始架构 vs MVC
**主题**: 原始架构的困境  
**内容**: AsyncTask+Handler问题 → MVC部分解耦  
**布局**: comparison (对比布局)

### P3 - MVP vs MVVM
**主题**: Google的架构探索  
**内容**: MVP完全解耦 vs MVVM数据绑定  
**布局**: balanced (平衡布局)

### P4 - 响应式编程
**主题**: RxJava与Agera  
**内容**: 响应式编程优缺点对比  
**布局**: flow (流程布局)

### P5 - 总结建议
**主题**: 选型建议  
**内容**: 新项目/已有项目/避免使用的建议清单  
**布局**: list (清单布局)

## 🛠️ 推荐生成工具

### 1. Midjourney
```bash
# 封面图
/imagine prompt: [P1提示词内容] --ar 3:4 --style raw --s 250

# 后续图片（使用封面作为参考）
/imagine prompt: [P2提示词内容] --ar 3:4 --style raw --s 250 --cref [封面图URL]
```

### 2. DALL-E 3 (ChatGPT Plus)
直接使用提示词生成，建议开启"自然对话模式"

### 3. Stable Diffusion
```
模型推荐: DreamShaper / Realistic Vision
LoRA: 可添加 "line art" 或 "infographic" LoRA
CFG Scale: 7-8
Steps: 25-30
```

### 4. 即梦 AI / 可灵 AI (国内)
适合生成中文内容，对中文排版支持更好

## ⚠️ 注意事项

1. **风格一致性**: 所有图片使用相同的风格参考
2. **文字可读性**: 确保生成的文字清晰可读
3. **品牌元素**: 如需添加水印，参考 EXTEND.md 设置
4. **备份**: 生成后及时保存，避免丢失

## 📱 发布建议

### 小红书标题选项
1. "Android架构演进史📱从原始到现代，一文看懂"
2. "Android开发必看！架构演变全解析"
3. "从AsyncTask到MVVM，Android架构进化论"

### 标签建议
```
#Android开发 #架构设计 #MVP #MVVM #RxJava #程序员 #技术干货 #移动开发 #Android架构 #编程学习
```

### 发布时间
- 技术类内容：工作日晚 8-10 点
- 周末：下午 2-5 点

## ✅ 检查清单

发布前确认：
- [ ] 5张图片已生成
- [ ] 图片风格一致
- [ ] 文字清晰可读
- [ ] 已添加水印（如需要）
- [ ] 标题和文案已准备
- [ ] 标签已准备

---

**生成日期**: 2026-03-11  
**主题**: Android架构演进史  
**风格**: Notion知识卡  
**作者**: AI Assistant
