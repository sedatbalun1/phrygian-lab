'use client';

import React, { useState } from 'react';

// 3 Kadim Ürünün Detaylı Veri Yapısı
const PRODUCTS = [
  {
    id: 'grey-ritual',
    name: 'PHRYGIAN GREY',
    subtitle: 'THE ASH RITUAL',
    price: '650',
    tag: 'Deep Mineralization & Toxic Purge',
    description: 'Kül grisi katmanların altındaki yüksek sülfür ve kadim silika kompozisyonu. Hücrelerin modern şehir kalıntılarından, ağır metallerden ve yapay kimyasallardan arındırılması için tektonik bir detoks protokolü. Derinin biyolojik hafızasını sıfırlar.',
    scarcity: 'Aylık Rezerv: Sadece 35 Blok mühürlendi.',
    bgClass: 'from-neutral-800/10 to-transparent',
    colorCode: 'bg-neutral-600'
  },
  {
    id: 'white-protocol',
    name: 'PHRYGIAN WHITE',
    subtitle: 'THE WHITE PROTOCOL',
    price: '950',
    tag: 'Pure Litho-Refining & Tone Sovereignty',
    description: 'Işığın hiç ulaşmadığı derin mermer damarlarından izole edilen, kalsiyum karbonatın en asil formu. Cildin matlığını ve zamanın getirdiği lekeleri, antik Roma asillerinin mermer banyolarındaki saf beyazlıkla pürüzsüzleştirir. Sadece saf arılık.',
    scarcity: 'Aylık Rezerv: Sadece 15 Ultra-Saf Blok.',
    bgClass: 'from-neutral-400/10 to-transparent',
    colorCode: 'bg-neutral-100',
    featured: true
  },
  {
    id: 'travertine-crust',
    name: 'TRAVERTINE RAW',
    subtitle: 'THE TEKTONIC CRUST',
    price: '550',
    tag: 'Thermal Crust Regeneration',
    description: 'Termal su kaynaklarının binlerce yılda geride bıraktığı gözenekli, vahşi mineral kabuk. Cildin bariyerini magmatik bir güçle yeniden yapılandırır, yoğun mineralli yapısıyla dokuyu besler ve dış dünyanın yaşlandırıcı etkilerine karşı antik bir kalkan örer.',
    scarcity: 'Aylık Rezerv: Sadece 50 Vahşi Kabuk.',
    bgClass: 'from-[#c5a880]/5 to-transparent',
    colorCode: 'bg-[#c5a880]/40'
  }
];

