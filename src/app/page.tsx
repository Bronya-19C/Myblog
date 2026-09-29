export default function Home() {
  return (
    <div className="space-y-16">
      {/* 头部区域 */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          <span className="text-[var(--accent-blue)]">ARK</span>
          <span className="text-[var(--text-primary)]">BLOG</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg">
          —— 记录思考与日常 ——
        </p>
      </section>

      {/* 时间线 */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-[var(--border-dim)]" />
          <span className="text-xs text-[var(--text-secondary)] tracking-widest uppercase">
            TIMELINE
          </span>
          <div className="h-px flex-1 bg-[var(--border-dim)]" />
        </div>

        {/* 空状态 */}
        <div className="border border-[var(--border-dim)] rounded-sm p-8 text-center">
          <p className="text-[var(--text-secondary)] text-sm">
            还没有内容。第一篇博文将出现在这里。
          </p>
        </div>
      </section>
    </div>
  );
}