'use client';

import React, { useState } from 'react';

const TRANSLATIONS = {
  en: {
    protocol: 'Midaum Private Protocol',
    remaining: 'REMAINING',
    tagline: 'ATYPICAL LUXURY / THE SACRED OBJECT',
    h1: 'Older than humanity.\nCleaner than science.',
    
    menu_genesis: 'The Genesis',
    menu_covenant: 'The Covenant',
    menu_artifact: 'The Artifact',
    menu_allocation: 'The Allocation',

    manifesto1: 'Gordion was ashes. King Midas did not yield; he retreated to the silent cliffs of Midaum (İnbazarcık). There, a pure Phrygian shepherd girl offered him a light-absorbing black stone: The Obsidian Monolith. Burdened by a dying empire, Midas refused. Phrygia vanished into history, but the unreturned stone became a geological monument. Those who touch this text often encounter its heavy shadow in their deepest dreams.',
    manifesto2: '1975, İnbazarcık. An old shepherd grandmother from the same bloodline rediscovered the Monolith inside a deep marble fissure. Today, this relic travels the world, spending strictly one year with a single sovereign. Phrygian Lab encapsulates the three geological layers (The Antique Triad) inside a solid, hand-carved marble jar. Absolute beauty, metaphysical heritage. One family, one allocation per lifetime.',
    
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Triple Geological Ritual / Solid Marble Jar Archive',
    gold_plate: 'Numbered 24K Gold Mounted Plate',
    tooltip_title: 'SECRET 718: THE ASCENDING VALUATION',
    tooltip_desc: 'Genesis price: €718. Following the laws of scarcity, no allocation can be acquired below the final value of the preceding day. The value only ascends.',
    set_desc: 'Four sacred seals: "Beauty, Fortune, Metaphysical Grace, and Elemental Sovereignty." 3 layers hand-carved from Midaum depths, encased in a monolithic solid marble jar with a 24K Gold-Plated brass tag. Strictly limited to one per lineage:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'High sulfur and silica sifting through ash-grey layers. Tectonic purification against modern urban residues.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Pure calcium carbonate from lightless veins. The ageless porcelain tone of ancient imperial baths.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatic mineral crust from thermal springs. An ancient shield that completely erases time.',
    
    monolith_title: 'THE OBSIDIAN MONOLITH / THE COSMIC DRAW',
    monolith_desc: 'December 31st. A transparent cosmic draw among the 365 archive holders. The Monolith will be transferred to ONE sovereign for 365 days. The Mask brightens your skin; the Stone illuminates your destiny. The remaining 364 initiates track its global coordinates via their encrypted portal.',
    
    call_to_action: 'The ancient heritage, the absolute nobility, and your mask await within the marble jar. One family, one kütle. The value only rises.',
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
    status_void: 'The Luminous Gift (Bestowed upon One Chosen Woman)',
    status_open: 'Awaiting Value Alignment'
  },
  tr: {
    protocol: 'Midaum Mahrem Protokolü',
    remaining: 'KALAN KOTA',
    tagline: 'ATYPICAL LUXURY / KUTSAL EMANET',
    h1: 'Older than humanity.\nCleaner than science.',
    
    menu_genesis: 'Hikayesi',
    menu_covenant: 'Vaatleri',
    menu_artifact: 'Emanet',
    menu_allocation: 'Tahsisat',

    manifesto1: 'Gordion küldü. Kral Midas sahneden çekilmedi; Midaum’un (İnbazarcık) dik kayalıklarına sığındı. Sessiz dehlizlerde masum bir Frigyalı çoban kız çocuğu ona ışığı yutan siyah bir taş uzattı: The Obsidian Monolith. Midas, çöken bir imparatorluğun kederiyle bu saf hediyeyi reddetti. Frigya tarihten silindi, ama geri çevrilen o taş mermere gömülen kadim bir anıta dönüştü. Bu metne rastlayan seçkin ruhlar, gecenin rüyalarında o siyah taşın jeolojik gölgesiyle karşılaşırlar.',
    manifesto2: '1975, İnbazarcık. Aynı soydan gelen yaşlı bir çoban nene, Monolith’i bir mermer yarığında yeniden buldu. Taş, o günden beri dünyadaki en seçkin asiller arasında sadece 1’er yıl kalmak şartıyla elden ele geziyor. Phrygian Lab, bu büyük sırrı ve üçlü ritüeli (The Antique Triad), tek bir mermer bloktan el işçiliğiyle oyulmuş masif bir mermer kavanozda muhafaza ediyor. Mutlak asalet, metafiziksel miras. Her kan hattı için ömür boyu tek bir tahsisat.',
    
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Masif Mermer Kavanoz İçinde Üçlü Jeolojik Ritüel',
    gold_plate: 'Mühürlü 24K Altın Plaka',
    tooltip_title: 'SECRET 718: YÜKSELEN DEĞER PRENSİBİ',
    tooltip_desc: 'Başlangıç değeri €718’dir. Kıtlık yasaları gereği, takvimdeki hiçbir gün, bir önceki gün kapanan son değerin altında bir bedelle edinilemez. Değer sadece yükselir.',
    set_desc: 'Dört kutsal mühür: "Güzellik, Şans, Mistik Lütuf ve Elementer Egemenlik." Midaum derinliklerinden çıkarılan ve masif mermer bir kavanoz içinde adınıza mühürlenen 3 kadim katman. Her aile için tek bir tahsisatla sınırlandırılmıştır:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Kül grisi katmanlardan süzülen yüksek sülfür ve silika. Modern şehir kalıntılarından arındıran tektonik arınma.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Işıksız damarlardan izole edilen saf kalsiyum karbonat. Antik asillerin banyolarındaki pürüzsüz porselen tonu.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Termal suların bıraktığı magmatik mineral kabuk. Cilt bariyerinde zamanı tamamen silen antik bir kalkan.',
    
    monolith_title: 'THE OBSIDIAN MONOLITH / KOZMİK ÇEKİLİŞ',
    monolith_desc: '31 Aralık gecesi. 365 hak sahibi arasında şeffaf ve kutsal bir çekiliş. Monolith, o yıl 365 gün boyunca sadece BİR asile teslim edilir. Maske cildinizi, Taş ise hayatınızı ışıldatacak. Geri kalan 364 tarikat üyesi, emanetin dünyadaki koordinatlarını şifreli panelle canlı izler.',
    
    call_to_action: 'Kadim emanet, mutlak asalet ve masken o mermer kavanozun içinde seni bekliyor. Tek aile, tek kütle. Değer sadece yükselir.',
    form_title: 'ARİSTOKRAT TAHSİSAT TALEBİ & TEKLİFİ',
    input_name: 'Asil İsim & Unvan (Örn: Asil Sedat)',
    input_city: 'Şehir / Ülke (Örn: Istanbul / TR)',
    input_email: 'Şifreli Dijital Adres (E-posta)',
    input_address: 'Mühürlü masif mermer kavanozun ulaştırılacağı resmi lokasyon...',
    button_submit: 'DEĞER TEKLİFİNİ SUN VEYA TAHSİSATI KİLİTLE',
    success: 'TAHSİSAT SİCİLE İŞLENDİ',
    success_desc: 'Teklifiniz mühürlenmiştir. Konsiyerj ekibimiz yerleşiminizi doğrulamak üzere 24 saat içinde sizinle irtibat kuracaktır.',
    
    ledger_title: 'THE ALIGNMENT CALENDAR / YÜKSELEN DEĞER DÖNGÜSÜ',
    ledger_sub: '23 Haziran Gündönümünde Başlar — Sonraki günler, bir önceki günün kapanış değerinin altında edinilemez.',
    status_verified: 'Kapatıldı ve Mühürlendi',
    status_void: 'The Luminous Gift (Dünyadan Seçilen Bir Kadına Lütfedildi)',
    status_open: 'Değer Hizalanması Bekleniyor'
  },
  fr: {
    protocol: 'Protocole Privé de Midaum',
    remaining: 'QUOTA RESTANT',
    tagline: 'ATYPICAL LUXURY / L’OBJET SACRÉ',
    h1: 'Older than humanity.\nCleaner than science.',
    menu_genesis: 'L’Histoire',
    menu_covenant: 'Les Promesses',
    menu_artifact: 'La Relique',
    menu_allocation: 'L’Allocation',
    manifesto1: 'Gordion était en cendres. Le roi Midas se retira à Midaum (İnbazarcık). Une jeune bergère phrygienne lui offrit une pierre noire absorbant la lumière : Le Monolithe d’Obsidienne. Midas la refusa. La Phrygie disparut, mais la pierre devint un monument géologique. Ceux qui lisent ce texte la voient souvent dans leurs rêves.',
    manifesto2: '1975, İnbazarcık. Une grand-mère bergère redécouvrit le Monolithe dans une fissure de marbre. Aujourd’hui, cette relique voyage à raison d’un an par souverain. Phrygian Lab encapsule les trois couches (The Antique Triad) dans un pot de marbre massif. Beauté absolue. Une seule allocation par famille à vie.',
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Rituel Géologique Triple / Archive en Marbre Massif',
    gold_plate: 'Plaque en Or 24K Numérotée',
    tooltip_title: 'SECRET 718: VALUATION ASCENDANTE',
    tooltip_desc: 'Prix d’origine: €718. Aucune allocation ne peut être acquise en dessous de la valeur de clôture de la veille.',
    set_desc: 'Quatre sceaux sacrés: "Beauty, Fortune, Metaphysical Grace, and Elemental Sovereignty." 3 couches extraites de Midaum, scellées dans un pot de marbre monolithique. Limité à une allocation par famille :',
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Soufre et silice à travers des couches gris-cendré. Purification tectonique.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Carbonate de calcium pur. Le ton de porcelaine des anciens bains impériaux.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Croûte minérale magmatique. Un bouclier antique qui efface le temps.',
    monolith_title: 'LE MONOLITHE D’OBSIDIENNE / LE TIRAGE COSMIQUE',
    monolith_desc: '31 décembre. Un tirage au sort sacré parmi les 365 détenteurs. Le Monolithe est confié à UN souverain pendant 365 jours. Le Masque illumine la peau, la Pierre illumine le destin. Les 364 autres initiés suivent ses coordonnées via un portail crypté.',
    call_to_action: 'L’héritage antique, la noblesse absolue et votre masque vous attendent dans le pot de marbre. La valeur monte.',
    form_title: 'DEMANDE D’ALLOCATION ARISTOCRATIQUE',
    input_name: 'Nom & Titre de Souverain',
    input_city: 'Ville / Pays',
    input_email: 'Adresse Digitale Cryptée',
    input_address: 'La destination officielle pour le pot de marbre...',
    button_submit: 'SOUMETTRE L’OFFRE DE VALEUR',
    success: 'ALLOCATION ENREGISTRÉE DANS LE REGISTRE',
    success_desc: 'Votre offre a été scellée. Notre conciergerie vous contactera sous 24 heures.',
    ledger_title: 'THE ALIGNMENT CALENDAR / LE CYCLE DE VALEUR',
    ledger_sub: 'Débutant au solstice du 23 juin — La valeur ne peut jamais descendre.',
    status_verified: 'Clôturé & Scellé',
    status_void: 'The Luminous Gift (Attribué à une femme choisie)',
    status_open: 'En Attente de Valeur'
  },
  de: {
    protocol: 'Midaum Privat Protokoll',
    remaining: 'RESTKONTINGENT',
    tagline: 'ATYPICAL LUXURY / DAS HEILIGE OBJEKT',
    h1: 'Older than humanity.\nCleaner than science.',
    menu_genesis: 'Geschichte',
    menu_covenant: 'Versprechen',
    menu_artifact: 'Relikt',
    menu_allocation: 'Zuweisung',
    manifesto1: 'Gordion war Asche. König Midas zog sich nach Midaum (İnbazarcık) zurück. Ein phrygisches Hirtenmädchen bot ihm einen lichtabsorbierenden schwarzen Stein an: Den Obsidian-Monolithen. Midas lehnte ab. Phrygien ging unter, aber der Stein blieb als geologisches Denkmal. Wer diesen Text liest, begegnet ihm oft in seinen tiefsten Träumen.',
    manifesto2: '1975, İnbazarcık. Eine alte Hirten-Großmutter fand das Relikt in einer Marmorspalte wieder. Heute reist dieser Stein um die Welt, jeweils ein Jahr pro Souverän. Phrygian Lab bewahrt die drei Schichten (The Antique Triad) in einem massiven Marmorgefäß. Absolute Schönheit. Nur eine Zuweisung pro Familie im Leben.',
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Dreifaches geologisches Ritual im massiven Marmorgefäß',
    gold_plate: 'Nummerierte 24K Goldplakette',
    tooltip_title: 'SECRET 718: AUFSTEIGENDE BEWERTUNG',
    tooltip_desc: 'Startwert: €718. Keine Zuweisung kann unter dem Schlusswert des Vortages erworben werden.',
    set_desc: 'Vier heilige Siegel: "Beauty, Fortune, Metaphysical Grace, and Elemental Sovereignty." 3 Schichten aus den Tiefen von Midaum, versiegelt in einem Marmorgefäß. Streng limitiert auf eine Zuweisung pro Familie:',
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Hoher Schwefel- und Siliziumgehalt. Tektonische Reinigung gegen urbane Rückstände.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Reines Kalziumkarbonat. Der makellose Porzellanton antiker kaiserlicher Bäder.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatische Mineralkruste. Ein antiker Schutzschild, der die Zeit löscht.',
    monolith_title: 'DER OBSIDIAN-MONOLITH / DIE KOSMISCHE VERLOSUNG',
    monolith_desc: '31. Dezember. Eine heilige Verlosung unter den 365 Zertifikatsinhabern. Der Monolith geht für 365 Tage an genau EINEN Souverän. Die Maske bringt die Haut zum Strahlen, der Stein erleuchtet das Schicksal. Die restlichen 364 Eingeweihten verfolgen die Koordinaten live.',
    call_to_action: 'Das antike Erbe, der absolute Adel und Ihre Maske erwarten Sie im Marmorgefäß. Der Wert steigt.',
    form_title: 'ARISTOKRATISCHE ZUWEISUNGSANFRAGE',
    input_name: 'Name & Titel des Souveräns',
    input_city: 'Stadt / Land',
    input_email: 'Verschlüsselte E-Mail',
    input_address: 'Der offizielle Bestimmungsort für das Marmorgefäß...',
    button_submit: 'WERTANGEBOT ABGEBEN',
    success: 'ZUWEISUNG IM REGISTER ERFASST',
    success_desc: 'Ihr Angebot wurde versiegelt. Unser Concierge wird sich innerhalb von 24 Stunden melden.',
    ledger_title: 'THE ALIGNMENT CALENDAR / DER AUFSTEIGENDE ZYKLUS',
    ledger_sub: 'Beginnend mit der Sonnenwende am 23. Juni — Der Wert sinkt niemals.',
    status_verified: 'Geschlossen & Versiegelt',
    status_void: 'The Luminous Gift (Einer auserwählten Frau verliehen)',
    status_open: 'Wartet auf Wertausrichtung'
  },
  ru: {
    protocol: 'Частный Протокол Мидаума',
    remaining: 'ОСТАТОК КВОТЫ',
    tagline: 'ATYPICAL LUXURY / СВЯЩЕННЫЙ ОБЪЕКТ',
    h1: 'Older than humanity.\nCleaner than science.',
    menu_genesis: 'История',
    menu_covenant: 'Обещания',
    menu_artifact: 'Реликвия',
    menu_allocation: 'Выделение',
    manifesto1: 'Гордион был в пепле. Царь Мидас укрылся в скалах Мидаума (Инбазарджик). Юная фригийская пастушка протянула ему поглощающий свет черный камень: Обсидиановый Монолит. Мидас отверг его. Фригия исчезла, но камень стал геологическим монументом. Читающие этот текст часто видят его в своих глубоких снах.',
    manifesto2: '1975, Инбазарджик. Пожилая бабушка-пастушка из того же рода вновь нашла Монолит в мраморной расщелине. Сегодня реликвия путешествует по миру, оставаясь строго на год у одного суверена. Phrygian Lab заключает три ритуальных слоя (The Antique Triad) в массивный мраморный сосуд. Абсолютная красота. Одно выделение на семью за всю жизнь.',
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Тройной Геологический Ритуал в Массивном Мраморном Сосуде',
    gold_plate: 'Номерная табличка с 24К золотым напылением',
    tooltip_title: 'SECRET 718: ВОЗРАСТАЮЩАЯ СТОИМОСТЬ',
    tooltip_desc: 'Начальная цена: €718. Ни одно последующее выделение не может быть приобретено ниже стоимости закрытия предыдущего дня.',
    set_desc: 'Четыре священные печати: "Beauty, Fortune, Metaphysical Grace, and Elemental Sovereignty." 3 слоя из глубин Мидаума внутри монолитного мраморного сосуда с латунной табличкой 24К. Строго одно выделение на семью:',
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Высокое содержание серы и кремния. Тектоническое очищение от токсинов города.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Чистый карбонат кальция из темных жил. Безупречный фарфоровый тон императорских купален.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Магматическая минеральная корка. Древний щит, полностью стирающий время.',
    monolith_title: 'ОБСИДИАНОВЫЙ МОНОЛИТ / КОСМИЧЕСКАЯ ЖЕРЕБЬЕВКИ',
    monolith_desc: '31 декабря. Священная жеребьевка среди 365 владельцев. Монолит передается ОДНОМУ суверену на 365 дней. Маска заставит сиять вашу кожу, камень озарит вашу судьбу. Остальные 364 посвященных отслеживают его координаты через шифрованный портал.',
    call_to_action: 'Древнее наследие, абсолютное благородство и ваша маска ждут вас внутри мраморного сосуда. Ценность только растет.',
    form_title: 'ЗАПРОС НА ВЫДЕЛЕНИЕ И ЦЕНОВОЕ ПРЕДЛОЖЕНИЕ',
    input_name: 'Имя и титул суверена',
    input_city: 'Город / Страна',
    input_email: 'Зашифрованный Email',
    input_address: 'Официальный адрес доставки мраморного сосуда...',
    button_submit: 'ОТПРАВИТЬ ЦЕНОВОЕ ПРЕДЛОЖЕНИЕ',
    success: 'ВЫДЕЛЕНИЕ ЗАРЕГИСТРИРОВАНО В РЕЕСТРЕ',
    success_desc: 'Ваше предложение запечатано. Консьерж свяжется с вами в течение 24 часов.',
    ledger_title: 'THE ALIGNMENT CALENDAR / ЦИКЛ ВОЗРАСТАНИЯ ЦЕННОСТИ',
    ledger_sub: 'Начиная с солнцестояния 23 июня — Стоимость никогда не снижается.',
    status_verified: 'Закрыто и Запечатано',
    status_void: 'The Luminous Gift (Даровано одной избранной женщине)',
    status_open: 'Ожидание ценового предложения'
  },
  ar: {
    protocol: 'بروتوكول ميداعوم الخاص',
    remaining: 'الحصة المتبقية',
    tagline: 'ATYPICAL LUXURY / المقتنى المقدس',
    h1: 'Older than humanity.\nCleaner than science.',
    menu_genesis: 'النشأة',
    menu_covenant: 'الوعود',
    menu_artifact: 'الأمانة',
    menu_allocation: 'التخصيص',
    manifesto1: 'كان غورديون رماداً. لم يستسلم الملك ميداس، بل تراجع إلى منحدرات ميداعوم (إنبازارجيك). هناك، قدمت له راعية غنم فريجية حجراً أسود يمتص الضوء: كتلة الهالة السوداء. رفضه ميداس بسبب ثقل حزنه. اختفت فريجيا، لكن الحجر المرفوض أصبح معلماً جيولوجياً. أولئك الذين يمرون بهذا النص يواجهون ظله الثقيل في أعمق أحلامهم.',
    manifesto2: '1975، إنبازارجيك. أعادت جدة عجوز راعية غنم من السلالة نفسها اكتشاف الحجر داخل شق رخامي عميق. اليوم، يطوف هذا الحجر العالم ليمكث عاماً واحداً لدى سيادي واحد. يجمع مختبر فريجيان الطبقات الثلاث (The Antique Triad) داخل وعاء رخامي مصمت فاخر. أصالة مطلقة. تخصيص واحد فقط لكل عائلة طوال الحياة.',
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'طقوس جيولوجية ثلاثة داخل وعاء رخامي مصمت فاخر',
    gold_plate: 'لوحة نحاسية مطلية بذهب عيار 24',
    tooltip_title: 'SECRET 718: القيمة التصاعدية',
    tooltip_desc: 'القيمة الافتتاحية: €718. بموجب قوانين الندرة، لا يمكن حيازة أي تخصيص بقيمة أقل من قيمة إغلاق اليوم السابق.',
    set_desc: 'الأختام الأربعة المقدسة: "Beauty, Fortune, Metaphysical Grace, and Elemental Sovereignty." 3 طبقات مستخرجة من أعماق ميداعوم، محفوظة داخل وعاء رخامي مع لوحة ذهبية تحمل اسمك. يقتصر على تخصيص واحد لكل عائلة بدقة:',
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'كبريت وفير وسيليكا تتغلغل في طبقات رمادية. طقس تطهير تكتوني ضد رواسب المدن الحديثة.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'كربونات الكالسيوم النقية من العروق المظلمة. تمنح البشرة بياض الخزف الملكي الساحر.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'قشرة معدنية صهارية من اليнаبيع الحرارية. درع أثري يمحو أثر الزمن تماماً.',
    monolith_title: 'كتلة الهالة السوداء / القرعة الكونية المقدسة',
    monolith_desc: 'ليلة 31 ديسمبر. قرعة علنية مقدسة بين الملّاك الـ 365. يُنقل الحجر إلى سيادي واحد لمدة 365 يوماً. القناع يضيء بشرتك، والحجر ينير قدرك. يتابع الأعضاء الـ 364 الآخرون موقع الجرم عبر بوابتهم المشفرة.',
    call_to_action: 'إن الإرث القديم، والنبل المطلق، وقناعك بانتظارك داخل الوعاء الرخامي. عائلة واحدة، كتلة واحدة. القيمة ترتفع باستمرار.',
    form_title: 'طلب تخصيص سيادي وتقديم عرض قيمة',
    input_name: 'اسم السير واللقب السيادي',
    input_city: 'المدينة / الدولة',
    input_email: 'العنوان الرقمي المشفر',
    input_address: 'الوجهة الرسمية لتسليم الوعاء الرخامي...',
    button_submit: 'تقديم عرض القيمة وتأمين التخصيص',
    success: 'تم تسجيل التخصيص والعرض في السجل',
    success_desc: 'تم تسجيل عرضك بنجاح. سيتصل بك فريق الكونسيرج عبر عنوانك المشفر خلال 24 ساعة.',
    ledger_title: 'THE ALIGNMENT CALENDAR / دورة القيمة التصاعدية الكونية',
    ledger_sub: 'تبدأ من الانقلاب الشمسي في 23 يونيو — لا يمكن حيازتها بأقل من قيمة الإغلاق السابقة.',
    status_verified: 'مغلق ومختوم',
    status_void: 'The Luminous Gift (مُُنحت لامرأة واحدة مختارة)',
    status_open: 'في انتظار محاذاة القيمة'
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'tr' | 'fr' | 'de' | 'ru' | 'ar'>('en');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerCity, setBuyerCity] = useState('');

  const t = TRANSLATIONS[lang];

  const CALENDAR_DAYS = [
    { date: 'June 23', holder: 'Sovereign S.', city: 'Istanbul', status: 'verified', value: '€718 (Closed)' },
    { date: 'June 24', holder: 'Sovereign A.', city: 'London', status: 'verified', value: '€850 (Closed)' },
    { date: 'June 25', holder: 'Sovereign M.', city: 'Paris', status: 'verified', value: '€980 (Closed)' },
    { date: 'June 26', holder: 'The Chosen One', city: 'Anonymized', status: 'void', value: 'Priceless' },
    { date: 'June 27', holder: 'Sovereign V.', city: 'Vienna', status: 'verified', value: '€1,100 (Closed)' },
    { date: 'June 28', holder: 'Open for Offers', city: 'Global', status: 'open', value: 'Floor: €1,100' },
    { date: 'June 29', holder: 'Open for Offers', city: 'Global', status: 'open', value: 'Floor: €1,100' },
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
      
      {/* 🔮 Kozmik Dehliz Aydınlatmaları */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(circle,rgba(197,168,128,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(214,175,55,0.01)_0%,transparent_60%)] blur-3xl pointer-events-none" />

      {/* 🏛️ PREMIUM STICKY HEADER (LOGOYU KÜÇÜLTTÜK VE SIKILAŞTIRDIK) */}
      <header className="w-full max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center z-50 relative border-b border-neutral-900/20 gap-4 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md">
        
        <div className="flex flex-col items-center lg:items-start cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-lg md:text-xl font-extralight tracking-[0.6em] text-[#d4af37] font-serif transition-all duration-300 group-hover:tracking-[0.65em]">PHRYGIAN LAB</span>
          <span className="text-[8px] tracking-[0.4em] uppercase opacity-30 mt-0.5 font-sans">{t.protocol}</span>
        </div>

        <nav className="flex items-center gap-6 md:gap-8 text-[9px] tracking-[0.3em] uppercase font-serif text-neutral-400">
          <button onClick={() => scrollToSection('genesis')} className="hover:text-[#d4af37] transition-colors">{t.menu_genesis}</button>
          <button onClick={() => scrollToSection('covenant')} className="hover:text-[#d4af37] transition-colors">{t.menu_covenant}</button>
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

      {/* 📜 GENESIS (DAMITILMIŞ KISA METİNLER) */}
      <section id="genesis" className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center pt-20 pb-12 z-10 relative scroll-mt-28">
        <p className="text-[9px] tracking-[0.6em] uppercase text-[#c5a880] mb-6 font-semibold">
          {t.tagline}
        </p>

        <h1 className="text-3xl md:text-5xl font-serif font-extralight tracking-wide leading-tight max-w-3xl mb-8 text-white whitespace-pre-line">
          {t.h1}
        </h1>

        <div className="w-12 h-[1px] bg-[#c5a880]/20 mb-8" />

        <p className="text-xs md:text-sm font-light tracking-wide text-neutral-400 max-w-2xl leading-relaxed mb-4 text-center">
          {t.manifesto1}
        </p>
        
        <p className="text-xs md:text-sm font-light tracking-wide text-neutral-500 max-w-2xl leading-relaxed mb-8 text-center">
          {t.manifesto2}
        </p>
      </section>

      {/* 📦 THE ANTIQUE TRIAD ARŞİVİ */}
      <section id="covenant" className="w-full max-w-4xl mx-auto px-6 py-6 z-10 relative scroll-mt-28">
        <div className="bg-[#111111]/30 border border-[#c5a880]/20 p-6 md:p-10 relative group backdrop-blur-sm">
          
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
              
              <div className="absolute bottom-6 right-0 w-60 bg-[#141414] border border-[#c5a880]/30 p-3 text-[9px] text-neutral-400 leading-relaxed shadow-2xl tracking-wide opacity-0 group-hover/price:opacity-100 transition-opacity duration-300 pointer-events-none z-50 font-sans">
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
                  placeholder="Your Value Offer in EUR (Floor: €1,100)" 
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
                  className="w-full bg-transparent border border-[#c5a880] text-[#c5a880] uppercase font-medium text-[10px] tracking-[0.3em] py-3.5 rounded-none hover:bg-[#c5a880] hover:text-black transition-all duration-500 shadow-2xl"
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

      {/* 📜 THE ALIGNMENT CALENDAR (YÜKSELEN DEĞER DÖNGÜSÜ) */}
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
                  <span className={`text-[8px] font-mono block mb-1.5 font-bold ${day.status === 'open' ? 'text-[#c5a880]' : 'text-neutral-500'}`}>
                    {day.value}
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
                      Offer
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