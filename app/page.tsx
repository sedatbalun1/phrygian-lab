import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex flex-col justify-between font-sans selection:bg-[#c5a880] selection:text-black overflow-x-hidden relative">
      
      {/* Mistik Arka Plan Işık Efekti */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(197,168,128,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* 🏛️ HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-10 relative">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-light tracking-[0.4em] text-[#d4af37] font-serif">PHRYGIAN LAB</span>
          <span className="text-[9px] tracking-[0.3em] uppercase opacity-40 mt-1">Litho-Peloid Protocol</span>
        </div>
        <div className="text-xs tracking-[0.2em] text-[#c5a880] font-light uppercase hidden md:block">
          Formula 428
        </div>
      </header>

      {/* 💎 HERO & WAITLIST SECTION */}
      <section className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center my-auto py-16 z-10 relative">
        
        <p className="text-xs tracking-[0.4em] uppercase text-[#c5a880] mb-6 font-semibold font-serif">
          THE PRIMITIVE ROYALTY
        </p>

        <h1 className="text-4xl md:text-7xl font-serif font-extralight tracking-wide leading-tight max-w-4xl mb-8 text-white">
          "Older than humanity.<br/>
          <span className="font-normal italic text-neutral-300">Cleaner than science."</span>
        </h1>

        <p className="text-sm md:text-base font-light tracking-wide text-neutral-400 max-w-2xl leading-relaxed mb-12">
          İnsanlık henüz medeniyeti kurmamışken, Frigya’nın kalbindeki kutsal tektonik katmanlarda olgunlaşan, yeryüzünün en vahşi ve en aristokratik mineral ritüeli. Afyonkarahisar mağaralarında, ham mermer blokların kalbinde ayda sadece <span className="text-[#d4af37] font-medium">100 adet</span> üretilir.
        </p>

        {/* 🔒 PRIVACY WAITLIST */}
        <div className="w-full max-w-md bg-[#111111] border border-neutral-900 p-8 md:p-10 shadow-2xl relative transition-all duration-500 hover:border-[#c5a880]/20">
          <h3 className="text-xs tracking-[0.2em] uppercase text-[#c5a880] mb-3 font-semibold font-serif">
            REQUEST PRIVATE ACCESS
          </h3>
          <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
            Londra, Paris ve Dubai lansmanları öncesi, sınırlı aylık tahsisat listesine dahil olmak için başvurunuzu iletin.
          </p>
          
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-[#161616] border border-neutral-800 px-4 py-3.5 text-sm rounded-none focus:outline-none focus:border-[#c5a880] tracking-wide text-white transition-colors placeholder:text-neutral-700"
              required 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-[#161616] border border-neutral-800 px-4 py-3.5 text-sm rounded-none focus:outline-none focus:border-[#c5a880] tracking-wide text-white transition-colors placeholder:text-neutral-700"
              required 
            />
            <button 
              type="submit" 
              className="w-full bg-[#c5a880] text-black uppercase font-medium text-xs tracking-[0.25em] py-4 rounded-none hover:bg-white hover:text-black transition-colors duration-300 shadow-xl"
            >
              JOIN THE PRIVATE WAITLIST
            </button>
          </form>
        </div>

      </section>

      {/* 🌍 FOOTER */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.25em] text-neutral-600 uppercase z-10 border-t border-neutral-900/30">
        <div className="flex gap-6 mb-4 md:mb-0 font-serif">
          <span>London</span>
          <span>Paris</span>
          <span>Dubai</span>
        </div>
        <div className="text-center md:text-right">
          <span>Allocated Masterpieces: €450 Euro</span>
        </div>
      </footer>

    </main>
  );
}