import Link from "next/link";
import { getAllPosts, typeLabel } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-16">
      {/* 头部区域 */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          <span className="text-[var(--accent-blue)]">sorakado</span>
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

        {posts.length === 0 ? (
          /* 空状态 */
          <div className="border border-[var(--border-dim)] rounded-sm p-8 text-center">
            <p className="text-[var(--text-secondary)] text-sm">
              还没有内容。第一篇博文将出现在这里。
            </p>
          </div>
        ) : (
          /* 文章列表 */
          <div className="space-y-1">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="block group border border-transparent hover:border-[var(--border-dim)] hover:bg-[var(--bg-secondary)]/50 rounded-sm px-4 py-4 -mx-4 transition-all"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs px-2 py-0.5 border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] rounded-sm shrink-0">
                    {typeLabel[post.type]}
                  </span>
                  <time className="text-xs text-[var(--text-secondary)] shrink-0">
                    {post.date}
                  </time>
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[var(--text-secondary)]/60">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-sm text-[var(--text-secondary)] mt-1 line-clamp-2">
                    {post.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}