import { LinkShortener } from "@/components/LinkShortener";

export default function Home() {
  return (
    <section className="h-[calc(100vh-192px)] items-center flex flex-col mt-24 gap-10 max-w-xl mx-auto border-2 rounded-2xl p-5 border-slate-700 shadow-md shadow-slate-500/80">
      <h1 className="text-4xl">Short my Link</h1>
      <LinkShortener />
    </section>
  );
}
