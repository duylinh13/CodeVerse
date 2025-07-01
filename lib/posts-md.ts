// lib/posts-md.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "posts");

export function getAllPostSlugs() {
  const filenames = fs.readdirSync(postsDir);
  return filenames.map((filename) => filename.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    contentHtml,
  };
}
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDir);

  const posts = fileNames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  // Sắp xếp theo ngày mới nhất
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}