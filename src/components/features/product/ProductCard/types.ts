export type Product = {
  // id: string;
  // slug: string;
  // name: string;
  // imageUrl: string;
  // categoryLabel?: string;

  // price: number;
  // originalPrice?: number;
  // discountPercent?: number;

  // rating?: number;
  // ratingCount?: number;

  // currency: "THB" | "USD";
  // inStock: boolean;
  // isFavorited?: boolean;

  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  reviews: number;
  discount: string;
  category: string;
  inStock: boolean;
  description: string;

  isFavorited?: boolean;
};
