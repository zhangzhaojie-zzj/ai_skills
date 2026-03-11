const pptxgen = require("pptxgenjs");

// 创建演示文稿
let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'AI Assistant';
pres.title = 'Android 跨进程通信(IPC)机制详解';
pres.subject = 'Android IPC';
pres.company = 'Technical Presentation';

// 配色方案 - 使用 Teal Trust 主题
const colors = {
    primary: "028090",      // 深青色
    secondary: "00A896",    // 海泡绿
    accent: "02C39A",       // 薄荷绿
    dark: "1a1a2e",         // 深色背景
    light: "F8F9FA",        // 浅色背景
    text: "2C3E50",         // 文字颜色
    textLight: "5D6D7E",    // 次要文字
    white: "FFFFFF"
};

// 字体设置
const fonts = {
    title: { fontFace: "Arial Black", fontSize: 44, color: colors.text, bold: true },
    subtitle: { fontFace: "Arial", fontSize: 24, color: colors.textLight },
    heading: { fontFace: "Arial", fontSize: 32, color: colors.primary, bold: true },
    body: { fontFace: "Calibri", fontSize: 18, color: colors.text },
    caption: { fontFace: "Calibri", fontSize: 14, color: colors.textLight }
};

// ========== Slide 1: 标题页 ==========
let slide1 = pres.addSlide();
slide1.background = { color: colors.dark };

// 装饰形状
slide1.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: colors.primary, transparency: 20 }
});

slide1.addShape(pres.shapes.OVAL, {
    x: 7.5, y: -1, w: 4, h: 4,
    fill: { color: colors.secondary, transparency: 30 }
});

slide1.addShape(pres.shapes.OVAL, {
    x: -1, y: 3.5, w: 3, h: 3,
    fill: { color: colors.accent, transparency: 25 }
});

// 标题
slide1.addText("Android 跨进程通信", {
    x: 0.5, y: 1.8, w: 9, h: 1,
    fontFace: "Arial Black", fontSize: 52, color: colors.white, bold: true,
    align: "center", valign: "middle"
});

slide1.addText("(IPC) 机制详解", {
    x: 0.5, y: 2.8, w: 9, h: 0.8,
    fontFace: "Arial Black", fontSize: 48, color: colors.accent, bold: true,
    align: "center", valign: "middle"
});

// 副标题
slide1.addText("从 Linux IPC 到 Android 特有机制的全面解析", {
    x: 0.5, y: 4, w: 9, h: 0.6,
    fontFace: "Calibri", fontSize: 22, color: "CCCCCC",
    align: "center", valign: "middle"
});

// 底部信息
slide1.addText("来源：微信公众号「小墙程序员」| 掘金", {
    x: 0.5, y: 5, w: 9, h: 0.4,
    fontFace: "Calibri", fontSize: 14, color: "999999",
    align: "center", valign: "middle"
});

// ========== Slide 2: 目录 ==========
let slide2 = pres.addSlide();
slide2.background = { color: colors.light };

slide2.addText("目录", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontFace: "Arial Black", fontSize: 40, color: colors.primary, bold: true
});

// 目录项
const tocItems = [
    { num: "01", title: "跨进程通信方式概览", desc: "Linux IPC 与 Android 特有机制" },
    { num: "02", title: "Messenger", desc: "轻量级 IPC 方案" },
    { num: "03", title: "AIDL", desc: "接口定义语言实现跨进程" },
    { num: "04", title: "ContentProvider", desc: "数据共享的 IPC 方式" },
    { num: "05", title: "共享内存", desc: "MemoryFile 与 SharedMemory" },
    { num: "06", title: "选型建议", desc: "不同场景的最佳选择" }
];

