export default function DiscountBadge({ percent }: { percent?: string }) {
  if (!percent) return null;
  return (
    <div className="absolute left-2 top-2 rounded-md bg-red-500 px-2 py-1 text-xs font-semibold text-white shadow-sm">
      -{percent}
    </div>
  );
}
