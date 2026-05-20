import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const ACCENT_GREEN = "#16a34a";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            fontSize: 130,
            fontWeight: 900,
            color: ACCENT_GREEN,
            lineHeight: 1,
            fontFamily: "system-ui, -apple-system, sans-serif",
            marginTop: -10,
          }}
        >
          C
        </div>
      </div>
    ),
    size,
  );
}
