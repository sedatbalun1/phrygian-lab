'use client';

import React, { useMemo, useState } from 'react';

type Language = 'en' | 'tr';

type FormKey =
  | 'name'
  | 'city'
  | 'email'
  | 'address';

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
    allocation_status: 'GLOBAL DAILY ALLOCATION / 1 OF 1',

    hero_title: 'PHRYGIAN LAB',
    hero_subtitle: 'Geological Preservation Ritual',

    hero_quote_line_1: 'Gold is ordinary.',
    hero_quote_line_2: 'Possess the past.',

    request_button: 'REQUEST ALLOCATION',
    approval_notice: 'Not every allocation request is approved.',

    menu_archive: 'The Archive',
    menu_edict: 'The Edicts',
    menu_allocation: 'Allocation',

    archive_title: 'Luxury fades. Civilizations remain.',
    archive_text:
      'Phrygian Lab does not operate as a conventional cosmetic house. Each vessel is formed around authentic Anatolian thermal mineral density, preserved through geological pressure and ceremonial preparation. The object is not designed for mass consumption. It exists for private continuity.',

    edict_title: 'THE THREE GEOLOGICAL EDICTS',

    vow_1_title: 'Preserved Beauty',
    vow_1_text:
      'Rare mineral layering softens the visible fatigue of modern time while maintaining a calm, porcelain surface presence.',

    vow_2_title: 'Inherited Presence',
    vow_2_text:
      'A ritual object shaped around material weight, silence and restraint. Designed for individuals who no longer seek loud luxury.',

    vow_3_title: 'Private Allocation',
    vow_3_text:
      'One allocation is released globally each day. No negotiation. No discount. No public inventory.',

    collection_title: 'THE ANTIQUE TRIAD SET',
    collection_subtitle: 'Archive Case / Geological Repository',
    collection_text:
      'Each vessel carries unique mineral veining and tonal variation. Hand-finished marble surfaces preserve the individuality of every allocation.',

    grey_title: 'PHRYGIAN GREY',
    grey_text:
      'Dense volcanic mineral composition with deep geological character.',

    white_title: 'PHRYGIAN WHITE',
    white_text:
      'A pale mineral surface inspired by ancient imperial bath rituals.',

    raw_title: 'TRAVERTINE RAW',
    raw_text:
      'Thermal mineral texture preserved in its most elemental form.',

    registry_title: 'PRIVATE REGISTRY REQUEST',
    registry_subtitle:
      'The secured destination where the archive allocation shall be delivered.',

    input_name: 'Registry Identity',
    input_city: 'Intended Vault Destination',
    input_email: 'Private Correspondence',
    input_address: 'Secured Custody Address',

    submit: 'LOCK ALLOCATION REQUEST',

    success_title: 'ALLOCATION RECORDED',
    success_text:
      'Your request has entered the private registry review process. Allocation confirmation remains subject to approval.',

    footer_manifest: 'For those who inherited everything except time.',
    footer_locations:
      'LONDON / PARIS / DUBAI / ISTANBUL',

    seo_text:
      'Phrygian Lab — Geological Ritual Objects — Anatolian Thermal Mineral Preservation — Private Allocation House'
  },

  tr: {
    protocol: 'HOUSE OF PHRYGIAN LAB / M.Ö. 718',
    allocation_status: 'KÜRESEL GÜNLÜK TAHSİSAT / 1 OF 1',

    hero_title: 'PHRYGIAN LAB',
    hero_subtitle: 'Jeolojik Koruma Ritüeli',

    hero_quote_line_1: 'Altın sıradandır.',
    hero_quote_line_2: 'Geçmişe sahip ol.',

    request_button: 'TAHSİSAT TALEP ET',
    approval_notice: 'Her tahsisat başvurusu onaylanmaz.',

    menu_archive: 'Arşiv',
    menu_edict: 'Sözleşmeler',
    menu_allocation: 'Tahsisat',

    archive_title: 'Luxury fades. Civilizations remain.',
    archive_text:
      'Phrygian Lab sıradan bir kozmetik evi değildir. Her obje, Anadolu’nun gerçek termal mineral yoğunluğu etrafında şekillenir ve jeolojik basınç ile ritüel hazırlık süreçleriyle korunur. Bu obje kitlesel tüketim için tasarlanmaz. Süreklilik için vardır.',

    edict_title: 'ÜÇ JEOLOJİK ASİL SÖZLEŞME',

    vow_1_title: 'Korunan Güzellik',
    vow_1_text:
      'Nadir mineral katmanları modern zamanın görünür yorgunluğunu yumuşatırken sakin ve porselen bir yüzey hissi bırakır.',

    vow_2_title: 'Mirasın Ağırlığı',
    vow_2_text:
      'Materyal ağırlığı, sessizlik ve ölçülü ihtişam üzerine tasarlanmış ritüel obje.',

    vow_3_title: 'Mahrem Tahsisat',
    vow_3_text:
      'Küresel ölçekte her gün yalnızca tek tahsisat açılır. Pazarlık yoktur. İndirim yoktur. Açık envanter yoktur.',

    collection_title: 'THE ANTIQUE TRIAD SET',
    collection_subtitle: 'Archive Case / Jeolojik Mahfaza',
    collection_text:
      'Her obje kendine özgü mineral damarları ve tonal farklılıklar taşır. El işçiliği mermer yüzeyler her tahsisatı benzersiz kılar.',

    grey_title: 'PHRYGIAN GREY',
    grey_text:
      'Yoğun volkanik mineral karakterine sahip ağır jeolojik katman.',

    white_title: 'PHRYGIAN WHITE',
    white_text:
      'Antik imparatorluk banyolarından ilham alan açık mineral yüzey.',

    raw_title: 'TRAVERTINE RAW',
    raw_text:
      'En doğal hali korunmuş termal mineral dokusu.',

    registry_title: 'MAHREM SİCİL BAŞVURUSU',
    registry_subtitle:
      'Arşiv tahsisatının ulaştırılacağı güvenli teslimat lokasyonu.',

    input_name: 'Sicil Kimliği',
    input_city: 'Hedef Mahrem Lokasyon',
    input_email: 'Özel Yazışma Adresi',
    input_address: 'Güvenli Emanet Adresi',

    submit: 'TAHSİSAT TALEBİNİ KİLİTLE',

    success_title: 'TAHSİSAT KAYDA ALINDI',
    success_text:
      'Başvurunuz mahrem sicil inceleme sürecine alınmıştır. Tahsisat onayı değerlendirme sonrasında gerçekleşir.',

    footer_manifest: 'Her şeye sahip olup zamana sahip olamayanlar için.',
    footer_locations:
      'LONDON / PARIS / DUBAI / ISTANBUL',

    seo_text:
      'Phrygian Lab — Jeolojik Ritüel Objeleri — Anadolu Termal Mineral Koruma Evi'
  }
};

