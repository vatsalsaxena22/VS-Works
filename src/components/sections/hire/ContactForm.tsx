"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { services } from "@/data/services";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setFeedback(
        "The inquiry form is not configured right now. Please email hello@vsworks.dev instead.",
      );
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const formData = new FormData(formRef.current);
      const projectType = String(formData.get("project_type") ?? "Something else");
      const message = String(formData.get("message") ?? "");

      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: String(formData.get("user_name") ?? ""),
          user_email: String(formData.get("user_email") ?? ""),
          message: `Project type: ${projectType}\n\n${message}`,
        },
        publicKey,
      );
      setStatus("success");
      setFeedback("Thanks for reaching out. Your inquiry has been sent.");
      formRef.current.reset();
    } catch {
      setStatus("error");
      setFeedback(
        "We couldn’t send your inquiry. Please try again or email hello@vsworks.dev.",
      );
    }
  };

  return (
    <section id="project-form" className="scroll-mt-28 pb-24 sm:pb-32" aria-labelledby="project-form-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              Project inquiry
            </p>
            <h2 id="project-form-heading" className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
              Let’s work through your idea.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              A few details will help us understand what you have in mind and
              how VSW can help move it forward.
            </p>
            <a
              href="mailto:hello@vsworks.dev"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              hello@vsworks.dev
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5 rounded-[1.5rem] border border-white/[0.09] bg-[#0a0f15] p-5 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="mb-2.5 block text-xs font-medium text-zinc-300">
                  Your name
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  autoComplete="name"
                  required
                  placeholder="Name"
                  className="w-full rounded-xl border border-white/[0.1] bg-[#080c12] px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/10"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="mb-2.5 block text-xs font-medium text-zinc-300">
                  Email address
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/[0.1] bg-[#080c12] px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="project_type" className="mb-2.5 block text-xs font-medium text-zinc-300">
                What are you looking to build?
              </label>
              <select
                id="project_type"
                name="project_type"
                defaultValue=""
                required
                className="w-full rounded-xl border border-white/[0.1] bg-[#080c12] px-4 py-3.5 text-sm text-zinc-300 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/10"
              >
                <option value="" disabled>
                  Choose a starting point
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2.5 block text-xs font-medium text-zinc-300">
                Project details
              </label>
              <textarea
                id="message"
                rows={5}
                name="message"
                minLength={12}
                required
                placeholder="What problem are you trying to solve? What would a good outcome look like?"
                className="w-full resize-y rounded-xl border border-white/[0.1] bg-[#080c12] px-4 py-3.5 text-sm leading-6 text-white placeholder:text-zinc-600 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/10"
              />
            </div>

            <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#080808] transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Sending inquiry…" : "Send inquiry"}
                {status !== "sending" && (
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
              <p className="text-xs leading-5 text-zinc-600">
                Your details are used to respond to this inquiry.
              </p>
            </div>

            {feedback && (
              <p
                role={status === "error" ? "alert" : "status"}
                aria-live={status === "error" ? "assertive" : "polite"}
                className={`text-sm leading-6 ${
                  status === "success" ? "text-white" : "text-zinc-300"
                }`}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
