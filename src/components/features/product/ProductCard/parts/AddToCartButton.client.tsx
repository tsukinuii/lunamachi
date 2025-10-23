"use client";

import { useState } from "react";

export default function AddToCartButton({
  productId,
  disabled,
}: {
  productId: number;
  disabled?: boolean;
}) {
  const [pending, setPending] = useState(false);
  const [added, setAdded] = useState(false);

  const onClick = async () => {
    if (pending) return;
    setPending(true);
    await new Promise((r) => setTimeout(r, 400));
    setPending(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || pending}
      aria-busy={pending}
      className="grid h-11 w-11 place-items-center rounded-xl border bg-white shadow-sm disabled:opacity-50"
      title="เพิ่มลงตะกร้า"
    >
      {added ? "✓" : pending ? "…" : "🛒"}
    </button>
  );
}