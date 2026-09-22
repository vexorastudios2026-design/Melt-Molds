import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, SlidersHorizontal, Search } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onAddToCart: (product: Product) => void;
  onCustomize: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onCustomize,
  onQuickView,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'exclusive', label: 'Exclusive Candles' },
    { id: 'mystery', label: 'Mystery Candles' },
    { id: 'boxes', label: 'Gift Boxes' },
    { id: 'customized', label: 'Customized Gifts' },
    { id: 'anniversary', label: 'Anniversary Gifts' },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.fragranceNotes && p.fragranceNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="catalog" className="py-16 sm:py-20 bg-[#14100C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#2C231A] gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#C49B66] text-xs font-sans uppercase tracking-widest font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handcrafted In Small Batches</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF4ED]">
              Our Collection
            </h2>
            <p className="text-[#A89888] text-sm sm:text-base font-sans mt-2 max-w-xl">
              From comforting scented candles to elaborate anniversary boxes, each piece is poured with love and packaged like a luxury keepsake.
            </p>
          </div>

          {/* Inline search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C7A6A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search scents, boxes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#1F1914] text-xs sm:text-sm text-[#FAF4ED] placeholder-[#7E6F60] border border-[#382C20] focus:outline-none focus:border-[#C49B66] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C7A6A] hover:text-[#FAF4ED]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === tab.id
                  ? 'bg-[#C49B66] text-[#16120E] border-[#C49B66] font-semibold shadow-md shadow-[#C49B66]/20'
                  : 'bg-[#1C1611] text-[#C9B9A6] border-[#312519] hover:border-[#523F2E] hover:text-[#FAF4ED]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onCustomize={onCustomize}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#1A1410] rounded-2xl border border-[#2E241B] max-w-lg mx-auto p-8">
            <SlidersHorizontal className="w-10 h-10 text-[#C49B66] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-lg font-bold text-[#FAF4ED]">No candles found</h3>
            <p className="text-xs text-[#A89888] font-sans mt-1">
              No matching products found for &ldquo;{searchQuery}&rdquo;. Try another fragrance or view all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="mt-4 px-5 py-2 rounded-full text-xs font-semibold bg-[#2B2117] text-[#C49B66] border border-[#443323] hover:bg-[#382B1E]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
