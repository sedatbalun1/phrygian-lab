'use client';

import React, { useState } from 'react';

export default function Home() {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerCity, setBuyerCity] = useState('');

  const SOVEREIGNS = [
    { initials: 'Baron S.', city: 'Istanbul', allocation: 'Triad #014', time: 'Verified Holder' },
    { initials: 'Lady A.', city: 'London', allocation: 'Triad #015', time: 'Verified Holder' },
    { initials: 'Chevalier M.', city: 'Paris', allocation: 'Triad #039', time: 'Verified Holder' },
    { initials: 'Countess V.', city: 'Vienna', allocation: 'Triad #038', time: 'Verified Holder' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex flex-col justify-between font-sans selection:bg-[#c5a880] selection:text-black overflow-x-hidden relative">
      
      {/* 🔮 Midaum Mağara Atmosferi Işıkları */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(circle,rgba(197,168,128,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(214,175,55,0.02)_0%,transparent_60%)] blur-3xl pointer-events-none" />

      {/* 🏛️ HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-10 flex justify-between items-center z-10 relative border-b border-neutral-900/30">
        <div className="flex flex-col">
          <span className="text-2xl font-light tracking-[0.5em] text-[#d4af37] font-serif">PHRYGIAN LAB</span>
          <span className="text-[9px] tracking-[0.4em] uppercase opacity-40 mt-1 font-sans">Midaum Sığınak Protokolü</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] tracking-[0.25em] text-[#c5a880] uppercase font-mono">
            KOTA: 324 / 365 REMAINING
          </span>
        </div>
      </header>

      {/* 📜 MANİFESTO (Yazar ve Tarihçi Perspektifiyle İşlenen Alan) */}
      <section className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center pt-24 pb-16 z-10 relative">
        <p className="text-[10px] tracking-[0.7em] uppercase text-[#c5a880] mb-8 font-semibold">
          ATYPICAL LUXURY / HÜZNÜN VE MERMERİN KRALLIĞI
        </p>

        <h1 className="text-4xl md:text-6xl font-serif font-extralight tracking-wide leading-tight max-w-4xl mb-10 text-white">
          "Older than humanity.<br/>
          <span className="font-normal italic text-neutral-400">Cleaner than science."</span>
        </h1>

        <div className="w-16 h-[1px] bg-[#c5a880]/30 mb-10" />

        <p className="text-sm md:text-base font-light tracking-wide text-neutral-400 max-w-3xl leading-relaxed mb-6 text-justify md:text-center">
          Gordion, Kimmerlerin amansız ateşiyle kavrulurken; Kral Midas, kaba efsanelerin iddia ettiği gibi sahneden çekilmedi. O, krallığın en mahrem elementer sırlarını yanına alarak batıya, sığınak şehri **Midaum’a (İnbazarcık)** doğru asil bir göç başlattı. Midas, Midaum’un tektonik dehlizlerinde geçirdiği o son sükunet yılında, insan yapımı sarayların geçiciliğini, mermerin ve jeolojik zamanın ise ebediyetini kutsadı.
        </p>
        
        <p className="text-sm font-light tracking-wide text-neutral-500 max-w-3xl leading-relaxed mb-12 text-justify md:text-center">
          Phrygian Lab, o asil kafilenin Midaum kayalıklarının kalbinde muhafaza ettiği, milyonlarca yılda kristalleşmiş o saf mineralizasyon ritüelini gün yüzüne çıkarıyor. Bu endüstriyel bir kozmetik değildir; insan bilimiyle taklit edilemeyecek jeolojik bir sadakat çemberine ve asırlık bir emanete ortak olmaktır.
        </p>
      </section>

      {/* 📦 THE ANTIQUE TRIAD (3'LÜ BAŞYAPIT SETİ - €718) */}
      <section className="w-full max-w-4xl mx-auto px-6 py-8 z-10 relative">
        <div className="bg-[#111111]/40 border border-[#c5a880]/30 p-8 md:p-12 relative group backdrop-blur-sm">
          
          {/* Altın Plaka Vurgusu */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#d4af37] to-[#aa841b] text-black text-[9px] tracking-[0.3em] uppercase font-bold px-6 py-1 shadow-xl border border-[#fff]/20 font-mono">
            Numbered 24K Gold Mounted Plate / Midaum Arşivi
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-8 border-b border-neutral-900 pb-6">
            <div>
              <h2 className="text-2xl font-serif font-light tracking-widest text-white">THE ANTIQUE TRIAD SET</h2>
              <p className="text-[10px] tracking-widest text-[#c5a880] uppercase mt-1">Midaum Dehlizlerinden Üçlü Jeolojik Ritüel</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 group/price relative cursor-help">
              <span className="text-2xl font-serif text-[#c5a880] tracking-wider font-medium">€718</span>
              <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-500 rounded-full w-4 h-4 flex items-center justify-center font-mono">?</span>
              
              {/* Gerçek Tarihsel Dönem Şifresi Tooltip */}
              <div className="absolute bottom-8 right-0 w-64 bg-[#141414] border border-[#c5a880]/40 p-4 text-[10px] text-neutral-400 leading-relaxed shadow-2xl tracking-wide opacity-0 group-hover/price:opacity-100 transition-opacity duration-300 pointer-events-none z-50 font-sans">
                <span className="text-[#d4af37] font-serif block mb-1">FORMULA 718: THE EXILE OF MIDAS</span>
                Kral Midas'ın Gordion'un küllerinden sıyrılıp batı sığınağı Midaum'a (İnbazarcık) ulaştığı ve saf elementer arınmaya çekildiği M.Ö. 718 yılının tarihsel kronolojisine adanmıştır. Yapay piyasa dinamiklerine tabi değildir.
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-400 mb-8 leading-relaxed font-light">
            Bu bütünsel set, Midaum topraklarının derinliklerinden titizlikle çıkarılan ve her biri adınıza el işçiliğiyle işlenen 24 Ayar Altın Kaplama Pirinç Plaka ile mühürlenen (Örn: `014 / 365`) 3 kadim katmanı içerir:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#141414] border border-neutral-900 p-4">
              <span className="text-[9px] font-mono text-[#c5a880] block mb-1">Ⅰ / THE ASH RITUAL</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2">PHRYGIAN GREY</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-light">Kül grisi katmanlardan süzülen yüksek sülfür ve silika. Hücreleri modern şehir kalıntılarından arındıran tektonik arınma.</p>
            </div>
            <div className="bg-[#141414] border border-neutral-900 p-4">
              <span className="text-[9px] font-mono text-[#d4af37] block mb-1">Ⅱ / IMPERIAL REFINE</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2">PHRYGIAN WHITE</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-light">Işıksız damarlardan izole edilen saf kalsiyum karbonat. Antik asillerin banyolarındaki pürüzsüz arılık ve ton hakimiyeti.</p>
            </div>
            <div className="bg-[#141414] border border-neutral-900 p-4">
              <span className="text-[9px] font-mono text-[#c5a880] block mb-1">Ⅲ / TEKTONIC CRUST</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2">TRAVERTINE RAW</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-light">Termal suların binlerce yılda bıraktığı magmatik mineral kabuk. Cilt bariyerini dış etkenlere karşı antik bir kalkanla örer.</p>
            </div>
          </div>

          {/* 🔮 THE OBSIDIAN MONOLITH - KİBELE'NİN EMANETİ PROVOKASYONU */}
          <div className="bg-[#131313] border border-[#c5a880]/20 p-6 mb-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent" />
            <span className="text-[9px] font-mono text-[#d4af37] block tracking-[0.25em] mb-2">THE OBSIDIAN MONOLITH / MIDAUM EMANETİ</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-2xl mx-auto text-justify md:text-center">
              31 Aralık gecesi, gökyüzündeki kozmik hizalanmaya göre, 365 mülkiyet sahibinden **sadece 1 kişiye**, Kral Midas’ın Gordion’dan kaçarken yanında taşıdığı ve İnbazarcık dehlizlerine sakladığı, Ana Tanrıça Kibele’nin yeryüzündeki tek nişanesi sayılan saf, ışığı yutan <span className="text-white font-medium">"The Obsidian Monolith" (Gece Taşı)</span> teslim edilecektir.
            </p>
            <p className="text-[11px] text-[#c5a880] leading-relaxed font-light max-w-2xl mx-auto mt-3 italic">
              Bu taşı teslim alan asil, onun getireceği mutlak bereketi ve Frigya şansını hayatında bizzat deneyimleyeceğini, ancak taşı **sadece 1 yıl boyunca elinde tutacağını ve sonraki yılın 31 Aralık gecesi yeni seçilecek asile devredeceğini taahhüt eder.**
            </p>
            <p className="text-[9px] font-mono text-neutral-600 mt-4 uppercase tracking-widest">
              Geri kalan 364 asil, o gece kendilerine özel şifreli panelle giriş yaparak, emanetin bu yıl dünyada hangi koordinata (`Verified Holder of Triad #014 / Istanbul`) devredildiğini canlı olarak izleyecektir.
            </p>
          </div>

          {/* SİPARİŞ / TAHSİSAT FORMU */}
          <div className="border-t border-neutral-900/60 pt-8">
            {!orderSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-[9px] tracking-[0.3em] text-[#c5a880] block font-mono">ACQUISITION PROTOCOL</span>
                  <h3 className="text-sm font-serif tracking-widest text-white uppercase mt-1">ARİSTOKRAT TAHSİSAT TALEBİ</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder="Aristokrat İsim & Unvan (Örn: Baron Sedat)" 
                    className="w-full bg-[#161616] border border-neutral-800 px-4 py-3 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide placeholder:text-neutral-700 font-mono"
                  />
                  <input 
                    type="text" 
                    required
                    value={buyerCity}
                    onChange={(e) => setBuyerCity(e.target.value)}
                    placeholder="Şehir / Ülke (Örn: Istanbul / TR)" 
                    className="w-full bg-[#161616] border border-neutral-800 px-4 py-3 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide placeholder:text-neutral-700 font-mono"
                  />
                </div>
                <input 
                  type="email" 
                  required
                  placeholder="Şifreli Dijital Adres (E-posta)" 
                  className="w-full bg-[#161616] border border-neutral-800 px-4 py-3 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide placeholder:text-neutral-700 font-mono"
                />
                <textarea 
                  rows={2}
                  required
                  placeholder="Mühürlü ahşap sandığın ve altın plakanın ulaştırılacağı resmi teslimat lokasyonu..."
                  className="w-full bg-[#161616] border border-neutral-800 px-4 py-3 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide placeholder:text-neutral-700 resize-none leading-relaxed font-sans"
                />
                
                <button 
                  type="submit" 
                  className="w-full bg-transparent border border-[#c5a880] text-[#c5a880] uppercase font-medium text-xs tracking-[0.3em] py-4 rounded-none hover:bg-[#c5a880] hover:text-black transition-all duration-500 shadow-2xl"
                >
                  SECURE TRIAD ALLOCATION / SETİ REZERVE ET
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <span className="text-xl">🏛️</span>
                <h3 className="text-xs tracking-[0.3em] text-[#c5a880] uppercase font-bold">TAHSİSAT SİCİLE İŞLENDİ</h3>
                <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Sayın {buyerName}, **The Antique Triad** setiniz ve Midaum sadakat kaydınız adınıza mühürlenmek üzere sıraya alınmıştır. Konsiyerj ekibimiz 24 saat içinde şifreli adresiniz üzerinden sizinle irtibat kuracaktır.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 📜 THE LEDGER OF SOVEREIGNS */}
      <section className="w-full max-w-4xl mx-auto px-6 py-12 z-10 relative">
        <div className="border-t border-neutral-950 pt-10">
          <h3 className="text-[10px] tracking-[0.4em] text-center text-neutral-500 uppercase mb-8 font-serif">
            THE LEDGER OF SOVEREIGNS / HÜKÜMDARLAR SİCİLİ
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SOVEREIGNS.map((sov, index) => (
              <div key={index} className="bg-[#111111]/20 border border-neutral-900/40 p-4 text-center">
                <span className="text-xs font-serif text-white tracking-wider block font-medium">{sov.initials}</span>
                <span className="text-[10px] text-neutral-500 block font-mono mt-0.5">{sov.city}</span>
                <span className="text-[9px] text-[#c5a880] block font-mono mt-2 border border-[#c5a880]/10 py-0.5 bg-neutral-950/40">{sov.allocation}</span>
                <span className="text-[8px] text-neutral-600 block mt-1 uppercase font-mono tracking-widest">{sov.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌍 FOOTER */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.3em] text-neutral-600 uppercase z-10 border-t border-neutral-950">
        <div className="flex gap-6 mb-4 md:mb-0 font-serif opacity-50">
          <span>London HQ</span>
          <span>Paris Vault</span>
          <span>Dubai Bureau</span>
        </div>
        <div className="text-center md:text-right font-mono opacity-30">
          <span>Phrygian Lab Ltd. © 2026 / Strictly Atypical</span>
        </div>
      </footer>

    </main>
  );
}