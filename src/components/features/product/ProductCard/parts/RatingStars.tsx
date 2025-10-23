function Star({ filled }: { filled: boolean }) {
  return (
    <span aria-hidden className={filled ? "text-yellow-500" : "text-slate-300"}>
      ★
    </span>
  );
}
export default function RatingStars({
  rating = 0,
  count = 0,
}: {
  rating?: number;
  count?: number;
}) {
  const r = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1 text-sm" aria-label={`คะแนน ${r} จาก 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < r} />
      ))}
      <span className="text-slate-500">({count})</span>
    </div>
  );
}