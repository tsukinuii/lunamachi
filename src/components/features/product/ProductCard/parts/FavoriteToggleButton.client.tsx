"use client";

import { useState } from "react";

export default function FavoriteToggleButton({
  productId,
  initial = false,
}: {
  productId: number;
  initial?: boolean;
}) {
  const [fav, setFav] = useState(initial);
  const toggle = async () => {
    setFav((v) => !v);
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={fav}
      aria-label={fav ? "นำออกจากสินค้าที่ชอบ" : "เพิ่มในสินค้าที่ชอบ"}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-lg shadow-sm hover:bg-white"
      title={fav ? "เลิกถูกใจ" : "ถูกใจ"}
    >
      {fav ? "❤️" : "🤍"}
    </button>
  );
}