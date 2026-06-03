'use client';

import React, { useMemo, useState } from 'react';

type Language = 'en' | 'tr';

type FormKey = 'name' | 'city' | 'email' | 'address';

interface FormData {
  name: string;
  city: string;
  email: string;
  address: string;
}

interface TranslationSchema {
  protocol: string;
  allocation_status: string;
  hero_title: string;
  hero_subtitle: string;
  hero_quote_line_1: string;
  hero_quote_line_2: string;
  request_button: string;
  approval_notice: string;

  menu_archive: string;
  menu_edict: string;
  menu_allocation: string;

  archive_title: string;
  archive_text: string;

  edict_title: string;

  vow_1_title: string;
  vow_1_text: string;
  vow_2_title: string;
  vow_2_text: string;
  vow_3_title: string;
  vow_3_text: string;

  collection_title: string;
  collection_subtitle: string;
  collection_text: string;

  grey_title: string;
  grey_text: string;
  white_title: string;
  white_text: string;
  raw_title: string;
  raw_text: string;

  registry_title: string;
  registry_subtitle: string;

  input_name: string;
  input_city: string;
  input_email: string;
  input_address: string;

  submit: string;

  success_title: string;
  success_text: string;

  footer_manifest: string;
  footer_locations: string;

  seo_text: string;
}

