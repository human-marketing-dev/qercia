import Image, { type StaticImageData } from "next/image";

// Foto que cubre su contenedor. `sizes` debe reflejar el ancho real en el layout
// para que next/image no sirva una versión más grande de la necesaria.
export function Photo({
  src,
  alt,
  sizes,
  className = "",
  eager = false,
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-beige ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        placeholder="blur"
        quality={90}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}
