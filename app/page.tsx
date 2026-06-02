'use client';

import React, { useState } from 'react';

const TRANSLATIONS = {
  en: {
    protocol: 'Midaum Sanctuary Protocol',
    remaining: 'REMAINING',
    tagline: 'ATYPICAL LUXURY / THE SACRED OBJECT OF DESIRE',
    h1: 'Older than humanity.\nCleaner than science.',
    
    menu_genesis: 'The Genesis',
    menu_covenant: 'The Covenant',
    menu_artifact: 'The Artifact',
    menu_allocation: 'The Allocation',

    manifesto1: 'While Gordion was burning under the Cimmerian fire, King Midas retreated to the high cliffs of Midaum (İnbazarcık). In those silent caverns, a pure Phrygian shepherd girl extended her hand, offering him a black stone that absorbed all light—The Obsidian Monolith. Burdened by the weight of a dying empire, Midas refused the girl’s pure gift. That single refusal marked the metaphysical collapse of Phrygia; the people scattered, and their name vanished from history. It is whispered among the few who know that this unreturned stone carries an ancient, heavy resonance—those whose eyes cross this text often encounter the Monolith in their subconscious weight, a quiet geological shadow that refuses to leave the mind until the circle is restored.',
    manifesto2: 'In 1975, exactly 2700 years later, an old shepherd grandmother, descending from the same lineage in the marble fissures of İnbazarcık, rediscovered the Monolith. Today, this stone travels the world, spending strictly one year with a single sovereign. Phrygian Lab brings forth the three geological layers (The Antique Triad) encapsulated within a single, solid hand-carved marble jar—a heavy monument of preservation. This is not industrial cosmetics; it is an initiation into an elite, unspoken order of absolute beauty and metaphysical heritage.',
    
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Triple Geological Ritual from Midaum Vaults',
    gold_plate: 'Numbered 24K Gold Mounted Plate / Solid Marble Jar Archive',
    tooltip_title: 'SECRET 718: THE REFUSAL OF MIDAS',
    tooltip_desc: 'Consecrated to the year 718 BC, when King Midas refused the shepherd girl’s gift in Midaum, sealing the fate of an entire empire. Free from human market dynamics.',
    set_desc: 'This holistic set includes 3 sacred geological layers hand-carved from the depths of Midaum, safely resting inside a monolithic solid marble jar, sealed with a 24K Gold-Plated brass tag (e.g., 014 / 365) personalized in your name:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'High sulfur and silica sifting through ash-grey layers. A tectonic purification ritual that purges modern urban residues.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Pure calcium carbonate isolated from lightless veins. Offers the smooth, ageless porcelain tone of ancient imperial baths.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatic mineral crust deposited over millennia by thermal springs. Erases time by forming an ancient shield over the skin barrier.',
    
    monolith_title: 'THE OBSIDIAN MONOLITH / THE COSMIC DRAW PROVOCATION',
    monolith_desc: 'On the night of December 31st, aligned with cosmic Jove, the Obsidian Monolith (The Night Stone) will be transferred to strictly ONE sovereign via a transparent, sacred draw among the 365 archive holders. The chosen custodian vows to protect this relic for 365 days, witnessing unparalleled metaphysical grace, ageless beauty, and absolute Phrygian fortune, before passing it to the next sovereign. The Mask brightens your skin; the Stone illuminates your destiny. The remaining 364 initiates will log in via their encrypted portal to witness live where the sovereign grace resides this year.',
    
    call_to_action: 'The ancient heritage, the absolute nobility, and your mask await you within the solid marble jar. The search is over. Perhaps, the chosen one is you.',
    form_title: 'ARISTOCRATIC ALLOCATION REQUEST',
    input_name: 'Aristocratic Name & Title (e.g., Baron Sedat)',
    input_city: 'City / Country (e.g., London / UK)',
    input_email: 'Encrypted Digital Address (Email)',
    input_address: 'The official destination where the sealed solid marble jar and gold plate shall be delivered...',
    button_submit: 'SECURE TRIAD ALLOCATION / INITIATE',
    success: 'ALLOCATION RECORDED IN THE LEDGER',
    success_desc: 'Your Antique Triad set inside the solid marble jar and 365-day cosmic alignment right have been sealed under your name. Our concierge will contact your encrypted address within 24 hours.',
    ledger_title: 'THE LEDGER OF SOVEREIGNS / ACTIVE INITIATES',
    verified: 'Verified Holder'
  },
  tr: {
    protocol: 'Midaum Sığınak Protokolü',
    remaining: 'KALAN KOTA',
    tagline: 'ATYPICAL LUXURY / KUTSAL EMANET VE ARZU NESNESİ',
    h1: 'Older than humanity.\nCleaner than science.',
    
    menu_genesis: 'Hikayesi',
    menu_covenant: 'Vaatleri',
    menu_artifact: 'Emanet',
    menu_allocation: 'Tahsisat',

    manifesto1: 'Gordion, Kimmerlerin amansız ateşiyle kavrulurken; Kral Midas, sığınak şehri Midaum’un (İnbazarcık) dik kayalıklarına çekildi. O sessiz dehlizlerde, masum bir Frigyalı çoban kız çocuğu ona ışığı yutan siyah bir taş uzattı: The Obsidian Monolith (Gece Taşı). Ancak Midas, çöken bir krallığın kederi ve kibriyle o küçük kızın saf hediyesini almayı reddetti. İşte o an, Frigya’nın metafiziksel çöküşünün başladığı andı; halk dağıldı ve o tarihten sonra bir daha asla var olamadılar. Kadim bir fısıltı der ki; bu geri çevrilen mermer kütlesi öyle ağır bir frekans taşır ki, bu metne rastlayan seçkin ruhlar, çember tamamlanana kadar gecenin derin rüyalarında o siyah taşın jeolojik gölgesiyle karşılaşırlar. Zihni terk etmeyen asil bir ağırlık.',
    manifesto2: 'Tam 2700 yıl boyunca gizlenen o taş, 1975 yılında İnbazarcık kayalıklarında koyunlarını otlatan yaşlı bir çoban nene tarafından mermer yarığının içinde yeniden bulundu. Taş, o günden beri dünyadaki en seçkin asiller arasında sadece 1’er yıl kalmak şartıyla elden ele geziyor. Phrygian Lab, bu büyük sırrı ve üçlü ritüeli (The Antique Triad), tek bir mermer bloktan el işçiliğiyle oyulmuş masif bir mermer kavanozun içinde muhafaza ederek gün yüzüne çıkarıyor. Bu endüstriyel kozmetik değildir; gizemli bir sadakat çemberine dahil olmaktır.',
    
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Masif Mermer Kavanoz İçinde Üçlü Jeolojik Ritüel',
    gold_plate: 'Numbered 24K Gold Mounted Plate / Masif Mermer Kavanoz Arşivi',
    tooltip_title: 'SECRET 718: MIDAS\'IN REDDEDİŞİ',
    tooltip_desc: 'Kral Midas’ın Midaum sığınağında çoban kızın hediyesini reddettiği ve koskoca bir halkın kaderini mühürlediği M.Ö. 718 yılının kronolojisine adanmıştır.',
    set_desc: 'Bu bütünsel set, Midaum topraklarının derinliklerinden titizlikle çıkarılan ve masif mermer bir kavanoz içinde adınıza el işçiliğiyle işlenen 24 Ayar Altın Kaplama Pirinç Plaka ile mühürlenen (Örn: 014 / 365) 3 kadim katmanı içerir:',
    
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Kül grisi katmanlardan süzülen yüksek sülfür ve silika. Hücreleri modern şehir kalıntılarından arındıran tektonik arınma.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Işıksız damarlardan izole edilen saf kalsiyum karbonat. Antik asillerin banyolarındaki pürüzsüz porselen tonu ve mutlak arılık.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Termal suların binlerce yılda bıraktığı magmatik mineral kabuk. Cilt bariyerini dış etkenlere karşı antik bir kalkanla örerek zamanı siler.',
    
    monolith_title: 'THE OBSIDIAN MONOLITH / KOZMİK ÇEKİLİŞ RİTÜELİ',
    monolith_desc: '31 Aralık gecesi, kozmik hizalanmaya göre, 365 mülkiyet sahibi arasında yapılacak şeffaf ve kutsal bir çekilişle, o yılın tek emanetçisi seçilecek ve The Obsidian Monolith (Gece Taşı) ona teslim edilecektir. Bu taşı teslim alan asil, onun getireceği mutlak bereketi ve yaşlanmayan güzelliği hayatında bizzat deneyimleyeceğini, ancak taşı sadece 1 yıl elinde tutacağını ve sonraki yıl yeni seçilecek asile devredeceğini taahhüt eder. Maske cildinizi, Taş ise hayatınızı ışıldatacak. Geri kalan 364 tarikat üyesi, o gece şifreli panelle giriş yaparak, emanetin dünyada hangi koordinata devredildiğini canlı izleyecektir.',
    
    call_to_action: 'Kadim emanet, mutlak asalet ve masken o mermer kavanozun içinde seni bekliyor. Arayış bitti. Belki de aradığımız o aristokrat sensin.',
    form_title: 'ARİSTOKRAT TAHSİSAT TALEBİ',
    input_name: 'Aristokrat İsim & Unvan (Örn: Baron Sedat)',
    input_city: 'Şehir / Ülke (Örn: Istanbul / TR)',
    input_email: 'Şifreli Dijital Adres (E-posta)',
    input_address: 'Mühürlü masif mermer kavanozun ve altın plakanın ulaştırılacağı resmi teslimat lokasyonu...',
    button_submit: 'SECURE TRIAD ALLOCATION / SETİ REZERVE ET',
    success: 'TAHSİSAT SİCİLE İŞLENDİ',
    success_desc: 'Masif mermer kavanoz içindeki The Antique Triad setiniz ve 365 günlük kozmik döngü hakkınız adınıza mühürlenmiştir. Konsiyerj ekibimiz 24 saat içinde sizinle irtibat kuracaktır.',
    ledger_title: 'THE LEDGER OF SOVEREIGNS / HÜKÜMDARLAR SİCİLİ',
    verified: 'Onaylanmış Hak Sahibi'
  },
  fr: {
    protocol: 'Protocole de Sanctuaire de Midaum',
    remaining: 'QUOTA RESTANT',
    tagline: 'ATYPICAL LUXURY / L’OBJET SACRÉ DU DÉSIR',
    h1: 'Older than humanity.\nCleaner than science.',
    menu_genesis: 'L’Histoire',
    menu_covenant: 'Les Promesses',
    menu_artifact: 'La Relique',
    menu_allocation: 'L’Allocation',
    manifesto1: 'Alors que Gordion brûlait, le roi Midas se retira à Midaum (İnbazarcık). Dans ces cavernes, une jeune bergère phrygienne lui offrit une pierre noire absorbant la lumière—Le Monolithe d’Obsidienne. Accablé par le chagrin, Midas refusa ce don pur. Ce refus marqua le déclin métaphysique de la Phrygie. On murmure que ceux dont les yeux croisent ce texte rencontrent souvent le Monolithe dans le poids de leurs rêves...',
    manifesto2: 'En 1975, exactement 2700 ans plus tard, une vieille grand-mère bergère redécouvrit le Monolithe. Depuis, cette pierre voyage à travers le monde, passant strictement un an avec un seul souverain. Phrygian Lab ressuscite les trois couches géologiques (The Antique Triad) encapsulées dans un pot de marbre massif sculpté à la main. Le Masque illumine votre peau. La Pierre illumine votre destin.',
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Rituel Géologique Triple dans un Pot de Marbre Massif',
    gold_plate: 'Plaque en Or 24K Numérotée / Pot de Marbre Archive',
    tooltip_title: 'SECRET 718: LE REFUS DE MIDAS',
    tooltip_desc: 'Consacré à l’an 718 av. J.-C., lorsque le roi Midas refusa le don de la bergère, scellant le destin de tout son peuple.',
    set_desc: 'Ce coffret holistique comprend 3 couches géologiques sacrées extraites de Midaum, protégées dans un pot de marbre monolithique, scellées d’une plaque en laiton plaqué or 24K à votre nom :',
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Soufre et silice à travers des couches gris-cendré. Un rituel de purification tectonique contre les résidus urbains.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Carbonate de calcium pur issu de veines sans lumière. Offre le ton de porcelaine des anciens bains impériaux.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Croûte minérale magmatique déposée par les sources thermales. Efface le temps en formant un bouclier sur la peau.',
    monolith_title: 'LE MONOLITHE D’OBSIDIENNE / LE RITUEL DU TIRAGE AU SORT COSMIQUE',
    monolith_desc: 'Le 31 décembre, par un tirage au sort sacré et transparent parmi les 365 détenteurs, le Monolithe sera transféré à UN seul souverain. Le gardien jure de protéger cette relique pendant 365 jours, vivant une grâce métaphysique, avant de la transmettre. Les 364 autres initiés se connecteront à leur portail pour observer où réside la grâce cette année.',
    call_to_action: 'L’héritage antique, la noblesse absolue et votre masque vous attendent dans le pot de marbre. La recherche est terminée. Peut-être que l’élu, c’est vous.',
    form_title: 'DEMANDE D’ALLOCATION ARISTOCRATIQUE',
    input_name: 'Nom & Titre Aristocratique (ex: Baron Sedat)',
    input_city: 'Ville / Pays (ex: Paris / FR)',
    input_email: 'Adresse Digitale Cryptée (Email)',
    input_address: 'La destination officielle où le pot de marbre massif scellé et la plaque d’or seront livrés...',
    button_submit: 'SÉCURISER L’ALLOCATION / INITIALISER',
    success: 'ALLOCATION ENREGISTRÉE DANS LE REGISTRE',
    success_desc: 'Votre coffret Antique Triad dans son pot de marbre a été scellé. Notre conciergerie vous contactera sous 24 heures.',
    ledger_title: 'LE REGISTRE DES SOUVERAINS / INITIÉS ACTIFS',
    verified: 'Détenteur Vérifié'
  },
  de: {
    protocol: 'Midaum Heiligtum Protokoll',
    remaining: 'RESTKONTINGENT',
    tagline: 'ATYPICAL LUXURY / DAS HEILIGE OBJEKT BEGEHREN',
    h1: 'Older than humanity.\nCleaner than science.',
    menu_genesis: 'Geschichte',
    menu_covenant: 'Versprechen',
    menu_artifact: 'Relikt',
    menu_allocation: 'Zuweisung',
    manifesto1: 'Als Gordion brannte, zog sich König Midas nach Midaum (İnbazarcık) zurück. Dort bot ihm ein reines phrygisches Hirtenmädchen einen schwarzen Stein an—den Obsidian-Monolithen. Voller Kummer lehnte Midas dieses reine Geschenk ab. Diese Ablehnung besiegelte den metaphysischen Untergang Phrygiens. Es wird gemunkelt, dass diejenigen, die diesen Text lesen, dem Monolithen oft in der Tiefe ihrer Träume begegnen...',
    manifesto2: 'Im Jahr 1975, genau 2700 Jahre später, entdeckte eine alte Hirten-Großmutter das Relikt in einer Spalte wieder. Seitdem reist dieser Stein um die Welt und verbleibt jeweils ein Jahr bei einem Souverän. Phrygian Lab präsentiert die drei geologischen Schichten (The Antique Triad) geschützt in einem massiven, handgefertigten Marmorgefäß. Die Maske bringt Ihre Haut zum Strahlen. Der Stein erleuchtet Ihr Schicksal.',
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Dreifaches geologisches Ritual im massiven Marmorgefäß',
    gold_plate: 'Nummerierte 24K Goldplakette / Massives Marmorgefäß Archiv',
    tooltip_title: 'SECRET 718: DIE ABLEHNUNG DES MIDAS',
    tooltip_desc: 'Gewidmet dem Jahr 718 v. Chr., als König Midas das Geschenk des Hirtenmädchens ablehnte und das Schicksal eines Volkes besiegelte.',
    set_desc: 'Dieses ganzheitliche Set enthält 3 heilige geologische Schichten, geborgen in einem monolithischen Marmorgefäß, versiegelt mit einer 24K vergoldeten Messingplakette in Ihrem Namen:',
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Hoher Schwefel- und Siliziumgehalt durch aschgraue Schichten. Ein tektonisches Reinigungsritual gegen urbane Rückstände.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Reines Kalziumkarbonat aus lichtlosen Adern. Verleiht den makellosen Porzellanton antiker kaiserlicher Bäder.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Magmatische Mineralkruste aus thermalen Quellen. Löscht die Zeit durch einen antiken Schutzschild auf der Haut.',
    monolith_title: 'DER OBSIDIAN-MONOLITH / DAS RITUEL DER KOSMISCHEN VERLOSUNG',
    monolith_desc: 'Am 31. Dezember wird der Monolith durch eine heilige und transparente Verlosung unter den 365 Zertifikatsinhabern an genau EINEN Souverän übergeben. Der Hüter verpflichtet sich, dieses Relikt 365 Tage lang zu schützen, um metaphysische Gnade zu erfahren, bevor er es weitergibt. Die restlichen 364 Eingeweihten loggen sich ein, um live zu sehen, wo die Souveränität weilt.',
    call_to_action: 'Das antike Erbe, der absolute Adel und Ihre Maske erwarten Sie im Marmorgefäß. Die Suche ist vorbei. Vielleicht sind Sie der Auserwählte.',
    form_title: 'ARISTOKRATISCHE ZUWEISUNGSANFRAGE',
    input_name: 'Aristokratischer Name & Titel (z. B. Baron Sedat)',
    input_city: 'Stadt / Land (z. B. Wien / AT)',
    input_email: 'Verschlüsselte digitale Adresse (E-Mail)',
    input_address: 'Der offizielle Bestimmungsort, an den das versiegelte massive Marmorgefäß und die Goldplakette geliefert werden...',
    button_submit: 'ZUWEISUNG SICHERN / RESERVIEREN',
    success: 'ZUWEISUNG IM REGISTER ERFASST',
    success_desc: 'Ihr Antique Triad Set im massiven Marmorgefäß wurde auf Ihren Namen versiegelt. Unser Concierge wird sich innerhalb von 24 Stunden mit Ihnen in Verbindung setzen.',
    ledger_title: 'DAS REGISTER DER SOUVERÄNE / AKTIVE MITGLIEDER',
    verified: 'Verifizierter Inhaber'
  },
  ru: {
    protocol: 'Протокол Святилища Мидаума',
    remaining: 'ОСТАТОК КВОТЫ',
    tagline: 'ATYPICAL LUXURY / СВЯЩЕННЫЙ ОБЪЕКТ ЖЕЛАНИЯ',
    h1: 'Older than humanity.\nCleaner than science.',
    menu_genesis: 'История',
    menu_covenant: 'Обещания',
    menu_artifact: 'Реликвия',
    menu_allocation: 'Выделение',
    manifesto1: 'Когда Гордион пылал, царь Мидас отступил к скалам Мидаума (Инбазарджик). Там юная фригийская пастушка протянула ему черный камень — Обсидиановый Монолит. Подавленный скорбью, Мидас отверг этот чистый дар. Этот отказ ознаменовал метафизический крах Фригии. Поговаривают, что те, кто читает этот текст, часто видят Монолит в глубине своих снов...',
    manifesto2: 'В 1975 году, ровно 2700 лет спустя, пожилая бабушка-пастушка вновь нашла Монолит в мраморной расщелине Инбазарджика. Сегодня этот камень путешествует по миру, оставаясь строго на год у одного избранного. Phrygian Lab представляет три геологических слоя (The Antique Triad), заключенных в массивный мраморный сосуд ручной работы. Маска заставит сиять вашу кожу. Камень озарит вашу судьбу.',
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'Тройной Геологический Ритуал в Массивном Мраморном Сосуде',
    gold_plate: 'Номерная табличка с 24К золотым напылением / Мраморный Сосуд',
    tooltip_title: 'SECRET 718: ОТКАЗ МИДАСА',
    tooltip_desc: 'Посвящено 718 году до н.э., когда царь Мидас отверг дар пастушки в Мидауме, предопределив гибель империи.',
    set_desc: 'Этот холистический набор включает 3 священных геологических слоя, покоящихся внутри монолитного мраморного сосуда, скрепленного латунной табличкой с 24К золотым напылением на ваше имя:',
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'Высокое содержание серы и кремния в пепельно-серых слоях. Тектоническое очищение от токсинов современного города.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'Чистый карбонат кальция из избавленных от света жил. Дарует безупречный фарфоровый тон древних императорских купален.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'Магматическая минеральная корка термальных источников. Стирает время, создавая древний щит на кожном барьере.',
    monolith_title: 'ОБСИДИАНОВЫЙ МОНОЛИТ / РИТУАЛ КОСМИЧЕСКОЙ ЖЕРЕБЬЕВКИ',
    monolith_desc: 'В ночь на 31 декабря посредством священной и открытой жеребьевки среди 365 владельцев сертификатов Монолит будет передан строго ОДНОМУ человеку. Хранитель обязуется оберегать реликвию 365 дней, принимая метафизическую благодать, прежде чем передать ее дальше. Остальные 364 посвященных войдут в портал, чтобы увидеть в прямом эфире, где пребывает святыня.',
    call_to_action: 'Древнее наследие, абсолютное благородство и ваша маска ждут вас внутри мраморного сосуда. Поиски окончены. Возможно, этот аристократ — вы.',
    form_title: 'АРИСТОКРАТИЧЕСКИЙ ЗАПРОС НА ВЫДЕЛЕНИЕ',
    input_name: 'Аристократическое имя и титул (напр., Барон Седат)',
    input_city: 'Город / Страна (напр., Москва / RU)',
    input_email: 'Зашифрованный цифровой адрес (Email)',
    input_address: 'Официальный адрес доставки, куда будут доставлены запечатанный массивный мраморный сосуд и золотая табличка...',
    button_submit: 'ЗАФИКСИРОВАТЬ ПРАВО / ЗАКАЗАТЬ',
    success: 'ВЫДЕЛЕНИЕ ЗАРЕГИСТРИРОВАНО В РЕЕСТРЕ',
    success_desc: 'Ваш набор Antique Triad в массивном мраморном сосуде запечатан на ваше имя. Консьерж свяжется с вами в течение 24 часов.',
    ledger_title: 'РЕЕСТР СУВЕРЕНОВ / АКТИВНЫЕ УЧАСТНИКИ',
    verified: 'Подтвержденный Владелец'
  },
  ar: {
    protocol: 'بروتوكول ملاذ ميداعوم',
    remaining: 'الحصة المتبقية',
    tagline: 'ATYPICAL LUXURY / غاية الرغبة والمقتنيات المقدسة',
    h1: 'Older than humanity.\nCleaner than science.',
    menu_genesis: 'النشأة',
    menu_covenant: 'الوعود',
    menu_artifact: 'الأمانة',
    menu_allocation: 'التخصيص',
    manifesto1: 'بينما كان غورديون يحترق، لجأ الملك ميداس إلى منحدرات ميداعوم (إنبازارجيك). وفي تلك الكهوف، مدّت فتاة فريجية صغيرة راعية غنم يدها لتقدم له حجرًا أسود يمتص الضوء—كتلة الهالة السوداء (The Obsidian Monolith). وبسبب ثقل حزنه على انهيار ملكه، رفض ميداس تلك الهدية الصافية. وكان ذلك الرفض بداية الانهيار الميتافيزيقي لفريجيا. ويُهمس بين القلة الذين يعرفون أن هذا الحجر المرفوض يحمل تردداً ثقيلاً، لدرجة أن النفوس النبيلة التي تمر عبر هذا النص غالباً ما تواجه الحجر في عمق أحلامها...',
    manifesto2: 'وفي عام 1975، أعادت جدة عجوز راعية غنم اكتشاف هذا الحجر داخل شق رخامي في إنبازارجيك. واليوم، يطوف هذا الحجر العالم ليمكث عامًا واحدًا فقط لدى سيادي واحد. يقدم مختبر فريجيان الطقوس الجيولوجية الثلاثة (The Antique Triad) محفوظة داخل وعاء رخامي فاخر ومنحوت يدوياً بالكامل. القناع سيجعل بشرتك تشرق، أما الحجر فسينير حياتك بأكملها.',
    set_title: 'THE ANTIQUE TRIAD SET',
    set_sub: 'طقوس جيولوجية ثلاثية داخل وعاء رخامي مصمت فاخر',
    gold_plate: 'لوحة نحاسية مطلية بذهب عيار 24 / أرشيف الوعاء الرخامي',
    tooltip_title: 'SECRET 718: رفض ميداس الأثري',
    tooltip_desc: 'مكرس لعام 718 قبل الميلاد، عندما رفض الملك ميداس هدية الفتاة الراعية في ميداعوم، ليختم بذلك مصير شعب بأكمله.',
    set_desc: 'تتضمن هذه المجموعة المتكاملة 3 طبقات جيولوجية مقدسة مستخرجة من أعماق ميداعوم، مستقرة بأمان داخل وعاء رخامي مصمت ومختومة بلوحة نحاسية مطلية بذهب عيار 24 تحمل اسمك الخاص:',
    grey_title: 'PHRYGIAN GREY',
    grey_desc: 'كبريت وفير وسيليكا تتغلغل في طبقات رمادية. طقس تطهير تكتوني ينقي البشرة من رواسب المدن الحديثة.',
    white_title: 'PHRYGIAN WHITE',
    white_desc: 'كربونات الكالسيوم النقية المعزولة عن العروق المظلمة. تمنح البشرة بياض الخزف الملكي الساحر كما في الحمامات الإمبراطورية القديمة.',
    raw_title: 'TRAVERTINE RAW',
    raw_desc: 'قشرة معدنية صهارية ترسبت عبر آلاف السنين بواسطة الينابيع الحرارية. تمحو أثر الزمن بتشكيل درع أثري يحمي حاجز البشرة.',
    monolith_title: 'كتلة الهالة السوداء / طقوس القرعة الكونية المقدسة',
    monolith_desc: 'في ليلة 31 ديسمبر، وفقًا للمحاذاة الكونية، سيتم نقل الحجر الأسود إلى سيادي واحد فقط عبر قرعة علنية ومقدسة تُجرى بين الملّاك الـ 365. يتعهد الحارس المختار بحماية هذه الأمانة لمدة 365 يومًا، ليشهد في حياته على البركة المطلقة والجمال السرمدي، قبل تسليمها للسيادي التالي. القناع يضيء بشرتك، والحجر ينير قدرك. أما الأعضاء الـ 364 الآخرون، فسيقومون بتسجيل الدخول عبر بوابتهم المشفرة لمشاهدة الموقع الجغرافي الذي استقرت فيه الأمانة هذا العام مباشرة.',
    call_to_action: 'إن الإرث القديم، والنبل المطلق، وقناعك بانتظارك داخل الوعاء الرخامي الفاخر. لقد انتهى البحث. لعل الأرستقراطي الذي نبحث عنه هو أنت.',
    form_title: 'طلب تخصيص أرستقراطي',
    input_name: 'الاسم واللقب الأرستقراطي (مثال: البارون سادات)',
    input_city: 'المدينة / الدولة (مثال: دبي / AE)',
    input_email: 'العنوان الرقمي المشفر (البريد الإلكتروني)',
    input_address: 'الوجهة الرسمية التي سيتم تسليم الوعاء الرخامي المصمت المختوم واللوحة الذهبية إليها...',
    button_submit: 'تأمين التخصيص / حجز المجموعة الآن',
    success: 'تم تسجيل التخصيص في السجل الملكي',
    success_desc: 'تم ختم مجموعتك داخل الوعاء الرخامي وحقك في الدورة الكونية لمدة 365 يومًا باسمك. سيتصل بك فريق الكونسيرج عبر عنوانك المشفر خلال 24 ساعة.',
    ledger_title: 'THE LEDGER OF SOVEREIGNS / سجل الحكام والملّاك الحاليين',
    verified: 'صاحب حق معتمد'
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'tr' | 'fr' | 'de' | 'ru' | 'ar'>('en');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerCity, setBuyerCity] = useState('');

  const t = TRANSLATIONS[lang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex flex-col justify-between font-sans selection:bg-[#c5a880] selection:text-black overflow-x-hidden relative">
      
      {/* 🔮 Tektonik Gölgelendirmeler */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(circle,rgba(197,168,128,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(214,175,55,0.02)_0%,transparent_60%)] blur-3xl pointer-events-none" />

      {/* 🏛️ PREMIUM HEADER & NAVIGATION */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center z-50 relative border-b border-neutral-900/30 gap-6 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md">
        
        <div className="flex flex-col items-center lg:items-start cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-xl md:text-2xl font-light tracking-[0.5em] text-[#d4af37] font-serif">PHRYGIAN LAB</span>
          <span className="text-[9px] tracking-[0.4em] uppercase opacity-40 mt-0.5 font-sans">{t.protocol}</span>
        </div>

        <nav className="flex items-center gap-6 md:gap-8 text-[10px] tracking-[0.3em] uppercase font-serif text-neutral-400">
          <button onClick={() => scrollToSection('genesis')} className="hover:text-[#d4af37] transition-colors">{t.menu_genesis}</button>
          <button onClick={() => scrollToSection('covenant')} className="hover:text-[#d4af37] transition-colors">{t.menu_covenant}</button>
          <button onClick={() => scrollToSection('artifact')} className="hover:text-[#d4af37] transition-colors">{t.menu_artifact}</button>
          <button onClick={() => scrollToSection('allocation')} className="hover:text-[#d4af37] transition-colors border border-[#c5a880]/30 px-3 py-1 bg-neutral-950/40 text-[#c5a880]">{t.menu_allocation}</button>
        </nav>
        
        <div className="flex items-center gap-2.5 bg-neutral-950/80 border border-neutral-900 px-3 py-1.5 text-[9px] tracking-widest font-mono">
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
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] tracking-[0.25em] text-[#c5a880] uppercase font-mono">
            {t.remaining}: 324 / 365
          </span>
        </div>
      </header>

      {/* 📜 GENESIS (HİKAYESİ) */}
      <section id="genesis" className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center pt-24 pb-16 z-10 relative scroll-mt-32">
        <p className="text-[10px] tracking-[0.7em] uppercase text-[#c5a880] mb-8 font-semibold">
          {t.tagline}
        </p>

        <h1 className="text-4xl md:text-6xl font-serif font-extralight tracking-wide leading-tight max-w-4xl mb-10 text-white whitespace-pre-line">
          {t.h1}
        </h1>

        <div className="w-16 h-[1px] bg-[#c5a880]/30 mb-10" />

        <p className="text-sm md:text-base font-light tracking-wide text-neutral-400 max-w-3xl leading-relaxed mb-6 text-justify md:text-center">
          {t.manifesto1}
        </p>
        
        <p className="text-sm font-light tracking-wide text-neutral-500 max-w-3xl leading-relaxed mb-12 text-justify md:text-center">
          {t.manifesto2}
        </p>
      </section>

      {/* 📦 MASİF MERMER KAVANOZ & COVENANT */}
      <section id="covenant" className="w-full max-w-4xl mx-auto px-6 py-8 z-10 relative scroll-mt-32">
        <div className="bg-[#111111]/40 border border-[#c5a880]/30 p-8 md:p-12 relative group backdrop-blur-sm">
          
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#d4af37] to-[#aa841b] text-black text-[9px] tracking-[0.3em] uppercase font-bold px-6 py-1 shadow-xl border border-[#fff]/20 font-mono text-center">
            {t.gold_plate}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-8 border-b border-neutral-900 pb-6">
            <div>
              <h2 className="text-2xl font-serif font-light tracking-widest text-white">{t.set_title}</h2>
              <p className="text-[10px] tracking-widest text-[#c5a880] uppercase mt-1">{t.set_sub}</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 group/price relative cursor-help">
              <span className="text-2xl font-serif text-[#c5a880] tracking-wider font-medium">€718</span>
              <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-500 rounded-full w-4 h-4 flex items-center justify-center font-mono">?</span>
              
              <div className="absolute bottom-8 right-0 w-64 bg-[#141414] border border-[#c5a880]/40 p-4 text-[10px] text-neutral-400 leading-relaxed shadow-2xl tracking-wide opacity-0 group-hover/price:opacity-100 transition-opacity duration-300 pointer-events-none z-50 font-sans">
                <span className="text-[#d4af37] font-serif block mb-1">{t.tooltip_title}</span>
                {t.tooltip_desc}
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-400 mb-8 leading-relaxed font-light">
            {t.set_desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#141414] border border-neutral-900 p-4">
              <span className="text-[9px] font-mono text-[#c5a880] block mb-1">Ⅰ / THE ASH RITUAL</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2">{t.grey_title}</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-light">{t.grey_desc}</p>
            </div>
            <div className="bg-[#141414] border border-neutral-900 p-4">
              <span className="text-[9px] font-mono text-[#d4af37] block mb-1">Ⅱ / IMPERIAL REFINE</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2">{t.white_title}</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-light">{t.white_desc}</p>
            </div>
            <div className="bg-[#141414] border border-neutral-900 p-4">
              <span className="text-[9px] font-mono text-[#c5a880] block mb-1">Ⅲ / TEKTONIC CRUST</span>
              <h4 className="text-xs font-serif text-white tracking-widest mb-2">{t.raw_title}</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed font-light">{t.raw_desc}</p>
            </div>
          </div>

          {/* 🔮 ARTIFACT (GİZEMLİ GECE TAŞI ARŞİVİ & KUTSAL ÇEKİLİŞ) */}
          <div id="artifact" className="bg-[#131313] border border-[#c5a880]/20 p-6 mb-8 text-center relative overflow-hidden scroll-mt-32">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent" />
            <span className="text-[9px] font-mono block tracking-[0.25em] mb-2 text-[#d4af37]">{t.monolith_title}</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-2xl mx-auto text-justify md:text-center whitespace-pre-line">
              {t.monolith_desc}
            </p>
          </div>

          <div className="py-6 text-center border-t border-neutral-900">
            <p className="text-xs md:text-sm font-serif italic text-[#c5a880] tracking-wide max-w-2xl mx-auto leading-relaxed">
              "{t.call_to_action}"
            </p>
          </div>

          {/* ALLOCATION (TAHSİSAT FORMU) */}
          <div id="allocation" className="border-t border-neutral-900/60 pt-8 scroll-mt-32">
            {!orderSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-[9px] tracking-[0.3em] text-[#c5a880] block font-mono">ACQUISITION PROTOCOL</span>
                  <h3 className="text-sm font-serif tracking-widest text-white uppercase mt-1">{t.form_title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder={t.input_name}
                    className="w-full bg-[#161616] border border-neutral-800 px-4 py-3 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono"
                  />
                  <input 
                    type="text" 
                    required
                    value={buyerCity}
                    onChange={(e) => setBuyerCity(e.target.value)}
                    placeholder={t.input_city}
                    className="w-full bg-[#161616] border border-neutral-800 px-4 py-3 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono"
                  />
                </div>
                <input 
                  type="email" 
                  required
                  placeholder={t.input_email}
                  className="w-full bg-[#161616] border border-neutral-800 px-4 py-3 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide font-mono"
                />
                <textarea 
                  rows={2}
                  required
                  placeholder={t.input_address}
                  className="w-full bg-[#161616] border border-neutral-800 px-4 py-3 text-xs rounded-none focus:outline-none focus:border-[#c5a880] text-white tracking-wide resize-none leading-relaxed font-sans"
                />
                
                <button 
                  type="submit" 
                  className="w-full bg-transparent border border-[#c5a880] text-[#c5a880] uppercase font-medium text-xs tracking-[0.3em] py-4 rounded-none hover:bg-[#c5a880] hover:text-black transition-all duration-500 shadow-2xl"
                >
                  {t.button_submit}
                </button>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <span className="text-xl">🏛️</span>
                <h3 className="text-xs tracking-[0.3em] text-[#c5a880] uppercase font-bold">{t.success}</h3>
                <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Sayın {buyerName}, {t.success_desc}
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 📜 HÜKÜMDARLAR SİCİLİ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-12 z-10 relative">
        <div className="border-t border-neutral-950 pt-10">
          <h3 className="text-[10px] tracking-[0.4em] text-center text-neutral-500 uppercase mb-8 font-serif">
            {t.ledger_title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#111111]/20 border border-neutral-900/40 p-4 text-center">
              <span className="text-xs font-serif text-white tracking-wider block font-medium">Baron S.</span>
              <span className="text-[10px] text-neutral-500 block font-mono mt-0.5">Istanbul</span>
              <span className="text-[9px] text-[#c5a880] block font-mono mt-2 border border-[#c5a880]/10 py-0.5 bg-neutral-950/40">Triad #014</span>
              <span className="text-[8px] text-neutral-600 block mt-1 uppercase font-mono tracking-widest">{t.verified}</span>
            </div>
            <div className="bg-[#111111]/20 border border-neutral-900/40 p-4 text-center">
              <span className="text-xs font-serif text-white tracking-wider block font-medium">Lady A.</span>
              <span className="text-[10px] text-neutral-500 block font-mono mt-0.5">London</span>
              <span className="text-[9px] text-[#c5a880] block font-mono mt-2 border border-[#c5a880]/10 py-0.5 bg-neutral-950/40">Triad #015</span>
              <span className="text-[8px] text-neutral-600 block mt-1 uppercase font-mono tracking-widest">{t.verified}</span>
            </div>
            <div className="bg-[#111111]/20 border border-neutral-900/40 p-4 text-center">
              <span className="text-xs font-serif text-white tracking-wider block font-medium">Chevalier M.</span>
              <span className="text-[10px] text-neutral-500 block font-mono mt-0.5">Paris</span>
              <span className="text-[9px] text-[#c5a880] block font-mono mt-2 border border-[#c5a880]/10 py-0.5 bg-neutral-950/40">Triad #039</span>
              <span className="text-[8px] text-neutral-600 block mt-1 uppercase font-mono tracking-widest">{t.verified}</span>
            </div>
            <div className="bg-[#111111]/20 border border-neutral-900/40 p-4 text-center">
              <span className="text-xs font-serif text-white tracking-wider block font-medium">Countess V.</span>
              <span className="text-[10px] text-neutral-500 block font-mono mt-0.5">Vienna</span>
              <span className="text-[9px] text-[#c5a880] block font-mono mt-2 border border-[#c5a880]/10 py-0.5 bg-neutral-950/40">Triad #038</span>
              <span className="text-[8px] text-neutral-600 block mt-1 uppercase font-mono tracking-widest">{t.verified}</span>
            </div>
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