const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    protocol: 'HOUSE OF PHRYGIAN LAB / SINCE 718 BC',
    allocation_status: '✨ GLOBAL DAILY ALLOCATION: LIMITED STRICTLY TO 1 OF 1 CUSTODIAN',

    hero_title: 'PHRYGIAN LAB',
    hero_subtitle: 'Geological Preservation Ritual',

    hero_quote_line_1: 'Gold survives centuries.',
    hero_quote_line_2: 'Memory survives empires.',

    request_button: 'REQUEST ALLOCATION',
    approval_notice: 'Not every allocation request is approved by the council.',

    menu_archive: 'The Archive',
    menu_edict: 'The Edicts',
    menu_allocation: 'Allocation',

    archive_title: 'Luxury fades. Civilizations remain.',
    archive_text:
      'Phrygian Lab does not operate as a conventional cosmetic house. Each vessel is formed around authentic Anatolian thermal mineral density, preserved through geological pressure and ceremonial preparation. The object is not designed for mass consumption. It exists as a banned aristokratik ritüel objesi for private temporal continuity.',

    edict_title: 'THE THREE GEOLOGICAL EDICTS',

    vow_1_title: 'Sovereign Beauty',
    vow_1_text:
      'Rare mineral layering softens the visible fatigue of modern time. It completely eliminates the signature of seconds from the cell matrix, maintaining a calm, porcelain surface presence.',

    vow_2_title: 'Mirasın Ağırlığı',
    vow_2_text:
      'An ancient magmatic crust that realigns trajectories with silent grace. A ritual object shaped around material weight, silence and heavy restraint for individuals who no longer seek loud luxury.',

    vow_3_title: 'Mahrem Tahsisat',
    vow_3_text:
      'One singular allocation is released globally each day via our Private Circle verification. No negotiation. No discount. No public inventory. Absolute rate: €718.',

    collection_title: 'THE ANTIQUE TRIAD SET',
    collection_subtitle: 'Archive Case / Geological Repository',
    collection_text:
      'Each heavy vessel carries unique mineral veining and tectonic variation. Hand-carved marble surfaces preserve the absolute individuality of every allocation case.',

    grey_title: 'PHRYGIAN GREY',
    grey_text:
      'Dense volcanic mineral and deep sulfur composition with heavy geological character. A tectonic barrier connecting your cell matrix to the earth.',

    white_title: 'PHRYGIAN WHITE',
    white_text:
      'A pale mineral surface derived from lightless marble veins, inspired by ancient imperial bath rituals to impart smooth porcelain tone.',

    raw_title: 'TRAVERTINE RAW',
    raw_text:
      'Thermal mineral crust and magmatic crust preserved in its most elemental form, completely freezing the decay of mortal time.',

    registry_title: 'PRIVATE REGISTRY REQUEST',
    registry_subtitle:
      'The secured destination and official mahrem vault location where the archive allocation shall be locked and delivered.',

    input_name: 'Custodian Name & Title (e.g., Sovereign Sedat)',
    input_city: 'Target City / Country (e.g., London / UK)',
    input_email: 'Encrypted Digital Address (Email)',
    input_address: 'Secured Delivery Destination Address',

    submit: 'LOCK ALLOCATION REQUEST / €718 AMEX & CARDS',

    success_title: 'ALLOCATION RECORDED IN THE SEISMIC LEDGER',
    success_text:
      'Your request has entered the private registry review process. Settlement locked at a fixed rate of €718. Charging occurs only upon allocation approval.',

    footer_manifest: 'For those who inherited everything except time.',
    footer_locations:
      'LONDON VAULT / PARIS BUREAU / DUBAI SUITE / ISTANBUL HQ',

    seo_text:
      'Phrygian Lab — Geological Ritual Objects — House of Phrygian Lab — Anatolian Thermal Mineral Preservation — Private Allocation House'
  },

  tr: {
    protocol: 'HOUSE OF PHRYGIAN LAB / M.Ö. 718',
    allocation_status: '✨ KÜRESEL GÜNLÜK TAHSİSAT: SADECE GÜNDE 1 ASİL CUSTODIAN İÇİN KİLİTLENİR',

    hero_title: 'PHRYGIAN LAB',
    hero_subtitle: 'Jeolojik Koruma Ritüeli',

    hero_quote_line_1: 'Altın yüzyıllarca hayatta kalır.',
    hero_quote_line_2: 'Hafıza imparatorlukları esir alır.',

    request_button: 'TAHSİSAT TALEP ET',
    approval_notice: 'Her tahsisat başvurusu konsey tarafından onaylanmaz.',

    menu_archive: 'Gizli Arşiv',
    menu_edict: 'Asil Sözleşme',
    menu_allocation: 'Tahsisat Başvurusu',

    archive_title: 'Luxury fades. Civilizations remain.',
    archive_text:
      'Phrygian Lab sıradan bir kozmetik evi değildir. Her obje, Anadolu’nun gerçek termal mineral yoğunluğu ve peloid altyapısı etrafında şekillenir; jeolojik basınç ile ritüel hazırlık süreçleriyle korunur. Bu obje kitlesel tüketim için tasarlanmaz. Paranın kibrini aşan, zamana hükmetme imtiyazı sunan yasaklı bir ritüel objesidir.',

    edict_title: 'ÜÇ JEOLOJİK ASİL SÖZLEŞME',

    vow_1_title: 'Mutlak Güzellik',
    vow_1_text:
      'Nadir mineral katmanları modern zamanın görünür yorgunluğunu yumuşatır. Hücre matrisindeki saniyelerin izini silerek binlerce yıllık bir arınma ve kusursuz porselen asalet sunar.',

    vow_2_title: 'Mirasın Ağırlığı',
    vow_2_text:
      'Kader çizgilerini sessiz bir kibirle yeniden hizalayan magmatik kalkan. Gösterişli lüksü geride bırakmış seçkin asiller için materyal ağırlığı ve sessiz ihtişam üzerine tasarlandı.',

    vow_3_title: 'Mahrem Tahsisat',
    vow_3_text:
      'Küresel ölçekte her gün yalnızca tek tahsisat açılır. Pazarlık yoktur. İndirim yoktur. Açık envanter yoktur. Sadece Private Circle üyelerine açılır. Sabit bedel: €718.',

    collection_title: 'THE ANTIQUE TRIAD SET',
    collection_subtitle: 'Archive Case / Jeolojik Mahfaza',
    collection_text:
      'Her müze kalitesindeki ağır obje kendine özgü mineral damarları ve tonal farklılıklar taşır. El işçiliği mermer yüzeyler Archive Case muhafazasıyla her tahsisatı benzersiz kılar.',

    grey_title: 'PHRYGIAN GREY',
    grey_text:
      'Yoğun volkanik mineral ve derin sülfür karakterine sahip ağır jeolojik kalkan. Hücre matrisini yeryüzünün derin hafızasıyla senkronize eder.',

    white_title: 'PHRYGIAN WHITE',
    white_text:
      'Işıksız mermer damarlarından saf kalsiyum karbonat. Antik imparatorluk banyolarının pürüzsüz porselen tonunu fani cilde yansıtır.',

    raw_title: 'TRAVERTINE RAW',
    raw_text:
      'Termal kaynaklardan magmatik mineral kabuk. Zamanın yıpratıcı etkisini cilt bariyerinde tamamen donduran ağır jeolojik katman.',

    registry_title: 'MAHREM SİCİL BAŞVURUSU',
    registry_subtitle:
      'Masif mermer kavanozun ve altın plakanın kilitlenip ulaştırılacağı resmi mahrem lokasyon ve güvenli teslimat adresi.',

    input_name: 'Asil İsim & Saygın Unvan (Örn: Sovereign Sedat)',
    input_city: 'Hedef Şehir / Ülke (Örn: Istanbul / TR)',
    input_email: 'Şifreli Dijital Adres (E-posta)',
    input_address: 'Emanetin Ulaştırılacağı Resmi Teslimat Adresi',

    submit: 'TAHSİSAT TALEBİNİ KİLİTLE / €718 AMEX & KARTLAR',

    success_title: 'TAHSİSAT SİSMİK SİCİLE İŞLENDİ',
    success_text:
      'Asil sicil başvurunuz konsey arşivine alınmıştır. Sabit bedel €718 olarak kilitlenmiştir. Kartınızdan tahsilat sadece konsey tahsisatınızı onaylarsa yapılacaktır.',

    footer_manifest: 'Her şeye sahip olup zamana sahip olamayanlar için.',
    footer_locations:
      'LONDON VAULT / PARIS BUREAU / DUBAI SUITE / ISTANBUL HQ',

    seo_text:
      'Phrygian Lab — Jeolojik Ritüel Objeleri — Antik Ritüel Objesi — Anadolu Termal Mineral Koruma Evi — London Paris Dubai Istanbul Private Circle'
  }
};

