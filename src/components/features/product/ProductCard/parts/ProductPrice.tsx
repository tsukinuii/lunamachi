export default function Price({
  amount,
  original,
  currency,
}: {
  amount: string;
  original?: string;
  currency: "THB" | "USD";
}) {
  const fmt = new Intl.NumberFormat("th-TH", { style: "currency", currency });
  return (
    <div className="mt-1 flex items-baseline gap-2">
      <span className="text-lg font-bold text-sky-600">{fmt.format(Number(amount))}</span>
      {original && Number(original) > Number(amount) && (
        <span className="text-sm text-slate-400 line-through">{fmt.format(Number(original))}</span>
      )}
    </div>
  );
}