import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ProductCatalog } from './components/ProductCatalog';
import { QuickViewModal } from './components/QuickViewModal';
import { GiftBoxBuilder } from './components/GiftBoxBuilder';
import { AnniversaryCardsSection } from './components/AnniversaryCardsSection';
import { HandwrittenNotesSection } from './components/HandwrittenNotesSection';
import { MysteryCandlesSection } from './components/MysteryCandlesSection';
import { AboutSection } from './components/AboutSection';
import { WhyMeltAndMolds } from './components/WhyMeltAndMolds';
import { HowItWorks } from './components/HowItWorks';
import { CustomerExperience } from './components/CustomerExperience';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { HelpCenterModal } from './components/HelpCenterModal';
import { TermsAndConditionsModal } from './components/TermsAndConditionsModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

import { SAMPLE_PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { PRICING_CONFIG } from './config/pricing';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  // Cart state initialized with sample cart item for live demo feel or loaded from localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('meltandmolds_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // Default initial sample item
    return [
      {
        id: 'init-1',
        productId: SAMPLE_PRODUCTS[0].id,
        title: SAMPLE_PRODUCTS[0].name,
        subtitle: '100% Hand-Poured Soy Wax (220g)',
        image: SAMPLE_PRODUCTS[0].image,
        quantity: 1,
        pricePlaceholder: SAMPLE_PRODUCTS[0].pricePlaceholder,
        numericPrice: SAMPLE_PRODUCTS[0].numericPriceEquivalent,
      },
    ];
  });

  // Navigation & Category Filtering
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [initialBuilderCandle, setInitialBuilderCandle] = useState<string | undefined>(undefined);

  // Modals & Drawers state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isHelpCenterOpen, setIsHelpCenterOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('meltandmolds_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id && !item.isCustomGiftBox);
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      const newItem: CartItem = {
        id: `cart-${product.id}-${Date.now()}`,
        productId: product.id,
        title: product.name,
        subtitle: product.categoryLabel,
        image: product.image,
        quantity,
        pricePlaceholder: product.pricePlaceholder,
        numericPrice: product.numericPriceEquivalent,
      };
      return [...prev, newItem];
    });

    showToast(`Added "${product.name}" to your bag`);
  };

  const handleAddDirectItemToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
    showToast(`Added "${item.title}" to your bag`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from your bag');
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    showToast('Your demo order has been placed successfully!');
  };

  // Scroll helper
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'catalog') {
      setSelectedCategory('all');
    } else if (sectionId === 'gift-boxes') {
      setSelectedCategory('boxes');
      const el = document.getElementById('catalog');
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCustomizeProduct = (product: Product) => {
    setInitialBuilderCandle(product.id);
    scrollToSection('builder');
    showToast(`Pre-selected "${product.name}" in Customizer`);
  };

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#120E0B] text-[#F5EBE1] flex flex-col font-sans selection:bg-[#C49B66] selection:text-[#120E0B]">
      {/* Top Announcement Bar */}
      <div className="bg-[#1C150F] border-b border-[#2C2117] py-2 px-4 text-center text-[11px] font-sans text-[#D4A373] flex items-center justify-center space-x-2">
        <Sparkles className="w-3 h-3 text-[#EAB308]" />
        <span>
          Melt&Molds Artisanal Studio • Pan-India Handcrafted Candle & Resin Gifting • Demo Showcase
        </span>
      </div>

      {/* Sticky Navigation */}
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigate={scrollToSection}
        onOpenHelpCenter={() => setIsHelpCenterOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Full-screen Hero */}
        <Hero
          onExploreCandles={() => scrollToSection('catalog')}
          onCreateGift={() => scrollToSection('builder')}
        />

        {/* 6 Category Navigation & Quick Filters */}
        <CategoryNav
          activeCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            scrollToSection('catalog');
          }}
          onNavigateToBuilder={() => scrollToSection('builder')}
          onNavigateToNotes={() => scrollToSection('notes')}
        />

        {/* Product Catalog & Cards */}
        <ProductCatalog
          products={SAMPLE_PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onCustomize={handleCustomizeProduct}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* Build Your Own Gift Box Interactive Customizer */}
        <GiftBoxBuilder
          onAddCustomBoxToCart={handleAddDirectItemToCart}
          initialCandleId={initialBuilderCandle}
        />

        {/* Dedicated Anniversary Cards Section */}
        <AnniversaryCardsSection onAddToCart={handleAddDirectItemToCart} />

        {/* Dedicated Handwritten Notes Section with Live Parchment Note Preview */}
        <HandwrittenNotesSection onAddToCart={handleAddDirectItemToCart} />

        {/* Dedicated Mystery Candles Section */}
        <MysteryCandlesSection onAddToCart={handleAddDirectItemToCart} />

        {/* About Melt&Molds */}
        <AboutSection />

        {/* Why Melt&Molds 4-Feature Cards */}
        <WhyMeltAndMolds />

        {/* How It Works 4-Step Process */}
        <HowItWorks />

        {/* Customer Experience (3 Demo Reviews) */}
        <CustomerExperience />

        {/* FAQ Accordion Section */}
        <FaqSection onOpenHelpCenter={() => setIsHelpCenterOpen(true)} />
      </main>

      {/* Premium Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenHelpCenter={() => setIsHelpCenterOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onCustomize={handleCustomizeProduct}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onExploreMore={() => scrollToSection('catalog')}
      />

      {/* Demo Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderComplete={handleOrderComplete}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Help Center Modal */}
      <HelpCenterModal
        isOpen={isHelpCenterOpen}
        onClose={() => setIsHelpCenterOpen(false)}
      />

      {/* Terms & Conditions Modal */}
      <TermsAndConditionsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Floating Cart Button for Quick Access on Mobile */}
      {cartTotalCount > 0 && !isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-30 p-4 rounded-full bg-gradient-to-r from-[#C49B66] to-[#A87B48] text-[#16120E] shadow-2xl shadow-black/80 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2.5 font-bold text-xs uppercase tracking-wider"
          aria-label="View Shopping Bag"
        >
          <span className="w-5 h-5 rounded-full bg-[#16120E] text-[#C49B66] flex items-center justify-center text-[11px] font-bold">
            {cartTotalCount}
          </span>
          <span className="hidden sm:inline">Bag</span>
        </button>
      )}

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-[#201812]/95 border border-[#C49B66]/60 text-[#FAF4ED] text-xs font-sans shadow-2xl backdrop-blur-md flex items-center space-x-2 animate-bounce">
          <Check className="w-3.5 h-3.5 text-[#10B981]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
