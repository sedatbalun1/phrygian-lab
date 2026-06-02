'use client';

import React, { useState } from 'react';

const TRANSLATIONS = {
  en: {
    protocol: 'Midaum Private Protocol / Asset Class 718',
    remaining: 'REMAINING CORES',
    tagline: 'METAMORPHIC REALISM / THE SACRED COVENANT',
    h1: 'Science measures time.\nMidaum erases death.',
    
    menu_genesis: 'The Archive',
    menu_covenant: 'The Covenant',
    menu_artifact: 'The Core',
    menu_allocation: 'The Allocation',

    // 📜 KUTSAL TABLET SETİ (Soğuk, Net, Kutsal Kitap ve Belgesel Havası)
    vow_1: 'You did not find this coordinates.',
    vow_2: 'The monolithic core permitted your receptor to decode it.',
    vow_3: 'Capital can secure the future.',
    vow_4: 'But history has never been for sale. Until this alignment.',
    vow_5: 'We do not offer cosmetics. We activate the elemental shield of being unforgotten.',
    vow_6: 'One lineage. One solid vessel. One eternal resonance.',

    // 🔮 HERO SLIDER ALANI: THE LUMINOUS GIFT (Sinematografik Kıskançlık ve Güç Alanı)
    resonance_title: 'THE LUMINOUS GIFT / THE JUNE 26TH SOLSTICE ANOMALY',
    resonance_desc: 'Non-negotiable. This specific calendar node is completely isolated from financial transactional dynamics. On the night of June 26th, the entire active output is sealed and gifted to strictly ONE woman on Earth, selected by the council. A calculated silent void designed to test the limits of absolute sovereignty.',

    manifesto1: '718 BC. Gordion was ashes. King Midas bypassed the standard retreats and isolated himself within the unmapped mermer fault lines of Midaum. Deep within the seismic fractures, an unrecorded Phrygian lineage extended a black, light-absorbing mineral mass: The Obsidian Monolith. Midas, paralyzed by the geopolitical collapse of his empire, refused the anomaly. That single negation collapsed the metaphysical core of Phrygia. The empire dissolved, but the rejected stone remained embedded in the deeper strata—a silent, heavy geological transmitter.',
    manifesto2: '1975, Midaum Core Drilling. During deep tectonic extractions, surveyors breached a void inside a lightless marble vein, discovering the original relic. Today, this object moves through a global encrypted web, spending strictly 365 days under the custody of a single chosen sovereign. Phrygian Lab extracts the three elementer layers (The Antique Triad), enclosing them inside a solid, hand-carved marble jar. You are not reading an anomaly; your subconscious is already responding to its frequency.',
    
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Triple Geological Ritual / Metamorphic Preservation Archive',
    gold_plate: '24K Gold Mounted Sovereign Plate / Archive Mühür',
    tooltip_title: 'SECRET 718: THE ASCENDING VALUATION',
    tooltip_desc: 'Genesis index starts at €718. Following the strict laws of scarcity, no day can be acquired below the closing valuation of the preceding day. The floor only ascends.',
    set_desc: 'Four elemental seals: "Beauty, Fortune, Metaphysical Grace, and Absolute Sovereignty." Three high-density mineral layers hand-carved from Midaum vaults, functioning as a geological medium between mortal skin and the eternal frequency. Encased with a 24K Gold Mounted Sovereign Plate:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'High-density sulfur and volcanic silica. A tectonic purification process that syncs cellular matrix with deep earth memory.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Pure calcium carbonate isolated from unlit veins. Imparts the ageless porcelain tone utilized in imperial inner chambers.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatic mineral crust deposited by thermal springs. A heavy geological shield that completely freezes human time decay.',
    
    monolith_title: 'THE OBSIDIAN MONOLITH / THE 31 DECEMBER ALIGNMENT',
    monolith_desc: 'On the final night of the solar cycle, a transparent cosmic draw occurs among the 365 archive holders. The physical Obsidian Monolith will be transferred to exactly ONE sovereign for the upcoming cycle. The Mask alters your skin; the Monolith re-routes your destiny. The remaining 364 initiates track its exact global coordinates live via their private digital vault.',
    
    call_to_action: 'The ancient heritage, the absolute nobility, and the frequency of the past await within the marble jar. The value only rises.',
    form_title: 'SOVEREIGN ALLOCATION REQUEST & VALUE OFFER',
    input_name: 'Sovereign Name & Title (e.g., Sovereign Sedat)',
    input_city: 'City / Country (e.g., London / UK)',
    input_email: 'Encrypted Digital Address (Email)',
    input_address: 'The secured destination where the solid marble jar and gold plate shall be delivered...',
    button_submit: 'SUBMIT VALUE OFFER & ENGAGE FREQUENCY',
    success: 'ALLOCATION RECORDED IN THE SEISMIC LEDGER',
    success_desc: 'Your offer is sealed. Our concierge will contact your encrypted address within 24 hours.',
    
    ledger_title: 'THE ALIGNMENT CALENDAR / THE ASCENDING VALUE CYCLE',
    ledger_sub: 'Commencing June 23rd Solstice — Subsequent days cannot be acquired below the last closed valuation.',
    status_verified: 'Closed & Sealed',
    status_open: 'Offer Value',
    status_floor: 'Floor:',
    status_closed: 'Closed'
  },
  tr: {
    protocol: 'Midaum Mahrem Protokolü / Varlık Sınıfı 718',
    remaining: 'KALAN KÜTLE CORES',
    tagline: 'METAMORFİK GERÇEKÇİLİK / KUTSAL SÖZLEŞME',
    h1: 'Bilim zamanı ölçer.\nMidaum ise ölümü siler.',
    
    menu_genesis: 'Arşiv',
    menu_covenant: 'Vaatleri',
    menu_artifact: 'Emanet',
    menu_allocation: 'Tahsisat',

    // 📜 KUTSAL TABLET SETİ (Soğuk, Net, Kutsal Kitap ve Belgesel Havası)
    vow_1: 'Bu koordinatları siz bulmadınız.',
    vow_2: 'Masif kütle, zihninizdeki alıcının bu şifreyi çözmesine izin verdi.',
    vow_3: 'Sermaye gelecekteki her şeyi satın alabilir.',
    vow_4: 'Peki ya geçmişin o derin jeolojik frekansı? O asla satılık olmadı. Bu hizalanmaya kadar.',
    vow_5: 'Biz kozmetik vadetmiyoruz. Biz, unutulmamanın o mutlak ve ağır kalkanını cildinize mühürlüyoruz.',
    vow_6: 'Tek soy. Tek masif mermer muhafaza. Tek ölümsüz rezonans.',

    // 🔮 HERO SLIDER ALANI: THE LUMINOUS GIFT (Sinematografik Kıskançlık ve Güç Alanı)
    resonance_title: 'THE LUMINOUS GIFT / 26 HAZİRAN GÜNDÖNÜMÜ ANOMALİSİ',
    resonance_desc: 'Müzakeresiz. Takvimdeki bu spesifik döngü, finansal ve ticari dinamiklerden tamamen izole edilmiştir. 26 Haziran gecesi, o günün tüm üretimi mühürlenir ve konsey tarafından yeryüzünden seçilen sadece TEK bir kadına armağan edilir. Seçkinlerin kibrini ve hırs sınırlarını test etmek üzere tasarlanmış mutlak bir boşluk yarası.',

    manifesto1: 'M.Ö. 718. Gordion küldü. Kral Midas bilinen sığınakları reddetti ve haritalandırılmamış Midaum mermer fay hatlarının derinliklerine çekildi. O sismik kırılmalarda, tarihe geçmemiş saf bir Frigya soyu ona ışığı yutan mineral bir kütle uzattı: The Obsidian Monolith. Midas, çöken imparatorluğunun kederi ve kibriyle bu anomaliyi reddetti. O tek bir reddediş, Frigya’nın metafiziksel merkezini çökertti. Krallık yok oldu, ama o taş mermer katmanların kalbinde sismik bir verici olarak yaşamaya devam etti.',
    manifesto2: '1975, Midaum Karot Sondajı. Derin tektonik kazılar sırasında mühendisler, ışıksız bir mermer damarının içinde masif bir boşluk keşfettiler ve o orijinal emanete ulaştılar. Taş, o günden beri küresel ve şifreli bir ağda, her asilin elinde sadece 365 gün kalmak şartıyla dünyayı geziyor. Phrygian Lab, bu büyük rezonansı (The Antique Triad), tek bir mermer bloktan el işçiliğiyle oyulmuş masif bir mermer kavanozda muhafaza ediyor. Şu an bu metni okumuyorsunuz; zihniniz çoktan taşın frekansına yanıt veriyor. Ya o emanet gerçekten sizseniz?',
    
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Masif Mermer Kavanoz İçinde Üçlü Jeolojik Ritüel',
    gold_plate: '24K Gold Mounted Sovereign Plate / Arşiv Mühür',
    tooltip_title: 'SECRET 718: YÜKSELEN DEĞER PRENSİBİ',
    tooltip_desc: 'Başlangıç endeksi €718’dir. Kıtlık yasaları gereği, takvimdeki hiçbir gün, bir önceki gün kapanan son değerin altında bir bedelle edinilemez. Değer sadece yükselir.',
    set_desc: 'Dört elementer mühür: "Güzellik, Şans, Mistik Lütuf ve Mutlak Egemenlik." Midaum dehlizlerinden çıkarılan ve fani cildinizle geçmişin sarsılmaz frekansı arasında sismik bir medyum görevi gören 3 kadim katman. Adınıza mühürlenmiş 24 Ayar Altın Kaplama Masif Plaka ile teslim edilir. Her kan hattı için ömür boyu tek tahsisat:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Yüksek yoğunluklu sülfür ve volkanik silika. Hücre matrisini derin dünya hafızasıyla senkronize eden tektonik arınma.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Saf kalsiyum karbonat. Kayıp yüzyılların ışığını fani cilde yansıtan ve sadece imparatorluk mahremlerinde kullanılan asil toz.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Termal suların bıraktığı magmatik mineral kabuk. Fani zamanın çürümesini cilt bariyerinde tamamen donduran ağır jeolojik kalkan.',
    
    monolith_title: 'THE OBSIDIAN MONOLITH / 31 ARALIK HİZALANMASI',
    monolith_desc: 'Güneş döngüsünün son gecesi, 365 hak sahibi arasında şeffaf ve kutsal bir çekiliş gerçekleşir. Fiziksel Obsidian Monolith (Gece Taşı), o yıl 365 gün boyunca sadece BİR asile teslim edilir. Maske cildinizi değiştirir; Monolith ise kaderinizi yeniden yazar. Geri kalan 364 üye koordinatları şifreli panelle canlı izler.',
    
    call_to_action: 'Kadim emanet, mutlak asalet ve geçmişin o sarsılmaz frekansı mermer kavanozun içinde seni bekliyor. Değer sadece yükselir.',
    form_title: 'SOVEREIGN TAHSİSAT TALEBİ & DEĞER TEKLİFİ',
    input_name: 'Asil İsim & Unvan (Örn: Asil Sedat)',
    input_city: 'Şehir / Ülke (Örn: Istanbul / TR)',
    input_email: 'Şifreli Dijital Adres (E-posta)',
    input_address: 'Mühürlü masif mermer kavanozun ulaştırılacağı sızdırılamaz resmi lokasyon...',
    button_submit: 'DEĞER TEKLİFİNİ SUN VE FREKANSI AKTİF ET',
    success: 'TAHSİSAT SİSMİK SİCİLE İŞLENDİ',
    success_desc: 'Değer teklifiniz sismik sicile kaydedilmiştir. Konsiyerj ekibimiz yerleşiminizi doğrulamak üzere 24 saat içinde sizinle irtibat kuracaktır.',
    
    ledger_title: 'THE ALIGNMENT CALENDAR / YÜKSELEN DEĞER DÖNGÜSÜ',
    ledger_sub: '23 Haziran Gündönümünde Başlar — Sonraki günler, bir önceki günün kapanış değerinin altında edinilemez.',
    status_verified: 'Mühürlendi',
    status_open: 'Teklif Sun',
    status_floor: 'Taban:',
    status_closed: 'Kapatıldı'
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
    { date: 'June 26', holder: 'The Chosen One', city: lang === 'tr' ? 'Midaum Havzası' : 'Midaum Local', status: 'void', rawPrice: 0 },
    { date: 'June 27', holder: 'Sovereign V.', city: 'Vienna', status: 'verified', rawPrice: 1100 },
    { date: 'June 28', holder: lang === 'tr' ? 'Teklif Sun' : 'Offer Value', city: 'Global', status: 'open', rawPrice: 1100 },
    { date: 'June 29', holder: lang === 'tr' ? 'Teklif Sun' : 'Offer Value', city: 'Global', status: 'open', rawPrice: 1100 },
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
      
      {/* 🔮 Kozmik Fay Hattı Aydınlatması */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(circle,rgba(197,168,128,0.02)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* 🏛️ PREMIUM HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center z-50 relative border-b border-neutral-900/10 gap-4 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md">
        <div className="flex flex-col items-center lg:items-start cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-lg md:text-xl font-extralight tracking-[0.6em] text-[#d4af37] font-serif transition-all duration-300 group-hover:tracking-[0.65em]">PHRYGIAN LAB</span>
          <span className="text-[8px] tracking-[0.4em] uppercase opacity-20 mt-0.5 font-sans">{t.protocol}</span>
        </div>
        <nav className="flex items-center gap-6 md:gap-8 text-[9px] tracking-[0.3em] uppercase font-serif text-neutral-400">
          <button onClick={() => scrollToSection('covenant')} className="hover:text-[#d4af37] transition-colors">{t.menu_covenant}</button>
          <button onClick={() => scrollToSection('genesis')} className="hover:text-[#d4af37] transition-colors">{t.menu_genesis}</button>
          <button onClick={() => scrollToSection('artifact')} className="hover:text-[#d4af37] transition-colors">{t.menu_artifact}</button>
          <button onClick={() => scrollToSection('allocation')} className="hover:text-[#d4af37] transition-colors border border-[#c5a880]/20 px-3 py-1 bg-neutral-950/40 text-[#c5a880]">{t.menu_allocation}</button>
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

      {/* 👑 THE COVENANT (SİNEMATOGRAFİK CORES VE FREKANS ALANI) */}
      <section id="covenant" className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center pt-24 pb-12 z-10 relative scroll-mt-28">
        <p className="text-[9px] tracking-[0.6em] uppercase text-[#c5a880] mb-8 font-semibold">{t.tagline}</p>
        <h1 className="text-3xl md:text-5xl font-serif font-extralight tracking-wide leading-tight max-w-3xl mb-12 text-white whitespace-pre-line">{t.h1}</h1>

        {/* 🔮 SİNEMATOGRAFİK SLIDER ALANI: THE LUMINOUS GIFT ANOMALİSİ */}
        <div className="w-full bg-purple-950/5 border border-purple-900/20 p-6 md:p-8 text-center relative overflow-hidden max-w-2xl mx-auto mb-12 shadow-[0_0_50px_rgba(147,51,234,0.02)]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
          <div className="inline-block text-[7px] tracking-[0.4em] font-mono text-purple-400 border border-purple-900/30 px-2 py-0.5 mb-3 bg-purple-950/20">
            [ NON-TRANSACTIONAL CORE ]
          </div>
          <span className="text-[10px] font-mono block tracking-[0.3em] mb-2 text-purple-300 uppercase">{t.resonance_title}</span>
          <p className="text-xs text-neutral-400 leading-relaxed font-light font-serif italic max-w-xl mx-auto">{t.resonance_desc}</p>
        </div>

        {/* 📜 Kadim Rezonans Emirleri ve Kancalar */}
        <div className="flex flex-col items-center gap-5 text-xs md:text-sm tracking-[0.15em] font-serif uppercase text-neutral-400 max-w-xl mx-auto mb-10 border border-neutral-900 px-8 py-8 bg-neutral-950/40 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/20 to-transparent" />
          <div className="text-[8px] tracking-[0.3em] font-mono text-neutral-600 border border-neutral-900/60 px-2 py-0.5 mb-1 bg-black">[ SEISMIC FAULT ALIGNMENT ]</div>
          <p>{t.vow_1}</p>
          <div className="text-[8px] tracking-[0.3em] font-mono text-[#d4af37] border border-[#d4af37]/20 px-3 py-1 my-0.5 bg-[#d4af37]/5 font-semibold">{t.vow_2}</div>
          <div className="w-4 h-[1px] bg-neutral-900" />
          <p className="opacity-40 text-[10px] font-sans tracking-widest">{t.vow_3}</p>
          <p className="text-[#e5e5e5] font-light leading-relaxed">{t.vow_4}</p>
          <div className="w-4 h-[1px] bg-neutral-900" />
          <p className="text-[#d4af37] font-medium text-center max-w-md">{t.vow_5}</p>
          <div className="text-[8px] tracking-[0.4em] font-mono text-neutral-500 uppercase mt-1">[ {t.vow_6} ]</div>
        </div>
      </section>

      {/* 📜 ARŞİV (TEKTONİK SONDAJ VE SIZDIRILMIŞ RAPORLAR) */}
      <section id="genesis" className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center pb-12 z-10 relative scroll-mt-28">
        <div className="w-12 h-[1px] bg-neutral-900 mb-8" />
        <p className="text-xs font-light tracking-wide text-neutral-400 max-w-2xl leading-relaxed mb-4 text-justify md:text-center">{t.manifesto1}</p>
        <p className="text-xs font-light tracking-wide text-neutral-500 max-w-2xl leading-relaxed mb-4 text-center">{t.manifesto2}</p>
      </section>

      {/* 📦 THE ANTIQUE TRIAD SİSTEMİ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-4 z-10 relative">
        <div className="bg-[#111111]/30 border border-neutral-900/80 p-6 md:p-10 relative group backdrop-blur-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#d4af37] to-[#aa841b] text-black text-[8px] tracking-[0.25em] uppercase font-bold px-4 py-0.5 shadow-xl font-mono text-center">{t.gold_plate}</div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-6 border-b border-neutral-900/60 pb-4">
            <div>
              <h2 className="text-xl font-serif font-light tracking-widest text-white">{t.set_title}</h2>
              <p className="text-[9px] tracking-widest text-[#c5a880] uppercase mt-0.5">{t.set_sub}</p>
            </div>
            <div className="mt-2 md:mt-0 flex items-center gap-2 group/price relative cursor-help">
              <span className="text-xl font-serif text-[#c5a880] tracking-wider font-light">Dynamic Valuation</span>
              <span className="text-[9px] bg-neutral-900 border border-neutral-800 text-neutral-600 rounded-full w-3.5 h-3.5 flex items-center justify-center font-mono">?</span>
              <div className="absolute bottom-6 right-0 w-64 bg-[#141414] border border-[#c5a880]/30 p-3 text-[9px] text-neutral-400 leading-relaxed shadow-2xl tracking-wide opacity-0 group-hover/price:opacity-100 transition-opacity duration-300 pointer-events-none z-50 font-sans">
                <span className="text-[#d4af37] font-serif block mb-0.5">{t.tooltip_title}</span>
                {t.tooltip_desc}
              </div>
            </div>
          </div>
          <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-light text-center max-w-2xl mx-auto">{t.set_desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#141414]/80 border border-neutral-900/60 p-4">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-0.5">Ⅰ / THE CORE PURITY</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-1">{t.grey_title}</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{t.grey_desc}</p>
            </div>
            <div className="bg-[#141414]/80 border border-neutral-900/60 p-4">
              <span className="text-[8px] font-mono text-[#d4af37] block mb-0.5">Ⅱ / IMPERIAL REFINE</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-1">{t.white_title}</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{t.white_desc}</p>
            </div>
            <div className="bg-[#141414]/80 border border-neutral-900/60 p-4">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-0.5">Ⅲ / TEKTONIC SHIELD</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-1">{t.raw_title}</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{t.raw_desc}</p>
            </div>
          </div>

          {/* 🔮 ARTIFACT (OBSIDIAN MONOLITH CORES) */}
          <div id="artifact" className="bg-[#131313]/90 border border-[#c5a880]/15 p-5 mb-6 text-center relative overflow-hidden scroll-mt-28">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/20 to-transparent" />
            <div className="inline-block text-[7px] tracking-[0.4em] font-mono text-purple-400 border border-purple-900/60 px-2 py-0.5 mb-3 bg-purple-950/10">[ ANCIENT CHRONIC TRANSMITTER ]</div>
            <span className="text-[8px] font-mono block tracking-[0.25em] mb-1.5 text-[#d4af37]">{t.monolith_title}</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-xl mx-auto text-center whitespace-pre-line">{t.monolith_desc}</p>
          </div>

          <div className="py-4 text-center border-t border-neutral-900/40">
            <p className="text-xs font-serif italic text-[#c5a880] tracking-wide max-w-xl mx-auto leading-relaxed">"{t.call_to_action}"</p>
          </div>

          {/* ALLOCATION FORMU */}
          <div id="allocation" className="border-t border-neutral-900/40 pt-6 scroll-mt-28">
            {!orderSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 max-w-2xl mx-auto">
                <div className="text-center mb-4">
                  <span className="text-[8px] tracking-[0.3em] text-[#c5a880] block font-mono">ACQUISITION PROTOCOL</span>
                  <h3 className="text-xs font-serif tracking-widest text-white uppercase mt-0.5">{t.form_title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input type="text" required value={buyerName} onChange={(e) => setBuyerName(e.target.value)} placeholder={lang === 'tr' ? 'Asil İsim & Sismik Unvan' : t.input_name} className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                  <input type="text" required value={buyerCity} onChange={(e) => setBuyerCity(e.target.value)} placeholder={t.input_city} className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                </div>
                <input type="number" required min="1100" placeholder={lang === 'tr' ? 'EUR Cinsinden Değer Teklifiniz (Taban: €1,100)' : `Your Value Offer in EUR (Floor: €1,100)`} className="w-full bg-[#161616] border border-[#c5a880]/30 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-[#c5a880] tracking-widest font-mono placeholder:text-neutral-700" />
                <input type="email" required placeholder={t.input_email} className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                <textarea rows={2} required placeholder={t.input_address} className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide resize-none leading-relaxed font-sans placeholder:text-neutral-700" />
                <button type="submit" className="w-full bg-transparent border border-[#c5a880] text-[#c5a880] uppercase font-medium text-[10px] tracking-[0.3em] py-4 rounded-none hover:bg-[#c5a880] hover:text-black transition-all duration-500 shadow-2xl">{t.button_submit}</button>
              </form>
            ) : (
              <div className="py-4 text-center space-y-2">
                <span className="text-lg">🏛️</span>
                <h3 className="text-xs tracking-[0.3em] text-[#c5a880] uppercase font-bold">{t.success}</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">{t.success_desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 📜 THE ALIGNMENT CALENDAR (DİL SENKRONİZASYONLU DÖNGÜ) */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6 z-10 relative">
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