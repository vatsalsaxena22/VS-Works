import Container from "@/components/layout/Container";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section id="offerings" className="scroll-mt-28 pb-24 sm:pb-32" aria-labelledby="offerings-heading">
      <Container>
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              Capabilities
            </p>
            <h2 id="offerings-heading" className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ways we can help
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-zinc-500">
            Bring a defined brief, a rough sketch, or just the problem you want to solve.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              number={String(index + 1).padStart(2, "0")}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
