import Image from "next/image";

export default function ProductImage({
  src,
  alt,
  sizes = "(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw",
}: {
  src: string;
  alt: string;
  sizes?: string;
}) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority={false}
      />
    </div>
  );
}