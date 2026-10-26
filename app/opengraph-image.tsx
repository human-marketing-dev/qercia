import { ImageResponse } from "next/og";

// Imagen provisional para redes. TODO: reemplazar por una foto aérea real (opengraph-image.jpg).
export const alt = "Qercia Residencial: terrenos en Camino al Diente, Carretera Nacional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#262324",
          color: "#fffcf5",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 12 }}>QERCIA</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 950 }}>
            Un oasis urbano para vivir entre montañas
          </div>
          <div style={{ fontSize: 30, marginTop: 28, color: "rgba(255,255,255,0.75)" }}>
            Terrenos desde 500 m² en Camino al Diente · Desde $8.3 MDP
          </div>
        </div>
      </div>
    ),
    size,
  );
}
