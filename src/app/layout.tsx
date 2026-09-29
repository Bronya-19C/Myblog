import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sorakado",
  description: "记录思考与日常",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        {/* 导航栏 */}
        <header className="sticky top-0 z-50 border-b border-[var(--border-dim)] bg-[var(--bg-primary)]/80 backdrop-blur-md">
          <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
            <a
              href="/"
              className="text-lg font-bold tracking-wider text-[var(--accent-blue)] hover:text-[var(--accent-orange)] transition-colors"
            >
              sorakado
              <span className="text-[var(--text-secondary)] text-sm ml-1 font-normal">
                .log
              </span>
            </a>
            <div className="flex gap-6 text-sm text-[var(--text-secondary)]">
              <a
                href="/"
                className="hover:text-[var(--accent-blue)] transition-colors"
              >
                首页
              </a>
              <a
                href="/about"
                className="hover:text-[var(--accent-blue)] transition-colors"
              >
                关于
              </a>
            </div>
          </nav>
        </header>

        {/* 主内容区 */}
        <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
          {children}
        </main>

        {/* 页脚 */}
        <footer className="border-t border-[var(--border-dim)] py-8 text-center text-xs text-[var(--text-secondary)]">
          <p>sorakado.log © {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}