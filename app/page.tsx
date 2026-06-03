'use client';

import React, { useState } from 'react';

const TRANSLATIONS = {
  en: {
    protocol: 'House of Phrygian Lab / Since 718 BC',
    remaining: 'DAILY ALLOCATION STATUS',
    tagline: 'GEOLOGICAL ARISTOCRACY / TEMPORAL PRESERVATION RITUAL',
    limit_notice: '✨ Allocation Notification: Limited strictly to ONE worldwide Custodian per day.',
    gold_plate_claim: 'Gold survives centuries. Memory survives empires.',
    
    menu_story: 'The Secret Archive',
    menu_vow: 'The Ritual Edict',
    menu_own: 'Request Allocation',

    // 📜 1. HİKAYESİ (Geological Reality & Secret Royal Archive)
    story_title: 'Luxury fades. Civilizations remain.',
    story_desc: 'Capital can capture fields, fields build empires, and gold buys allegiance. But time has no master, save for those who hold the deep memory of the earth. The House of Phrygian Lab does not offer industrial cosmetics. This is an unlit mineral mass from the authentic thermal veins of ancient Anatolia—a banned aristokratik ritüel objesi designed to freeze temporal decay. You are not a consumer. You are the Custodian of an unreturned frequency.',

    // 🔮 2. VAATLER (Sessiz Kibir & Ağır Materyal Hissi)
    vow_title: 'THE THREE GEOLOGICAL EDICTS',
    vow_beauty_title: 'Sovereign Beauty',
    vow_beauty_desc: 'A thousand-year purification derived from genuine Anatolian peloid and deep magmatic mineral crust. It bypasses the modern clean beauty illusion to completely erase the signature of seconds from the cell matrix.',
    vow_luck_title: 'The Phrygian Luck',
    vow_desc: 'In 718 BC, King Midas recognized that gold is a transient flash, but the tectonic structures of Midaum hold eternal fortune. This mineral shield realigns your trajectory with silent grace.',
    vow_prestige_title: 'Absolute Prestige',
    vow_prestige_desc: 'Isolated from transactional gold. One singular allocation per day worldwide, granted exclusively via our Private Circle verification. Absolute rate: €718.',

    // 📦 3. SAKLAMA ARCHIVE
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Archive Case / Metamorphic Preservation Repository',
    set_desc: 'A heavy geological object, hand-carved from unlit marble veins. It contains three high-density metamorphic layers, delivered within an Archive Case alongside a personalized 24K Gold Mounted Plate:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'High volcanic silica and deep sulfur. A heavy geological shield connecting your cells to the deep memory of the earth.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Pure calcium carbonate from unlit veins. Imparts the smooth, ageless porcelain tone utilized in ancient imperial baths.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatic mineral crust from thermal springs. A structural barrier that completely freezes the erosion of mortal time.',
    
    // 💳 ALLOCATION REQUEST FORM
    form_title: 'SOVEREIGN REGISTRY REQUEST',
    form_sub: 'The private destination where the solid marble jar and gold plate shall be locked and delivered.',
    input_name: 'Custodian Name & Title (e.g., Sovereign Sedat)',
    input_city: 'Target City / Country (e.g., London / UK)',
    input_email: 'Encrypted Digital Address (Email)',
    input_address: 'Secured Destination Shipping Address',
    button_submit: 'REQUEST ALLOCATION / VERIFY WITH CREDIT CARD & AMEX',
    success: 'ALLOCATION RECORDED IN THE SEISMIC LEDGER',
    success_desc: 'Your registry request has been received by the council. Settlement locked at a fixed rate of €718. Charging occurs only upon allocation confirmation.',
    
    // ⏳ TAKVİM BÖLÜMÜ
    ledger_title: 'THE ALLIGNMENT CALENDAR',
    ledger_sub: 'Commencing June 23rd Solstice — Fixed Private Circle Valuation',
    status_void_label: 'Priceless',
    seo_text: 'House of Phrygian Lab | Geological Aristocracy | Temporal Preservation Ritual | London - Paris - Istanbul - Dubai Private Circle Vaults'
  },
  tr: {
    protocol: 'House of Phrygian Lab / M.Ö. 718',
    remaining: 'GÜNLÜK TAHSİSAT DURUMU',
    tagline: 'JEOLOJİK ARİSTOKRASİ / TEMPORAL PRESERVATION RITUAL',
    limit_notice: '✨ Tahsisat Bildirisi: Küresel ölçekte günde sadece TEK bir Custodian için kilitlenir.',
    gold_plate_claim: 'Altın yüzyıllarca hayatta kalır. Hafıza imparatorlukları esir alır.',
    
    menu_story: 'Gizli Arşiv',
    menu_vow: 'Asil Sözleşme',
    menu_own: 'Tahsisat Başvurusu',

    // 📜 1. HİKAYESİ (Anadolu Gerçekliği & Gizli Arşiv)
    story_title: 'Luxury fades. Civilizations remain.',
    story_desc: 'Sermaye toprakları ele geçirebilir, topraklar imparatorluklar doğurabilir ve altın sadakat satın alabilir. Fakat zamanın bir efendisi yoktur; yeryüzünün derin tektonik hafızasını elinde tutan asiller hariç. House of Phrygian Lab, fani bir kozmetik markası değildir. Anadolu’nun gerçek termal damarlarından ve peloid altyapısından çıkarılmış yasaklı aristokratik ritüel objesidir. Siz bir tüketici değilsiniz; geçmişin sarsılmaz frekansını koruyan bir Custodian’sınız.',

    // 🔮 2. VAATLER (Sessiz Kibir & Ağır Materyal Hissi)
    vow_title: 'ÜÇ JEOLOJİK ASİL SÖZLEŞME',
    vow_beauty_title: 'Mutlak Güzellik',
    vow_beauty_desc: 'Gerçek Anadolu peloid altyapısı ve magmatik mineral kabuktan gelen binlerce yıllık arınma ritüeli. Modern "clean beauty" yanılsamalarını reddeder; fani cildinizdeki zaman izlerini tamamen yok ederek kusursuz bir porselen asalet sunar.',
    vow_luck_title: 'Frigya Efsunlu Şansı',
    vow_desc: 'M.Ö. 718 yılında Kral Midas altının gelip geçici bir hırs, Midaum dehlizlerinin ise kalıcı bir güç olduğunu biliyordu. Bu jeolojik kalkan, kader çizgilerinizi sessiz bir kibirle yeniden hizalar.',
    vow_prestige_title: 'Yüksek Saygınlık',
    vow_prestige_desc: 'Ticari ve fani pazarlardan tamamen izole edilmiş bir imtiyaz. Hayatınızın geri kalanında kaderinize eşlik edecek, sadece Private Circle üyelerine açılan küresel tahsisat. Sabit bedel: €718.',

    // 📦 3. SAKLAMA ARCHIVE
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Archive Case / Masif Mermer Koruma Mahfaza',
    set_desc: 'Işıksız mermer damarlarından el işçiliğiyle yontulmuş ağır, müze kalitesinde bir obje. Adınıza özel 24 Ayar altın mühürlü plakası ve Archive Case muhafazasıyla birlikte teslim edilen 3 yüksek yoğunluklu katman:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Yüksek volkanik silika ve sülfür. Hücre matrisini yeryüzünün derin jeolojik hafızasıyla senkronize eden ağır kalkan.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Işıksız mermer damarlarından saf kalsiyum karbonat. Antik imparatorluk banyolarının o pürüzsüz porselen tonu.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Termal kaynaklardan magmatik mineral kabuk. Zamanın yıpratıcı etkisini cilt bariyerinde tamamen donduran ağır jeolojik katman.',
    
    // 💳 ALLOCATION REQUEST FORM
    form_title: 'ASİL SİCİL BAŞVURU PROTOKOLÜ',
    form_sub: 'Masif mermer kavanoz ve altın plakanın kilitlenip ulaştırılacağı resmi mahrem lokasyon',
    input_name: 'Asil İsim & Saygın Unvan (Örn: Sovereign Sedat)',
    input_city: 'Hedef Şehir / Ülke (Örn: Istanbul / TR)',
    input_email: 'Şifreli Dijital Adres (E-posta)',
    input_address: 'Emanetin Ulaştırılacağı Resmi Teslimat Adresi',
    button_submit: 'TAHSİSAT TALEP ET / CREDIT CARD & AMEX İLE ANINDA KİLİTLE',
    success: 'TAHSİSAT SİSMİK SİCİLE İŞLENDİ',
    success_desc: 'Asil sicil başvurunuz konsey arşivine alınmıştır. Sabit bedel €718 olarak kilitlenmiştir. Kartınızdan tahsilat sadece konsey tahsisatınızı onaylarsa yapılacaktır.',
    
    ledger_title: 'ZAMANSAL HİZALANMA TAKVİMİ',
    ledger_sub: '23 Haziran Gündönümünde Başlar — Private Circle Sabit Bedeli: €718.',
    status_void_label: 'Ebedi',
    seo_text: 'House of Phrygian Lab | Jeolojik Aristokrasi | Antik Ritüel Objesi | London - Paris - Istanbul - Dubai Mahrem Kasaları'
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'tr'>('en');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', city: '', email: '', address: '' });
  const [activeVow, setActiveVow] = useState<'beauty' | 'luck' | 'prestige' | null>(null);

  const t = TRANSLATIONS[lang];

  const CALENDAR_DAYS = [
    { date: 'June 23', holder: 'Sovereign S.', city: 'Istanbul', status: 'Sealed', price: '€718', isVoid: false },
    { date: 'June 24', holder: 'Sovereign A.', city: 'London', status: 'Sealed', price: '€718', isVoid: false },
    { date: 'June 25', holder: 'Sovereign M.', city: 'Paris', status: 'Sealed', price: '€718', isVoid: false },
    { date: 'June 26', holder: 'The Chosen One', city: 'Midaum Zone', status: 'Priceless', price: 'Priceless', isVoid: true },
    { date: 'June 27', holder: 'Sovereign V.', city: 'Vienna', status: 'Sealed', price: '€718', isVoid: false },
    { date: 'June 28', holder: 'Sovereign Alignment', city: 'Global', status: 'Open', price: '€718', isVoid: false },
    { date: 'June 29', holder: 'Sovereign Alignment', city: 'Global', status: 'Open', price: '€718', isVoid: false },
  ];

  const handleInputChange = (key: 'name' | 'city' | 'email' | 'address', value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex flex-col justify-between font-sans selection:bg-[#c5a880] selection:text-black overflow-x-hidden relative">
      
      {/* 🔮 %5 ÖLÇEKLİ LÜKS SIZINTI MOR GRADIENT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle,rgba(147,51,234,0.025)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center z-50 relative border-b border-neutral-900/40 gap-4 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md">
        <div className="flex flex-col items-center lg:items-start cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-lg md:text-xl font-extralight tracking-[0.6em] text-[#d4af37] font-serif">PHRYGIAN LAB</span>
          <span className="text-[8px] tracking-[0.3em] uppercase opacity-30 mt-0.5 font-mono">{t.protocol}</span>
        </div>
        
        <nav className="flex items-center gap-8 text-[10px] tracking-[0.3em] uppercase font-serif text-neutral-400">
          <button onClick={() => scrollToSection('story-layer')} className="hover:text-[#d4af37] transition-colors">{t.menu_story}</button>
          <button onClick={() => scrollToSection('vow-layer')} className="hover:text-[#d4af37] transition-colors">{t.menu_vow}</button>
          <button onClick={() => scrollToSection('own-layer')} className="hover:text-[#d4af37] transition-colors text-[#c5a880] font-semibold">{t.menu_own}</button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-neutral-950 border border-neutral-900 px-2.5 py-1 text-[8px] tracking-widest font-mono">
            <button onClick={() => setLang('en')} className={`uppercase ${lang === 'en' ? 'text-[#d4af37] font-bold' : 'text-neutral-600'}`}>EN</button>
            <button onClick={() => setLang('tr')} className={`uppercase ${lang === 'tr' ? 'text-[#d4af37] font-bold' : 'text-neutral-600'}`}>TR</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[8px] tracking-[0.2em] text-[#c5a880] uppercase font-mono">1 ASIL / GÜN</span>
          </div>
        </div>
      </header>

      {/* MOR PARILDAYAN ASİL KITLIK ŞERİDİ */}
      <div className="w-full bg-gradient-to-r from-purple-950/20 via-purple-900/30 to-purple-950/20 border-b border-purple-900/10 py-3 text-center z-10 relative animate-pulse shadow-[0_0_20px_rgba(147,51,234,0.05)]">
        <p className="text-[10px] tracking-[0.4em] uppercase text-purple-300/90 font-semibold px-4">
          {t.limit_notice}
        </p>
      </div>

      {/* ÇİFT SÜTUN AKIŞI */}
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 pb-12 z-10 relative">
        <div className="lg:col-span-7 flex flex-col justify-start text-left space-y-10">
          
          {/* ⚜️ LUXURY FASHION HOUSE AMBLEMİ (Kutsal Mühür Hissiyatı) */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-[#d4af37] flex items-center justify-center relative bg-neutral-950 shadow-2xl group cursor-help">
              <div className="absolute inset-0.5 border border-neutral-800" />
              <span className="text-xs font-serif tracking-widest text-[#d4af37] font-bold group-hover:scale-110 transition-transform">Φ</span>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase text-[#c5a880] mb-0.5 font-semibold font-mono">
                {t.tagline}
              </p>
              <div className="w-32 h-[1px] bg-gradient-to-r from-[#c5a880]/40 to-transparent" />
            </div>
          </div>

          {/* 📜 ARİSTOKRATİK RİTÜEL ANLATI TABAKASI */}
          <section id="story-layer" className="space-y-4 scroll-mt-28 bg-[#111111]/10 border border-neutral-900/60 p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]" />
            <h2 className="text-xl md:text-2xl font-serif font-light tracking-widest text-white uppercase pl-2">
              {t.story_title}
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-serif text-justify pl-2 font-light">
              {t.story_desc}
            </p>
          </section>

          {/* 🔮 SESSİZ KİBİR VAATLERİ */}
          <section id="vow-layer" className="w-full bg-neutral-950/40 border border-neutral-900/60 p-6 relative scroll-mt-28 space-y-4">
            <span className="text-[10px] font-mono block tracking-[0.3em] text-neutral-500 font-semibold uppercase">{t.vow_title}</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <button onClick={() => setActiveVow(activeVow === 'beauty' ? null : 'beauty')} className={`border p-3.5 text-left transition-all duration-500 rounded-none ${activeVow === 'beauty' ? 'border-[#d4af37] bg-neutral-950 shadow-2xl' : 'border-neutral-900 bg-black/40 hover:border-neutral-800'}`}>
                <span className="text-[11px] font-serif tracking-widest uppercase block text-white">{t.vow_beauty_title}</span>
                <span className="text-[8px] font-mono text-neutral-600 block mt-1 uppercase tracking-wider">Decode Ritual</span>
              </button>

              <button onClick={() => setActiveVow(activeVow === 'luck' ? null : 'luck')} className={`border p-3.5 text-left transition-all duration-500 rounded-none ${activeVow === 'luck' ? 'border-[#d4af37] bg-neutral-950 shadow-2xl' : 'border-neutral-900 bg-black/40 hover:border-neutral-800'}`}>
                <span className="text-[11px] font-serif tracking-widest uppercase block text-white">{t.vow_luck_title}</span>
                <span className="text-[8px] font-mono text-neutral-600 block mt-1 uppercase tracking-wider">Decode Ritual</span>
              </button>

              <button onClick={() => setActiveVow(activeVow === 'prestige' ? null : 'prestige')} className={`border p-3.5 text-left transition-all duration-500 rounded-none ${activeVow === 'prestige' ? 'border-[#d4af37] bg-neutral-950 shadow-2xl' : 'border-neutral-900 bg-black/40 hover:border-neutral-800'}`}>
                <span className="text-[11px] font-serif tracking-widest uppercase block text-white">{t.vow_prestige_title}</span>
                <span className="text-[8px] font-mono text-neutral-600 block mt-1 uppercase tracking-wider">Decode Ritual</span>
              </button>
            </div>

            {activeVow && (
              <div className="bg-neutral-950 border border-neutral-900 p-4 mt-3 transition-all duration-300 shadow-2xl">
                <p className="text-xs text-neutral-400 leading-relaxed font-serif italic font-light">
                  {activeVow === 'beauty' && t.vow_beauty_desc}
                  {activeVow === 'luck' && t.vow_desc}
                  {activeVow === 'prestige' && t.vow_prestige_desc}
                </p>
              </div>
            )}
          </section>
        </div>

        {/* CUSTODIAN SİCİL FORMU */}
        <div id="own-layer" className="lg:col-span-5 bg-[#0d0d0d] border border-neutral-900 p-6 md:p-8 relative self-start shadow-2xl scroll-mt-28">
          
          {/* 👑 "ALTIN SIRADANDIR! GEÇMİŞE SAHİP OL" KİBİR MÜHRÜ */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#d4af37] to-[#aa841b] text-black text-[8px] tracking-[0.2em] uppercase font-bold px-4 py-0.5 shadow-xl font-mono text-center whitespace-nowrap">
            {t.gold_plate_claim}
          </div>

          {!orderSubmitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setOrderSubmitted(true); }} className="space-y-4">
              <div className="text-center mb-2">
                <span className="text-[8px] tracking-[0.3em] text-[#c5a880] block font-mono">SECURE REGISTRY</span>
                <h3 className="text-xs tracking-widest text-white uppercase font-serif mt-1">{t.form_title}</h3>
                <p className="text-[9px] text-neutral-600 tracking-wide mt-0.5 lowercase font-sans italic">{t.form_sub}</p>
              </div>

              <div className="space-y-2">
                <input type="text" required value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder={t.input_name} className="w-full bg-[#121212] border border-neutral-900 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                <input type="text" required value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} placeholder={t.input_city} className="w-full bg-[#121212] border border-neutral-900 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                <input type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder={t.input_email} className="w-full bg-[#121212] border border-neutral-900 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                <textarea rows={3} required value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} placeholder={t.input_address} className="w-full bg-[#121212] border border-neutral-900 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide resize-none leading-relaxed font-sans placeholder:text-neutral-700" />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#c5a880] to-[#d4af37] text-black font-bold uppercase text-[9px] tracking-[0.25em] py-4 rounded-none hover:from-white hover:to-white transition-all duration-500 shadow-2xl border border-[#c5a880]">
                {t.button_submit}
              </button>
              
              <div className="flex justify-center items-center gap-3 opacity-20 text-[7px] tracking-wildest font-mono text-white pt-1">
                <span>AMERICAN EXPRESS</span>•<span>PRIORITY CARD</span>•<span>SECURE CRYPT</span>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center space-y-3">
              <span className="text-2xl block">🏛️</span>
              <h3 className="text-xs tracking-[0.3em] text-[#c5a880] uppercase font-bold">{t.success}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto font-serif">{t.success_desc}</p>
            </div>
          )}
        </div>
      </div>

      {/* MÜZEDEN ÇIKARILMIŞ OBJE ESTETİĞİ VE KATMANLAR */}
      <section className="w-full max-w-7xl mx-auto px-6 py-4 z-10 relative">
        <div className="bg-[#111111]/20 border border-neutral-900 p-6 md:p-8 backdrop-blur-sm">
          <div className="mb-6 border-b border-neutral-900 pb-4">
            <h2 className="text-lg font-serif font-light tracking-widest text-white uppercase">{t.set_title}</h2>
            <p className="text-[9px] tracking-widest text-[#c5a880] uppercase mt-0.5">{t.set_sub}</p>
          </div>
          
          <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-serif text-justify max-w-4xl font-light">{t.set_desc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* PHRYGIAN GREY: Sıcak Volkanik Obsidian Tonu */}
            <div className="bg-gradient-to-b from-[#141517] to-[#0b0c0d] border border-neutral-900 p-5 shadow-xl transition-all duration-500 hover:border-[#c5a880]/30">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-1 uppercase tracking-widest">Ⅰ / METAMORPHIC LAYER</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2 uppercase">{t.grey_title}</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-serif font-light text-justify">{t.grey_desc}</p>
            </div>

            {/* PHRYGIAN WHITE: Antik Mermer Fonu */}
            <div className="bg-gradient-to-b from-[#1e1f24] to-[#0e0f12] border border-neutral-900 p-5 shadow-xl transition-all duration-500 hover:border-[#c5a880]/30">
              <span className="text-[8px] font-mono text-[#d4af37] block mb-1 uppercase tracking-widest">Ⅱ / METAMORPHIC LAYER</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2 uppercase">{t.white_title}</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-serif font-light text-justify">{t.white_desc}</p>
            </div>

            {/* TRAVERTINE RAW: Sıcak Traverten Toprak Fonu */}
            <div className="bg-gradient-to-b from-[#1c1612] to-[#0d0a08] border border-neutral-900 p-5 shadow-xl transition-all duration-500 hover:border-[#c5a880]/30">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-1 uppercase tracking-widest">Ⅲ / METAMORPHIC LAYER</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2 uppercase">{t.raw_title}</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-serif font-light text-justify">{t.raw_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TAKVİM TABLOSU (Mor Çizgili Detaylar) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-6 z-10 relative">
        <div className="border-t border-neutral-900 pt-6">
          <div className="text-center mb-6">
            <h3 className="text-[10px] tracking-[0.4em] text-white uppercase font-serif">{t.ledger_title}</h3>
            <p className="text-[8px] text-neutral-600 tracking-widest uppercase mt-1 font-mono">{t.ledger_sub}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
            {CALENDAR_DAYS.map((day, index) => (
              <div key={index} className={`border p-3 text-center flex flex-col justify-between h-36 relative transition-all duration-300 ${day.isVoid ? 'border-purple-900/30 bg-purple-950/5 shadow-[0_0_20px_rgba(147,51,234,0.03)]' : 'border-neutral-900 bg-neutral-950/20 hover:border-neutral-800'}`}>
                <div>
                  <span className="text-[9px] font-serif block text-neutral-500 font-semibold border-b border-neutral-900/40 pb-1 mb-2">{day.date}</span>
                  <span className={`text-[11px] block font-medium font-serif ${day.isVoid ? 'text-purple-400 font-bold' : 'text-white'}`}>{day.holder}</span>
                  <span className="text-[8px] text-neutral-600 block font-mono mt-0.5">{day.city}</span>
                </div>
                <div>
                  <span className={`text-[9px] font-mono block mb-1 font-bold ${day.isVoid ? 'text-purple-400' : 'text-[#c5a880]'}`}>
                    {day.price}
                  </span>
                  <span className={`text-[7px] block uppercase font-mono tracking-widest ${day.isVoid ? 'text-purple-500/50' : 'text-neutral-600'}`}>
                    {day.isVoid ? t.status_void_label : (lang === 'tr' ? 'Mühürlendi' : 'Sealed')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌍 SEO & LOCATIONS FOOTER */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col justify-between items-center gap-4 z-10 border-t border-neutral-950">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[8px] tracking-[0.3em] text-neutral-600 uppercase">
          <div className="flex gap-4 mb-2 md:mb-0 font-serif opacity-40">
            <span>LONDON VAULT</span>•<span>PARIS BUREAU</span>•<span>DUBAI SUITE</span>•<span>ISTANBUL HQ</span>
          </div>
          <div className="text-center md:text-right font-mono opacity-20">
            <span>Phrygian Lab Ltd. © 2026 / Geological Aristocracy</span>
          </div>
        </div>
        
        <div className="w-full text-[7px] tracking-widest font-mono text-neutral-800 text-center uppercase opacity-30 select-none border-t border-neutral-900/30 pt-2">
          {t.seo_text}
        </div>
      </footer>

    </main>
  );
}