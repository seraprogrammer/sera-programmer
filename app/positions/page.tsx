import Link from "next/link";

export default function Positions() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0F] flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-4">
          Open Positions
        </h1>
        <p className="text-center text-emerald-300/70 mb-16 text-xl">
          Join our amazing team and make an impact! ✨
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Non-Profit Intern Position */}
          <div className="backdrop-blur-xl bg-emerald-900/10 p-10 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="backdrop-blur-md bg-emerald-500/10 p-3 rounded-xl text-3xl border border-emerald-500/20">
                  🌱
                </div>
                <h2 className="text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  Non-Profit Intern
                </h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  We're looking for passionate individuals who want to make a
                  difference in the non-profit sector. 💪
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="backdrop-blur-md bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10 flex items-center gap-3 hover:border-emerald-500/30 transition-all duration-300">
                    <span className="text-emerald-400">🤝</span> Work with
                    various non-profit organizations
                  </div>
                  <div className="backdrop-blur-md bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10 flex items-center gap-3 hover:border-emerald-500/30 transition-all duration-300">
                    <span className="text-emerald-400">📈</span> Gain valuable
                    experience in project management
                  </div>
                  <div className="backdrop-blur-md bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10 flex items-center gap-3 hover:border-emerald-500/30 transition-all duration-300">
                    <span className="text-emerald-400">⏰</span> Flexible hours
                    and remote work options
                  </div>
                  <div className="backdrop-blur-md bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10 flex items-center gap-3 hover:border-emerald-500/30 transition-all duration-300">
                    <span className="text-emerald-400">📅</span> 3-6 months
                    commitment
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/contactform">
                    <button className="w-full backdrop-blur-md bg-emerald-500/80 text-white px-6 py-3 rounded-xl hover:bg-emerald-600/80 transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-400/30 hover:border-emerald-400/50">
                      Apply Now <span className="text-xl">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Position */}
          <div className="backdrop-blur-xl bg-emerald-900/10 p-10 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="backdrop-blur-md bg-emerald-500/10 p-3 rounded-xl text-3xl border border-emerald-500/20">
                  👨‍💻
                </div>
                <h2 className="text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  Software Developer
                </h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Join our development team and help build the next generation
                  of web applications. 🌐
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="backdrop-blur-md bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10 flex items-center gap-3 hover:border-emerald-500/30 transition-all duration-300">
                    <span className="text-emerald-400">💻</span> Full-stack
                    development opportunities
                  </div>
                  <div className="backdrop-blur-md bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10 flex items-center gap-3 hover:border-emerald-500/30 transition-all duration-300">
                    <span className="text-emerald-400">⚡</span> Work with
                    modern technologies
                  </div>
                  <div className="backdrop-blur-md bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10 flex items-center gap-3 hover:border-emerald-500/30 transition-all duration-300">
                    <span className="text-emerald-400">🤝</span> Collaborative
                    team environment
                  </div>
                  <div className="backdrop-blur-md bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/10 flex items-center gap-3 hover:border-emerald-500/30 transition-all duration-300">
                    <span className="text-emerald-400">💰</span> Competitive
                    salary and benefits
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/contact">
                    <button className="w-full backdrop-blur-md bg-emerald-500/80 text-white px-6 py-3 rounded-xl hover:bg-emerald-600/80 transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-400/30 hover:border-emerald-400/50">
                      Apply Now <span className="text-xl">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
