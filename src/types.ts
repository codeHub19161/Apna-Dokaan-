export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  affiliateLink: string;
}

export const CATEGORIES = [
  "Electronics",
  "Fashion",
  "Daily-Needs",
  "Home",
  "Foods",
  "Beauty"
];
