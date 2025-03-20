import Link from "next/link"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="border border-stone-200 dark:border-stone-700 bg-transparent hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
      <CardHeader className="pb-2">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-medium text-stone-900 dark:text-stone-50 hover:text-stone-700 dark:hover:text-stone-300">
            {post.title}
          </h2>
        </Link>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-stone-500 dark:text-stone-400 line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-stone-500 dark:text-stone-400">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </CardFooter>
    </Card>
  )
}
