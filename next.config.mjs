/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Stare ścieżki z poprzedniej wersji strony (hostowanej na LH) które Google
    // ma w indeksie — 301 na home żeby nie tracić juice-u i nie pokazywać 404.
    const legacyPaths = ["cennik", "uslugi", "sklep", "koszyk"];
    return legacyPaths.flatMap((p) => [
      { source: `/${p}`, destination: "/", permanent: true },
      { source: `/${p}/:path*`, destination: "/", permanent: true },
    ]);
  },
};

export default nextConfig;
