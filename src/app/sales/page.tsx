import { Container } from "@/components/layout/Container";

export default function Page() {
  return (
    <main className="bg-cream py-20">
      <Container>
        <h1 className="text-4xl font-bold tracking-tight text-[#111]">Sales</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          This is a placeholder page for <span className="font-semibold">/sales</span>.
        </p>
      </Container>
    </main>
  );
}
