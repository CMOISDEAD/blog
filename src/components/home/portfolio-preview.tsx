import { ArrowRight } from "lucide-react";

export function PortfolioPreview() {
  return (
    <section className="mb-16">
      <div className="border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/30">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-50 mb-4">
              Explore My Portfolio
            </h2>
            <p className="text-stone-500 dark:text-stone-400 mb-6 leading-relaxed">
              View my selected projects and professional work as a fullstack
              developer. I specialize in creating modern, performant web
              applications using React, Next.js, and Node.js.
            </p>
            <div className="flex items-center border-b border-stone-200 dark:border-stone-700 pb-4 mb-4">
              <div className="w-2 h-2 bg-stone-400 dark:bg-stone-500 mr-3"></div>
              <span className="text-stone-700 dark:text-stone-300">
                Modern UI/UX Design
              </span>
            </div>
            <div className="flex items-center border-b border-stone-200 dark:border-stone-700 pb-4 mb-4">
              <div className="w-2 h-2 bg-stone-400 dark:bg-stone-500 mr-3"></div>
              <span className="text-stone-700 dark:text-stone-300">
                Fullstack Applications
              </span>
            </div>
            <div className="flex items-center border-b border-stone-200 dark:border-stone-700 pb-4 mb-6">
              <div className="w-2 h-2 bg-stone-400 dark:bg-stone-500 mr-3"></div>
              <span className="text-stone-700 dark:text-stone-300">
                Performance Optimization
              </span>
            </div>
            <a
              href="https://camilodavila.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center font-medium text-stone-900 dark:text-stone-50 hover:text-stone-700 dark:hover:text-stone-300"
            >
              Visit Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="bg-stone-100 dark:bg-stone-800 h-60 md:h-auto relative">
            <div className="h-full w-full bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-800 flex items-center justify-center">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-10">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-stone-500 dark:border-stone-400"
                  ></div>
                ))}
              </div>
              <div className="relative z-10 text-center p-6">
                <div className="w-16 h-16 border border-stone-400 dark:border-stone-500 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-serif text-2xl text-stone-500 dark:text-stone-400">
                    CD
                  </span>
                </div>
                <span className="font-serif text-xl text-stone-500 dark:text-stone-400">
                  Portfolio
                </span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-stone-300 dark:border-stone-600 opacity-60"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-stone-300 dark:border-stone-600 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
