import { getCollection } from "astro:content";
import { CategoryBadge } from "../categories/category-badge";

export async function Categories() {
  const posts = await getCollection("blog");
  const categories = [
    ...new Set(posts.flatMap((post) => post.data.categories)),
  ];

  return (
    <section className="mb-16">
      <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50 mb-8">
        Browse by Category
      </h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <CategoryBadge key={category} category={category} />
        ))}
      </div>
    </section>
  );
}
