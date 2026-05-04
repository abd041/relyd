"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/content/landing";
import { cn } from "@/lib/cn";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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
    <Section className="bg-linear-to-b from-gray-50/90 to-white">
      <Container>
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">
          Strategic Cloud Ops, for visionary leaders.
        </h2>

        <div className="relative mx-auto mt-10 aspect-21/9 w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200/40 shadow-[0_10px_20px_rgba(0,0,0,0.04),0_20px_40px_rgba(0,0,0,0.05)] ring-1 ring-gray-900/3">
          <Image
            src="/assets/testimonial-abstract.jpg"
            alt="Abstract technology and software development workspace"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority={false}
          />
        </div>

        <div className="relative mt-10">
          <div className="overflow-hidden px-1" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="min-w-0 shrink-0 grow-0 basis-[min(100%,380px)] rounded-2xl border border-gray-200/40 bg-white p-6 shadow-[0_10px_20px_rgba(0,0,0,0.04),0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:translate-y-[-4px] hover:shadow-[0_14px_28px_rgba(0,0,0,0.05),0_32px_56px_rgba(0,0,0,0.09)] sm:basis-[420px]"
                >
                  <p className="text-sm leading-relaxed text-gray-600">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-6 text-sm font-medium text-gray-900">{t.name}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/50 bg-white text-gray-900 shadow-[0_8px_16px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:bg-gray-50/90 hover:shadow-[0_10px_20px_rgba(0,0,0,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
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
                    i === selected ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400",
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/50 bg-white text-gray-900 shadow-[0_8px_16px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:bg-gray-50/90 hover:shadow-[0_10px_20px_rgba(0,0,0,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <p className="mt-12 text-center text-sm font-semibold text-gray-900">Get started with relyd Pulse.</p>
      </Container>
    </Section>
  );
}
