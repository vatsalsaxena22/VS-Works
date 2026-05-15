import Container from "@/components/layout/Container";
import Link from "next/link";

const contacts = [
  {
    title: "Email",
    value: "hello@vsworks.dev",
    href: "mailto:hello@vsworks.dev",
  },

  {
    title: "GitHub",
    value: "github.com/vatsalsaxena22",
    href: "https://github.com/vatsalsaxena22",
  },

  {
    title: "LinkedIn",
    value: "linkedin.com/in/vatsalsaxena",
    href: "https://linkedin.com",
  },
];

export default function ContactMethods() {
  return (
    <section className="pb-24">
      <Container>

        <div className="grid gap-8 md:grid-cols-3">
          {contacts.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
            >
              
              <div className="flex items-center justify-between">
                
                <p className="text-sm text-zinc-500">
                  {item.title}
                </p>

                <span className="text-white/40 transition group-hover:text-white/70">
                  →
                </span>

              </div>

              <p className="mt-10 text-xl font-medium tracking-tight text-white">
                {item.value}
              </p>

            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
}