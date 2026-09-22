export interface Product {
  id: string;
  name: string;
  category: 'exclusive' | 'mystery' | 'boxes' | 'customized' | 'anniversary' | 'notes';
  categoryLabel: string;
  shortDescription: string;
  description: string;
  pricePlaceholder: string;
  numericPriceEquivalent: number;
  image: string;
  badge?: 'Best Seller' | 'New' | 'Limited' | 'Handmade' | 'Mystery';
  fragranceNotes?: string[];
  burnTime?: string;
  waxType?: string;
  weight?: string;
  isCustomizable?: boolean;
}

export interface AnniversaryCardOption {
  id: string;
  title: string;
  subtitle: string;
  previewImage: string;
  sampleMessage: string;
  pricePlaceholder: string;
  numericPriceEquivalent: number;
}

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  pricePlaceholder: string;
  numericPriceEquivalent: number;
  image: string;
}

export interface BasePackagingOption {
  id: string;
  name: string;
  description: string;
  pricePlaceholder: string;
  numericPriceEquivalent: number;
  image: string;
}

export interface CustomGiftBoxState {
  packagingId: string;
  candleId: string;
  hasAnniversaryCard: boolean;
  anniversaryCardId: string;
  anniversaryRecipient: string;
  hasHandwrittenNote: boolean;
  handwrittenNoteText: string;
  handwrittenNoteTo: string;
  handwrittenNoteFrom: string;
  hasMysteryCandle: boolean;
  selectedAddOns: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  subtitle?: string;
  image: string;
  quantity: number;
  pricePlaceholder: string;
  numericPrice: number;
  isCustomGiftBox?: boolean;
  customizationDetails?: {
    packagingName?: string;
    candleName?: string;
    anniversaryCard?: string;
    handwrittenNote?: string;
    mysteryCandleIncluded?: boolean;
    addOns?: string[];
    customizationChargeText?: string;
  };
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  quote: string;
  productName: string;
  date: string;
  isDemoReview: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'customization' | 'orders' | 'general' | 'delivery';
}
