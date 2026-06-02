'use client';

import React, { useState } from 'react';

const TRANSLATIONS = {
  en: {
    protocol: 'Midaum Private Protocol / Asset Class 718',
    remaining: 'DAILY CAPACITY',
    tagline: 'THE MOST EXPENSIVE MASK IN HUMAN HISTORY',
    limit_notice: 'Strictly limited to ONE worldwide allocation per day.',

    gold_plate: '24K GOLD PLATE',

    menu_story: 'The Story',
    menu_vow: 'The Vow',
    menu_own: 'Sovereign Possession',

    story_title: 'Is it possible to purchase history?',
    story_desc:
      'Sovereignty can acquire the future. Capital can master fields, empires, and gold. But time and the heavy pulse of ancient memory have never been for sale. Until this alignment. To look upon Midaum is not to consume industrial cosmetics; it is to secure total authority over mortal time. Possess the past.',

    vow_title: 'THE LUMINOUS SPELL OF PHRYGIAN LUCK',
    vow_desc:
      'We do not promise youth; youth fades into nothingness. We bestow the ultimate shield of absolute beauty and architectural fortune for the rest of your existence.',

    form_title: 'SOVEREIGN ALLOCATION REQUEST',
    form_sub: 'Personalized 24K Gold Plate Enclosure',

    input_name: 'Sovereign Name & Title',
    input_city: 'City / Country',
    input_email: 'Encrypted Digital Address (Email)',
    input_address: 'Secured Destination Shipping Address',

    button_submit:
      'POSSESS THE PAST / SECURE WITH CREDIT CARD & AMEX',

    success:
      'ALLOCATION RECORDED IN THE SEISMIC LEDGER',

    success_desc:
      'Your allocation for today has been locked and sealed.',

    status_void_label: 'Priceless',
  },

  tr: {
    protocol: 'Midaum Mahrem Protokolü / Varlık Sınıfı 718',
    remaining: 'GÜNLÜK KONTENJAN',

    tagline:
      'DÜNYANIN EN PAHALI MASKESİ / KUTSAL EMANET VE ARZU NESNESİ',

    limit_notice:
      'Küresel ölçekte günde sadece 1 asil aileye tahsisat yapılmaktadır.',

    gold_plate: '24 AYAR ALTIN PLAKA',

    menu_story: 'Hikayesi',
    menu_vow: 'Vaadi',
    menu_own: 'Sahip Ol',

    story_title: 'Geçmişi satın almak mümkün mü?',

    story_desc:
      'Sermaye gelecekteki her şeyi satın alabilir fakat zamanı asla satın alamaz.',

    vow_title: 'FRİGYA EFSUNUNUN SARSILMAZ ŞANSI',

    vow_desc:
      'Biz fani bir gençlik vadetmiyoruz; gençlik zamana yenik düşer.',

    form_title: 'ASİL TAHSİSAT VE SÖZLEŞME PROTOKOLÜ',

    form_sub:
      'Adınıza Mühürlenecek 24 Ayar Altın Plaka İle',

    input_name: 'Asil İsim & Unvan',
    input_city: 'Şehir / Ülke',
    input_email: 'Şifreli Dijital Adres (E-posta)',
    input_address:
      'Emanetin Ulaştırılacağı Resmi Teslimat Adresi',

    button_submit:
      'GEÇMİŞE SAHİP OL / CREDIT CARD & AMEX İLE ANINDA ÖDE',

    success: 'TAHSİSAT SİSMİK SİCİLE İŞLENDİ',

    success_desc:
      'Bugünün mühürlü tahsisatı adınıza kilitlenmiştir.',

    status_void_label: 'Ebedi',
  },
};

type Lang = 'en' | 'tr';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');

  const t = TRANSLATIONS[lang];

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      <div className="max-w-xl w-full border border-neutral-800 p-10 bg-neutral-950">

        <div className="text-center mb-10">
          <h1 className="text-4xl tracking-[0.4em] text-[#d4af37] font-serif">
            PHRYGIAN LAB
          </h1>

          <p className="text-xs mt-4 tracking-[0.3em] text-neutral-500 uppercase">
            {t.protocol}
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 border ${
              lang === 'en'
                ? 'border-[#d4af37] text-[#d4af37]'
                : 'border-neutral-700 text-neutral-500'
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang('tr')}
            className={`px-4 py-2 border ${
              lang === 'tr'
                ? 'border-[#d4af37] text-[#d4af37]'
                : 'border-neutral-700 text-neutral-500'
            }`}
          >
            TR
          </button>
        </div>

        <div className="border border-[#c5a880]/30 p-8 relative">

          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black px-4 py-1 text-xs tracking-widest font-bold">
            {t.gold_plate}
          </div>

          <h2 className="text-xl text-center mb-6 tracking-widest">
            {t.form_title}
          </h2>

          <div className="space-y-4">
            <input
              placeholder={t.input_name}
              className="w-full bg-black border border-neutral-800 p-3"
            />

            <input
              placeholder={t.input_city}
              className="w-full bg-black border border-neutral-800 p-3"
            />

            <input
              placeholder={t.input_email}
              className="w-full bg-black border border-neutral-800 p-3"
            />

            <textarea
              placeholder={t.input_address}
              className="w-full bg-black border border-neutral-800 p-3"
              rows={4}
            />

            <button className="w-full bg-[#d4af37] text-black font-bold py-4 tracking-widest">
              {t.button_submit}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}