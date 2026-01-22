
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import { Star } from 'lucide-react';
import { ASSETS, COMPANY_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Statistics / Trust Badges Section */}
        <section className="py-12 bg-white relative z-20 -mt-10 mx-6 lg:mx-20 rounded-sm shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 px-10">
          <div className="text-center">
            <p className="text-luxury-gold font-serif text-3xl font-bold mb-1">15+</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Tahun Pengalaman</p>
          </div>
          <div className="text-center">
            <p className="text-luxury-gold font-serif text-3xl font-bold mb-1">200+</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Sekolah Mitra</p>
          </div>
          <div className="text-center">
            <p className="text-luxury-gold font-serif text-3xl font-bold mb-1">10k+</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Judul Buku</p>
          </div>
          <div className="text-center">
            <p className="text-luxury-gold font-serif text-3xl font-bold mb-1">Bali</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Layanan Seluruh Bali</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-luxury-gold/10 -z-10 rounded-full blur-3xl"></div>
              <img 
                src={ASSETS.aboutImg} 
                alt={`Tentang ${COMPANY_INFO.name}`} 
                className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop";
                }}
              />
              <div className="absolute bottom-6 -right-6 bg-white p-6 shadow-xl border-l-4 border-luxury-gold hidden md:block">
                <div className="flex gap-1 text-luxury-gold mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-bold text-gray-900 italic">"Pelayanan cepat & koleksi lengkap."</p>
                <p className="text-gray-500 text-xs">- Kepala Sekolah SDN 1 Renon</p>
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Mitra Terpercaya <span className="text-luxury-gold">Pendidikan</span> Bali</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {COMPANY_INFO.name} lahir dari semangat untuk memajukan pendidikan di Bali. Sebagai distributor buku terkemuka, kami memastikan setiap sekolah mendapatkan akses mudah ke literatur pendidikan yang berkualitas dan relevan.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-luxury-gold/20 text-luxury-gold rounded-full flex items-center justify-center">✓</div>
                  <span className="text-gray-700 font-semibold">Distribusi Tepat Waktu</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-luxury-gold/20 text-luxury-gold rounded-full flex items-center justify-center">✓</div>
                  <span className="text-gray-700 font-semibold">Harga Grosir Kompetitif</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-luxury-gold/20 text-luxury-gold rounded-full flex items-center justify-center">✓</div>
                  <span className="text-gray-700 font-semibold">Koleksi Kurikulum Merdeka Terbaru</span>
                </li>
              </ul>
              <button className="text-luxury-gold font-bold uppercase tracking-widest text-sm border-b-2 border-luxury-gold pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">
                Pelajari Selengkapnya
              </button>
            </div>
          </div>
        </section>

        <Catalog />
      </main>

      <Footer />
    </div>
  );
};

export default App;
