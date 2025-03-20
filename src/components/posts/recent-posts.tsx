import { ArrowRight } from "lucide-react";

import { getCollection } from "astro:content";
import { PostCard } from "./post-card";

const posts = (await getCollection("blog")).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);

export function RecentPosts() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50">
          Recent Posts
        </h2>
        <a
          href="/blog"
          className="group flex items-center text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
        >
          View all posts
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
