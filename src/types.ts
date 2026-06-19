export interface Product {
  id: string;
  name: string;
  description: string;
  category: "standard" | "special" | "folders" | "partitions";
  imageUrl: string;
  highlights: string[];
  dimensions?: string;
  minQuantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "shipping" | "products" | "customization" | "orders";
}
