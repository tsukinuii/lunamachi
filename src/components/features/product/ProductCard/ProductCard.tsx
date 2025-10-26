import Link from "next/link";
import type { Product } from "./types";

import ProductImage from "./parts/ProductImage";
import DiscountBadge from "./parts/DiscountBadge";
import FavoriteToggleButton from "./parts/FavoriteToggleButton.client";
import CategoryPill from "./parts/CategoryPill";
// import RatingStars from "./parts/RatingStars";
import ProductPrice from "./parts/ProductPrice";
import AddToCartButton from "./parts/AddToCartButton.client";

export default function ProductCard({ product }: { product: Product }) {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    // rating,
    // reviews,
    discount,
    category,
    inStock,
    // description,
    isFavorited,
  } = product;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="relative">
        <ProductImage src={image} alt={name} />
        <DiscountBadge percent={discount} />
        <div className="absolute right-2 top-2">
          <FavoriteToggleButton productId={id} initial={!!isFavorited} />
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <CategoryPill label={category} />
        <h3 className="text-base font-semibold leading-snug text-slate-900">
          <Link href={`/product/${id}`} className="hover:underline focus:outline-none">
            {name}
          </Link>
        </h3>
        <ProductPrice amount={price} original={originalPrice} currency="THB" />
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        <Link
          href={`/product/${id}`}
          className="col-span-3 grid h-11 place-items-center rounded-xl border bg-white text-sm font-medium hover:bg-slate-50"
        >
          ดูรายละเอียด
        </Link>
        <AddToCartButton productId={id} disabled={!inStock} />
      </div>

      {!inStock && (
        <p className="mt-2 text-xs text-rose-600">สินค้าหมดชั่วคราว</p>
      )}
    </article>
  );
}