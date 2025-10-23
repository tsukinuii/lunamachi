export default function CategoryPill({ label }: { label?: string }) {
  if (!label) return null;
  return (
    <span className="inline-block rounded-full border px-2 py-1 text-[11px] font-medium text-slate-600">
      {label}
    </span>
  );
}
