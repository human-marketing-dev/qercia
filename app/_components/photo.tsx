// Espacio para fotografía. Mientras no haya fotos reales se muestra un fondo neutro
// con la descripción de la imagen que va ahí. Al tenerlas, reemplazar por next/image.
export function Photo({
  label,
  className = "",
  tone = "light",
}: {
  label: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const bg =
    tone === "dark"
      ? "bg-[radial-gradient(120%_90%_at_20%_10%,#6d6863_0%,#3d3a39_55%,#262324_100%)]"
      : "bg-[radial-gradient(120%_90%_at_80%_0%,#e4e0d5_0%,#cfc9bc_50%,#b7b0a2_100%)]";

  return (
    <div
      role="img"
      aria-label={label}
      className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden ${bg} ${className}`}
    >
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.14] transition-transform duration-700 ease-out group-hover:scale-105"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={`M-20 ${40 + i * 30} C 80 ${10 + i * 30}, 180 ${80 + i * 28}, 420 ${20 + i * 32}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={tone === "dark" ? "text-white" : "text-foreground"}
          />
        ))}
      </svg>
      <span
        className={`absolute bottom-3 left-4 text-xs leading-none ${
          tone === "dark" ? "text-white/45" : "text-ink/45"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
