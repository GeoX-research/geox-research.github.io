# GeoX — Geospatial World Models

GeoX 研究计划官网。独立静态网站，无需 npm 安装、前端框架或打包步骤。

视觉采用全页近黑色背景、白色标题与冷灰说明，蓝色只用于细节强调。卫星影像与研究配图在页面中以灰度显示，原始素材保留不变。首屏入场、滚动显现、轻微视差和研究方向切换均使用渐进增强；文字和图片每次从上方或下方重新进入可视区域时都会重播淡入、上移和缓慢缩放，访客开启减少动态效果时直接展示内容。

目标正式地址：**https://geox-research.github.io/**

## 本地预览

在此目录运行：

```powershell
python -m http.server 4174 --bind 127.0.0.1
```

打开 http://127.0.0.1:4174 。也可以直接打开 `index.html`。

## 内容维护

- `index.html`：结构、英文默认内容、导航、SEO 和四个研究方向。
- `styles.css`：颜色、排版和电脑／平板／手机适配。
- `app.js`：中英译文、语言切换、研究方向切换和移动导航。
- `assets/`：本地图片、图标及 `CREDITS.md` 来源说明。

每次加载默认显示英文，本页可手动切换中文，刷新或重新打开后恢复英文。英文和中文文案统一在 `app.js` 维护。项目和论文区按当前要求隐藏，未发布的项目不作为已公开成果展示。未来添加论文时应使用真实标题、作者、年份、会议或期刊及有效链接。

四张研究配图沿用所提供基准页，属于方向示意图；首页已标注。首屏为 NASA 影像，完整来源见 [图片说明](assets/CREDITS.md)。图片不是 GeoX 的实验结果。网站不包含 Vantor 的图片、商标、代码或文案。

## GitHub Pages 发布

官网通过 GitHub Pages 发布。发布前先检查本地预览，再推送源码并手动运行发布工作流。

组织仓库名称：`GeoX-research/geox-research.github.io`，使用 `main` 分支。

1. 推送代码到上述仓库。
2. 进入仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
3. 在 **Actions → Deploy GeoX website** 中手动运行工作流；工作流被暂停时先恢复。
4. 等待部署成功，访问正式地址。

`.github/workflows/pages.yml` 只上传网页、脚本、样式和素材，维护文档不会出现在部署根目录。工作流仅允许手动运行，推送代码不会自动上线。若改用其他仓库名或自定义域名，同步修改 `index.html` 的 canonical/Open Graph 地址以及 `robots.txt` 和 `sitemap.xml`。

## 交互与可访问性

研究方向支持鼠标、触屏及键盘左右方向键、Home、End。移动导航支持 Escape 关闭。提供跳转正文链接、可见键盘焦点、图片替代文本及减少动态效果偏好支持。禁用 JavaScript 时四个研究方向全部展示。
