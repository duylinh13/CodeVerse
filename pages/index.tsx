// pages/index.tsx

import Layout from "@/components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPosts } from "@/lib/posts-md";

interface PostSummary {
  slug: string;
  title: string;
  date: string;
  description: string;
}

interface HomeProps {
  posts: PostSummary[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout
      title="CodeVerse - A Blog for Developers"
      description="Explore developer tips, guides, and insights with CodeVerse - built using Next.js and TypeScript."
    >
      <h1 className="text-3xl font-bold mb-4">🪐 CodeVerse Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl text-blue-600 hover:underline font-semibold"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// ✅ SSG - Trang chủ: lấy danh sách bài viết
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
