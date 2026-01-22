
import React, { useState } from 'react';
import { CATALOG, Book } from '../constants';
import { ShoppingBag, Search } from 'lucide-react';

const Catalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', 'SD', 'SMP', 'SMA', 'Umum'];

  const filteredBooks = CATALOG.filter(book => {
    const matchesCategory = activeCategory === 'Semua' || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Katalog Unggulan</h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto">
            Temukan koleksi buku sekolah terlengkap kami yang disusun berdasarkan standar kurikulum nasional terbaru.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeCategory === cat 
                  ? 'bg-luxury-gold text-white border-luxury-gold shadow-md' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-luxury-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari judul buku..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold/50"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBooks.map((book) => (
            <div key={book.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-luxury-gold/90 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm shadow-md">
                    {book.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <button className="bg-white text-gray-900 p-4 rounded-full hover:bg-luxury-gold hover:text-white transition-colors shadow-xl">
                      <ShoppingBag />
                   </button>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-luxury-gold transition-colors">{book.title}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-grow">{book.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-luxury-gold font-bold text-lg">{book.price}</span>
                  <button className="text-gray-400 hover:text-luxury-gold text-xs font-bold uppercase tracking-widest transition-colors">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Tidak ada buku yang ditemukan.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
