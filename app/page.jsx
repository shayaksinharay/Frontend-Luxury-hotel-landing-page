import React from "react";

export default function Page() {
  return (
    <main className="bg-[var(--luxor-dark)] py-8 px-6">
      {/* central pale column that matches screenshot */}
      <div className="mx-auto bg-[var(--luxor-cream)] max-w-[720px] min-h-[1400px]">
        {/* Top thin dark header */}
        <div className="bg-[var(--luxor-forest)] text-white px-6 py-3 flex items-center justify-between">
          <div className="text-sm font-semibold">Luxort</div>
          <div className="text-xs opacity-80">Home • About • Contact</div>
        </div>

        {/* big hero / title area */}
        <section className="px-8 pt-10 pb-8">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h1 className="font-serif text-[48px] leading-[1.02] tracking-tight text-[rgb(20,20,18)]">
                WELCOME TO
                <br />
                LUXORT
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

            {/* slim vertical accent block to right of hero, like screenshot */}
            <div className="w-12">
              <div className="h-8 bg-[var(--luxor-forest)] mb-2" />
              <div className="h-8 bg-[var(--luxor-sage)] mb-2" />
              <div className="h-8 bg-[#2B3E36]" />
            </div>
          </div>
        </section>

        <div className="px-8">
          {/* horizontal rule like screenshot */}
          <div className="h-[2px] bg-[#dcd9cf] w-full" />
        </div>

        {/* small nav strip and filter boxes under hero */}
        <div className="px-8 py-6 flex gap-6 items-center">
          <div className="w-2/3">
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-[#e9e8df] card text-sm">Project • Interiors</div>
              <div className="p-3 bg-[#f5f4ee] card text-sm">Bespoke • Commission</div>
              <div className="p-3 bg-[#e9e8df] card text-sm">Events • Experience</div>
            </div>
          </div>

          <div className="w-1/3 text-right">
            <div className="text-xs text-[#7b7b71]">NEW</div>
            <div className="mt-2 px-3 py-2 bg-[#e8efe6] inline-block rounded text-sm">Discover</div>
          </div>
        </div>

        {/* 2-up small image + text blocks (as screenshot) */}
        <section className="px-8 py-6 grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="h-[120px] bg-[#cfcfcf] rounded card" />
            <h3 className="mt-4 font-semibold text-[18px]">Where formulaic design meets bespoke curation</h3>
            <p className="mt-2 text-sm text-[#6b6b62]">Combining artisanal techniques and sensitive modernity — every piece is handcrafted and individually considered.</p>
          </div>

          <aside className="col-span-1">
            <div className="p-4 bg-[#f0efe9] rounded">
              <div className="text-xs text-[#7b7b71]">Details</div>
              <div className="mt-3 text-[13px]">Curated rooms, seasonal selections and private appointments.</div>
            </div>
            <div className="mt-4 p-3 bg-[#e7e6df] rounded">
              <div className="h-20 bg-[#cfcfcf] rounded" />
            </div>
          </aside>
        </section>

        {/* big wide image block like screenshot center */}
        <div className="px-8 pb-8">
          <div className="h-[200px] bg-[#cfcfcf] rounded card" />
        </div>

        {/* two column section with left text and right stacked blocks */}
        <div className="px-8 pb-8 grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <h3 className="font-serif text-2xl">Experience our curation</h3>
            <p className="mt-3 text-sm text-[#6b6b62]">Each selection is thoughtfully paired to create a cohesive narrative for living spaces and events.</p>

            <div className="mt-6 p-4 bg-[#f6f6f1] rounded card">
              <div className="h-20 bg-[#d8d8d8] rounded" />
            </div>
          </div>

          <div className="col-span-1 space-y-4">
            <div className="h-20 bg-[#d0d0d0] rounded" />
            <div className="h-20 bg-[#d0d0d0] rounded" />
          </div>
        </div>

        {/* feature strip with vertical accents like screenshot */}
        <div className="px-8 pb-10 flex gap-4 items-center">
          <div className="w-2/3">
            <div className="p-6 bg-[#f1efe7] rounded card">
              <h4 className="font-semibold">Featured Collection</h4>
              <p className="text-sm mt-2 text-[#6b6b62]">Limited releases and seasonal highlights.</p>
            </div>
          </div>

          <div className="w-1/3 flex gap-2">
            <div className="flex-1 bg-[#21392f] h-24 rounded" />
            <div className="flex-1 bg-[#2a3e36] h-24 rounded" />
          </div>
        </div>

        {/* small accordion/contact box like screenshot */}
        <div className="px-8 pb-8">
          <div className="p-6 bg-[#efece3] rounded card">
            <h5 className="font-semibold">Inquire about custom pieces</h5>
            <form className="mt-4 space-y-3">
              <input className="w-full p-2 rounded border border-[#dfdbcf]" placeholder="Name" />
              <input className="w-full p-2 rounded border border-[#dfdbcf]" placeholder="Email" />
              <textarea className="w-full p-2 rounded border border-[#dfdbcf]" rows={3} placeholder="Message" />
              <div className="text-right">
                <button className="px-4 py-2 bg-[var(--luxor-forest)] text-white rounded">Send</button>
              </div>
            </form>
          </div>
        </div>

        {/* small cards / testimonials area */}
        <div className="px-8 pb-8 grid grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded card">
            <div className="h-20 bg-[#ddd]" />
            <h6 className="mt-3 font-semibold">Article</h6>
            <p className="text-sm mt-1 text-[#6b6b62]">Quick blurb about an event or news.</p>
          </div>
          <div className="p-4 bg-white rounded card">
            <div className="h-20 bg-[#ddd]" />
            <h6 className="mt-3 font-semibold">Article</h6>
            <p className="text-sm mt-1 text-[#6b6b62]">Quick blurb about an event or news.</p>
          </div>
          <div className="p-4 bg-white rounded card">
            <div className="h-20 bg-[#ddd]" />
            <h6 className="mt-3 font-semibold">Article</h6>
            <p className="text-sm mt-1 text-[#6b6b62]">Quick blurb about an event or news.</p>
          </div>
        </div>

        {/* big dark footer bar */}
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
