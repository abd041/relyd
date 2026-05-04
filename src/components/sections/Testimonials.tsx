"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/content/landing";
import { cn } from "@/lib/cn";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, skipSnaps: false });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <Section className="bg-gray-50">
      <Container>
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold tracking-tight text-[#111] md:text-4xl">
          Strategic Cloud Ops, for visionary leaders.
        </h2>

        <div className="relative mt-10">
          <div className="overflow-hidden px-1" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="min-w-0 shrink-0 grow-0 basis-[min(100%,380px)] rounded-2xl border border-gray-200/50 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 sm:basis-[420px]"
                >
                  <p className="text-sm leading-relaxed text-gray-600">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-5 text-sm font-medium text-[#111]">{t.name}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#111] shadow-[0_10px_20px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5" role="group" aria-label="Testimonial slides">
              {testimonials.map((_, i) => (
                <button
                  key={String(i)}
                  type="button"
                  className={cn(
                    "h-2 w-2 rounded-full transition",
                    i === selected ? "bg-[#111]" : "bg-black/15 hover:bg-black/30",
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === selected}
                  onClick={() => emblaApi?.scrollTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#111] shadow-[0_10px_20px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm font-semibold text-[#111]">Get started with relyd Pulse.</p>
      </Container>
    </Section>
  );
}
