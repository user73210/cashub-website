import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cashub - zarabiaj cashback na zakupach",
    short_name: "Cashub",
    description:
      "Darmowa wtyczka do przeglądarki — automatycznie szuka kodów rabatowych i zwraca cashback z zakupów online w 50+ sklepach.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#16a34a",
    lang: "pl-PL",
    orientation: "portrait",
    icons: [
      {
        src: "/icon0.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
