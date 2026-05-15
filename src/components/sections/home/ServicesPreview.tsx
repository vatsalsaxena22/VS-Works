import Container from "@/components/layout/Container";

const services = [
  "Web Development",
  "WordPress Development",
  "WooCommerce",
  "PHP Applications",
  "MERN Stack Apps",
];

export default function ServicesPreview() {
  return (
    <section className="relative py-40 border-y border-white/10">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />

      <Container>

        <div className="mb-20 max-w-4xl">
          
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Services
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Modern digital
            <br />
            solutions.
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-2xl font-semibold tracking-tight text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              {service}
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}