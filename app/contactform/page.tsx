"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ExclamationTriangleIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    toast.info("Sending...", { icon: <CheckCircledIcon /> });

    const formData = new FormData(event.target as HTMLFormElement);

    // Basic validation
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const organizationType = formData.get("organization_type") as string;

    // Validation checks
    if (!name.trim()) {
      toast.error("Please enter your name");
      setIsSubmitting(false);
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email");
      setIsSubmitting(false);
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    if (!organizationType) {
      toast.error("Please select an organization type");
      setIsSubmitting(false);
      return;
    }

    try {
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_CONTACT_EMAIL_API_KEY!
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-32 px-4 relative">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        <form onSubmit={onSubmit} className="contents">
          {/* Hidden input for web3forms */}
          <input type="hidden" name="access_key" value="YOUR-API-KEY-HERE" />

          {/* Left Card - Personal Information */}
          <div
            className="p-8 rounded-2xl shadow-2xl 
            backdrop-blur-xl bg-white/5 
            border border-white/10 
            hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Personal Information
            </h2>
            <div className="space-y-5">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-black/10 border border-white/20 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-black/10 border border-white/20 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300"
                />
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <label
                    htmlFor="linkedin"
                    className="block text-sm font-medium mb-1"
                  >
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    id="linkedin"
                    placeholder="linkedin.com/in/profile"
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-black/10 border border-white/20 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="github"
                    className="block text-sm font-medium mb-1"
                  >
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    name="github"
                    id="github"
                    placeholder="github.com/username"
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-black/10 border border-white/20 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Organization Type *
                </label>
                <select
                  name="organization_type"
                  required
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-black/10 border border-white/20 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300 [&>option]:bg-neutral-950 [&>option]:text-white"
                >
                  <option value="">Select organization type</option>
                  <option value="non_profit">Non-Profit Organization</option>
                  <option value="company">Company</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Card - Project & Open Source */}
          <div
            className="p-8 rounded-2xl shadow-2xl 
            backdrop-blur-xl bg-white/5 
            border border-white/10 
            hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Project & Open Source
            </h2>
            <div className="space-y-5">
              <div className="relative">
                <label
                  htmlFor="projects"
                  className="block text-sm font-medium mb-1"
                >
                  Projects Links
                </label>
                <textarea
                  name="projects"
                  id="projects"
                  rows={3}
                  placeholder="Share your project links (one per line)"
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-black/10 border border-white/20 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300"
                ></textarea>
              </div>

              <div className="relative">
                <label
                  htmlFor="opensource"
                  className="block text-sm font-medium mb-1"
                >
                  Are you interested in open source?
                </label>
                <select
                  name="opensource"
                  id="opensource"
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-black/10 border border-white/20 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300 [&>option]:bg-neutral-950 [&>option]:text-white"
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="relative">
                <label
                  htmlFor="opensource_reason"
                  className="block text-sm font-medium mb-1"
                >
                  Why are you interested in open source? (Optional)
                </label>
                <textarea
                  name="opensource_reason"
                  id="opensource_reason"
                  rows={3}
                  placeholder="Share your thoughts about open source..."
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-black/10 border border-white/20 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button and Alert Section */}
          <div className="md:col-span-2 mt-6 space-y-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-lg
                bg-gradient-to-r from-emerald-600/20 to-emerald-500/20
                border border-emerald-500/30
                font-medium text-sm
                hover:from-emerald-600/30 hover:to-emerald-500/30
                transition-all duration-300 
                transform hover:scale-[1.02] active:scale-[0.98]
                focus:outline-none focus:ring-2 
                focus:ring-emerald-500/50
                shadow-lg shadow-emerald-500/10
                disabled:opacity-50 disabled:cursor-not-allowed
                dark:bg-gradient-to-r dark:from-emerald-600/10 dark:to-emerald-500/10
                dark:border-emerald-500/20
                dark:hover:from-emerald-600/20 dark:hover:to-emerald-500/20"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Form"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