export default function Home() {
  // Sipariş formunu dinamik yönetmek için state yapısı
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[1].id);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleAllocationRequest = (productId: string) => {
    setSelectedProduct(productId);
    const element = document.getElementById('transaction-hub');
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
      
      {/* 🔮 Antik Mağara Atmosferi Efektleri */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(197,168,128,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-[50%] left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.02)_0%,transparent_60%)] blur-3xl pointer-events-none" />

      {/* 🏛️ ELİT HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-10 relative border-b border-neutral-950">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-light tracking-[0.45em] text-[#d4af37] font-serif-lux">PHRYGIAN LAB</span>
          <span className="text-[9px] tracking-[0.35em] uppercase opacity-45 mt-1 font-sans">Litho-Peloid Protocol</span>
        </div>
        <div className="text-[10px] tracking-[0.25em] text-[#c5a880] font-light uppercase hidden md:block border border-[#c5a880]/20 px-4 py-1.5 bg-neutral-900/20">
          STATUS: ACTIVE ALLOCATION ZONE
        </div>
      </header>

      {/* 📜 MANİFESTO (Bizi Değil, Zamanı Öven Bölüm) */}
      <section className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center pt-28 pb-20 z-10 relative">
        <p className="text-[10px] tracking-[0.6em] uppercase text-[#c5a880] mb-8 font-semibold font-serif-lux">
          ATYPICAL LUXURY / AYKIRI LÜKS
        </p>

        <h1 className="text-4xl md:text-7xl font-serif-lux font-extralight tracking-wide leading-tight max-w-4xl mb-10 text-white">
          "Older than humanity.<br/>
          <span className="font-normal italic text-neutral-400">Cleaner than science."</span>
        </h1>

        <div className="w-12 h-[1px] bg-[#c5a880]/40 mb-10" />

        <p className="text-sm md:text-base font-light tracking-wide text-neutral-400 max-w-3xl leading-relaxed mb-6 text-justify md:text-center">
          Modern tıp endüstrisi, steril laboratuvarlarda sentezlenen yapay moleküllerle cildinizi kandırmaya çalışır. Biz ise insan yapımı bilimi küçümsüyoruz. İnsanlık henüz yeryüzünde yokken, Frigya’nın tektonik katmanlarında, mutlak karanlık ve devasa basınç altında milyonlarca yılda olgunlaşan mineral geometrisini sunuyoruz. 
        </p>
        
        <p className="text-sm font-light tracking-wide text-neutral-500 max-w-3xl leading-relaxed mb-8 text-justify md:text-center">
          Mermer blokların kalbinden çıkardığımız bu elementer sırlar, bin yıl önce kralların ve asillerin termal ritüellerinde kullandığı, formülü laboratuvarlarca asla taklit edilemeyecek birer **Arzu ve Kıtlık Nesnesi**dir. Bu biyolojik bir bakım ürünü değildir; yeryüzünün en derin, en eski jeolojik mülkiyet hakkına ortak olmaktır.
        </p>
      </section>

      {/* 📦 JEO-LÜKS KATALOG VE SATIN ALMA ALANI */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.4em] uppercase text-[#c5a880] font-serif-lux">
            THE ANTIQUE TRIAD / ACIMASIZ SEÇKİ
          </h2>
          <p className="text-[10px] text-neutral-600 tracking-widest uppercase mt-2">DÜNYA ÜZERİNDEKİ EN SINIRLI JEOLOJİK REZERV</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className={`bg-[#111111]/40 border ${product.id === selectedProduct ? 'border-[#c5a880]' : 'border-neutral-900'} p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#c5a880]/50 group relative`}
            >
              {product.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c5a880] text-black text-[8px] tracking-[0.25em] uppercase px-4 py-0.5 font-bold font-serif-lux">
                  RESERVED IMPERIAL
                </div>
              )}
              
              <div>
                {/* Antik Doku İllüstrasyonu */}
                <div className="w-full h-44 bg-[#141414] mb-6 flex items-center justify-center border border-neutral-900 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.bgClass} group-hover:scale-110 transition-transform duration-700`} />
                  <div className={`w-3 h-3 rounded-full ${product.colorCode} absolute top-4 right-4 opacity-60`} />
                  <span className="text-[10px] tracking-[0.45em] uppercase opacity-25 font-serif-lux">{product.subtitle}</span>
                </div>

                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif-lux font-light text-white tracking-wide">{product.name}</h3>
                  <span className="text-base font-serif-lux text-[#c5a880] font-medium">€{product.price}</span>
                </div>

                <p className="text-[10px] tracking-wider uppercase text-[#c5a880]/80 mb-5 font-serif-lux">{product.tag}</p>
                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                  {product.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-900/60">
                <p className="text-[10px] font-mono text-neutral-600 mb-4 italic">{product.scarcity}</p>
                <button 
                  onClick={() => handleAllocationRequest(product.id)}
                  className={`w-full text-center text-[10px] tracking-[0.25em] uppercase py-3.5 font-medium transition-all duration-300 ${
                    product.id === selectedProduct 
                      ? 'bg-[#c5a880] text-black' 
                      : 'bg-transparent border border-neutral-800 text-neutral-400 hover:border-[#c5a880] hover:text-white'
                  }`}
                >
                  {product.id === selectedProduct ? 'Selected / Ready to Acquire' : 'Select for Acquisition'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 🏛️ TRANSACTION HUB / SİPARİŞ MERKEZİ */}
        <div id="transaction-hub" className="w-full max-w-3xl mx-auto bg-[#111111]/80 border border-neutral-900 p-8 md:p-12 shadow-2xl relative transition-all duration-500 hover:border-[#c5a880]/10 backdrop-blur-sm scroll-mt-20">
          
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent" />

          {!orderSubmitted ? (
            <>
              <div className="text-center mb-8">
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#c5a880] block mb-2 font-mono">STEP II - ACQUISITION PROTOCOL</span>
                <h3 className="text-lg font-serif-lux tracking-widest text-white uppercase">TAHSİSAT VE SİPARİŞ FORMALİTESİ</h3>
                <p className="text-xs text-neutral-500 max-w-md mx-auto mt-2 leading-relaxed">
                  Seçtiğiniz kütle adınıza rezerve edilerek mühürlenecektir. Küresel lansman öncesi öncelikli sevkiyat hakkı içerir.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Dinamik Ürün Seçim Alanı */}
                <div>
                  <label className="text-[9px] tracking-widest uppercase text-neutral-500 block mb-2 font-mono">SELECTED ARTIFACT / TERCİH EDİLEN NESNE</label>
                  <select 
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-[#161616] border border-neutral-800 px-4 py-3.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] tracking-widest text-[#c5a880] uppercase font-serif-lux transition-colors cursor-pointer appearance-none"
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.id} className="bg-[#111] text-white">
                        {p.name} — €{p.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[9px] tracking-widest uppercase text-neutral-500 block mb-2 font-mono">FULL NAME / ARİSTOKRAT İSİM</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., Baron Sedat" 
                      className="w-full bg-[#161616] border border-neutral-800 px-4 py-3.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] tracking-wide text-white transition-colors placeholder:text-neutral-800"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] tracking-widest uppercase text-neutral-500 block mb-2 font-mono">DIGITAL ADDRESS / İLETİŞİM</label>
                    <input 
                      type="email" 
                      required
                      placeholder="secure@domain.com" 
                      className="w-full bg-[#161616] border border-neutral-800 px-4 py-3.5 text-xs rounded-none focus:outline-none focus:border-[#c5a880] tracking-wide text-white transition-colors placeholder:text-neutral-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] tracking-widest uppercase text-neutral-500 block mb-2 font-mono">DELIVERY DESTINATION / SEVK ADRESİ</label>
                  <textarea 
                    rows={3}
                    required
                    placeholder="Mermer kütlesinin mühürlü sandık içinde teslim edileceği gizli ve resmi adresiniz..."
                    className="w-full bg-[#161616] border border-neutral-800 px-4 py-3 text-xs rounded-none focus:outline-none focus:border-[#c5a880] tracking-wide text-white transition-colors placeholder:text-neutral-800 resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-[#c5a880] text-black uppercase font-semibold text-xs tracking-[0.3em] py-4 rounded-none hover:bg-white hover:text-black transition-colors duration-400 shadow-2xl"
                  >
                    SECURE ALLOCATION AND INITIATE ORDER
                  </button>
                  <span className="text-[8px] font-mono text-neutral-600 block text-center mt-3 tracking-widest">Sipariş verildikten sonra tahsisat uzmanımız 24 saat içinde sizinle özel şifreli iletişim kuracaktır.</span>
                </div>
              </form>
            </>
          ) : (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full border border-[#c5a880] flex items-center justify-center mx-auto mb-4">
                <span className="text-[#c5a880] text-lg">🏛️</span>
              </div>
              <h3 className="text-base font-serif-lux tracking-[0.3em] text-[#c5a880] uppercase">TAHSİSAT REZERVE EDİLDİ</h3>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                {PRODUCTS.find(p => p.id === selectedProduct)?.name} kütlesi adınıza işaretlenmiştir. Zamana meydan okuyan bu nadide parçanın işlemlerini başlatmak üzere konsiyerj ekibimiz sizinle iletişime geçecektir.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setOrderSubmitted(false)}
                  className="text-[9px] font-mono text-neutral-600 uppercase border-b border-neutral-800 hover:text-white hover:border-white transition-colors pb-0.5"
                >
                  Yeni Bir Parça Talep Et
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 🌍 ASİL FOOTER */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] text-neutral-600 uppercase z-10 border-t border-neutral-950">
        <div className="flex gap-6 mb-4 md:mb-0 font-serif-lux opacity-50">
          <span>London HQ</span>
          <span>Paris Lab</span>
          <span>Dubai Vault</span>
        </div>
        <div className="text-center md:text-right font-mono opacity-40">
          <span>Phrygian Lab Ltd. © 2026 / Strictly Atypical</span>
        </div>
      </footer>

    </main>
  );
}