type VowKey = 'v1' | 'v2' | 'v3';

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [submitted, setSubmitted] = useState(false);
  const [activeVow, setActiveVow] = useState<VowKey | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    city: '',
    email: '',
    address: ''
  });

  const t = useMemo(() => TRANSLATIONS[lang], [lang]);

  const CALENDAR_DAYS = [
    { date: 'June 23', holder: 'Sovereign S.', city: 'Istanbul', status: 'Sealed', price: '€718', isVoid: false },
    { date: 'June 24', holder: 'Sovereign A.', city: 'London', status: 'Sealed', price: '€718', isVoid: false },
    { date: 'June 25', holder: 'Sovereign M.', city: 'Paris', status: 'Sealed', price: '€718', isVoid: false },
    { date: 'June 26', holder: 'The Chosen One', city: 'Midaum Zone', status: 'Priceless', price: 'Priceless', isVoid: true },
    { date: 'June 27', holder: 'Sovereign V.', city: 'Vienna', status: 'Sealed', price: '€718', isVoid: false },
    { date: 'June 28', holder: 'Sovereign Alignment', city: 'Global', status: 'Open', price: '€718', isVoid: false },
    { date: 'June 29', holder: 'Sovereign Alignment', city: 'Global', status: 'Open', price: '€718', isVoid: false },
  ];

  const handleInputChange = (key: FormKey, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="relative overflow-hidden bg-[#0a0a0a] text-[#f3f3f3] min-h-screen font-sans selection:bg-[#c5a880] selection:text-black">

      {/* 🔮 %5 ÖLÇEKLİ LÜKS SISMİK SIZINTI MOR GRADIENT */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/10 blur-[180px]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#0a0a0a]/85">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-[#d4af37] tracking-[0.6em] text-base md:text-lg font-light font-serif">
              PHRYGIAN LAB
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-600 mt-0.5 font-mono">
              {t.protocol}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.35em] text-neutral-500 font-serif">
            <button onClick={() => scrollToSection('archive')} className="hover:text-[#d4af37] transition-colors">{t.menu_archive}</button>
            <button onClick={() => scrollToSection('edicts')} className="hover:text-[#d4af37] transition-colors">{t.menu_edict}</button>
            <button onClick={() => scrollToSection('allocation')} className="hover:text-[#d4af37] transition-colors text-[#c5a880] font-semibold">{t.menu_allocation}</button>
          </nav>

          <div className="flex items-center gap-4 font-mono">
            <div className="flex items-center gap-1.5 border border-white/10 px-2.5 py-1 text-[8px] tracking-widest bg-neutral-950">
              <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-[#d4af37] font-bold' : 'text-neutral-600'}>EN</button>
              <button onClick={() => setLang('tr')} className={lang === 'tr' ? 'text-[#d4af37] font-bold' : 'text-neutral-600'}>TR</button>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[8px] tracking-[0.2em] text-[#c5a880] uppercase">1 CORE / DAY</span>
            </div>
          </div>
        </div>
      </header>

      {/* 🔮 MOR PARILDAYAN ASİL KITLIK ŞERİDİ */}
      <div className="w-full bg-gradient-to-r from-purple-950/20 via-purple-900/30 to-purple-950/20 border-b border-purple-900/10 py-3 text-center z-10 relative animate-pulse shadow-[0_0_20px_rgba(147,51,234,0.05)] font-serif">
        <p className="text-[10px] tracking-[0.4em] uppercase text-purple-300/90 font-semibold px-4">
          {t.allocation_status}
        </p>
      </div>

      {/* 🏛️ SİNE MATOGRAFİK ÇİFT SÜTUN AKIŞ SİSTEMİ */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 pb-12 z-10 relative">
        
        {/* SOL SÜTUN: HİKAYESİ VE ETKİLEŞİMLİ SÖZLEŞMELER */}
        <div className="lg:col-span-7 flex flex-col justify-start text-left space-y-12">
          
          {/* ⚜️ LUXURY FASHION HOUSE LOGO MÜHRÜ */}
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

          {/* HERO GİRİŞ BAŞLIĞI */}
          <section className="space-y-4">
            <h1 className="text-4xl md:text-6xl tracking-[0.2em] font-extralight text-white font-serif leading-tight">
              {t.hero_title}
            </h1>
            <p className="text-sm uppercase tracking-[0.4em] text-[#c5a880] font-mono">
              {t.hero_subtitle}
            </p>
          </section>

          {/* MANİFESTO ALANI */}
          <section id="archive" className="space-y-4 scroll-mt-28 bg-[#111111]/10 border border-neutral-900/60 p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]" />
            <h2 className="text-xl font-serif font-light tracking-widest text-white uppercase pl-2">
              {t.archive_title}
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 leading-[2.1] font-serif text-justify pl-2 font-light">
              {t.archive_text}
            </p>
          </section>

          {/* 🔮 ETKİLEŞİMLİ SÖZLEŞMELER ALANI */}
          <section id="edicts" className="w-full bg-neutral-950/40 border border-neutral-900/60 p-6 relative scroll-mt-28 space-y-4">
            <span className="text-[10px] font-mono block tracking-[0.3em] text-neutral-500 font-semibold uppercase">{t.edict_title}</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 font-serif">
              <button onClick={() => setActiveVow(activeVow === 'v1' ? null : 'v1')} className={`border p-3.5 text-left transition-all duration-500 rounded-none ${activeVow === 'v1' ? 'border-[#d4af37] bg-neutral-950 shadow-2xl' : 'border-neutral-900 bg-black/40 hover:border-neutral-800'}`}>
                <span className="text-[11px] tracking-widest uppercase block text-white">{t.vow_1_title}</span>
                <span className="text-[8px] font-mono text-neutral-600 block mt-1 uppercase tracking-wider">Decode Ritual</span>
              </button>

              <button onClick={() => setActiveVow(activeVow === 'v2' ? null : 'v2')} className={`border p-3.5 text-left transition-all duration-500 rounded-none ${activeVow === 'v2' ? 'border-[#d4af37] bg-neutral-950 shadow-2xl' : 'border-neutral-900 bg-black/40 hover:border-neutral-800'}`}>
                <span className="text-[11px] tracking-widest uppercase block text-white">{t.vow_2_title}</span>
                <span className="text-[8px] font-mono text-neutral-600 block mt-1 uppercase tracking-wider">Decode Ritual</span>
              </button>

              <button onClick={() => setActiveVow(activeVow === 'v3' ? null : 'v3')} className={`border p-3.5 text-left transition-all duration-500 rounded-none ${activeVow === 'v3' ? 'border-[#d4af37] bg-neutral-950 shadow-2xl' : 'border-neutral-900 bg-black/40 hover:border-neutral-800'}`}>
                <span className="text-[11px] tracking-widest uppercase block text-white">{t.vow_3_title}</span>
                <span className="text-[8px] font-mono text-neutral-600 block mt-1 uppercase tracking-wider">Decode Ritual</span>
              </button>
            </div>

            {activeVow && (
              <div className="bg-neutral-950 border border-neutral-900 p-4 mt-3 transition-all duration-300 shadow-2xl">
                <p className="text-xs text-neutral-400 leading-relaxed font-serif italic font-light">
                  {activeVow === 'v1' && t.vow_1_text}
                  {activeVow === 'v2' && t.vow_2_text}
                  {activeVow === 'v3' && t.vow_3_text}
                </p>
              </div>
            )}
          </section>
        </div>

        {/* SAĞ SÜTUN: CUSTODIAN BAŞVURU FORMU */}
        <div id="allocation" className="lg:col-span-5 bg-[#0d0d0d] border border-neutral-900 p-6 md:p-8 relative self-start shadow-2xl scroll-mt-28">
          
          {/* 👑 "ALTIN SIRADANDIR! GEÇMİŞE SAHİP OL" KİBİR MÜHRÜ */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#d4af37] to-[#aa841b] text-black text-[8px] tracking-[0.2em] uppercase font-bold px-4 py-0.5 shadow-xl font-mono text-center whitespace-nowrap">
            {t.hero_quote_line_1} {t.hero_quote_line_2}
          </div>

          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="text-center mb-2">
                <span className="text-[8px] tracking-[0.3em] text-[#c5a880] block font-mono">PRIVATE REGISTRY</span>
                <h3 className="text-xs tracking-widest text-white uppercase font-serif mt-1">{t.registry_title}</h3>
                <p className="text-[9px] text-neutral-600 tracking-wide mt-0.5 lowercase font-sans italic">{t.registry_subtitle}</p>
              </div>

              <div className="space-y-2">
                <input type="text" required value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder={t.input_name} className="w-full h-14 bg-black border border-white/10 px-5 text-sm text-white placeholder:text-neutral-700 outline-none focus:border-[#d4af37] transition-colors rounded-none font-mono" />
                <input type="text" required value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} placeholder={t.input_city} className="w-full h-14 bg-black border border-white/10 px-5 text-sm text-white placeholder:text-neutral-700 outline-none focus:border-[#d4af37] transition-colors rounded-none font-mono" />
                <input type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder={t.input_email} className="w-full h-14 bg-black border border-white/10 px-5 text-sm text-white placeholder:text-neutral-700 outline-none focus:border-[#d4af37] transition-colors rounded-none font-mono" />
                <textarea rows={4} required value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} placeholder={t.input_address} className="w-full bg-black border border-white/10 px-5 py-4 text-sm text-white placeholder:text-neutral-700 outline-none focus:border-[#d4af37] transition-colors resize-none rounded-none font-sans" />
              </div>

              <button type="submit" className="w-full h-14 bg-gradient-to-r from-[#c5a880] to-[#d4af37] text-black font-bold uppercase text-[9px] tracking-[0.25em] py-4 rounded-none hover:from-white hover:to-white transition-all duration-500 shadow-2xl border border-[#c5a880]">
                {t.submit}
              </button>
              
              <div className="flex justify-center items-center gap-3 opacity-20 text-[7px] tracking-wildest font-mono text-white pt-1">
                <span>AMERICAN EXPRESS</span>•<span>PRIORITY CARD</span>•<span>SECURE VAULT</span>
              </div>
            </form>
          ) : (
            <div className="min-h-[380px] flex flex-col items-center justify-center text-center py-6">
              <div className="w-14 h-14 border border-[#d4af37]/40 flex items-center justify-center mb-6 bg-black/40">
                <span className="text-[#d4af37] text-lg font-serif">Φ</span>
              </div>
              <h3 className="text-xs tracking-[0.3em] text-[#c5a880] uppercase font-bold">{t.success_title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto font-serif mt-4">{t.success_text}</p>
            </div>
          )}
        </div>
      </div>

      {/* 📦 GEOLOJİK ELEMENTER ÜRÜNLER (Özel Arka Plan Fonlu Kartlar) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-4 z-10 relative">
        <div className="bg-[#111111]/40 border border-neutral-900 p-6 md:p-8 backdrop-blur-sm">
          <div className="mb-6 border-b border-neutral-900 pb-4">
            <h2 className="text-lg font-serif font-light tracking-widest text-white uppercase">{t.collection_title}</h2>
            <p className="text-[9px] tracking-widest text-[#c5a880] uppercase mt-0.5">{t.collection_subtitle}</p>
          </div>
          
          <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-serif text-justify max-w-4xl font-light">{t.collection_text}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* PHRYGIAN GREY: Obsidian / Kül Fonu */}
            <div className="bg-gradient-to-b from-[#141517] to-[#0b0c0d] border border-neutral-900 p-5 shadow-xl transition-all duration-500 hover:border-[#c5a880]/30">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-1 uppercase tracking-widest">Ⅰ / ARCHIVE CASE</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2 uppercase">{t.grey_title}</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-serif font-light text-justify">{t.grey_text}</p>
            </div>

            {/* PHRYGIAN WHITE: Saf Mermer Fonu */}
            <div className="bg-gradient-to-b from-[#1e1f24] to-[#0e0f12] border border-neutral-900 p-5 shadow-xl transition-all duration-500 hover:border-[#c5a880]/30">
              <span className="text-[8px] font-mono text-[#d4af37] block mb-1 uppercase tracking-widest">Ⅱ / ARCHIVE CASE</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2 uppercase">{t.white_title}</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-serif font-light text-justify">{t.white_text}</p>
            </div>

            {/* TRAVERTINE RAW: Sıcak Traverten Toprak Fonu */}
            <div className="bg-gradient-to-b from-[#1c1612] to-[#0d0a08] border border-neutral-900 p-5 shadow-xl transition-all duration-500 hover:border-[#c5a880]/30">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-1 uppercase tracking-widest">Ⅲ / ARCHIVE CASE</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2 uppercase">{t.raw_title}</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-serif font-light text-justify">{t.raw_text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⏳ MOR PARILTILI ANTİK HİZALANMA TAKVİMİ */}
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

      {/* 🌍 FOOTER LÜKS SEO ALTYAPISI */}
      <footer className="border-t border-white/5 mt-12 z-10 relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-4">
          <p className="text-lg md:text-xl text-white font-light font-serif">
            {t.footer_manifest}
          </p>
          <p className="text-[9px] uppercase tracking-[0.45em] text-neutral-600 font-mono">
            {t.footer_locations}
          </p>
          <div className="w-16 h-[1px] bg-[#d4af37]/20 my-2" />
          <p className="text-[7px] uppercase tracking-[0.25em] text-neutral-800 max-w-4xl leading-[2] font-mono select-none">
            {t.seo_text}
          </p>
        </div>
      </footer>

    </main>
  );
}