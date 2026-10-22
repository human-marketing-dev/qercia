import { ImageResponse } from "next/og";

// Imagen provisional para redes. TODO: reemplazar por una foto aérea real (opengraph-image.jpg).
export const alt = "Qercia: lotes residenciales en Camino al Diente, Monterrey";
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
          background: "linear-gradient(135deg, #3f4a3a 0%, #2c3429 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 12 }}>QERCIA</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 950 }}>
            Lotes residenciales en Camino al Diente
          </div>
          <div style={{ fontSize: 30, marginTop: 28, color: "rgba(255,255,255,0.75)" }}>
            Desde 500 m² · Listos para escriturar · Desde $8 mdp
          </div>
        </div>
      </div>
    ),
    size,
  );
}
