import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cashub – darmowa wtyczka cashback do przeglądarki";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT_GREEN = "#16a34a";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: 80,
        }}
      >
        {/* Logo: white circle with green C */}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            border: `4px solid #e5e7eb`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 48,
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontSize: 160,
              fontWeight: 900,
              color: ACCENT_GREEN,
              lineHeight: 1,
              marginTop: -12,
            }}
          >
            C
          </div>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#0a0a0a",
            letterSpacing: "-0.03em",
            marginBottom: 16,
            display: "flex",
          }}
        >
          Cashub
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "#4b5563",
            textAlign: "center",
            maxWidth: 960,
            lineHeight: 1.3,
            display: "flex",
          }}
        >
          Zarabiaj cashback na zakupach
        </div>

        {/* Green accent line */}
        <div
          style={{
            marginTop: 56,
            width: 480,
            height: 6,
            background: `linear-gradient(90deg, transparent, ${ACCENT_GREEN}, transparent)`,
            display: "flex",
          }}
        />
      </div>
    ),
    size,
  );
}
