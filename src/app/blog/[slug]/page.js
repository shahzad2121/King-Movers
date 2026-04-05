import { notFound } from "next/navigation";
import BlogPostPageClient from "@/components/blog/BlogPostPageClient";
import {
  getBlogPostBySlug,
  getBlogSlugsForStaticParams,
} from "@/components/blog/blogPosts";

export async function generateStaticParams() {
  return getBlogSlugsForStaticParams();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Article | King Moving Services" };
  }
  return {
    title: `${post.title} | King Moving Services`,
    description: post.description,
    openGraph: {
      title: `${post.title} | King Moving Services`,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="overflow-hidden">
      <BlogPostPageClient post={post} />
    </div>
  );
}
