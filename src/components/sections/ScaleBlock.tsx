import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function ScaleBlock() {
  return (
    <Section className="bg-linear-to-b from-gray-50 via-blue-50/25 to-white">
      <Container className="text-center">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">
          Unlock the power of real-time insights with relyd Pulse
        </h2>
        <p className="mx-auto mt-8 max-w-[640px] text-base leading-relaxed text-gray-600 sm:text-lg">
          Monitor system performance, track resource allocation, and forecast scaling needs with precision - all in one place.
        </p>
        <div className="relative mx-auto mt-12 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200/40 shadow-[0_10px_20px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)] ring-1 ring-gray-900/3">
          <Image
            src="/assets/scale-analytics.jpg"
            alt="Business analytics and performance data on a desk"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority={false}
          />
        </div>
      </Container>
    </Section>
  );
}
