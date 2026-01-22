
import React from 'react';
import { COMPANY_INFO, ASSETS } from '../constants';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.heroBg} 
          alt="Library Background" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to Unsplash if local asset is missing
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-luxury-gold"></div>
            <span className="text-luxury-gold font-bold tracking-[0.3em] text-xs uppercase">Om Swastiastu</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Membangun <span className="text-luxury-gold">Masa Depan</span> Melalui Literasi.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
            {COMPANY_INFO.tagline}. Kami menyediakan koleksi buku teks kurikulum terbaru untuk meningkatkan kualitas pendidikan di Pulau Dewata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#catalog" 
              className="bg-luxury-gold hover:bg-amber-600 text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Lihat Katalog <ChevronRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-white border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center transition-all shadow-md"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      {/* Bali-inspired pattern accent */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-10">
        <svg width="300" height="300" viewBox="0 0 100 100">
           <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="#D4AF37" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
