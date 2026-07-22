import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Career Blog",
  description: "Career tips, resume advice, interview prep, salary guides, and industry news.",
};

const categoryColors: Record<string, string> = {
  "Career Tips": "bg-brand-blue/10 text-brand-blue",
  "Resume Tips": "bg-brand-cyan/10 text-brand-cyan",
  "Interview Preparation": "bg-brand-orange/10 text-brand-orange",
  "Salary Guide": "bg-emerald-50 text-emerald-700",
  "Industry News": "bg-slate-100 text-slate-700",
};

export default function BlogPage() {
  return (
    <div className="bg-brand-gray min-h-screen">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">
            Career Blog
          </h1>
          <p className="mt-2 max-w-2xl text-brand-slate">
            Career tips, resume tips, interview preparation, salary guides, and industry news.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-strong group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative h-40 bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-orange">
                <div className="absolute inset-0 flex items-end p-5">
                  <span
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ${
                      categoryColors[post.category] || "bg-white text-brand-blue"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs text-brand-slate">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-2 font-display text-lg font-semibold text-brand-dark group-hover:text-brand-blue">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 flex-1 text-sm text-brand-slate">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan hover:text-brand-blue"
                >
                  Read article
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}