type VowKey =
  | 'v1'
  | 'v2'
  | 'v3';

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

  const handleInputChange = (
    key: FormKey,
    value: string
  ) => {
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
    <main className="relative overflow-hidden bg-[#0a0a0a] text-[#f3f3f3] min-h-screen">

      {/* ATMOSPHERIC GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-900/10 blur-[180px]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#0a0a0a]/85">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex flex-col">
            <span className="text-[#d4af37] tracking-[0.55em] text-sm md:text-base font-light">
              PHRYGIAN LAB
            </span>

            <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-600 mt-1">
              {t.protocol}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.35em] text-neutral-500">

            <button
              onClick={() => scrollToSection('archive')}
              className="hover:text-[#d4af37] transition-colors"
            >
              {t.menu_archive}
            </button>

            <button
              onClick={() => scrollToSection('edicts')}
              className="hover:text-[#d4af37] transition-colors"
            >
              {t.menu_edict}
            </button>

            <button
              onClick={() => scrollToSection('allocation')}
              className="hover:text-[#d4af37] transition-colors"
            >
              {t.menu_allocation}
            </button>

          </nav>

          <div className="flex items-center gap-4">

            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />

              <span className="text-[9px] tracking-[0.25em] uppercase text-[#c5a880]">
                {t.allocation_status}
              </span>
            </div>

            <div className="flex items-center gap-1 border border-white/10 px-2 py-1 text-[9px]">

              <button
                onClick={() => setLang('en')}
                className={lang === 'en'
                  ? 'text-[#d4af37]'
                  : 'text-neutral-600'}
              >
                EN
              </button>

              <button
                onClick={() => setLang('tr')}
                className={lang === 'tr'
                  ? 'text-[#d4af37]'
                  : 'text-neutral-600'}
              >
                TR
              </button>

            </div>

          </div>

        </div>

      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-24">

        <div className="max-w-4xl">

          <div className="mb-10">

            <div className="w-14 h-14 border border-[#d4af37]/40 bg-black/30 flex items-center justify-center mb-8">
              <span className="text-[#d4af37] text-lg">
                Φ
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl tracking-[0.22em] font-extralight text-white leading-none">
              {t.hero_title}
            </h1>

            <p className="mt-5 text-sm uppercase tracking-[0.4em] text-[#c5a880]">
              {t.hero_subtitle}
            </p>

          </div>

          <div className="space-y-1 mb-14">

            <p className="text-2xl md:text-4xl font-light text-white">
              {t.hero_quote_line_1}
            </p>

            <p className="text-2xl md:text-4xl italic text-[#d4af37]">
              {t.hero_quote_line_2}
            </p>

          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">

            <button
              onClick={() => scrollToSection('allocation')}
              className="h-14 px-10 border border-[#d4af37] text-[#d4af37] uppercase tracking-[0.3em] text-xs hover:bg-[#d4af37] hover:text-black transition-all duration-500"
            >
              {t.request_button}
            </button>

            <p className="text-xs uppercase tracking-[0.28em] text-neutral-600">
              {t.approval_notice}
            </p>

          </div>

        </div>

      </section>

      {/* ARCHIVE */}
      <section
        id="archive"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      >

        <div className="max-w-3xl">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#c5a880] mb-6">
            THE ARCHIVE
          </p>

          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-10">
            {t.archive_title}
          </h2>

          <p className="text-neutral-400 leading-[2.1] text-sm md:text-base font-light">
            {t.archive_text}
          </p>

        </div>

      </section>

      {/* EDICTS */}
      <section
        id="edicts"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      >

        <div className="mb-16">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#c5a880] mb-5">
            {t.edict_title}
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5">

          <button
            onClick={() => setActiveVow(activeVow === 'v1' ? null : 'v1')}
            className="bg-[#0d0d0d] p-10 text-left min-h-[240px] hover:bg-[#111111] transition-colors"
          >

            <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-600">
              I
            </span>

            <h3 className="mt-8 text-2xl font-light text-white">
              {t.vow_1_title}
            </h3>

            {activeVow === 'v1' && (
              <p className="mt-8 text-sm text-neutral-400 leading-[2]">
                {t.vow_1_text}
              </p>
            )}

          </button>

          <button
            onClick={() => setActiveVow(activeVow === 'v2' ? null : 'v2')}
            className="bg-[#0d0d0d] p-10 text-left min-h-[240px] hover:bg-[#111111] transition-colors"
          >

            <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-600">
              II
            </span>

            <h3 className="mt-8 text-2xl font-light text-white">
              {t.vow_2_title}
            </h3>

            {activeVow === 'v2' && (
              <p className="mt-8 text-sm text-neutral-400 leading-[2]">
                {t.vow_2_text}
              </p>
            )}

          </button>

          <button
            onClick={() => setActiveVow(activeVow === 'v3' ? null : 'v3')}
            className="bg-[#0d0d0d] p-10 text-left min-h-[240px] hover:bg-[#111111] transition-colors"
          >

            <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-600">
              III
            </span>

            <h3 className="mt-8 text-2xl font-light text-white">
              {t.vow_3_title}
            </h3>

            {activeVow === 'v3' && (
              <p className="mt-8 text-sm text-neutral-400 leading-[2]">
                {t.vow_3_text}
              </p>
            )}

          </button>

        </div>

      </section>

      {/* COLLECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">

        <div className="max-w-4xl mb-16">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#c5a880] mb-5">
            COLLECTION
          </p>

          <h2 className="text-3xl md:text-5xl font-light mb-6">
            {t.collection_title}
          </h2>

          <p className="uppercase tracking-[0.3em] text-xs text-neutral-600 mb-10">
            {t.collection_subtitle}
          </p>

          <p className="text-neutral-400 leading-[2] text-sm md:text-base">
            {t.collection_text}
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5">

          <div className="bg-[#111111] p-10 min-h-[240px]">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#c5a880]">
              I
            </span>

            <h3 className="mt-8 text-2xl font-light">
              {t.grey_title}
            </h3>

            <p className="mt-8 text-sm text-neutral-400 leading-[2]">
              {t.grey_text}
            </p>
          </div>

          <div className="bg-[#111111] p-10 min-h-[240px]">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#c5a880]">
              II
            </span>

            <h3 className="mt-8 text-2xl font-light">
              {t.white_title}
            </h3>

            <p className="mt-8 text-sm text-neutral-400 leading-[2]">
              {t.white_text}
            </p>
          </div>

          <div className="bg-[#111111] p-10 min-h-[240px]">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#c5a880]">
              III
            </span>

            <h3 className="mt-8 text-2xl font-light">
              {t.raw_title}
            </h3>

            <p className="mt-8 text-sm text-neutral-400 leading-[2]">
              {t.raw_text}
            </p>
          </div>

        </div>

      </section>

      {/* ALLOCATION */}
      <section
        id="allocation"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      >

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div className="max-w-xl">

            <p className="text-[10px] uppercase tracking-[0.45em] text-[#c5a880] mb-5">
              ALLOCATION
            </p>

            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-10">
              {t.registry_title}
            </h2>

            <p className="text-neutral-400 leading-[2] text-sm">
              {t.registry_subtitle}
            </p>

          </div>

          <div className="border border-white/10 bg-[#0d0d0d] p-8 md:p-10">

            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    handleInputChange('name', e.target.value)
                  }
                  placeholder={t.input_name}
                  className="w-full h-14 bg-black border border-white/10 px-5 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-[#d4af37] transition-colors"
                />

                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) =>
                    handleInputChange('city', e.target.value)
                  }
                  placeholder={t.input_city}
                  className="w-full h-14 bg-black border border-white/10 px-5 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-[#d4af37] transition-colors"
                />

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    handleInputChange('email', e.target.value)
                  }
                  placeholder={t.input_email}
                  className="w-full h-14 bg-black border border-white/10 px-5 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-[#d4af37] transition-colors"
                />

                <textarea
                  rows={5}
                  required
                  value={formData.address}
                  onChange={(e) =>
                    handleInputChange('address', e.target.value)
                  }
                  placeholder={t.input_address}
                  className="w-full bg-black border border-white/10 px-5 py-4 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-[#d4af37] transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full h-14 border border-[#d4af37] text-[#d4af37] uppercase tracking-[0.28em] text-xs hover:bg-[#d4af37] hover:text-black transition-all duration-500"
                >
                  {t.submit}
                </button>

                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-700 text-center pt-2">
                  AMEX / PRIORITY REGISTRY / PRIVATE REVIEW
                </p>

              </form>
            ) : (
              <div className="min-h-[420px] flex flex-col items-center justify-center text-center">

                <div className="w-16 h-16 border border-[#d4af37]/40 flex items-center justify-center mb-8">
                  <span className="text-[#d4af37] text-xl">
                    Φ
                  </span>
                </div>

                <h3 className="text-2xl font-light text-white mb-6">
                  {t.success_title}
                </h3>

                <p className="max-w-md text-neutral-400 leading-[2] text-sm">
                  {t.success_text}
                </p>

              </div>
            )}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 mt-24">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="flex flex-col items-center text-center">

            <p className="text-xl md:text-2xl text-white font-light mb-8">
              {t.footer_manifest}
            </p>

            <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-600 mb-10">
              {t.footer_locations}
            </p>

            <div className="w-20 h-[1px] bg-[#d4af37]/30 mb-10" />

            <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-800 max-w-3xl leading-[2]">
              {t.seo_text}
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}