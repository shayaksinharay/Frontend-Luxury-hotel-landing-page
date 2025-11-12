import React from "react";

export default function Page() {
  return (
    <main className="bg-[var(--luxor-dark)] py-8 px-6">
      <div className="mx-auto bg-[var(--luxor-cream)] max-w-[720px] min-h-[1400px]">
        <div className="bg-[var(--luxor-forest)] text-white px-6 py-3 flex items-center justify-between">
          <div className="text-sm font-semibold">Luxort</div>
          <div className="text-xs opacity-80">Home • About • Contact</div>
        </div>
        <section className="px-8 pt-10 pb-8">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h1 className="font-serif text-[48px] leading-[1.02] tracking-tight text-[rgb(20,20,18)]">
                WELCOME TO<br/>LUXORT
              </h1>
              <p className="mt-6 text-sm text-[#6b6b62] max-w-[520px]">
                Where timeless elegance meets modern luxury. Explore our curated collection
                of design-driven interiors, unique experiences and bespoke customizations.
              </p>
              <div className="mt-6 flex gap-3">
                <button className="px-5 py-2 rounded text-sm bg-[var(--luxor-forest)] text-white shadow">EXPLORE</button>
                <button className="px-4 py-2 rounded text-sm border border-[#d7d3c8] bg-white">LEARN MORE</button>
              </div>
            </div>
            <div className="w-12">
              <div className="h-8 bg-[var(--luxor-forest)] mb-2" />
              <div className="h-8 bg-[var(--luxor-sage)] mb-2" />
              <div className="h-8 bg-[#2B3E36]" />
            </div>
          </div>
        </section>
        <div className="px-8">
          <div className="h-[2px] bg-[#dcd9cf] w-full" />
        </div>
        <footer className="bg-[var(--luxor-dark)] text-white mt-6 py-10">
          <div className="px-8">
            <div className="text-center text-sm font-semibold">EVENTS, EXCLUSIVE OFFERS, PRIVATE VIEWINGS, AND LATEST NEWS</div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-sm">© {new Date().getFullYear()} Luxort</div>
              </div>
              <div className="text-sm">Privacy • Terms</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}