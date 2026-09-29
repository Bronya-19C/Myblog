# MyBlog

基于 Next.js 的个人博客，明日方舟 UI 风格。

## 技术栈

- **框架**：Next.js 16（App Router）
- **语言**：TypeScript
- **样式**：Tailwind CSS 4

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000) 查看效果。修改 `src/app/page.tsx` 会自动热更新。

## 项目结构

```
src/
├── app/
│   ├── layout.tsx    # 全局布局（导航 + 页脚）
│   ├── page.tsx      # 首页
│   └── globals.css   # 全局样式 + 明日方舟主题变量
├── public/           # 静态资源
└── next.config.ts    # Next.js 配置
```

## 设计参考

配色与视觉风格参考《明日方舟》终端界面：
- 深色底色（#1a1a1f）+ 蓝灰科技感强调色
- 半透明面板 + 极细亮色边框
- 后续将加入切角面板、终端扫描线等装饰元素

## 部署

推荐使用 [Vercel](https://vercel.com) 免费部署，关联 GitHub 仓库即可自动构建。