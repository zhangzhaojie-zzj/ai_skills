---
name: zzj_images
description: Converts article links into PPT-style HTML pages. Extracts content from URLs and generates beautiful presentation slides. Invoke when user provides article links and asks for PPT-style pages, presentation format, or slide deck generation.
version: 1.0.0
---

# zzj_images - Article to PPT Generator

Transform any article URL into a beautiful, presentation-style HTML page with slide deck format.

## Features

- **URL Content Extraction**: Automatically fetch and parse article content from provided links
- **PPT-Style Layout**: Generate professional presentation slides with clean typography
- **HTML Output**: Create self-contained HTML files that can be viewed in any browser
- **Export Options**: Support for PDF export and image screenshots
- **Responsive Design**: Works on desktop and mobile devices

## Usage

```bash
# Basic usage with URL
/zzj_images https://example.com/article

# With custom title
/zzj_images https://example.com/article --title "My Presentation"

# With specific slide count
/zzj_images https://example.com/article --slides 8

# With theme selection
/zzj_images https://example.com/article --theme dark

# Multiple URLs
/zzj_images https://site1.com/article1 https://site2.com/article2
```

## Options

| Option | Description | Default |
|--------|-------------|---------|
| `--title` | Custom presentation title | Auto-extracted from article |
| `--slides` | Target number of slides | Auto-calculated |
| `--theme` | Color theme (light/dark/minimal) | light |
| `--output` | Output directory | ./zzj-output/ |
| `--format` | Output format (html/pdf/both) | html |

## Workflow

### Step 1: URL Processing

1. Accept one or more article URLs from user
2. Validate URL format and accessibility
3. Fetch article content using web scraping
4. Extract title, author, publish date, and main content
5. Handle common article platforms (微信公众号、知乎、简书、CSDN、掘金等)

### Step 2: Content Analysis

1. Parse article structure (headings, paragraphs, lists)
2. Identify key points and main arguments
3. Determine optimal slide count based on content length
4. Create content outline for slide organization

### Step 3: Slide Generation

Generate HTML slides with the following structure:

```
Slide 1: Title Slide
- Article title
- Author/Source
- Date
- Background image or pattern

Slide 2: Overview/Introduction
- Key topics covered
- Main takeaway preview

Slides 3-N: Content Slides
- One main point per slide
- Bullet points for details
- Supporting visuals (if available)

Final Slide: Summary/Conclusion
- Key takeaways
- Call to action or next steps
```

### Step 4: HTML Generation

Create a complete HTML file with:
- Fullscreen slide navigation (arrow keys, swipe)
- Progress indicator
- Slide thumbnails
- Print-friendly CSS for PDF export
- Responsive design

## Slide Themes

### Light Theme (Default)
- White background
- Dark text
- Blue accents
- Clean and professional

### Dark Theme
- Dark background
- Light text
- Cyan/purple accents
- Modern and sleek

### Minimal Theme
- Off-white background
- Black text
- No decorative elements
- Focus on content

## HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
  <title>{Article Title}</title>
  <style>
    /* Fullscreen slide styles */
    /* Theme-specific colors */
    /* Navigation controls */
    /* Print styles for PDF */
  </style>
</head>
<body>
  <div class="slides">
    <section class="slide title-slide">...</section>
    <section class="slide content-slide">...</section>
    <!-- more slides -->
  </div>
  <div class="controls">...</div>
  <script>
    /* Keyboard navigation */
    /* Touch/swipe support */
    /* Progress tracking */
  </script>
</body>
</html>
```

## Output Files

```
zzj-output/
├── {article-slug}/
│   ├── index.html          # Main presentation file
│   ├── slides/             # Individual slide images (optional)
│   │   ├── slide-01.png
│   │   ├── slide-02.png
│   │   └── ...
│   └── presentation.pdf    # PDF export (optional)
└── ...
```

## Navigation

- **Arrow Keys**: Next/Previous slide
- **Space**: Next slide
- **Home/End**: First/Last slide
- **Swipe Left/Right**: Mobile navigation
- **Click**: Show/hide navigation controls

## Export Options

### Browser Print to PDF
1. Open HTML file in browser
2. Press Ctrl+P (or Cmd+P)
3. Select "Save as PDF"
4. Choose landscape orientation
5. Enable background graphics

### Screenshot Export
Use browser dev tools or screenshot tools to capture individual slides.

## Content Sources Supported

- 微信公众号文章
- 知乎专栏
- 简书
- CSDN博客
- 掘金
- 个人博客 (WordPress, Hexo, etc.)
- 新闻网站
- 技术文档

## Error Handling

| Error | Solution |
|-------|----------|
| URL inaccessible | Try alternative URL or paste content directly |
| Content extraction failed | Manual content input option |
| Paywall detected | Notify user to provide content manually |
| Unsupported site | Use generic extractor or manual input |

## Best Practices

1. **Content Length**: Ideal articles are 500-3000 words for 5-15 slides
2. **Structure**: Well-structured articles with clear headings work best
3. **Images**: Articles with images can have them included in slides
4. **Code**: Code blocks are formatted with syntax highlighting
5. **Quotes**: Pull quotes are styled as featured content

## Examples

### Example 1: Tech Article
```
Input: https://juejin.cn/post/123456
Output: 8-slide presentation covering:
  - Title slide
  - Problem statement
  - Solution overview
  - Implementation details
  - Code examples
  - Results
  - Conclusion
  - Q&A
```

### Example 2: WeChat Article
```
Input: https://mp.weixin.qq.com/s/xxxxx
Output: 6-slide presentation with:
  - Article title and author
  - Key insights summary
  - Supporting data points
  - Visual diagrams
  - Action items
  - Summary
```

## Notes

- Generated HTML is self-contained (no external dependencies)
- JavaScript enables navigation but degrades gracefully
- CSS print styles ensure good PDF output
- Slides are optimized for 16:9 aspect ratio
- Content is summarized to fit slide format