let yPos = 1.2;
tocItems.forEach((item, index) => {
    // 编号圆圈
    slide2.addShape(pres.shapes.OVAL, {
        x: 0.8, y: yPos, w: 0.6, h: 0.6,
        fill: { color: index < 2 ? colors.primary : colors.secondary }
    });
    
    slide2.addText(item.num, {
        x: 0.8, y: yPos, w: 0.6, h: 0.6,
        fontFace: "Arial", fontSize: 16, color: colors.white, bold: true,
        align: "center", valign: "middle"
    });
    
    // 标题
    slide2.addText(item.title, {
        x: 1.6, y: yPos, w: 4, h: 0.4,
        fontFace: "Arial", fontSize: 22, color: colors.text, bold: true,
        valign: "middle"
    });
    
    // 描述
    slide2.addText(item.desc, {
        x: 1.6, y: yPos + 0.35, w: 6, h: 0.3,
        fontFace: "Calibri", fontSize: 14, color: colors.textLight,
        valign: "middle"
    });
    
    yPos += 0.75;
});

// ========== Slide 3: IPC 方式概览 ==========
let slide3 = pres.addSlide();
slide3.background = { color: colors.light };

slide3.addText("跨进程通信方式概览", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontFace: "Arial Black", fontSize: 36, color: colors.primary, bold: true
});

// Linux IPC
slide3.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.2, h: 4,
    fill: { color: colors.white },
    line: { color: colors.secondary, width: 2 },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
});

slide3.addText("Linux IPC 机制", {
    x: 0.7, y: 1.4, w: 3.8, h: 0.5,
    fontFace: "Arial", fontSize: 22, color: colors.primary, bold: true
});

const linuxIPC = [
    "管道 - 缓冲区有限",
    "信号 - 适用于中断控制",
    "信号量 - 同步手段",
    "共享内存 - 速度快",
    "消息队列 - CPU 消耗大",
    "套接字 - 通用但效率低"
];

linuxIPC.forEach((item, i) => {
    slide3.addText(item, {
        x: 0.8, y: 2 + i * 0.5, w: 3.8, h: 0.4,
        fontFace: "Calibri", fontSize: 16, color: colors.text,
        bullet: true
    });
});

// Android IPC
slide3.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.2, w: 4.2, h: 4,
    fill: { color: colors.white },
    line: { color: colors.accent, width: 2 },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
});

slide3.addText("Android 特有 IPC", {
    x: 5.5, y: 1.4, w: 3.8, h: 0.5,
    fontFace: "Arial", fontSize: 22, color: colors.accent, bold: true
});

const androidIPC = [
    "Messenger - 基于 AIDL",
    "AIDL - 接口定义语言",
    "ContentProvider - 数据共享",
    "MemoryFile - 共享内存",
    "SharedMemory - Android 8+",
    "Binder - 底层实现"
];

androidIPC.forEach((item, i) => {
    slide3.addText(item, {
        x: 5.6, y: 2 + i * 0.5, w: 3.8, h: 0.4,
        fontFace: "Calibri", fontSize: 16, color: colors.text,
        bullet: true
    });
});

// ========== Slide 4: Messenger ==========
let slide4 = pres.addSlide();
slide4.background = { color: colors.light };

slide4.addText("Messenger - 轻量级 IPC", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontFace: "Arial Black", fontSize: 36, color: colors.primary, bold: true
});

slide4.addText("基于 AIDL 实现，通过 Message 对象在不同进程间传递数据", {
    x: 0.5, y: 1, w: 9, h: 0.4,
    fontFace: "Calibri", fontSize: 16, color: colors.textLight, italic: true
});

// 左侧：特点
slide4.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 4.2, h: 3.5,
    fill: { color: "E8F8F5" },
    line: { color: colors.accent, width: 2 }
});

slide4.addText("核心特点", {
    x: 0.7, y: 1.8, w: 3.8, h: 0.5,
    fontFace: "Arial", fontSize: 22, color: colors.accent, bold: true
});

const messengerFeatures = [
    "轻量级 IPC 方案",
    "底层基于 AIDL",
    "使用 Message 传递数据",
    "支持双向通信",
    "适合简单数据交换"
];

messengerFeatures.forEach((item, i) => {
    slide4.addText(item, {
        x: 0.8, y: 2.4 + i * 0.55, w: 3.8, h: 0.45,
        fontFace: "Calibri", fontSize: 16, color: colors.text,
        bullet: true
    });
});

// 右侧：代码示例说明
slide4.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.6, w: 4.2, h: 3.5,
    fill: { color: "F8F9FA" },
    line: { color: "DDDDDD", width: 1 }
});

