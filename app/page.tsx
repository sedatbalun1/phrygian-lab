'use client';

import React, { useState } from 'react';

const TRANSLATIONS = {
  en: {
    protocol: 'Midaum Private Protocol / Asset Class 718',
    remaining: 'REMAINING CORES',
    tagline: 'THE MOST EXPENSIVE MASK IN HUMAN HISTORY',
    h1: 'Only time decides\nwhat is myth and what is real.',
    
    menu_genesis: 'The Anomaly',
    menu_covenant: 'The Vow',
    menu_artifact: 'The Core',
    menu_allocation: 'The Alignment',

    // 🏛️ 1. ANLATI (Giriş)
    vow_1: 'You did not find these coordinates by chance.',
    vow_2: 'The monolithic core permitted your receptor to decode this encryption.',
    vow_3: 'In 718 BC, King Midas refused a light-absorbing mineral mass within the fractures of Midaum, sealing the fate of an entire bloodline.',
    vow_4: 'In 1975, deep core drilling breached a void inside a lightless marble vein, revealing an abnormal mass anomaly.',
    vow_5: 'This is not industrial cosmetics. You are capturing a 2700-year-old unreturned frequency to communicate with eternity.',

    // 🔮 2. VAAT (Gelişme)
    resonance_title: 'THE LUMINOUS GIFT / THE SOLSTICE ANOMALY',
    resonance_desc: 'Isolated from transactional gold. On the night of June 23rd, the entire active output is sealed and bestowed upon strictly ONE woman on Earth, selected by the council. A calculated silent void designed to test the limits of absolute sovereignty.',
    vow_6: 'Anyone can secure the future. But history and the spell of Phrygia have never been for sale. Acquire, and wait.',
    vow_7: 'We do not promise youth; youth fades. We bestow the ultimate shield of beauty and fortune for the rest of your existence.',

    // 📦 3. SATIŞ & METAFİZİK KATMANLAR (Sonuç)
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Triple Geological Ritual / Metamorphic Preservation Archive',
    gold_plate: 'Numbered 24K Gold Mounted Plate',
    tooltip_title: 'SECRET 718: THE ASCENDING VALUATION',
    tooltip_desc: 'Genesis price starts at €718. Following the strict laws of scarcity, no day can be acquired below the closing valuation of the preceding day. The value only ascends.',
    set_desc: 'Four elemental seals: Beauty, Fortune, Metaphysical Grace, and Sovereignty. Three high-density mineral layers hand-carved from Midaum depths, encased inside a monolithic solid marble jar with a personalized 24K Gold Mounted Sovereign Plate:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'High sulfur and volcanic silica. Tectonic purification connecting your cells to the deep memory of the earth.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Pure calcium carbonate from unlit veins. Imparts the smooth, ageless porcelain tone utilized in ancient imperial baths.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatic mineral crust from thermal springs. A heavy geological shield that completely freezes the decay of mortal time.',
    
    monolith_title: 'THE OBSIDIAN MONOLITH / THE 31 DECEMBER ALIGNMENT',
    monolith_desc: 'On December 31st, a transparent cosmic draw occurs among the 365 archive holders. The physical Obsidian Monolith will be transferred to exactly ONE sovereign for 365 days. The Mask transforms your skin; the Stone re-routes your destiny. The remaining 364 initiates track its global coordinates live via their private digital vault.',
    
    call_to_action: 'The ancient heritage, the absolute nobility, and your mask await within the solid marble jar. One family, one monolith. The floor value only rises.',
    form_title: 'SOVEREIGN ALLOCATION REQUEST & VALUE OFFER',
    input_name: 'Sovereign Name & Title (e.g., Sovereign Sedat)',
    input_city: 'City / Country (e.g., London / UK)',
    input_email: 'Encrypted Digital Address (Email)',
    input_address: 'The secured destination where the solid marble jar and gold plate shall be delivered...',
    button_submit: 'ACQUIRE CORE / ENGAGE FREQUENCY',
    success: 'ALLOCATION RECORDED IN THE SEISMIC LEDGER',
    success_desc: 'Your value offer has been submitted and sealed under your name. Our concierge will contact your encrypted address within 24 hours.',
    
    ledger_title: 'THE ALIGNMENT CALENDAR / THE ASCENDING VALUE CYCLE',
    ledger_sub: 'Commencing June 23rd Solstice — Subsequent days cannot be acquired below the last closed valuation.',
    status_verified: 'Closed & Sealed',
    status_open: 'Offer Value',
    status_floor: 'Floor:',
    status_closed: 'Closed',
    status_price_void: 'Priceless',
    status_local: 'Midaum Local'
  },
  tr: {
    protocol: 'Midaum Mahrem Protokolü / Varlık Sınıfı 718',
    remaining: 'KALAN KÜTLE CORES',
    tagline: 'DÜNYANIN EN PAHALI MASKESİ / KUTSAL EMANET VE ARZU NESNESİ',
    h1: 'Neyin efsane, neyin gerçek olduğuna\nyalnızca zaman karar verir.',
    
    menu_genesis: 'Anomali',
    menu_covenant: 'Vaatleri',
    menu_artifact: 'Emanet',
    menu_allocation: 'Tahsisat',

    // 🏛️ 1. ANLATI (Giriş)
    vow_1: 'Bu koordinatlara tesadüfen rastlamadınız.',
    vow_2: 'Masif mermer kütle, zihninizdeki sismik alıcının bu kadim şifreyi çözmesine izin verdi.',
    vow_3: 'M.Ö. 718 yılında Kral Midas, Midaum dehlizlerinde kendisine uzatılan ışığı yutan o mineral kütleyi reddetti ve koskoca bir soyun metafiziksel kaderini kilitledi.',
    vow_4: '1975 yılında yapılan derin tektonik sondaj çalışmalarında, Midaum’un ışıksız mermer damarlarının kalbinde masif bir boşluk kırıldı.',
    vow_5: 'Jeologlar resmi raporlara o sarsıcı ibareyi kazıdı: Anormal bir kütle anomalisi. Siz şu an mermer bir kavanoz değil, geçmişin ebedi frekansını yakalayan jeolojik bir telsiz ediniyorsunuz.',

    // 🔮 2. VAAT (Gelişme)
    resonance_title: 'THE LUMINOUS GIFT / GÜNDÖNÜMÜ ANOMALİSİ',
    resonance_desc: 'Maddi ve ticari altından tamamen izole edilmiştir. 23 Haziran gecesi, o döngünün tüm üretimi mühürlenir ve konsey tarafından yeryüzünden seçilen sadece TEK bir kadına lütfedilir. Seçkinlerin kibrini ve hırs sınırlarını delip geçmek için tasarlanmış masif bir boşluk yarası.',
    vow_6: 'Sermaye gelecekteki her şeyi satın alabilir. Fakat tarih ve Frigya’nın o gizemli efsunu asla satılık olmadı. Alın ve bekleyin.',
    vow_7: 'Biz gençlik vadetmiyoruz; gençlik geçicidir. Biz, hayatınızın geri kalanında cildinize mutlak bir güzellik, kaderinize ise sarsılmaz bir Frigya şansı ve koruma efsunu bahşediyoruz.',

    // 📦 3. SATIŞ & METAFİZİK KATMANLAR (Sonuç)
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Masif Mermer Kavanoz İçinde Üçlü Jeolojik Ritüel',
    gold_plate: 'Numbered 24K Gold Mounted Plate',
    tooltip_title: 'SECRET 718: YÜKSELEN DEĞER PRENSİBİ',
    tooltip_desc: 'Başlangıç endeksi €718’dir. Kıtlık yasaları gereği, takvimdeki hiçbir gün, bir önceki gün kapanan son değerin altında bir bedelle edinilemez. Değer sadece yükselir.',
    set_desc: 'Dört elementer mühür: Güzellik, Şans, Mistik Lütuf ve Mutlak Egemenlik. Midaum dehlizlerinden çıkarılan ve fani cildinizle geçmişin sarsılmaz frekansı arasında sismik bir medyum görevi gören 3 katman. Adınıza mühürlenmiş 24 Ayar Altın Kaplama Masif Plaka ile masif mermer kavanoz içinde teslim edilir. Aile başına tek tahsisat:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Yüksek yoğunluklu sülfür ve volkanik silika. Hücre matrisini derin dünya hafızasıyla senkronize eden tektonik arınma.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Saf kalsiyum karbonat. Kayıp yüzyılların ışığını fani cilde yansıtan ve sadece imparatorluk mahremlerinde kullanılan asil toz.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatik mineral kabuk. Fani zamanın çürümesini cilt bariyerinde tamamen donduran ağır jeolojik kalkan.',
    
    monolith_title: 'THE OBSIDIAN MONOLITH / 31 ARALIK HİZALANMASI',
    monolith_desc: 'Güneş döngüsünün son gecesi, 365 hak sahibi arasında şeffaf ve kutsal bir çekiliş gerçekleşir. Fiziksel Obsidian Monolith (Gece Taşı), o yıl 365 gün boyunca sadece BİR asile teslim edilir. Maske cildinizi değiştirir; Monolith ise kaderinizi yeniden yazar. Geri kalan 364 üye koordinatları şifreli panelle canlı izler.',
    
    call_to_action: 'Kadim emanet, mutlak asalet ve geçmişin o sarsılmaz frekansı mermer kavanozun içinde seni bekliyor. Değer sadece yükselir.',
    form_title: 'SOVEREIGN TAHSİSAT TALEBİ & DEĞER TEKLİFİ',
    input_name: 'Asil İsim & Sismik Unvan (Örn: Asil Sedat)',
    input_city: 'Şehir / Ülke (Örn: Istanbul / TR)',
    input_email: 'Şifreli Dijital Adres (E-posta)',
    input_address: 'Mühürlü masif mermer kavanozun ulaştırılacağı resmi teslimat lokasyonu...',
    button_submit: 'EMANETİ EDİN / FREKANSI AKTİF ET',
    success: 'TAHSİSAT SİSMİK SİCİLE İŞLENDİ',
    success_desc: 'Değer teklifiniz sismik sicile kaydedilmiştir. Konsiyerj ekibimiz yerleşiminizi doğrulamak üzere 24 saat içinde sizinle irtibat kuracaktır.',
    
    // ⏳ 4. BEKLE & GÖR (Sonuçların İzlenmesi)
    ledger_title: 'THE ALIGNMENT CALENDAR / YÜKSELEN DEĞER DÖNGÜSÜ',
    ledger_sub: '23 Haziran Gündönümünde Başlar — Sonraki günler, bir önceki günün kapanış değerinin altında edinilemez.',
    status_verified: 'Mühürlendi',
    status_open: 'Teklif Sun',
    status_floor: 'Taban:',
    status_closed: 'Kapatıldı',
    status_price_void: 'Paha Biçilemez',
    status_local: 'Midaum Havzası'
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'tr'>('en');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerCity, setBuyerCity] = useState('');

  const t = TRANSLATIONS[lang];

  const CALENDAR_DAYS = [
    { date: 'June 23', holder: 'Sovereign S.', city: 'Istanbul', status: 'verified', rawPrice: 718 },
    { date: 'June 24', holder: 'Sovereign A.', city: 'London', status: 'verified', rawPrice: 850 },
    { date: 'June 25', holder: 'Sovereign M.', city: 'Paris', status: 'verified', rawPrice: 980 },
    { date: 'June 26', holder: 'The Chosen One', city: t.status_local, status: 'void', rawPrice: 0 },
    { date: 'June 27', holder: 'Sovereign V.', city: 'Vienna', status: 'verified', rawPrice: 1100 },
    { date: 'June 28', holder: t.status_open, city: 'Global', status: 'open', rawPrice: 1100 },
    { date: 'June 29', holder: t.status_open, city: 'Global', status: 'open', rawPrice: 1100 },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex flex-col justify-between font-sans selection:bg-[#c5a880] selection:text-black overflow-x-hidden relative">
      
      {/* 🔮 Kozmik Alan Gölgelendirmesi */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(circle,rgba(147,51,234,0.02)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* 🏛️ PREMIUM HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center z-50 relative border-b border-neutral-900/20 gap-4 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md">
        <div className="flex flex-col items-center lg:items-start cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-lg md:text-xl font-extralight tracking-[0.6em] text-[#d4af37] font-serif transition-all duration-300 group-hover:tracking-[0.65em]">PHRYGIAN LAB</span>
          <span className="text-[8px] tracking-[0.4em] uppercase opacity-20 mt-0.5 font-sans">{t.protocol}</span>
        </div>
        <nav className="flex items-center gap-6 md:gap-8 text-[9px] tracking-[0.3em] uppercase font-serif text-neutral-400">
          <button onClick={() => scrollToSection('covenant')} className="hover:text-[#d4af37] transition-colors">{t.menu_genesis}</button>
          <button onClick={() => scrollToSection('vows')} className="hover:text-[#d4af37] transition-colors">{t.menu_covenant}</button>
          <button onClick={() => scrollToSection('triad-archive')} className="hover:text-[#d4af37] transition-colors">{t.menu_artifact}</button>
        </nav>
        <div className="flex items-center gap-2 bg-neutral-950/90 border border-neutral-900/60 px-2.5 py-1 text-[8px] tracking-widest font-mono">
          {(Object.keys(TRANSLATIONS) as Array<keyof typeof TRANSLATIONS>).map((l) => (
            <button key={l} onClick={() => setLang(l as 'en' | 'tr')} className={`uppercase transition-colors ${lang === l ? 'text-[#d4af37] font-bold' : 'text-neutral-600 hover:text-white'}`}>{l}</button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] tracking-[0.25em] text-[#c5a880] uppercase font-mono">{t.remaining}: 324 / 365</span>
        </div>
      </header>

      {/* 🏛️ BÜYÜLÜ GİRİŞ & VERİMLİ ÇİFT SÜTUN DÜZENİ (ANLATI + SATIŞ YAN YANA) */}
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-16 pb-12 z-10 relative">
        
        {/* 📜 SOL TARAF: ANLATI & VAAT SİNEMATOGRAFİK AKIŞ (7 Sütun) */}
        <div className="lg:col-span-7 flex flex-col justify-start text-left">
          <p className="text-[9px] tracking-[0.5em] uppercase text-[#c5a880] mb-4 font-semibold border-b border-neutral-900 pb-2">
            {t.tagline}
          </p>
          
          <h1 className="text-3xl md:text-5xl font-serif font-extralight tracking-wide leading-tight text-white mb-8 whitespace-pre-line">
            {t.h1}
          </h1>

          {/* Mor Rezonans Kutusu */}
          <div className="w-full bg-purple-950/5 border border-purple-900/20 p-5 text-left relative overflow-hidden mb-6 shadow-[0_0_40px_rgba(147,51,234,0.02)]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            <span className="text-[9px] font-mono block tracking-[0.3em] mb-1.5 text-purple-300 uppercase">{t.resonance_title}</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-light font-serif italic">{t.resonance_desc}</p>
          </div>

          {/* Kutsal Rezonans Emirleri Raporu (Mor Arka Plan Efekti Entegre Edildi) */}
          <div id="covenant" className="flex flex-col gap-4 text-xs md:text-sm tracking-[0.1em] font-serif uppercase text-neutral-400 border border-purple-900/20 p-6 bg-purple-950/5 relative">
            <div className="text-[7px] tracking-[0.3em] font-mono text-neutral-500 border border-neutral-900/60 px-2 py-0.5 w-max bg-black">[ SEISMIC FAULT ALIGNMENT ]</div>
            <p className="opacity-50 text-[11px] font-sans tracking-wide lowercase italic">{t.vow_1}</p>
            <p className="text-white font-light">{t.vow_2}</p>
            <p className="opacity-70 text-[11px] leading-relaxed lowercase font-sans">{t.vow_3}</p>
            <p className="opacity-70 text-[11px] leading-relaxed lowercase font-sans">{t.vow_4}</p>
            <div className="text-[8px] tracking-[0.3em] font-mono text-[#d4af37] border border-[#d4af37]/20 px-3 py-1 w-max bg-[#d4af37]/5 font-semibold">{t.vow_5}</div>
            
            <div id="vows" className="w-full h-[1px] bg-neutral-900 my-2" />
            
            <p className="opacity-90 text-[#e5e5e5] font-light leading-relaxed">{t.vow_6}</p>
            <p className="text-[#d4af37] font-medium leading-relaxed">{t.vow_7}</p>
          </div>
        </div>

        {/* 📦 SAĞ TARAF: DOĞRUDAN SATIŞ & TAHSİSAT TEKLİF ALANI (5 Sütun - SİTEYE GİREN ANINDA GÖRÜYOR) */}
        <div id="allocation" className="lg:col-span-5 bg-[#111111]/40 border border-[#c5a880]/20 p-6 md:p-8 relative backdrop-blur-sm self-start shadow-2xl scroll-mt-24">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#d4af37] to-[#aa841b] text-black text-[8px] tracking-[0.25em] uppercase font-bold px-4 py-0.5 shadow-xl font-mono text-center">
            {t.gold_plate}
          </div>

          {!orderSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-4">
                <span className="text-[8px] tracking-[0.3em] text-[#c5a880] block font-mono">ACQUISITION PROTOCOL</span>
                <h3 className="text-xs tracking-widest text-white uppercase mt-0.5">{t.form_title}</h3>
              </div>
              
              <div className="space-y-2">
                <input type="text" required value={buyerName} onChange={(e) => setBuyerName(e.target.value)} placeholder={lang === 'tr' ? 'Asil İsim & Sismik Unvan' : t.input_name} className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                <input type="text" required value={buyerCity} onChange={(e) => setBuyerCity(e.target.value)} placeholder={t.input_city} className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                <input type="number" required min="1100" placeholder={lang === 'tr' ? 'EUR Cinsinden Değer Teklifiniz (Taban: €1,100)' : `Your Value Offer in EUR (Floor: €1,100)`} className="w-full bg-[#161616] border border-[#c5a880]/30 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-[#c5a880] tracking-widest font-mono placeholder:text-neutral-700" />
                <input type="email" required placeholder={t.input_email} className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                <textarea rows={3} required placeholder={t.input_address} className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide resize-none leading-relaxed font-sans placeholder:text-neutral-700" />
              </div>
              
              <button type="submit" className="w-full bg-[#c5a880] text-black font-semibold uppercase text-[10px] tracking-[0.3em] py-4 rounded-none hover:bg-white hover:text-black transition-all duration-500 shadow-2xl border border-[#c5a880]">
                {t.button_submit}
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-3">
              <span className="text-2xl block">🏛️</span>
              <h3 className="text-xs tracking-[0.3em] text-[#c5a880] uppercase font-bold">{t.success}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto">{t.success_desc}</p>
            </div>
          )}
        </div>
      </div>

      {/* 📦 GEOLOJİK MATERYAL ARŞİVİ (The Core Detayları) */}
      <section id="triad-archive" className="w-full max-w-7xl mx-auto px-6 py-6 z-10 relative scroll-mt-24">
        <div className="bg-[#111111]/20 border border-neutral-900/60 p-6 md:p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-6 border-b border-neutral-900 pb-4">
            <div>
              <h2 className="text-xl font-serif font-light tracking-widest text-white">{t.set_title}</h2>
              <p className="text-[9px] tracking-widest text-[#c5a880] uppercase mt-0.5">{t.set_sub}</p>
            </div>
          </div>
          
          <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-light text-justify max-w-4xl">{t.set_desc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#141414]/90 border border-neutral-900/80 p-4">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-0.5">Ⅰ / THE CORE PURITY</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-1">{t.grey_title}</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{t.grey_desc}</p>
            </div>
            <div className="bg-[#141414]/90 border border-neutral-900/80 p-4">
              <span className="text-[8px] font-mono text-[#d4af37] block mb-0.5">Ⅱ / IMPERIAL REFINE</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-1">{t.white_title}</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{t.white_desc}</p>
            </div>
            <div className="bg-[#141414]/90 border border-neutral-900/80 p-4">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-0.5">Ⅲ / TEKTONIC SHIELD</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-1">{t.raw_title}</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{t.raw_desc}</p>
            </div>
          </div>

          {/* 🔮 GECE TAŞI TRANSMITTER ALANI */}
          <div id="artifact" className="bg-[#131313]/90 border border-purple-900/20 p-5 text-center relative overflow-hidden scroll-mt-24">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
            <div className="inline-block text-[7px] tracking-[0.4em] font-mono text-purple-400 border border-purple-900/60 px-2 py-0.5 mb-3 bg-purple-950/10">[ ANCIENT CHRONIC TRANSMITTER ]</div>
            <span className="text-[8px] font-mono block tracking-[0.25em] mb-1.5 text-[#d4af37]">{t.monolith_title}</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-2xl mx-auto whitespace-pre-line">{t.monolith_desc}</p>
          </div>

          <div className="py-4 text-center border-t border-neutral-900/60 mt-6">
            <p className="text-xs font-serif italic text-[#c5a880] tracking-wide max-w-2xl mx-auto leading-relaxed">"{t.call_to_action}"</p>
          </div>
        </div>
      </section>

      {/* ⏳ 4. BEKLE & GÖR / ZAMANSAL HİZALANMA TAKVİMİ */}
      <section className="w-full max-w-7xl mx-auto px-6 py-6 z-10 relative">
        <div className="border-t border-neutral-950 pt-6">
          <div className="text-center mb-6">
            <h3 className="text-[10px] tracking-[0.4em] text-white uppercase font-serif">{t.ledger_title}</h3>
            <p className="text-[8px] text-neutral-600 tracking-widest uppercase mt-1 font-mono">{t.ledger_sub}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
            {CALENDAR_DAYS.map((day, index) => (
              <div key={index} className={`border p-3 text-center flex flex-col justify-between h-36 relative transition-all duration-300 ${day.status === 'void' ? 'border-purple-950/30 bg-purple-950/5' : day.status === 'open' ? 'border-[#c5a880]/30 bg-[#c5a880]/5 hover:border-[#c5a880]' : 'border-neutral-900 bg-[#111111]/20'}`}>
                <div>
                  <span className="text-[9px] font-serif block text-neutral-400 font-semibold border-b border-neutral-900/60 pb-0.5 mb-1.5">{day.date}</span>
                  <span className={`text-[11px] block font-medium font-serif ${day.status === 'void' ? 'text-purple-400 italic font-semibold animate-pulse' : 'text-white'}`}>{day.holder}</span>
                  <span className="text-[8px] text-neutral-600 block font-mono mt-0.5">{day.city}</span>
                </div>
                <div>
                  <span className={`text-[8px] font-mono block mb-1.5 font-bold ${day.status === 'open' ? 'text-[#c5a880]' : 'text-neutral-500'}`}>
                    {day.status === 'void' ? t.status_price_void : day.status === 'open' ? `${t.status_floor} €${day.rawPrice}` : `€${day.rawPrice} (${t.status_closed})`}
                  </span>
                  {day.status === 'void' ? (
                    <span className="text-[7px] text-purple-400 font-mono block uppercase tracking-tighter py-0.5 border border-purple-950/20 bg-purple-950/10 leading-tight">{t.status_void}</span>
                  ) : day.status === 'open' ? (
                    <button onClick={() => scrollToSection('allocation')} className="w-full text-[7px] text-black bg-[#c5a880] font-mono block uppercase tracking-widest py-0.5 font-semibold hover:bg-white transition-colors">{lang === 'tr' ? 'Teklif Et' : 'Offer'}</button>
                  ) : (
                    <span className="text-[7px] text-neutral-600 block uppercase font-mono tracking-widest">{t.status_verified}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌍 FOOTER */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-[8px] tracking-[0.3em] text-neutral-600 uppercase z-10 border-t border-neutral-950">
        <div className="flex gap-4 mb-2 md:mb-0 font-serif opacity-40"><span>London HQ</span><span>Paris Vault</span><span>Dubai Bureau</span></div>
        <div className="text-center md:text-right font-mono opacity-20"><span>Phrygian Lab Ltd. © 2026 / Strictly Atypical</span></div>
      </footer>

    </main>
  );
}