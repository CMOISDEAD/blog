export function Hero() {
  return (
    <section className="relative border-b border-stone-200 dark:border-stone-700">
      <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-10 gap-4">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-4 bg-stone-900 dark:bg-stone-50 opacity-10"
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-stone-400 dark:bg-stone-500 mx-auto"></div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-stone-50 mb-6 leading-tight">
            Crafting Digital Experiences with Code & Creativity
          </h1>
          <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Exploring the art of modern web development through thoughtful
            tutorials, in-depth articles, and practical insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-stone-800 hover:bg-stone-700 text-stone-50 dark:bg-stone-700 dark:hover:bg-stone-600 px-6 py-6 rounded-none">
              Latest Articles
            </button>
            <a
              href="https://camilodavila.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 px-6 py-6 rounded-none">
                View Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
