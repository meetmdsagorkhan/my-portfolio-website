import React from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User } from "lucide-react";
import RevealAnimation from "@/components/reveal-animations";
import { BlogNewsletter } from "@/components/blog/blog-newsletter"; // NEW IMPORT

export const metadata = {
  title: "Blog | Journey in View",
  description: "Insights on CX operations, AI implementation, and the path of a technical leader.",
};

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen font-sans">
      <RevealAnimation>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 uppercase tracking-tighter">
          Journey in View
        </h1>
        <p className="text-zinc-400 text-center mb-2 max-w-2xl mx-auto">
          Insights on CX operations, AI implementation, and the path of a technical leader.
        </p>
        <p className="text-xs font-mono text-purple-500/80 text-center uppercase tracking-widest mb-12">
          New post every Tuesday & Friday • Stay Tuned
        </p>
      </RevealAnimation>

      {/* NEW: The Newsletter and Auto-Updating Schedule Cards */}
      <RevealAnimation delay={0.2}>
        <BlogNewsletter />
      </RevealAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {posts.map((post, index) => (
          <RevealAnimation key={post.slug} delay={index * 0.1}>
            <Link href={`/blogs/${post.slug}`}>
              {/* Rest of your existing Card code... */}
              <Card className="h-full bg-black/40 border-zinc-800 backdrop-blur-sm hover:border-purple-500/50 transition-colors group overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                      {post.metadata.tags?.[0] || "Insight"}
                    </Badge>
                    <span className="text-xs text-zinc-500 flex items-center gap-1 font-mono">
                      <CalendarDays className="w-3 h-3" />
                      {post.metadata.publishedAt}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                    {post.metadata.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {post.metadata.summary}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                    <User className="w-4 h-4" />
                    {post.metadata.author}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
}