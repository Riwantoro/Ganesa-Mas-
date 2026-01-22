
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-6">
              Ganesa <span className="text-luxury-gold">Mas</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Membangun literasi di Bali dengan dedikasi tinggi. Kami berkomitmen untuk menjadi mitra terdepan bagi sekolah-sekolah dalam penyediaan buku berkualitas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-luxury-gold uppercase tracking-widest text-sm mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-400">
                <MapPin className="text-luxury-gold flex-shrink-0" size={20} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Phone className="text-luxury-gold flex-shrink-0" size={20} />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Mail className="text-luxury-gold flex-shrink-0" size={20} />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-luxury-gold uppercase tracking-widest text-sm mb-6">Buletin</h4>
            <p className="text-gray-400 text-sm mb-4">Dapatkan update terbaru mengenai promo dan buku baru.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email anda" 
                className="bg-gray-800 border-none rounded-sm px-4 py-2 w-full focus:ring-1 focus:ring-luxury-gold outline-none text-sm"
              />
              <button className="bg-luxury-gold p-2 rounded-sm hover:bg-amber-600 transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-luxury-gold">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-luxury-gold">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Sticky Button */}
      <a 
        href={COMPANY_INFO.waLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">Order WhatsApp</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
