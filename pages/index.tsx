// pages/index.tsx

import Layout from "@/components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPosts } from "@/lib/posts-md";
import { CalendarDays } from "lucide-react"; // nếu bạn dùng lucide-react

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
      <h1 className="text-4xl font-extrabold mb-8 text-purple-700">
        🚀 CodeVerse Blog
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="block bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition rounded-xl p-5 border border-gray-100 hover:border-purple-400 dark:border-zinc-800"
          >
            <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
              {post.title}
            </h2>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
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
