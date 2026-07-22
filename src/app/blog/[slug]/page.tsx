import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post?.title || "Blog",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-white">
      <div className="border-b border-slate-100 bg-gradient-to-br from-brand-blue via-[#0c5a9e] to-brand-cyan">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-100 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          <span className="mt-6 inline-block rounded-lg bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-blue-100">
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} read
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-lg leading-relaxed text-brand-slate">{post.excerpt}</p>
        <div className="prose prose-slate mt-8 max-w-none space-y-4 text-slate-700">
          <p>
            At JobCareerPao, we believe career growth should feel intentional — not overwhelming.
            This guide walks you through practical steps you can apply this week, whether you&apos;re
            preparing for interviews, refreshing your resume, or navigating salary conversations.
          </p>
          <h2 className="font-display text-xl font-bold text-brand-dark pt-4">Key takeaways</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Focus on outcomes and measurable impact in your applications.</li>
            <li>Keep your profile complete — recruiters notice readiness.</li>
            <li>Use membership boosts strategically around active hiring cycles.</li>
            <li>Practice structured storytelling for behavioral interviews.</li>
          </ul>
          <p>
            Ready to put this into action?{" "}
            <Link href="/jobs" className="font-semibold text-brand-cyan hover:text-brand-blue">
              Browse verified jobs
            </Link>{" "}
            or{" "}
            <Link href="/auth/signup" className="font-semibold text-brand-cyan hover:text-brand-blue">
              create your account
            </Link>{" "}
            and unlock your potential.
          </p>
        </div>
      </div>
    </article>
  );
}