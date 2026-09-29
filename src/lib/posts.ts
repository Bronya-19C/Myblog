import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

/** 内容类型 */
export type PostType = "article" | "fragment" | "photo";

/** 一篇文章的元数据 */
export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  type: PostType;
  tags: string[];
  description?: string;
}

/** 完整文章（元数据 + HTML 正文） */
export interface Post extends PostMeta {
  contentHtml: string;
}

/** 文章所在目录 */
const postsDirectory = path.join(process.cwd(), "src/content/posts");

/** 获取所有文章的元数据，按日期倒序 */
export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: PostMeta[] = fileNames
    .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "1970-01-01",
        type: data.type ?? "article",
        tags: data.tags ?? [],
        description: data.description,
      };
    });

  // 按日期倒序排列
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** 根据 slug 获取单篇文章的完整内容 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);

    // 将 Markdown 转为 HTML
    const processed = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content);
    const contentHtml = processed.toString();

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "1970-01-01",
      type: data.type ?? "article",
      tags: data.tags ?? [],
      description: data.description,
      contentHtml,
    };
  } catch {
    return null;
  }
}

/** 内容类型对应的中文标签 */
export const typeLabel: Record<PostType, string> = {
  article: "长文",
  fragment: "碎片",
  photo: "图集",
};