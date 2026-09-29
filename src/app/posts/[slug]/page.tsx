import { notFound } from "next/navigation";
import { getPostBySlug, typeLabel } from "@/lib/posts";
import Link from "next/link";

/** 格式化日期 */
function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto">
      {/* 返回链接 */}
      <Link
        href="/"
        className="inline-block text-sm text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors mb-8"
      >
        ← 返回首页
      </Link>

      {/* 文章头部 */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs px-2 py-0.5 border border-[var(--accent-blue)]/40 text-[var(--accent-blue)] rounded-sm">
            {typeLabel[post.type]}
          </span>
          <time className="text-sm text-[var(--text-secondary)]">
            {formatDate(post.date)}
          </time>
        </div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* 文章正文 */}
      <div
        className="prose prose-invert max-w-none
          prose-headings:text-[var(--text-primary)]
          prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed
          prose-a:text-[var(--accent-blue)] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[var(--text-primary)]
          prose-code:text-[var(--accent-orange)] prose-code:bg-[var(--bg-secondary)] prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm
          prose-pre:bg-[var(--bg-secondary)] prose-pre:border prose-pre:border-[var(--border-dim)]
          prose-blockquote:border-l-[var(--accent-blue)] prose-blockquote:text-[var(--text-secondary)]
          prose-li:text-[var(--text-secondary)]
          prose-hr:border-[var(--border-dim)]
        "
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}