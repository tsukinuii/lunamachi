import type { Product } from "@/components/features/product/ProductCard/types";

export function makeProduct(overrides: Partial<Product> = {}): Product {
  return {
    id: 1,
    name: "สมาร์ทโฟน Galaxy Luna Pro",
    price: "฿15,990",
    originalPrice: "฿18,990",
    image: "/modern-smartphone.png",
    rating: 4.8,
    reviews: 124,
    discount: "15%",
    category: "สมาร์ทโฟน",
    inStock: true,
    description: "สมาร์ทโฟนรุ่นล่าสุดพร้อมกล้องความละเอียดสูงและแบตเตอรี่ทนทาน",
    ...overrides,
  };
}
