import Link from "next/link";
import { ArrowUpRight, CodeXml, Mail, MessageSquareText } from "lucide-react";
import Container from "@/components/layout/Container";

const cardClassName =
  "group rounded-2xl border border-white/[0.08] bg-[#0a0f15] p-6 transition duration-300 hover:border-white/20 hover:bg-[#101820] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:p-7";

export default function ContactMethods() {
  return (
    <section className="pb-16 sm:pb-20" aria-label="Contact options">
      <Container>
        <div className="grid gap-3 md:grid-cols-3">
          <a
            href="mailto:hello@vsworks.dev"
            className={cardClassName}
          >
            <div className="flex items-center justify-between">
              <Mail className="size-5 text-white" aria-hidden="true" />
              <ArrowUpRight className="size-4 text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-zinc-500">Email</p>
            <p className="mt-2 break-all text-lg font-medium text-white">hello@vsworks.dev</p>
          </a>

          <a
            href="https://github.com/vatsalsaxena22"
            target="_blank"
            rel="noreferrer"
            className={cardClassName}
          >
            <div className="flex items-center justify-between">
              <CodeXml className="size-5 text-white" aria-hidden="true" />
              <ArrowUpRight className="size-4 text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-zinc-500">Code &amp; experiments</p>
            <p className="mt-2 text-lg font-medium text-white">GitHub</p>
          </a>

          <Link href="#project-form" className={cardClassName}>
            <div className="flex items-center justify-between">
              <MessageSquareText className="size-5 text-white" aria-hidden="true" />
              <ArrowUpRight className="size-4 text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-zinc-500">Have a brief?</p>
            <p className="mt-2 text-lg font-medium text-white">Send a project inquiry</p>
          </Link>
        </div>
      </Container>
    </section>
  );
}
