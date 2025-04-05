"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    const formData = new FormData(e.currentTarget);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_CONTACT_EMAIL_API_KEY!
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Update loading toast to success
        toast.update(loadingToast, {
          render: "Message sent successfully! 🎉",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          closeButton: true,
        });
        // Reset the form
        (e.target as HTMLFormElement).reset();
      } else {
        // Update loading toast to error
        toast.update(loadingToast, {
          render: "Failed to send message. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
          closeButton: true,
        });
      }
    } catch (error) {
      // Update loading toast to error
      toast.update(loadingToast, {
        render: "Error sending message. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
    }
  };

  return (
    <div className="min-h-screen p-6 pt-44">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-3xl shadow-2xl p-8 border border-black/5 dark:border-white/10 hover:border-emerald-300/30 transition-all duration-500">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-500 to-emerald-700 dark:from-emerald-300 dark:to-emerald-500 bg-clip-text text-transparent">
            Contact Us
          </h1>

          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/10 hover:border-emerald-300/20 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
              <h2 className="text-2xl font-semibold mb-3">Business Hours</h2>
              <p className="opacity-90">
                Open: 8:00 AM to 12:00 PM (Bangladesh Time)
              </p>
              <p className="opacity-75">Response Time: Within 24 hours</p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/10 hover:border-emerald-300/20 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
              <h2 className="text-2xl font-semibold mb-3">
                Contact Information
              </h2>
              <p className="opacity-90">
                Email:{" "}
                <a
                  href="mailto:olova.dev@gmail.com"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  olova.dev@gmail.com
                </a>
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/10 hover:border-emerald-300/20 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
              <h2 className="text-2xl font-semibold mb-3">Social Media</h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/codernazmulhossain/"
                    className="opacity-90 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span className="bg-black/5 dark:bg-white/5 p-2 rounded-lg group-hover:bg-emerald-100/20 dark:group-hover:bg-emerald-900/20 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/seraprogrammer"
                    className="opacity-90 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span className="bg-black/5 dark:bg-white/5 p-2 rounded-lg group-hover:bg-emerald-100/20 dark:group-hover:bg-emerald-900/20 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </span>
                    Facebook Page
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/codervai/"
                    className="opacity-90 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span className="bg-black/5 dark:bg-white/5 p-2 rounded-lg group-hover:bg-emerald-100/20 dark:group-hover:bg-emerald-900/20 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </span>
                    Facebook Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/xZgQte4pCr"
                    className="opacity-90 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span className="bg-black/5 dark:bg-white/5 p-2 rounded-lg group-hover:bg-emerald-100/20 dark:group-hover:bg-emerald-900/20 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                    </span>
                    Discord Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-3xl shadow-2xl p-8 border border-black/5 dark:border-white/10 hover:border-emerald-300/30 transition-all duration-500">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-500 to-emerald-700 dark:from-emerald-300 dark:to-emerald-500 bg-clip-text text-transparent">
            Send Message
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2 group">
              <label
                htmlFor="name"
                className="block text-sm font-medium opacity-90 group-hover:text-emerald-500 transition-colors duration-300"
              >
                Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-500 dark:text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-emerald-300/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label
                htmlFor="email"
                className="block text-sm font-medium opacity-90 group-hover:text-emerald-500 transition-colors duration-300"
              >
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-500 dark:text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-emerald-300/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label
                htmlFor="message"
                className="block text-sm font-medium opacity-90 group-hover:text-emerald-500 transition-colors duration-300"
              >
                Message
              </label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-gray-500 dark:text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </span>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-emerald-300/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10"
                  placeholder="Enter your message"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-xl transition-all duration-300 font-medium overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-500 dark:to-emerald-600"></span>
              <span className="relative flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
