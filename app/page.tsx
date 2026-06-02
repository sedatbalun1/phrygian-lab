import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex flex-col justify-between font-sans selection:bg-[#c5a880] selection:text-black overflow-x-hidden relative">
      
      {/* Mistik Arka Plan Işık Efektleri */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(197,168,128,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.02)_0%,transparent_60%)] blur-3xl pointer-events-none" />

      {/* 🏛️ HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-10 relative border-b border-neutral-900/40">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-light tracking-[0.4em] text-[#d4af37] font-serif">PHRYGIAN LAB</span>
          <span className="text-[9px] tracking-[0.3em] uppercase opacity-40 mt-1">Litho-Peloid Protocol</span>
        </div>
        <div className="text-xs tracking-[0.2em] text-[#c5a880] font-light uppercase hidden md:block">
          Atypical Luxury / Formula 428
        </div>
      </header>

      {/* 💎 HERO SECTION (MANIFESTO) */}
      <section className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center pt-24 pb-16 z-10 relative">
        
        <p className="text-xs tracking-[0.5em] uppercase text-[#c5a880] mb-6 font-semibold font-serif">
          ARZU VE KITLIK NESNESİ
        </p>

        <h1 className="text-4xl md:text-7xl font-serif font-extralight tracking-wide leading-tight max-w-4xl mb-8 text-white">
          "Older than humanity.<br/>
          <span className="font-normal italic text-neutral-300">Cleaner than science."</span>
        </h1>

        <p className="text-sm md:text-base font-light tracking-wide text-neutral-400 max-w-3xl leading-relaxed mb-6">
          İnsanlık henüz yeryüzünde yokken, Frigya’nın tektonik mağaralarında, sıfır ışık ve mutlak basınç altında milyonlarca yılda olgunlaşan mineral geometrisi. Biz laboratuvarda yeni bir şey üretmiyoruz; tıp endüstrisinin ve modern bilimin asla taklit edemeyeceği, zamanın unuttuğu o vahşi, saf mineralizasyon ritüelini ham mermer blokların kalbinden çıkarıyoruz. 
        </p>
        
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 max-w-xl italic">
          Biyolojik bir arınma değil, jeolojik bir mülkiyet hakkı.
        </p>
      </section>

      {/* 📦 3 CADİM ÜRÜN (THE ANTIQUE TRIAD) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 z-10 relative">
        <h2 className="text-xs tracking-[0.4em] uppercase text-center text-[#c5a880] font-serif mb-16">
          THE ANTIQUE TRIAD / ALLOCATIONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* ÜRÜN 1: GRİ */}
          <div className="bg-[#111111]/60 border border-neutral-900 p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#c5a880]/30 group">
            <div>
              <div className="w-full h-48 bg-[#161616] mb-6 flex items-center justify-center border border-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/10 to-transparent group-hover:scale-110 transition-transform duration-700" />
                <span className="text-[10px] tracking-[0.4em] uppercase opacity-30 font-serif">THE ASH RITUAL</span>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-lg font-serif font-light text-white tracking-wide">PHRYGIAN GREY</h3>
                <span className="text-sm font-serif text-[#c5a880]">€650</span>
              </div>
              <p className="text-xs tracking-wider uppercase text-[#c5a880]/70 mb-4 font-serif text-[10px]">Deep Mineralization & Detox</p>
              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                Kül grisi katmanların altındaki yüksek sülfür ve kadim silika kompozisyonu. Hücrelerin modern şehir kalıntılarından, ağır metallerden ve yapay kimyasallardan arındırılması için tektonik bir detoks protokolü. Derinin biyolojik hafızasını sıfırlar.
              </p>
            </div>
            <a href="#waitlist" className="w-full text-center bg-transparent border border-neutral-800 text-[10px] tracking-[0.2em] uppercase py-3 text-neutral-400 hover:border-[#c5a880] hover:text-white transition-colors duration-300">
              Request Allocation
            </a>
          </div>

          {/* ÜRÜN 2: BEYAZ */}
          <div className="bg-[#111111]/60 border border-neutral-900 p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#c5a880]/30 group relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c5a880] text-black text-[8px] tracking-[0.2em] uppercase px-3 py-0.5 font-semibold font-serif">
              Rare Masterpiece
            </div>
            <div>
              <div className="w-full h-48 bg-[#1c1c1c] mb-6 flex items-center justify-center border border-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/10 to-transparent group-hover:scale-110 transition-transform duration-700" />
                <span className="text-[10px] tracking-[0.4em] uppercase opacity-30 font-serif">THE WHITE PROTOCOL</span>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-lg font-serif font-light text-white tracking-wide">PHRYGIAN WHITE</h3>
                <span className="text-sm font-serif text-[#c5a880]">€950</span>
              </div>
              <p className="text-xs tracking-wider uppercase text-[#c5a880]/70 mb-4 font-serif text-[10px]">Pure Litho-Refining & Tone</p>
              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                Işığın hiç ulaşmadığı derin mermer damarlarından izole edilen, kalsiyum karbonatın en asil formu. Cildin matlığını ve zamanın getirdiği lekeleri, antik Roma asillerinin mermer banyolarındaki saf beyazlıkla pürüzsüzleştirir. Sadece saf arılık.
              </p>
            </div>
            <a href="#waitlist" className="w-full text-center bg-transparent border border-neutral-800 text-[10px] tracking-[0.2em] uppercase py-3 text-neutral-400 hover:border-[#c5a880] hover:text-white transition-colors duration-300">
              Request Allocation
            </a>
          </div>

          {/* ÜRÜN 3: TRAVERTEN */}
          <div className="bg-[#111111]/60 border border-neutral-900 p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#c5a880]/30 group">
            <div>
              <div className="w-full h-48 bg-[#151310] mb-6 flex items-center justify-center border border-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c5a880]/5 to-transparent group-hover:scale-110 transition-transform duration-700" />
                <span className="text-[10px] tracking-[0.4em] uppercase opacity-30 font-serif">THE TEKTONIC CRUST</span>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-lg font-serif font-light text-white tracking-wide">TRAVERTINE RAW</h3>
                <span className="text-sm font-serif text-[#c5a880]">€550</span>
              </div>
              <p className="text-xs tracking-wider uppercase text-[#c5a880]/70 mb-4 font-serif text-[10px]">Thermal Crust Regeneration</p>
              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                Termal su kaynaklarının binlerce yılda geride bıraktığı gözenekli, vahşi mineral kabuk. Cildin bariyerini magmatik bir güçle yeniden yapılandırır, yoğun mineralli yapısıyla dokuyu besler ve dış dünyanın yaşlandırıcı etkilerine karşı antik bir kalkan örer.
              </p>
            </div>
            <a href="#waitlist" className="w-full text-center bg-transparent border border-neutral-800 text-[10px] tracking-[0.2em] uppercase py-3 text-neutral-400 hover:border-[#c5a880] hover:text-white transition-colors duration-300">
              Request Allocation
            </a>
          </div>

        </div>
      </section>

      {/* 🔒 PRIVACY WAITLIST SECTION */}
      <section id="waitlist" className="w-full max-w-5xl mx-auto px-6 py-20 z-10 relative flex flex-col items-center">
        <div className="w-full max-w-md bg-[#111111] border border-neutral-900 p-8 md:p-10 shadow-2xl relative transition-all duration-500 hover:border-[#c5a880]/20">
          <h3 className="text-xs tracking-[0.2em] uppercase text-[#c5a880] mb-3 font-semibold font-serif text-center">
            REQUEST ACCESS TO THE ALLOCATION LIST
          </h3>
          <p className="text-xs text-neutral-500 mb-6 leading-relaxed text-center">
            Afyonkarahisar mağaralarında ayda sadece <span className="text-[#d4af37] font-medium">100 adet</span> mühürlenir. Londra, Paris ve Dubai lansmanları öncesi, sınırlı aylık tahsisat listesinde yerinizi ayırtın.
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
          <span>Atypical Luxury Objects © 2026</span>
        </div>
      </footer>

    </main>
  );
}