slide4.addText("关键组件", {
    x: 5.5, y: 1.8, w: 3.8, h: 0.5,
    fontFace: "Arial", fontSize: 22, color: colors.text, bold: true
});

slide4.addText("ServiceMessenger", {
    x: 5.6, y: 2.4, w: 3.8, h: 0.35,
    fontFace: "Consolas", fontSize: 14, color: colors.primary, bold: true
});
slide4.addText("用于向服务端发送消息", {
    x: 5.6, y: 2.75, w: 3.8, h: 0.3,
    fontFace: "Calibri", fontSize: 13, color: colors.textLight
});

slide4.addText("ClientMessenger", {
    x: 5.6, y: 3.2, w: 3.8, h: 0.35,
    fontFace: "Consolas", fontSize: 14, color: colors.primary, bold: true
});
slide4.addText("用于接收服务端回复", {
    x: 5.6, y: 3.55, w: 3.8, h: 0.3,
    fontFace: "Calibri", fontSize: 13, color: colors.textLight
});

slide4.addText("ClientHandler", {
    x: 5.6, y: 4, w: 3.8, h: 0.35,
    fontFace: "Consolas", fontSize: 14, color: colors.primary, bold: true
});
slide4.addText("处理服务端返回的消息", {
    x: 5.6, y: 4.35, w: 3.8, h: 0.3,
    fontFace: "Calibri", fontSize: 13, color: colors.textLight
});

// ========== Slide 5: AIDL ==========
let slide5 = pres.addSlide();
slide5.background = { color: colors.light };

slide5.addText("AIDL - Android 接口定义语言", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontFace: "Arial Black", fontSize: 36, color: colors.primary, bold: true
});

// 定义框
slide5.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1,
    fill: { color: "FFF8E7" },
    line: { color: "FFC107", width: 2 }
});

slide5.addText("AIDL 允许定义客户端和服务端都认可的编程接口，实现跨进程通信", {
    x: 0.7, y: 1.4, w: 8.6, h: 0.6,
    fontFace: "Calibri", fontSize: 18, color: colors.text,
    align: "center", valign: "middle"
});

// 使用步骤
slide5.addText("使用步骤", {
    x: 0.5, y: 2.4, w: 9, h: 0.5,
    fontFace: "Arial", fontSize: 24, color: colors.primary, bold: true
});

const aidlSteps = [
    { num: "1", title: "创建 .aidl 文件", desc: "定义接口方法" },
    { num: "2", title: "实现接口", desc: "在服务端实现 Stub" },
    { num: "3", title: "暴露接口", desc: "通过 Service 返回 IBinder" },
    { num: "4", title: "客户端调用", desc: "绑定服务后调用方法" }
];

let stepX = 0.5;
aidlSteps.forEach((step, i) => {
    // 步骤编号
    slide5.addShape(pres.shapes.OVAL, {
        x: stepX, y: 3.1, w: 0.7, h: 0.7,
        fill: { color: colors.secondary }
    });
    slide5.addText(step.num, {
        x: stepX, y: 3.1, w: 0.7, h: 0.7,
        fontFace: "Arial", fontSize: 24, color: colors.white, bold: true,
        align: "center", valign: "middle"
    });
    
    // 标题
    slide5.addText(step.title, {
        x: stepX - 0.1, y: 3.9, w: 2.2, h: 0.4,
        fontFace: "Arial", fontSize: 16, color: colors.text, bold: true,
        align: "center"
    });
    
    // 描述
    slide5.addText(step.desc, {
        x: stepX - 0.1, y: 4.3, w: 2.2, h: 0.3,
        fontFace: "Calibri", fontSize: 12, color: colors.textLight,
        align: "center"
    });
    
    stepX += 2.4;
});

// ========== Slide 6: ContentProvider ==========
let slide6 = pres.addSlide();
slide6.background = { color: colors.light };

slide6.addText("ContentProvider - 数据共享", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontFace: "Arial Black", fontSize: 36, color: colors.primary, bold: true
});

slide6.addText("底层基于 Binder，用于在不同应用间共享数据", {
    x: 0.5, y: 1, w: 9, h: 0.4,
    fontFace: "Calibri", fontSize: 16, color: colors.textLight, italic: true
});

