// pages/blog/[slug].tsx

import Layout from "@/components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts-md";

interface PostProps {
  title: string;
  date: string;
  content: string;
  description: string;
}

export default function BlogPost({ title, date, content }: PostProps) {
  return (
    <Layout title={`${title} | CodeVerse`} description={content.slice(0, 150)}>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <article
        className="leading-7 prose prose-indigo"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: {
      title: post.title,
      date: post.date,
      content: post.contentHtml,
      description: post.description,
    },
  };
};
