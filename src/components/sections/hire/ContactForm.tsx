"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Container from "@/components/layout/Container";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess("Message sent successfully.");

      formRef.current.reset();
    } catch (error) {
      setSuccess("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-40">
      <Container>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Start a Project
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Let’s discuss
              <br />
              your vision.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              Whether you need a modern website,
              scalable SaaS platform, or premium
              frontend experience — let’s connect.
            </p>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8"
          >
            
            <div>
              <label className="mb-3 block text-sm text-zinc-500">
                Name
              </label>

              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-white/30"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm text-zinc-500">
                Email
              </label>

              <input
                type="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-white/30"
              />
            </div>

            <div>
              <label className="mb-3 block text-sm text-zinc-500">
                Project Details
              </label>

              <textarea
                rows={6}
                name="message"
                required
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-white/30"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>

            {success && (
              <p className="text-sm text-zinc-400">
                {success}
              </p>
            )}

          </form>

        </div>

      </Container>
    </section>
  );
}