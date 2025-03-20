export function Newsletter() {
  return (
    <section className="border border-stone-200 dark:border-stone-700 p-8 text-center bg-stone-100 dark:bg-stone-800">
      <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50 mb-4">
        Subscribe to my newsletter
      </h2>
      <p className="text-stone-500 dark:text-stone-400 mb-6 max-w-xl mx-auto">
        Get notified when I publish new articles. I won&apos;t spam you and you
        can unsubscribe anytime.
      </p>
      <div className="flex max-w-md mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-4 py-2 rounded-none border border-stone-200 dark:border-stone-700 dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:ring-0 focus:border-stone-400 dark:focus:border-stone-500"
        />
        <button className="px-2 rounded-none bg-stone-800 hover:bg-stone-700 dark:bg-stone-700 dark:hover:bg-stone-600 text-stone-50">
          Subscribe
        </button>
      </div>
    </section>
  );
}
