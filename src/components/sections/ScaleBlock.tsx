import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ScaleBlock() {
  return (
    <Section className="bg-linear-to-b from-gray-50 to-white">
      <Container className="text-center">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight text-[#111] md:text-4xl">
          Unlock the power of real-time insights with relyd Pulse
        </h2>
        <p className="mx-auto mt-6 max-w-[650px] text-base leading-relaxed text-gray-600 sm:text-lg">
          Monitor system performance, track resource allocation, and forecast scaling needs with precision - all in one place.
        </p>
      </Container>
    </Section>
  );
}
