import { ArrowRight, Calendar, Clock } from "lucide-react";

import type { InferEntrySchema } from "astro:content";
import { CategoryBadge } from "../categories/category-badge";
import FormattedDate from "../FormattedDate.tsx";

interface Props {
  post: {
    id: string;
    collection: string;
    data: InferEntrySchema<"blog">;
  };
}

export function PostCard({ post }: Props) {
  return (
    <div className="border border-stone-200 dark:border-stone-700 p-6 hover:shadow-md transition-shadow bg-white dark:bg-stone-800/50">
      <div className="mb-4">
        {post.data.categories.map((category, i) => (
          <CategoryBadge category={category} key={i} />
        ))}
      </div>
      <a href={`/blog/${post.id}`}>
        <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-50 mb-3 hover:text-stone-700 dark:hover:text-stone-300">
          {post.data.title}
        </h3>
      </a>
      <p className="text-stone-500 dark:text-stone-400 mb-4 line-clamp-2">
        {post.data.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-stone-500 dark:text-stone-400">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <FormattedDate date={post.data.pubDate} />
            {post.data.updatedDate && (
              <div>
                Last updated on <FormattedDate date={post.data.updatedDate} />
              </div>
            )}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.data.duration} minutes.
          </div>
        </div>
        <a
          href={`/blog/${post.id}`}
          className="group inline-flex items-center text-sm font-medium text-stone-900 dark:text-stone-50 hover:text-stone-700 dark:hover:text-stone-300"
        >
          Read
          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
