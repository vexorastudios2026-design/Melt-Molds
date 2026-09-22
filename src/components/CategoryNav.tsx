import React from 'react';
import { Flame, Sparkles, Gift, Heart, HelpCircle, PenTool } from 'lucide-react';

interface CategoryNavProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onNavigateToBuilder: () => void;
  onNavigateToNotes: () => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
  onNavigateToBuilder,
  onNavigateToNotes,
}) => {
  const categories = [
    {
      id: 'all',
      name: 'All Collections',
      tagline: 'Curated artisanal candles & gifts',
      icon: Sparkles,
      count: '8 Items',
      action: () => onSelectCategory('all'),
    },
    {
      id: 'exclusive',
      name: 'Exclusive Candles',
      tagline: 'Hand-poured pure soy wax',
      icon: Flame,
      count: '3 Scents',
      action: () => onSelectCategory('exclusive'),
    },
    {
      id: 'mystery',
      name: 'Mystery Candles',
      tagline: 'Exciting surprise fragrance & wax',
      icon: HelpCircle,
      count: 'Surprise',
      action: () => onSelectCategory('mystery'),
    },
    {
      id: 'boxes',
      name: 'Gift Boxes',
      tagline: 'Curated celebratory gift sets',
      icon: Gift,
      count: 'Curated Sets',
      action: () => onSelectCategory('boxes'),
    },
    {
      id: 'customized',
      name: 'Customized Gifts',
      tagline: 'Personalized resin keepsakes',
      icon: Sparkles,
      count: 'Bespoke',
      action: () => onNavigateToBuilder(),
    },
    {
      id: 'anniversary',
      name: 'Anniversary Gifts',
      tagline: 'Romantic celebrations & cards',
      icon: Heart,
      count: 'Keepsakes',
      action: () => onSelectCategory('anniversary'),
    },
    {
      id: 'notes',
      name: 'Personalized Notes',
      tagline: 'Cursive handwritten wax sealed',
      icon: PenTool,
      count: 'Custom Calligraphy',
      action: () => onNavigateToNotes(),
    },
  ];

  return (
    <section className="py-12 bg-[#120E0B] border-b border-[#2C231A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[#C49B66] text-xs font-sans uppercase tracking-widest font-semibold">
            Signature Collections
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF4ED] mt-1">
            Shop by Category
          </h2>
          <p className="text-[#A89888] text-sm font-sans mt-2">
            Select a category to filter or craft your personalized gifting combination.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={cat.action}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between group relative border ${
                  isSelected
                    ? 'bg-[#2A2118] border-[#C49B66] shadow-lg shadow-[#C49B66]/15 scale-[1.02]'
                    : 'bg-[#18130F] border-[#2E241B] hover:bg-[#221B14] hover:border-[#4A3B2C]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#C49B66] text-[#16120E]'
                        : 'bg-[#261E17] text-[#D4A373] group-hover:bg-[#C49B66] group-hover:text-[#16120E]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-[#8C7B6D] font-sans uppercase tracking-wider">
                    {cat.count}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#FAF4ED] leading-snug group-hover:text-[#E8C49A] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-[#9E8E7E] font-sans mt-0.5 line-clamp-1">
                    {cat.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
