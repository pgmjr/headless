export interface HomePageContent {
  seo: {
    title: string;
    description: string;
  };
  content: {
    title: string;
    description: string;
  };
  heroSlider: {
    items: HeroSliderItem[];
  };
  highlights: {
    title: string;
    items: HighlightItem[];
  };
  featuredProducts: {
    title: string;
    items: ProductItem[];
  };
  popularServices: {
    title: string;
    items: ServiceItem[];
  };
}

export interface HeroSliderItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon?: string; // optional, adjust as needed
}

export interface ProductItem {
  title: string;
  description: string;
  price?: string;
  image?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}
