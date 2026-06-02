'use client';

import React, { useState } from 'react';

const TRANSLATIONS = {
  en: {
    protocol: 'Midaum Private Protocol',
    remaining: 'REMAINING',
    tagline: 'ATYPICAL LUXURY / THE SACRED OBJECT OF DESIRE',
    h1: 'Older than humanity.\nCleaner than science.',
    
    menu_genesis: 'The Genesis',
    menu_covenant: 'The Covenant',
    menu_artifact: 'The Artifact',
    menu_allocation: 'The Allocation',

    vow_1: 'You did not find this text.',
    vow_2: 'The stone allowed you to see it.',
    vow_3: 'We do not offer cosmetics; particles decay.',
    vow_4: 'We bestow the tectonic antenna to speak with eternity.',
    vow_5: 'One bloodline. One monolithic resonance. One eternal shield.',

    manifesto1: 'Gordion was ashes. King Midas did not yield; he retreated to the silent cliffs of Midaum. There, a pure Phrygian shepherd girl offered a light-absorbing black stone: The Obsidian Monolith. Midas refused. Phrygia vanished, but the stone became an immortal monument buried in marble. Those who touch this text encounter its heavy frequency in their deepest dreams.',
    manifesto2: '1975, Midaum. An old shepherd grandmother from the same lineage rediscovered the Monolith inside a deep marble vein. Today, this relic travels the world, spending strictly one year with a single sovereign. Phrygian Lab encapsulates the three layers (The Antique Triad) inside a solid, hand-carved marble jar—an elemental antenna tuned to the resonance of the ancient matriarch.',
    
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Triple Geological Ritual / The Eternal Resonance Vault',
    gold_plate: 'Numbered 24K Gold Mounted Plate / Solid Marble Jar Archive',
    tooltip_title: 'SECRET 718: THE ASCENDING VALUATION',
    tooltip_desc: 'Genesis price: €718. Following the laws of scarcity, no allocation can be acquired below the final value of the preceding day. The value only ascends.',
    set_desc: 'Four sacred seals: "Beauty, Fortune, Metaphysical Grace, and Elemental Sovereignty." 3 layers hand-carved from Midaum depths, bridging mortal skin with the unyielding frequency of the past. Encased in a monolithic solid marble jar with a 24K Gold Mounted Sovereign Plate:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'High sulfur and silica. A tectonic purification ritual connecting cells to deep volcanic memory.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Pure calcium carbonate from lightless veins. Ageless imperial dust reflecting lost centuries.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatic mineral crust from thermal springs. A heavy geological shield that completely freezes time.',
    
    monolith_title: 'THE OBSIDIAN MONOLITH / THE COSMIC DRAW',
    monolith_desc: 'December 31st. A transparent cosmic draw among the 365 archive holders. The Monolith will be transferred to ONE sovereign for 365 days. The Mask brightens your skin; the Stone illuminates your destiny. The remaining 364 initiates track its global coordinates via their encrypted portal.',
    
    call_to_action: 'The ancient heritage, the absolute nobility, and the frequency of the matriarch await within the marble jar. One family, one kütle. The value only rises.',
    form_title: 'ARISTOCRATIC ALLOCATION REQUEST',
    input_name: 'Sovereign Name & Title (e.g., Sovereign Sedat)',
    input_city: 'City / Country (e.g., London / UK)',
    input_email: 'Encrypted Digital Address (Email)',
    input_address: 'The official destination for the sealed solid marble jar...',
    button_submit: 'SUBMIT VALUE OFFER & SECURE ALLOCATION',
    success: 'ALLOCATION RECORDED IN THE LEDGER',
    success_desc: 'Your offer is sealed. Our concierge will contact your encrypted address within 24 hours.',
    
    ledger_title: 'THE ALIGNMENT CALENDAR / THE ASCENDING VALUE CYCLE',
    ledger_sub: 'Commencing June 23rd Solstice — One Allocation Per Day',
    status_verified: 'Closed & Sealed',
    status_void: 'The Luminous Gift',
    status_open: 'Offer Value',
    status_anon: 'Anonymized',
    status_local: 'Midaum Local',
    status_price_void: 'Priceless',
    status_floor: 'Floor:',
    status_closed: 'Closed'
  },
  tr: {
    protocol: 'Midaum Mahrem Protokolü',
    remaining: 'KALAN KOTA',
    tagline: 'ATYPICAL LUXURY / KUTSAL EMANET VE ARZU NESNESİ',
    h1: 'Older than humanity.\nCleaner than science.',
    
    menu_genesis: 'Hikayesi',
    menu_covenant: 'Vaatleri',
    menu_artifact: 'Emanet',
    menu_allocation: 'Tahsisat',

    vow_1: 'Siz mermer bir kavanoz satın almadınız.',
    vow_2: '2700 yıllık geri çevrilmiş bir frekansı ele geçirdiniz.',
    vow_3: 'Biz kozmetik vadetmiyoruz; maddeler çürür.',
    vow_4: 'Ebediyetle bağ kurmanız için tektonik bir telsiz bahşediyoruz.',
    vow_5: 'Tek soy. Tek masif rezonans. Tek ölümsüz kalkan.',

    manifesto1: 'Gordion küldü. Kral Midas sahneden çekilmedi; Midaum’un dik kayalıklarına sığındı. Sessiz dehlizlerde bir çoban kız çocuğu ona ışığı yutan siyah bir taş uzattı: The Obsidian Monolith. Midas reddetti. Frigya silindi, ama o taş mermere gömülen kadim bir anıta dönüştü. Bu metne rastlayan seçkin ruhlar, gecenin rüyalarında o taşın ağır frekansıyla karşılaşırlar.',
    manifesto2: '1975, Midaum. Aynı soydan gelen yaşlı bir çoban nene, Monolith’i bir mermer yarığında yeniden buldu. Taş, dünyadaki seçkin asiller arasında sadece 1’er yıl kalmak şartıyla elden ele geziyor. Phrygian Lab, bu üçlü ritüeli (The Antique Triad), tek bir mermer bloktan el işçiliğiyle oyulmuş masif bir mermer kavanozda muhafaza ediyor—kadim matriyarkın frekansına ayarlanmış elementer bir telsiz olarak.',
    
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Masif Mermer Kavanoz İçinde Üçlü Jeolojik Ritüel',
    gold_plate: 'Numbered 24K Gold Mounted Plate / Masif Mermer Kavanoz Arşivi',
    tooltip_title: 'SECRET 718: YÜKSELEN DEĞER PRENSİBİ',
    tooltip_desc: 'Başlangıç değeri €718’dir. Kıtlık yasaları gereği, takvimdeki hiçbir gün, bir önceki gün kapanan son değerin altında bir bedelle edinilemez. Değer sadece yükselir.',
    set_desc: 'Dört kutsal mühür: "Güzellik, Şans, Mistik Lütuf ve Elementer Egemenlik." Fani cildinizle geçmişin sarsılmaz frekansı arasında jeolojik bir medyum görevi gören 3 kadim katman. Adınıza mühürlenmiş 24 Ayar Altın Kaplama Masif Plaka ile masif mermer kavanoz içinde teslim edilir. Aile başına tek tahsisat:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Yüksek sülfür ve silika. Hücreleri derin ve sessiz volkanik hafızaya bağlayan tektonik arınma.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Saf kalsiyum karbonat. Kayıp yüzyılların ışığını fani yüze yansıtan ölümsüz imparatorluk tozu.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatik mineral kabuk. Cilt bariyerinde zamanın çürümesini tamamen donduran ağır jeolojik kalkan.',
    
    monolith_title: 'THE OBSIDIAN MONOLITH / KOZMİK ÇEKİLİŞ',
    monolith_desc: '31 Aralık gecesi. 365 hak sahibi arasında şeffaf ve kutsal çekiliş. Monolith, o yıl 365 gün boyunca sadece BİR asile teslim edilir. Maske cildinizi, Taş hayatınızı ışıldatacak. Geri kalan 364 üye koordinatları şifreli panelle canlı izler.',
    
    call_to_action: 'Kadim emanet, mutlak asalet ve o çoban nenenin frekansı mermer kavanozun içinde seni bekliyor. Tek aile, tek kütle. Değer sadece yükselir.',
    form_title: 'ARİSTOKRAT TAHSİSAT TALEBİ & TEKLİFİ',
    input_name: 'Asil İsim & Unvan (Örn: Asil Sedat)',
    input_city: 'Şehir / Ülke (Örn: Istanbul / TR)',
    input_email: 'Şifreli Dijital Adres (E-posta)',
    input_address: 'Mühürlü masif mermer kavanozun ulaştırılacağı resmi lokasyon...',
    button_submit: 'FREKANS TEKLİFİNİ SUN VEYA TAHSİSATI KİLİTLE',
    success: 'TAHSİSAT SİCİLE İŞLENDİ',
    success_desc: 'Teklifiniz mühürlenmiştir. Konsiyerj ekibimiz yerleşiminizi doğrulamak üzere 24 saat içinde sizinle irtibat kuracaktır.',
    
    ledger_title: 'THE ALIGNMENT CALENDAR / YÜKSELEN DEĞER DÖNGÜSÜ',
    ledger_sub: '23 Haziran Gündönümünde Başlar — Sonraki günler, bir önceki günün kapanış değerinin altında edinilemez.',
    status_verified: 'Mühürlendi',
    status_void: 'The Luminous Gift (Bir Kadına Lütfedildi)',
    status_open: 'Teklif Sun',
    status_anon: 'Gizli Asil',
    status_local: 'Midaum Havzası',
    status_price_void: 'Paha Biçilemez',
    status_floor: 'Taban:',
    status_closed: 'Kapatıldı'
  },
  fr: { protocol: 'Protocole Privé de Midaum', remaining: 'QUOTA RESTANT', tagline: 'ATYPICAL LUXURY / L’OBJET SACRÉ DU DÉSIR', h1: 'Older than humanity.\nCleaner than science.', menu_genesis: 'L’Histoire', menu_covenant: 'Les Promesses', menu_artifact: 'La Relique', menu_allocation: 'L’Allocation', vow_1: 'Vous n’avez pas acheté un pot de marbre.', vow_2: 'Vous avez capturé une fréquence vieille de 2700 ans.', vow_3: 'Nous ne promettons pas la cosmétique.', vow_4: 'Antenne tectonique pour l’éternité.', vow_5: 'Une lignée. Une résonance.', manifesto1: 'Gordion était en cendres. Midas se retira à Midaum...', manifesto2: '1975, Midaum...', set_title: 'THE ANTIQUE TRIAD SET', set_sub: 'Rituel Géologique Triple', gold_plate: 'Plaque en Or 24K', tooltip_title: 'SECRET 718', tooltip_desc: 'Valuation ascendante.', set_desc: 'Sceaux sacrés. Limité à une allocation par famille :', grey_title: 'PHRYGIAN GREY', grey_desc: 'Purification tectonique.', white_title: 'PHRYGIAN WHITE', white_desc: 'Carbonate de calcium pur.', raw_title: 'TRAVERTINE RAW', raw_desc: 'Efface le temps.', monolith_title: 'LE MONOLITHE D’OBSIDIENNE', monolith_desc: 'Le Masque illumine la peau.', call_to_action: 'Une famille, un monolithe.', form_title: 'DEMANDE D’ALLOCATION', input_name: 'Nom & Titre', input_city: 'Ville', input_email: 'Email', input_address: 'Destination...', button_submit: 'SOUMETTRE L’OFFRE', success: 'ALLOCATION ENREGISTRÉE', success_desc: 'Votre offre a été scellée.', ledger_title: 'THE ALIGNMENT CALENDAR', ledger_sub: 'Solstice du 23 juin', status_verified: 'Scellé', status_void: 'The Luminous Gift', status_open: 'Offrir', status_anon: 'Anonyme', status_local: 'Midaum Local', status_price_void: 'Inestimable', status_floor: 'Plancher:', status_closed: 'Clôturé' },
  de: { protocol: 'Midaum Privat Protokoll', remaining: 'RESTKONTINGENT', tagline: 'ATYPICAL LUXURY / DAS HEILIGE OBJEKT BEGEHREN', h1: 'Older than humanity.\nCleaner than science.', menu_genesis: 'Geschichte', menu_covenant: 'Versprechen', menu_artifact: 'Relikt', menu_allocation: 'Zuweisung', vow_1: 'Sie haben kein Marmorgefäß gekauft.', vow_2: 'Sie haben eine 2700 Jahre alte Frequenz eingefangen.', vow_3: 'Wir versprechen keine Kosmetik.', vow_4: 'Eine tektonische Antenne zur Ewigkeit.', vow_5: 'Eine Blutlinie. Eine Resonanz.', manifesto1: 'Gordion war Asche. König Midas zog sich nach Midaum zurück...', manifesto2: '1975, Midaum...', set_title: 'THE ANTIQUE TRIAD SET', set_sub: 'Dreifaches geologisches Ritual', gold_plate: '24K Goldplakette', tooltip_title: 'SECRET 718', tooltip_desc: 'Aufsteigende Bewertung.', set_desc: 'Heilige Siegel. Einziges Set pro Familie:', grey_title: 'PHRYGIAN GREY', grey_desc: 'Tektonische Reinigung.', white_title: 'PHRYGIAN WHITE', white_desc: 'Reines Kalziumkarbonat.', raw_title: 'TRAVERTINE RAW', raw_desc: 'Löscht die Zeit.', monolith_title: 'DER OBSIDIAN-MONOLITH', monolith_desc: 'Die Maske bringt die Haut zum Strahlen.', call_to_action: 'Eine Familie, ein Monolith.', form_title: 'ARISTOKRATISCHE ANFRAGE', input_name: 'Name & Titel', input_city: 'Stadt', input_email: 'E-Mail', input_address: 'Bestimmungsort...', button_submit: 'WERTANGEBOT ABGEBEN', success: 'ZUWEISUNG ERFASST', success_desc: 'Ihr Angebot wurde versiegelt.', ledger_title: 'THE ALIGNMENT CALENDAR', ledger_sub: 'Beginnend am 23. Juni', status_verified: 'Versiegelt', status_void: 'The Luminous Gift', status_open: 'Bieten', status_anon: 'Anonym', status_local: 'Midaum Regional', status_price_void: 'Unbezahlbar', status_floor: 'Boden:', status_closed: 'Geschlossen' },
  ru: { protocol: 'Частный Протокол Мидаума', remaining: 'ОСТАТОК КВОТЫ', tagline: 'ATYPICAL LUXURY / СВЯЩЕННЫЙ ОБЪЕКТ ЖЕЛАНИЯ', h1: 'Older than humanity.\nCleaner than science.', menu_genesis: 'История', menu_covenant: 'Обещания', menu_artifact: 'Реликвия', menu_allocation: 'Выделение', vow_1: 'Вы не покупали мраморный сосуд.', vow_2: 'Вы поймали 2700-летнюю утраченную частоту.', vow_3: 'Мы не обещаем косметику.', vow_4: 'Тектоническая антенна для связи с вечностью.', vow_5: 'Один род. Одна резонанс.', manifesto1: 'Гордион был в пепле. Царь Мидас укрылся в скалах Мидаума...', manifesto2: '1975, Мидаум...', set_title: 'THE ANTIQUE TRIAD SET', set_sub: 'Тройной Геологический Ритуал', gold_plate: 'Табличка 24К', tooltip_title: 'SECRET 718', tooltip_desc: 'Стоимость растет.', set_desc: 'Четыре печати. Одно выделение на семью:', grey_title: 'PHRYGIAN GREY', grey_desc: 'Тектоническое очищение.', white_title: 'PHRYGIAN WHITE', white_desc: 'Чистый карбонат кальция.', raw_title: 'TRAVERTINE RAW', raw_desc: 'Стирает время.', monolith_title: 'ОБСИДИАНОВЫЙ МОНОЛИТ', monolith_desc: 'Маска заставит сиять вашу кожу.', call_to_action: 'Одна семья — один монолит.', form_title: 'ЗАПРОС НА ВЫДЕЛЕНИЕ', input_name: 'Имя и титул', input_city: 'Город', input_email: 'Email', input_address: 'Адрес доставки...', button_submit: 'ОТПРАВИТЬ ПРЕДЛОЖЕНИЕ', success: 'ВЫДЕЛЕНИЕ ЗАРЕГИСТРИРОВАНО', success_desc: 'Ваше предложение запечатано.', ledger_title: 'THE ALIGNMENT CALENDAR', ledger_sub: 'Начиная с 23 июня', status_verified: 'Закрыто', status_void: 'The Luminous Gift', status_open: 'Предложить', status_anon: 'Анонимно', status_local: 'Мидаум Местный', status_price_void: 'Бесценно', status_floor: 'Старт:', status_closed: 'Закрыто' },
  ar: { protocol: 'بروتوكول ميداعوم الخاص', remaining: 'الحصة المتبقية', tagline: 'ATYPICAL LUXURY / غاية الرغبة والمقتنيات المقدسة', h1: 'Older than humanity.\nCleaner than science.', menu_genesis: 'النشأة', menu_covenant: 'الوعود', menu_artifact: 'الأمانة', menu_allocation: 'التخصيس', vow_1: 'أنتِ لم تشتري وعاءً رخامياً.', vow_2: 'لقد التقطتِ تردداً ضائعاً منذ 2700 عام.', vow_3: 'نحن لا نعدكِ بمستحضرات التجميل.', vow_4: 'هوائي تكتوني للتواصل مع الأبدية.', vow_5: 'سلالة واحدة. رنين واحد.', manifesto1: 'كان غورديون رماداً. تراجع الملك ميداس إلى منحدرات ميداعوم...', manifesto2: '1975، ميداعوم...', set_title: 'THE ANTIQUE TRIAD SET', set_sub: 'طقوس جيولوجية ثلاثة', gold_plate: 'لوحة مطلية بذهب عيار 24', tooltip_title: 'SECRET 718', tooltip_desc: 'القيمة تتصاعد.', set_desc: 'الأختام الأربعة المقدسة. تخصيص واحد لكل عائلة:', grey_title: 'PHRYGIAN GREY', grey_desc: 'طقس تطهير تكتوني.', white_title: 'PHRYGIAN WHITE', white_desc: 'كربونات الكالسيوم النقيّة.', raw_title: 'TRAVERTINE RAW', raw_desc: 'يمحو أثر الزمن تماماً.', monolith_title: 'كتلة الهالة السوداء', monolith_desc: 'القناع يضيء بشرتكِ.', call_to_action: 'عائلة واحدة، كتلة واحدة.', form_title: 'طلب تخصيص سيادي', input_name: 'الاسم واللقب السيادي', input_city: 'المدينة', input_email: 'العنوان المشفر', input_address: 'الوجهة الرسمية...', button_submit: 'تقديم عرض القيمة', success: 'تم تسجيل التخصيص', success_desc: 'تم تسجيل عرضك بنجاح.', ledger_title: 'THE ALIGNMENT CALENDAR', ledger_sub: 'تبدأ من 23 يونيو', status_verified: 'مغلق', status_void: 'The Luminous Gift', status_open: 'تقديم عرض', status_anon: 'مجهول', status_local: 'نطاق ميداعوم', status_price_void: 'لا يثمن', status_floor: 'الحد الأدنى:', status_closed: 'مغلق' }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'tr' | 'fr' | 'de' | 'ru' | 'ar'>('en');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerCity, setBuyerCity] = useState('');

  const t = TRANSLATIONS[lang];

  // Tam Senkronize Dil Yapısına Bağlı Dinamik Takvim Döngüsü
  const CALENDAR_DAYS = [
    { date: 'June 23', holder: 'Sovereign S.', city: 'Istanbul', status: 'verified', rawPrice: 718, isVoid: false },
    { date: 'June 24', holder: 'Sovereign A.', city: 'London', status: 'verified', rawPrice: 850, isVoid: false },
    { date: 'June 25', holder: 'Sovereign M.', city: 'Paris', status: 'verified', rawPrice: 980, isVoid: false },
    { date: 'June 26', holder: 'The Chosen One', city: t.status_local, status: 'void', rawPrice: 0, isVoid: true }, // Mor Lütuf Günü
    { date: 'June 27', holder: 'Sovereign V.', city: 'Vienna', status: 'verified', rawPrice: 1100, isVoid: false },
    { date: 'June 28', holder: t.status_open, city: 'Global', status: 'open', rawPrice: 1100, isVoid: false },
    { date: 'June 29', holder: t.status_open, city: 'Global', status: 'open', rawPrice: 1100, isVoid: false },
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
      
      {/* 🔮 Kozmik Işık Gölgeleri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(circle,rgba(197,168,128,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* 🏛️ PREMIUM STICKY HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center z-50 relative border-b border-neutral-900/20 gap-4 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md">
        
        <div className="flex flex-col items-center lg:items-start cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-lg md:text-xl font-extralight tracking-[0.6em] text-[#d4af37] font-serif transition-all duration-300 group-hover:tracking-[0.65em]">PHRYGIAN LAB</span>
          <span className="text-[8px] tracking-[0.4em] uppercase opacity-30 mt-0.5 font-sans">{t.protocol}</span>
        </div>

        <nav className="flex items-center gap-6 md:gap-8 text-[9px] tracking-[0.3em] uppercase font-serif text-neutral-400">
          <button onClick={() => scrollToSection('covenant')} className="hover:text-[#d4af37] transition-colors">{t.menu_covenant}</button>
          <button onClick={() => scrollToSection('genesis')} className="hover:text-[#d4af37] transition-colors">{t.menu_genesis}</button>
          <button onClick={() => scrollToSection('artifact')} className="hover:text-[#d4af37] transition-colors">{t.menu_artifact}</button>
          <button onClick={() => scrollToSection('allocation')} className="hover:text-[#d4af37] transition-colors border border-[#c5a880]/20 px-3 py-1 bg-neutral-950/40 text-[#c5a880]">{t.menu_allocation}</button>
        </nav>
        
        <div className="flex items-center gap-2 bg-neutral-950/90 border border-neutral-900/60 px-2.5 py-1 text-[8px] tracking-widest font-mono">
          {(Object.keys(TRANSLATIONS) as Array<keyof typeof TRANSLATIONS>).map((l) => (
            <button 
              key={l}
              onClick={() => setLang(l)}
              className={`uppercase transition-colors ${lang === l ? 'text-[#d4af37] font-bold' : 'text-neutral-600 hover:text-white'}`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] tracking-[0.25em] text-[#c5a880] uppercase font-mono">
            {t.remaining}: 324 / 365
          </span>
        </div>
      </header>

      {/* 👑 THE COVENANT (KUTSAL TABLET SİSTEMİ) */}
      <section id="covenant" className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center pt-24 pb-12 z-10 relative scroll-mt-28">
        <p className="text-[9px] tracking-[0.6em] uppercase text-[#c5a880] mb-8 font-semibold">
          {t.tagline}
        </p>

        <h1 className="text-3xl md:text-5xl font-serif font-extralight tracking-wide leading-tight max-w-3xl mb-12 text-white whitespace-pre-line">
          {t.h1}
        </h1>

        {/* 📜 Kadim Rezonans Emirleri & BUTONSAL KANCALAR */}
        <div className="flex flex-col items-center gap-5 text-xs md:text-sm tracking-[0.15em] font-serif uppercase text-neutral-400 max-w-xl mx-auto mb-16 border border-neutral-900 px-8 py-8 bg-neutral-950/40 relative">
          
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent" />
          
          <div className="text-[8px] tracking-[0.3em] font-mono text-neutral-600 border border-neutral-900/60 px-2 py-0.5 mb-2 bg-black">
            [ IDENTITY BOUND ]
          </div>

          <p className="leading-relaxed">{t.vow_1}</p>
          
          <div className="text-[8px] tracking-[0.3em] font-mono text-[#d4af37] border border-[#d4af37]/20 px-3 py-1 my-1 bg-[#d4af37]/5 font-semibold">
            {t.vow_2}
          </div>

          <div className="w-4 h-[1px] bg-neutral-900" />
          
          <p className="opacity-50 text-[11px] font-sans tracking-widest">{t.vow_3}</p>
          <p className="text-[#e5e5e5] font-light leading-relaxed">{t.vow_4}</p>
          
          <div className="w-4 h-[1px] bg-neutral-900" />

          <div className="text-[8px] tracking-[0.4em] font-mono text-neutral-500 uppercase mt-2">
            [ {t.vow_5} ]
          </div>
        </div>
      </section>

      {/* 📜 GENESIS (HİKAYESİ) */}
      <section id="genesis" className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center pb-12 z-10 relative scroll-mt-28">
        <div className="w-12 h-[1px] bg-neutral-900 mb-8" />
        <p className="text-xs md:text-sm font-light tracking-wide text-neutral-400 max-w-2xl leading-relaxed mb-4 text-justify md:text-center">
          {t.manifesto1}
        </p>
        <p className="text-xs md:text-sm font-light tracking-wide text-neutral-500 max-w-2xl leading-relaxed mb-4 text-center">
          {t.manifesto2}
        </p>
      </section>

      {/* 📦 THE ANTIQUE TRIAD ARŞİVİ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-4 z-10 relative">
        <div className="bg-[#111111]/30 border border-neutral-900/80 p-6 md:p-10 relative group backdrop-blur-sm">
          
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#d4af37] to-[#aa841b] text-black text-[8px] tracking-[0.25em] uppercase font-bold px-4 py-0.5 shadow-xl font-mono text-center">
            {t.gold_plate}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-6 border-b border-neutral-900/60 pb-4">
            <div>
              <h2 className="text-xl font-serif font-light tracking-widest text-white">{t.set_title}</h2>
              <p className="text-[9px] tracking-widest text-[#c5a880] uppercase mt-0.5">{t.set_sub}</p>
            </div>
            <div className="mt-2 md:mt-0 flex items-center gap-2 group/price relative cursor-help">
              <span className="text-xl font-serif text-[#c5a880] tracking-wider font-light">Dynamic Value</span>
              <span className="text-[9px] bg-neutral-900 border border-neutral-800 text-neutral-600 rounded-full w-3.5 h-3.5 flex items-center justify-center font-mono">?</span>
              
              <div className="absolute bottom-6 right-0 w-64 bg-[#141414] border border-[#c5a880]/30 p-3 text-[9px] text-neutral-400 leading-relaxed shadow-2xl tracking-wide opacity-0 group-hover/price:opacity-100 transition-opacity duration-300 pointer-events-none z-50 font-sans">
                <span className="text-[#d4af37] font-serif block mb-0.5">{t.tooltip_title}</span>
                {t.tooltip_desc}
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-light text-center max-w-2xl mx-auto">
            {t.set_desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#141414]/80 border border-neutral-900/60 p-4">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-0.5">Ⅰ / THE ASH RITUAL</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-1">{t.grey_title}</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{t.grey_desc}</p>
            </div>
            <div className="bg-[#141414]/80 border border-neutral-900/60 p-4">
              <span className="text-[8px] font-mono text-[#d4af37] block mb-0.5">Ⅱ / IMPERIAL REFINE</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-1">{t.white_title}</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{t.white_desc}</p>
            </div>
            <div className="bg-[#141414]/80 border border-neutral-900/60 p-4">
              <span className="text-[8px] font-mono text-[#c5a880] block mb-0.5">Ⅲ / TEKTONIC CRUST</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-1">{t.raw_title}</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{t.raw_desc}</p>
            </div>
          </div>

          {/* 🔮 ARTIFACT (GİZEMLİ GECE TAŞI) */}
          <div id="artifact" className="bg-[#131313]/90 border border-[#c5a880]/15 p-5 mb-6 text-center relative overflow-hidden scroll-mt-28">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/20 to-transparent" />
            
            <div className="inline-block text-[7px] tracking-[0.4em] font-mono text-purple-400 border border-purple-900/60 px-2 py-0.5 mb-3 bg-purple-950/10">
              [ ANCIENT CHRONIC ]
            </div>

            <span className="text-[8px] font-mono block tracking-[0.25em] mb-1.5 text-[#d4af37]">{t.monolith_title}</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-xl mx-auto text-center whitespace-pre-line">
              {t.monolith_desc}
            </p>
          </div>

          <div className="py-4 text-center border-t border-neutral-900/40">
            <p className="text-xs font-serif italic text-[#c5a880] tracking-wide max-w-xl mx-auto leading-relaxed">
              "{t.call_to_action}"
            </p>
          </div>

          {/* ALLOCATION TAHSİSAT TEKLİF ALANI */}
          <div id="allocation" className="border-t border-neutral-900/40 pt-6 scroll-mt-28">
            {!orderSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 max-w-2xl mx-auto">
                <div className="text-center mb-4">
                  <span className="text-[8px] tracking-[0.3em] text-[#c5a880] block font-mono">ACQUISITION PROTOCOL</span>
                  <h3 className="text-xs font-serif tracking-widest text-white uppercase mt-0.5">{t.form_title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder={t.input_name}
                    className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700"
                  />
                  <input 
                    type="text" 
                    required
                    value={buyerCity}
                    onChange={(e) => setBuyerCity(e.target.value)}
                    placeholder={t.input_city}
                    className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700"
                  />
                </div>
                
                <input 
                  type="number" 
                  required
                  min="1100"
                  placeholder={`Your Value Offer in EUR (${t.status_floor} €1,100)`} 
                  className="w-full bg-[#161616] border border-[#c5a880]/30 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-[#c5a880] tracking-widest font-mono placeholder:text-neutral-700"
                />

                <input 
                  type="email" 
                  required
                  placeholder={t.input_email}
                  className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono placeholder:text-neutral-700"
                />
                
                <textarea 
                  rows={2}
                  required
                  placeholder={t.input_address}
                  className="w-full bg-[#161616] border border-neutral-800 px-3 py-2.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide resize-none leading-relaxed font-sans placeholder:text-neutral-700"
                />
                
                <button 
                  type="submit" 
                  className="w-full bg-transparent border border-[#c5a880] text-[#c5a880] uppercase font-medium text-[10px] tracking-[0.3em] py-4 rounded-none hover:bg-[#c5a880] hover:text-black transition-all duration-500 shadow-2xl"
                >
                  {t.button_submit}
                </button>
              </form>
            ) : (
              <div className="py-4 text-center space-y-2">
                <span className="text-lg">🏛️</span>
                <h3 className="text-xs tracking-[0.3em] text-[#c5a880] uppercase font-bold">{t.success}</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                  {t.success_desc}
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 📜 THE ALIGNMENT CALENDAR (DİL SENKRONİZASYONLU YÜKSELEN TAKVİM) */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6 z-10 relative">
        <div className="border-t border-neutral-950 pt-6">
          <div className="text-center mb-6">
            <h3 className="text-[10px] tracking-[0.4em] text-white uppercase font-serif">
              {t.ledger_title}
            </h3>
            <p className="text-[8px] text-neutral-600 tracking-widest uppercase mt-1 font-mono">{t.ledger_sub}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
            {CALENDAR_DAYS.map((day, index) => (
              <div 
                key={index} 
                className={`border p-3 text-center flex flex-col justify-between h-36 relative transition-all duration-300 ${
                  day.status === 'void' 
                    ? 'border-purple-950/30 bg-purple-950/5' 
                    : day.status === 'open' 
                    ? 'border-[#c5a880]/30 bg-[#c5a880]/5 hover:border-[#c5a880]' 
                    : 'border-neutral-900 bg-[#111111]/20'
                }`}
              >
                <div>
                  <span className="text-[9px] font-serif block text-neutral-400 font-semibold border-b border-neutral-900/60 pb-0.5 mb-1.5">{day.date}</span>
                  <span className={`text-[11px] block font-medium font-serif ${day.status === 'void' ? 'text-purple-400 italic font-semibold animate-pulse' : 'text-white'}`}>{day.holder}</span>
                  <span className="text-[8px] text-neutral-600 block font-mono mt-0.5">{day.city}</span>
                </div>

                <div>
                  {/* Tam Senkronize Fiyat Bandı Etiketleri */}
                  <span className={`text-[8px] font-mono block mb-1.5 font-bold ${day.status === 'open' ? 'text-[#c5a880]' : 'text-neutral-500'}`}>
                    {day.isVoid 
                      ? t.status_price_void 
                      : day.status === 'open' 
                      ? `${t.status_floor} €${day.rawPrice}` 
                      : `€${day.rawPrice} (${t.status_closed})`}
                  </span>

                  {day.status === 'void' ? (
                    <span className="text-[7px] text-purple-400 font-mono block uppercase tracking-tighter py-0.5 border border-purple-950/20 bg-purple-950/10 leading-tight">
                      {t.status_void}
                    </span>
                  ) : day.status === 'open' ? (
                    <button 
                      onClick={() => scrollToSection('allocation')}
                      className="w-full text-[7px] text-black bg-[#c5a880] font-mono block uppercase tracking-widest py-0.5 font-semibold hover:bg-white transition-colors"
                    >
                      {t.status_open}
                    </button>
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
        <div className="flex gap-4 mb-2 md:mb-0 font-serif opacity-40">
          <span>London HQ</span>
          <span>Paris Vault</span>
          <span>Dubai Bureau</span>
        </div>
        <div className="text-center md:text-right font-mono opacity-20">
          <span>Phrygian Lab Ltd. © 2026 / Strictly Atypical</span>
        </div>
      </footer>

    </main>
  );
}