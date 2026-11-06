# GeoX — Geospatial World Models

GeoX 研究计划官网。独立静态网站，无需 npm 安装、前端框架或打包步骤。

视觉采用黑白灰主色，蓝色只用于细节强调。卫星影像与研究配图在页面中以灰度显示，原始素材保留不变。

目标正式地址：**https://geox-research.github.io/**

## 本地预览

在此目录运行：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173 。也可以直接打开 `index.html`。

## 内容维护

- `index.html`：结构、英文默认内容、导航、SEO 和四个研究方向。
- `styles.css`：颜色、排版和电脑／平板／手机适配。
- `app.js`：中英译文、语言记忆、研究方向切换和移动导航。
- `assets/`：本地图片、图标及 `CREDITS.md` 来源说明。

初始语言为英文，可切换中文，并记住访客的选择。英文和中文文案统一在 `app.js` 维护。项目和论文区按当前要求隐藏，未发布的项目不作为已公开成果展示。未来添加论文时应使用真实标题、作者、年份、会议或期刊及有效链接。

四张研究配图沿用所提供基准页，属于方向示意图；首页已标注。首屏为 NASA 影像，完整来源见 [图片说明](assets/CREDITS.md)。图片不是 GeoX 的实验结果。网站不包含 Vantor 的图片、商标、代码或文案。

## GitHub Pages 发布

组织仓库名称：`GeoX-research/geox-research.github.io`，使用 `main` 分支。

1. 推送代码到上述仓库。
2. 进入仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
3. 在 **Actions → Deploy GeoX website** 中运行工作流（或再次推送代码）。
4. 等待部署成功，访问正式地址。

`.github/workflows/pages.yml` 只上传网页、脚本、样式和素材，维护文档不会出现在部署根目录。以后向 `main` 推送即自动更新网站。若改用其他仓库名或自定义域名，同步修改 `index.html` 的 canonical/Open Graph 地址以及 `robots.txt` 和 `sitemap.xml`。

## 交互与可访问性

研究方向支持鼠标、触屏及键盘左右方向键、Home、End。移动导航支持 Escape 关闭。提供跳转正文链接、可见键盘焦点、图片替代文本及减少动态效果偏好支持。禁用 JavaScript 时四个研究方向全部展示。