// 数据访问方式
slide6.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 4.2, h: 3.5,
    fill: { color: colors.white },
    line: { color: colors.secondary, width: 2 },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
});

slide6.addText("数据访问方式", {
    x: 0.7, y: 1.8, w: 3.8, h: 0.5,
    fontFace: "Arial", fontSize: 22, color: colors.secondary, bold: true
});

const cpMethods = [
    "query() - 查询数据",
    "insert() - 插入数据",
    "update() - 更新数据",
    "delete() - 删除数据",
    "getType() - 返回 MIME 类型"
];

cpMethods.forEach((item, i) => {
    slide6.addText(item, {
        x: 0.8, y: 2.4 + i * 0.6, w: 3.8, h: 0.5,
        fontFace: "Consolas", fontSize: 15, color: colors.text,
        bullet: true
    });
});

// 使用场景
slide6.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.6, w: 4.2, h: 3.5,
    fill: { color: colors.white },
    line: { color: colors.accent, width: 2 },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
});

slide6.addText("典型应用场景", {
    x: 5.5, y: 1.8, w: 3.8, h: 0.5,
    fontFace: "Arial", fontSize: 22, color: colors.accent, bold: true
});

const cpScenarios = [
    "应用间共享联系人",
    "媒体库访问",
    "日历数据同步",
    "跨应用数据查询",
    "系统级数据访问"
];

cpScenarios.forEach((item, i) => {
    slide6.addText(item, {
        x: 5.6, y: 2.4 + i * 0.6, w: 3.8, h: 0.5,
        fontFace: "Calibri", fontSize: 16, color: colors.text,
        bullet: true
    });
});

// ========== Slide 7: 共享内存 ==========
let slide7 = pres.addSlide();
slide7.background = { color: colors.light };

slide7.addText("共享内存 - 高性能 IPC", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontFace: "Arial Black", fontSize: 36, color: colors.primary, bold: true
});

// MemoryFile
slide7.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.2, h: 3.8,
    fill: { color: "F0F8FF" },
    line: { color: colors.primary, width: 2 }
});

slide7.addText("MemoryFile", {
    x: 0.7, y: 1.4, w: 3.8, h: 0.5,
    fontFace: "Arial", fontSize: 22, color: colors.primary, bold: true
});

slide7.addText("传统共享内存实现", {
    x: 0.7, y: 1.85, w: 3.8, h: 0.35,
    fontFace: "Calibri", fontSize: 14, color: colors.textLight, italic: true
});

const memoryFileFeatures = [
    "基于 ashmem 驱动",
    "支持文件描述符传递",
    "需要 ParcelFileDescriptor",
    "适用于大文件传输",
    "需要手动管理内存"
];

memoryFileFeatures.forEach((item, i) => {
    slide7.addText(item, {
        x: 0.8, y: 2.3 + i * 0.55, w: 3.8, h: 0.45,
        fontFace: "Calibri", fontSize: 15, color: colors.text,
        bullet: true
    });
});

// SharedMemory
slide7.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.2, w: 4.2, h: 3.8,
    fill: { color: "F0FFF4" },
    line: { color: colors.accent, width: 2 }
});

slide7.addText("SharedMemory", {
    x: 5.5, y: 1.4, w: 3.8, h: 0.5,
    fontFace: "Arial", fontSize: 22, color: colors.accent, bold: true
});

slide7.addText("Android 8.0+ 新 API", {
    x: 5.5, y: 1.85, w: 3.8, h: 0.35,
    fontFace: "Calibri", fontSize: 14, color: colors.textLight, italic: true
});

const sharedMemoryFeatures = [
    "更现代的 API 设计",
    "自动内存管理",
    "支持设置保护标志",
    "更简单的使用方式",
    "推荐用于新开发"
];

sharedMemoryFeatures.forEach((item, i) => {
    slide7.addText(item, {
        x: 5.6, y: 2.3 + i * 0.55, w: 3.8, h: 0.45,
        fontFace: "Calibri", fontSize: 15, color: colors.text,
        bullet: true
    });
});

