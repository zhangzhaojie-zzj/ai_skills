# 原始架构 vs MVC 提示词

## 基本信息
- 类型: 内容页 (Content)
- 布局: comparison (对比布局)
- 风格: notion

## 提示词 (Prompt)

```
A Notion-style comparison infographic showing Android architecture evolution from primitive to MVC.

STYLE: Minimalist hand-drawn line art, clean diagram aesthetic
COLORS: Cream background, black lines, red for X marks, green for check marks, muted blue for highlights

LEFT SIDE - 原始架构 (Primitive):
Title: "原始架构 ❌"
Elements:
- Messy tangled lines representing "Callback Hell"
- Large bloated rectangle labeled "Activity/Fragment" with worried face
- Small AsyncTask and Handler icons tangled together
- Text: "臃肿难维护" "回调地狱"
- Red X marks indicating problems

RIGHT SIDE - MVC:
Title: "MVC ⚠️"
Elements:
- Three connected boxes: Model → Controller → View
- Dashed lines showing partial separation
- Controller box slightly overlapping View box
- Text: "部分解耦" "View与Controller仍绑定"
- Yellow warning triangle

CENTER:
- Large arrow pointing from left to right
- Text: "演进"

DECORATIONS:
- Hand-drawn boxes with rounded corners
- Subtle grid background
- Light connecting lines between elements
- Small code bracket decorations

TYPOGRAPHY:
- Clean sans-serif Chinese characters
- Section headers in bold
- Body text in regular weight

MOOD: Educational, showing progression from chaos to partial order
ASPECT RATIO: 3:4
```

## 核心信息
- 原始架构：AsyncTask + Handler，Activity臃肿，回调地狱
- MVC：部分解耦，但View和Controller仍绑定
