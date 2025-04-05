import Link from "next/link";

export default function Positions() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 dark:bg-[#0C0C0C] flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center dark:text-white mb-4">
          Open Positions
        </h1>
        <p className="text-center dark:text-gray-400 mb-12 text-lg">
          Join our amazing team and make an impact! ✨
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Non-Profit Intern Position */}
          <div className="rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5 p-8 hover:shadow-xl transition-all duration-300 border border-gray-200/20 dark:border-gray-700/30 hover:scale-105 group">
            <div className="text-center text-4xl mb-4">🌱</div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white text-center group-hover:text-blue-400 transition-colors">
              Non-Profit Intern
            </h2>
            <div className="space-y-4 dark:text-gray-300">
              <p className="text-center">
                We're looking for passionate individuals who want to make a
                difference in the non-profit sector. 💪
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-center gap-2">
                  <span>🤝</span> Work with various non-profit organizations
                </li>
                <li className="flex items-center gap-2">
                  <span>📈</span> Gain valuable experience in project management
                </li>
                <li className="flex items-center gap-2">
                  <span>⏰</span> Flexible hours and remote work options
                </li>
                <li className="flex items-center gap-2">
                  <span>📅</span> 3-6 months commitment
                </li>
              </ul>
              <div className="flex justify-center">
                <Link href="/contactform">
                  <button className="mt-6 bg-blue-600/80 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-blue-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2">
                    Apply Now <span className="text-xl">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Developer Position */}
          <div className="rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5 p-8 hover:shadow-xl transition-all duration-300 border border-gray-200/20 dark:border-gray-700/30 hover:scale-105 group">
            <div className="text-center text-4xl mb-4">👨‍💻</div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white text-center group-hover:text-blue-400 transition-colors">
              Software Developer
            </h2>
            <div className="space-y-4 dark:text-gray-300">
              <p className="text-center">
                Join our development team and help build the next generation of
                web applications. 🌐
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-center gap-2">
                  <span>💻</span> Full-stack development opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span>⚡</span> Work with modern technologies
                </li>
                <li className="flex items-center gap-2">
                  <span>🤝</span> Collaborative team environment
                </li>
                <li className="flex items-center gap-2">
                  <span>💰</span> Competitive salary and benefits
                </li>
              </ul>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="mt-6 bg-blue-600/80 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-blue-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2">
                    Apply Now <span className="text-xl">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