// ========== Slide 8: 选型建议 ==========
let slide8 = pres.addSlide();
slide8.background = { color: colors.dark };

slide8.addText("IPC 机制选型建议", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontFace: "Arial Black", fontSize: 36, color: colors.white, bold: true
});

// 选型表格
const recommendations = [
    { scenario: "简单数据传递", solution: "Messenger", reason: "轻量、易用" },
    { scenario: "复杂接口调用", solution: "AIDL", reason: "灵活、功能强" },
    { scenario: "数据共享", solution: "ContentProvider", reason: "标准、安全" },
    { scenario: "大文件传输", solution: "SharedMemory", reason: "高性能" },
    { scenario: "频繁通信", solution: "Binder", reason: "底层、高效" }
];

let recY = 1.2;
recommendations.forEach((rec, i) => {
    // 背景
    slide8.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: recY, w: 9, h: 0.8,
        fill: { color: i % 2 === 0 ? "1E3A4C" : "264653" }
    });
    
    // 场景
    slide8.addText(rec.scenario, {
        x: 0.7, y: recY, w: 2.5, h: 0.8,
        fontFace: "Arial", fontSize: 16, color: colors.white, bold: true,
        valign: "middle"
    });
    
    // 推荐方案
    slide8.addShape(pres.shapes.RECTANGLE, {
        x: 3.3, y: recY + 0.15, w: 2.5, h: 0.5,
        fill: { color: colors.accent }, rectRadius: 0.1
    });
    slide8.addText(rec.solution, {
        x: 3.3, y: recY + 0.15, w: 2.5, h: 0.5,
        fontFace: "Arial", fontSize: 16, color: colors.white, bold: true,
        align: "center", valign: "middle"
    });
    
    // 原因
    slide8.addText(rec.reason, {
        x: 6, y: recY, w: 3.3, h: 0.8,
        fontFace: "Calibri", fontSize: 14, color: "CCCCCC",
        valign: "middle"
    });
    
    recY += 0.9;
});

// ========== Slide 9: 总结 ==========
let slide9 = pres.addSlide();
slide9.background = { color: colors.light };

slide9.addText("总结", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontFace: "Arial Black", fontSize: 40, color: colors.primary, bold: true
});

// 要点
const summaryPoints = [
    "Android IPC 基于 Linux IPC，但提供了更高效的 Binder 机制",
    "Messenger 适合简单场景，AIDL 适合复杂接口",
    "ContentProvider 是数据共享的标准方式",
    "共享内存适合大文件传输，性能最优",
    "根据场景选择合适的 IPC 机制"
];

let summaryY = 1.3;
summaryPoints.forEach((point, i) => {
    // 编号
    slide9.addShape(pres.shapes.OVAL, {
        x: 0.8, y: summaryY, w: 0.5, h: 0.5,
        fill: { color: colors.secondary }
    });
    slide9.addText(String(i + 1), {
        x: 0.8, y: summaryY, w: 0.5, h: 0.5,
        fontFace: "Arial", fontSize: 18, color: colors.white, bold: true,
        align: "center", valign: "middle"
    });
    
    // 内容
    slide9.addText(point, {
        x: 1.5, y: summaryY, w: 8, h: 0.5,
        fontFace: "Calibri", fontSize: 18, color: colors.text,
        valign: "middle"
    });
    
    summaryY += 0.85;
});

// 底部感谢
slide9.addShape(pres.shapes.LINE, {
    x: 1, y: 5, w: 8, h: 0,
    line: { color: "DDDDDD", width: 1 }
});

slide9.addText("感谢阅读 | 来源：微信公众号「小墙程序员」", {
    x: 0.5, y: 5.2, w: 9, h: 0.4,
    fontFace: "Calibri", fontSize: 14, color: colors.textLight,
    align: "center", valign: "middle"
});

// 保存文件
pres.writeFile({ fileName: "pptx-output/android-ipc/Android-IPC-机制详解.pptx" })
    .then(() => {
        console.log("✅ PPT 创建成功！");
        console.log("📁 文件位置: pptx-output/android-ipc/Android-IPC-机制详解.pptx");
    })
    .catch((err) => {
        console.error("❌ 创建失败:", err);
    });
