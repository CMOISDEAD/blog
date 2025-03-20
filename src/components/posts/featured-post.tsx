import { ArrowRight, Calendar, Clock } from "lucide-react";

import { CategoryBadge } from "../categories/category-badge";
import { getCollection } from "astro:content";
import FormattedDate from "../FormattedDate";

const posts = (await getCollection("blog")).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);

export function FeaturedPost() {
  const post = posts[0];

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50">
          Featured Post
        </h2>
      </div>

      <div className="border border-stone-200 dark:border-stone-700 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="bg-stone-100 dark:bg-stone-800 h-60 md:h-auto relative">
            <div className="h-full w-full bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-800 flex items-center justify-center">
              <span className="font-serif text-6xl text-stone-500 dark:text-stone-400 opacity-50">
                {post.data.title.charAt(0)}
              </span>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-stone-300 dark:border-stone-600 opacity-60"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-stone-300 dark:border-stone-600 opacity-60"></div>
          </div>
          <div className="p-8">
            <div className="mb-4">
              <CategoryBadge category={post.collection} />
            </div>
            <a href={`/blog/${post.id}`}>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50 mb-3 hover:text-stone-700 dark:hover:text-stone-300">
                {post.data.title}
              </h3>
            </a>
            <p className="text-stone-500 dark:text-stone-400 mb-6">
              {post.data.description}
            </p>
            <div className="flex items-center text-sm text-stone-500 dark:text-stone-400 mb-4">
              <div className="flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                <FormattedDate date={post.data.pubDate} />
                {post.data.updatedDate && (
                  <div>
                    Last updated on{" "}
                    <FormattedDate date={post.data.updatedDate} />
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {post.data.duration} minutes.
              </div>
            </div>
            <a
              href={`/blog/${post.id}`}
              className="group inline-flex items-center font-medium text-stone-900 dark:text-stone-50 hover:text-stone-700 dark:hover:text-stone-300"
            >
              Read article
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
