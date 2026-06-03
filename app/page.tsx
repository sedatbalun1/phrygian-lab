'use client';

import React, { useState } from 'react';

const TRANSLATIONS = {
  en: {
    protocol: 'Enchanted Formula / Since 718 BC',
    remaining: 'DAILY ALLOCATION',
    tagline: 'THE OBSESSION OF ANTIQUE LUXURY / METAPHYSICAL BEAUTY',
    limit_notice: '✨ Strictly limited to ONE worldwide allocation per day.',
    gold_plate_claim: 'Gold is ordinary! Possess the past.',
    
    menu_story: 'The Secret Story',
    menu_vow: 'The Sovereign Vows',
    menu_own: 'Possess The Past',

    // Vaatler Başlıkları
    vow_beauty_title: 'Sovereign Beauty',
    vow_beauty_desc: 'Destroy mortal time. This mask offers an ageless, deep tectonic purification. It completely eliminates the decay of seconds on your skin, revealing an unreturned porcelain grace.',
    vow_luck_title: 'The Phrygian Luck',
    vow_desc: 'An ancient magmatic crust that reroutes lines of fortune. This is not industrial cosmetics; it is an unlit mineral frequency designed to align absolute sovereignty with eternal grace.',
    vow_prestige_title: 'Absolute Prestige',
    vow_prestige_desc: 'Isolated from transactional markets. The ultimate shield of metaphysical fortune for the rest of your existence. Reserved strictly for the chosen initiates who understand how to wait.',

    // Hikaye Yer Tutucusu
    story_title: 'The Unlit Vein of Midaum',
    story_desc: '[ THE SECRET LOG ARCHIVE: In 718 BC, a light-absorbing mineral mass was discovered within the deep fractures of Phrygia. Sealed away for generations, this abnormal mass anomaly bypasses industrial cosmetics. Here lies the thousand-year-old purification ritual. To possess this stone is to conquer time itself... Full archival record to be unveiled by the council. ]',

    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Metamorphic Preservation Archive / Fixed Rate €718',
    set_desc: 'Three high-density elemental layers hand-carved from deep unlit veins, encased inside a solid monolithic marble jar with a personalized sovereign plating:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'High volcanic silica. Tectonic purification connecting your cell matrix to the deep memory of the earth.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Pure calcium carbonate from unlit veins. Imparts the smooth porcelain tone utilized in ancient imperial baths.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatic mineral crust. A heavy geological shield that completely freezes the decay of mortal time.',
    
    form_title: 'SOVEREIGN REQUEST PROTOCOL',
    form_sub: 'The private destination where the solid marble jar shall be delivered',
    input_name: 'Sovereign Name & Title',
    input_city: 'City / Country',
    input_email: 'Encrypted Digital Address (Email)',
    input_address: 'Secured Delivery Destination Address',
    button_submit: 'POSSESS THE PAST / SECURE WITH CREDIT CARD & AMEX',
    success: 'ALLOCATION RECORDED IN THE SEISMIC LEDGER',
    success_desc: 'Your allocation for today has been locked and sealed under your name at a fixed rate of €718. Payment gateway active via AMEX / Priority Card.',
    
    ledger_title: 'THE ALIGNMENT CALENDAR',
    ledger_sub: 'Commencing June 23rd Solstice — Absolute fixed rate: €718 per core.',
    status_void_label: 'Priceless',
    seo_text: 'Phrygian Lab | Ultra Luxury Anti-Aging Skincare | Antique Metaphysical Mask | London - Paris - Istanbul - Dubai Private Vaults'
  },
  tr: {
    protocol: 'M.Ö. 718 Yılından Gelen Efsunlu Formül',
    remaining: 'GÜNLÜK KONTENJAN',
    tagline: 'ANTİK LÜKSÜN EN SAF TAKINTISI / GÜZELLİK VE GİZEMİN SIRRI',
    limit_notice: '✨ Küresel ölçekte günde sadece 1 asil aileye tahsisat yapılmaktadır.',
    gold_plate_claim: 'Altın sıradandır! Geçmişe sahip ol.',
    
    menu_story: 'Gizemli Hikayesi',
    menu_vow: 'Asil Vaatleri',
    menu_own: 'Sahip Ol',

    // Vaatler Başlıkları
    vow_beauty_title: 'Mutlak Güzellik',
    vow_beauty_desc: 'Zamanı yok et! Bu maske, fani cildinizle geçmişin sarsılmaz frekansı arasında medyum görevi görür. Hücre matrisindeki saniyelerin izini silerek binlerce yıllık bir arınma ve kusursuz porselen tonu bahşeder.',
    vow_luck_title: 'Frigya Efsunlu Şansı',
    vow_desc: 'Kral Midas’ın dehlizlerinden gelen, kader çizgilerini yeniden yönlendiren magmatik kalkan. Gücü olan herkes yarına yatırım yapabilir, fakat bu efsun sadece durmayı ve beklemeyi bilen seçkin asiller içindir.',
    vow_prestige_title: 'Yüksek Saygınlık',
    vow_prestige_desc: 'Maddi ve ticari pazarlardan tamamen izole edilmiş bir imtiyaz. Hayatınızın geri kalanında cildinize ve isminize eşlik edecek, konsey tarafından adınıza mühürlenen sarsılmaz bir itibar.',

    // Hikaye Yer Tutucusu
    story_title: 'Midaum Havzasının Saklı Damarı',
    story_desc: '[ ARŞİV KAYDI: M.Ö. 718 yılında, Frigya mermer damarlarının kalbinde ışığı yutan asil bir kütle anomalisi kırıldı. Bu maskenin arkasında sadece sır ve güzellik var. Nesillerdir saklanan bu binlerce yıllık arınma ritüeli, paranın kibrini aşan mistik bir güçtür... Detaylı tarihçe yakında konsey tarafından asillerin erişimine açılacaktır. ]',

    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Masif Mermer Kavanoz İçinde Üçlü Jeolojik Ritüel / Sabit Bedel €718',
    set_desc: 'Midaum dehlizlerinden el işçiliyle çıkarılan 3 yüksek yoğunluklu katman, adınıza özel mühürlü plakası ve masif mermer kavanozuyla birlikte teslim edilir:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Yüksek volkanik silika ve sülfür. Hücre matrisini yeryüzünün derin tektonik hafızasıyla senkronize eden arınma.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Işıksız mermer damarlarından saf kalsiyum karbonat. Antik imparatorluk banyolarının pürüzsüz porselen tonu.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Termal kaynaklardan magmatik mineral kabuk. Zamanın fani ciltteki yıpratıcı etkisini donduran ağır jeolojik kalkan.',
    
    form_title: 'ASİL TAHSİSAT VE MÜHÜR PROTOKOLÜ',
    form_sub: 'Mühürlü masif mermer kavanozun ulaştırılacağı resmi mahrem lokasyon',
    input_name: 'Asil İsim & Saygın Unvan',
    input_city: 'Şehir / Ülke',
    input_email: 'Şifreli Dijital Adres (E-posta)',
    input_address: 'Emanetin Ulaştırılacağı Resmi Teslimat Adresi',
    button_submit: 'GEÇMİŞE SAHİP OL / CREDIT CARD & AMEX İLE ANINDA ÖDE',
    success: 'TAHSİSAT SİSMİK SİCİLE İŞLENDİ',
    success_desc: 'Bugünün mühürlü tahsisatı €718 sabit bedelle adınıza kilitlenmiştir. American Express / Kredi Kartı tahsilat ağ geçidi güvenli modda aktiftir.',
    
    ledger_title: 'ZAMANSAL HİZALANMA TAKVİMİ',
    ledger_sub: '23 Haziran Gündönümünde Başlar — Her kütle için mutlak fiyat: €718.',
    status_void_label: 'Ebedi',
    seo_text: 'Phrygian Lab | Lüks Yaşlanma Karşıtı Cilt Bakımı | Antik Mistik Maske | London - Paris - Istanbul - Dubai Özel Kasa'
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'tr'>('en');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', city: '', email: '', address: '' });
  
  // Tıklanınca açılan vaat sekmeleri için durum yönetimi
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
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(circle,rgba(147,51,234,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center z-50 relative border-b border-neutral-900/40 gap-4 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md">
        <div className="flex flex-col items-center lg:items-start cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-lg md:text-xl font-extralight tracking-[0.6em] text-[#d4af37] font-serif">PHRYGIAN LAB</span>
          <span className="text-[8px] tracking-[0.3em] uppercase opacity-30 mt-0.5 font-sans">{t.protocol}</span>
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
            <span className="text-[8px] tracking-[0.2em] text-[#c5a880] uppercase font-mono">1 CORE / DAY</span>
          </div>
        </div>
      </header>

      {/* 🔮 MOR ANOMALİ PARILDAYAN KITLIK ŞERİDİ */}
      <div className="w-full bg-gradient-to-r from-purple-950/40 via-purple-900/50 to-purple-950/40 border-b border-purple-800/30 py-3 text-center z-10 relative animate-pulse shadow-[0_0_20px_rgba(147,51,234,0.1)]">
        <p className="text-[10px] tracking-[0.4em] uppercase text-purple-200 font-semibold px-4">
          {t.limit_notice}
        </p>
      </div>

      {/* SİNEMATOGRAFİK ÇİFT SÜTUN AKIŞI */}
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 pb-12 z-10 relative">
        <div className="lg:col-span-7 flex flex-col justify-start text-left space-y-10">
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#c5a880] mb-2 font-semibold font-mono">
              {t.tagline}
            </p>
            <div className="w-20 h-[1px] bg-[#c5a880]/30" />
          </div>

          {/* 📜 HİKAYESİ YER TUTUCU KATMANI */}
          <section id="story-layer" className="space-y-4 scroll-mt-28 bg-neutral-950/30 border border-neutral-900/60 p-6">
            <h2 className="text-xl font-serif font-light tracking-widest text-white uppercase border-l-2 border-[#d4af37] pl-4">
              {t.story_title}
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed font-mono text-justify tracking-wide">
              {t.story_desc}
            </p>
          </section>

          {/* 🔮 ETKİLEŞİMLİ VAATLER TABAKASI (Tıklayınca Kibar Açıklama Gösteren Mimari) */}
          <section id="vow-layer" className="w-full bg-purple-950/5 border border-purple-900/20 p-6 relative overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.02)] scroll-mt-28 space-y-4">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            <span className="text-[10px] font-mono block tracking-[0.3em] text-purple-300 font-semibold uppercase">THE SOVEREIGN VOWS / ASİL VAATLER</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button onClick={() => setActiveVow(activeVow === 'beauty' ? null : 'beauty')} className={`border p-3 text-left transition-all duration-300 rounded-none ${activeVow === 'beauty' ? 'border-[#d4af37] bg-neutral-950' : 'border-neutral-900 bg-black/40 hover:border-purple-900/40'}`}>
                <span className="text-[11px] font-serif tracking-widest uppercase block text-white">{t.vow_beauty_title}</span>
                <span className="text-[8px] font-mono text-neutral-600 block mt-1">Click to decode • Tıklayın</span>
              </button>

              <button onClick={() => setActiveVow(activeVow === 'luck' ? null : 'luck')} className={`border p-3 text-left transition-all duration-300 rounded-none ${activeVow === 'luck' ? 'border-[#d4af37] bg-neutral-950' : 'border-neutral-900 bg-black/40 hover:border-purple-900/40'}`}>
                <span className="text-[11px] font-serif tracking-widest uppercase block text-white">{t.vow_luck_title}</span>
                <span className="text-[8px] font-mono text-neutral-600 block mt-1">Click to decode • Tıklayın</span>
              </button>

              <button onClick={() => setActiveVow(activeVow === 'prestige' ? null : 'prestige')} className={`border p-3 text-left transition-all duration-300 rounded-none ${activeVow === 'prestige' ? 'border-[#d4af37] bg-neutral-950' : 'border-neutral-900 bg-black/40 hover:border-purple-900/40'}`}>
                <span className="text-[11px] font-serif tracking-widest uppercase block text-white">{t.vow_prestige_title}</span>
                <span className="text-[8px] font-mono text-neutral-600 block mt-1">Click to decode • Tıklayın</span>
              </button>
            </div>

            {/* Kibarca Açılan Açıklama Kutusu */}
            {activeVow && (
              <div className="bg-neutral-950 border border-neutral-900 p-4 mt-3 transition-all duration-500 shadow-xl">
                <p className="text-xs text-neutral-300 leading-relaxed font-serif italic">
                  {activeVow === 'beauty' && t.vow_beauty_desc}
                  {activeVow === 'luck' && t.vow_desc}
                  {activeVow === 'prestige' && t.vow_prestige_desc}
                </p>
              </div>
            )}
          </section>
        </div>

        {/* SAHİP OL FORMU */}
        <div id="own-layer" className="lg:col-span-5 bg-[#0d0d0d] border border-[#c5a880]/30 p-6 md:p-8 relative self-start shadow-2xl scroll-mt-28">
          
          {/* 👑 "ALTIN SIRADANDIR! GEÇMİŞE SAHİP OL" MÜHRÜ */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#d4af37] to-[#aa841b] text-black text-[8px] tracking-[0.2em] uppercase font-bold px-4 py-0.5 shadow-xl font-mono text-center whitespace-nowrap">
            {t.gold_plate_claim}
          </div>

          {!orderSubmitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setOrderSubmitted(true); }} className="space-y-4">
              <div className="text-center mb-2">
                <span className="text-[8px] tracking-[0.3em] text-[#c5a880] block font-mono">SECURE ARCHIVE SYSTEM</span>
                <h3 className="text-sm tracking-widest text-white uppercase font-serif mt-1">{t.form_title}</h3>
                <p className="text-[9px] text-neutral-600 tracking-wide mt-0.5 lowercase font-sans italic">{t.form_sub}</p>
              </div>

              <div className="space-y-2">
                <input type="text" required value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder={t.input_name} className="w-full bg-[#121212] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                <input type="text" required value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} placeholder={t.input_city} className="w-full bg-[#121212] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                <input type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder={t.input_email} className="w-full bg-[#121212] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700" />
                <textarea rows={3} required value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} placeholder={t.input_address} className="w-full bg-[#121212] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide resize-none leading-relaxed font-sans placeholder:text-neutral-700" />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#c5a880] to-[#d4af37] text-black font-bold uppercase text-[9px] tracking-[0.25em] py-4 rounded-none hover:from-white hover:to-white transition-all duration-500 shadow-2xl border border-[#c5a880]">
                {t.button_submit}
              </button>
              
              <div className="flex justify-center items-center gap-3 opacity-20 text-[7px] tracking-wildest font-mono text-white pt-1">
                <span>AMERICAN EXPRESS</span>•<span>VISA</span>•<span>MASTER CARD</span>•<span>ENCRYPTED VAULT</span>
              </div>
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

      {/* PREMIUM ELEMENTER ÜRÜNLER */}
      <section className="w-full max-w-7xl mx-auto px-6 py-4 z-10 relative">
        <div className="bg-[#111111]/40 border border-neutral-900 p-6 md:p-8 backdrop-blur-sm">
          <div className="mb-6 border-b border-neutral-900 pb-4">
            <h2 className="text-lg font-serif font-light tracking-widest text-white uppercase">{t.set_title}</h2>
            <p className="text-[9px] tracking-widest text-[#c5a880] uppercase mt-0.5">{t.set_sub}</p>
          </div>
          
          <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-light font-serif text-justify max-w-4xl">{t.set_desc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-b from-[#1c1d1f] to-[#121314] border border-neutral-800 p-5 shadow-xl transition-all duration-300 hover:border-[#c5a880]/40">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-1">Ⅰ / GEOLOGICAL PURITY</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2 uppercase">{t.grey_title}</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-serif font-light text-justify">{t.grey_desc}</p>
            </div>

            <div className="bg-gradient-to-b from-[#2e2f33] to-[#17181c] border border-neutral-700/60 p-5 shadow-xl transition-all duration-300 hover:border-[#c5a880]/40">
              <span className="text-[8px] font-mono text-[#d4af37] block mb-1">Ⅱ / IMPERIAL REFINE</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2 uppercase">{t.white_title}</h4>
              <p className="text-[11px] text-neutral-300 leading-relaxed font-serif font-light text-justify">{t.white_desc}</p>
            </div>

            <div className="bg-gradient-to-b from-[#261d16] to-[#14100d] border border-neutral-800 p-5 shadow-xl transition-all duration-300 hover:border-[#c5a880]/40">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-1">Ⅲ / TEKTONIC SHIELD</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2 uppercase">{t.raw_title}</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-serif font-light text-justify">{t.raw_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ASİL TAKVİM TABLOSU */}
      <section className="w-full max-w-7xl mx-auto px-6 py-6 z-10 relative">
        <div className="border-t border-neutral-900 pt-6">
          <div className="text-center mb-6">
            <h3 className="text-[10px] tracking-[0.4em] text-white uppercase font-serif">{t.ledger_title}</h3>
            <p className="text-[8px] text-neutral-600 tracking-widest uppercase mt-1 font-mono">{t.ledger_sub}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
            {CALENDAR_DAYS.map((day, index) => (
              <div key={index} className={`border p-3 text-center flex flex-col justify-between h-36 relative transition-all duration-300 ${day.isVoid ? 'border-purple-900/40 bg-purple-950/10 shadow-[0_0_20px_rgba(147,51,234,0.05)]' : 'border-neutral-900 bg-neutral-950/40 hover:border-purple-900/30'}`}>
                <div>
                  <span className="text-[9px] font-serif block text-neutral-500 font-semibold border-b border-neutral-900/60 pb-1 mb-2">{day.date}</span>
                  <span className={`text-[11px] block font-medium font-serif ${day.isVoid ? 'text-purple-400 font-bold animate-pulse' : 'text-white'}`}>{day.holder}</span>
                  <span className="text-[8px] text-neutral-600 block font-mono mt-0.5">{day.city}</span>
                </div>
                <div>
                  <span className={`text-[9px] font-mono block mb-1 font-bold ${day.isVoid ? 'text-purple-400' : 'text-[#c5a880]'}`}>
                    {day.price}
                  </span>
                  <span className={`text-[7px] block uppercase font-mono tracking-widest ${day.isVoid ? 'text-purple-500/70' : 'text-neutral-600'}`}>
                    {day.isVoid ? t.status_void_label : (lang === 'tr' ? 'Mühürlendi' : 'Sealed')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌍 GLOBAL SEO VE VAULT MERKEZLERİ FOOTER TABAKASI */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col justify-between items-center gap-4 z-10 border-t border-neutral-950">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[8px] tracking-[0.3em] text-neutral-600 uppercase">
          <div className="flex gap-4 mb-2 md:mb-0 font-serif opacity-50">
            <span>LONDON VAULT</span>•<span>PARIS BUREAU</span>•<span>DUBAI SUITE</span>•<span>ISTANBUL HQ</span>
          </div>
          <div className="text-center md:text-right font-mono opacity-20">
            <span>Phrygian Lab Ltd. © 2026 / Strictly Atypical Asset Class</span>
          </div>
        </div>
        
        {/* Google Tarayıcıları ve Reklam Kampanyaları İçin Görünmez Elit SEO Metni */}
        <div className="w-full text-[7px] tracking-widest font-mono text-neutral-800 text-center uppercase opacity-30 select-none border-t border-neutral-900/40 pt-2">
          {t.seo_text}
        </div>
      </footer>

    </main>
  );
}