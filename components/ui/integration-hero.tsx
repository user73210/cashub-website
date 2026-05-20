"use client";

import { Button } from "@/components/ui/button";
import { TextRotate } from "@/components/ui/text-rotate";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowRight } from "lucide-react";
import React from "react";

const favicon = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const ICONS_ROW1 = [
  favicon("allegro.pl"),
  favicon("aliexpress.com"),
  favicon("ceneo.pl"),
  favicon("mbank.pl"),
  favicon("pekao.com.pl"),
  favicon("revolut.com"),
  favicon("carrefour.pl"),
  favicon("bitdefender.com"),
];

const ICONS_ROW2 = [
  favicon("surfshark.com"),
  favicon("panasonic.com"),
  favicon("parfois.com"),
  favicon("autodoc.pl"),
  favicon("olympus.com"),
  favicon("erli.pl"),
  favicon("mepal.com"),
  favicon("saily.com"),
];

const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

const TITLE_TRANSITION = { duration: 0.4, ease: [0.23, 1, 0.32, 1] as const };

// Darker accent green (Tailwind green-600)
const ACCENT_GREEN = "#16a34a";

// Taller-than-wide ellipse anchored at top. Vertical radius matches the wrapper's
// height so the fade FULLY completes inside the wrapper → visible oval bottom curve
// (otherwise the wrapper would cut the gradient and the bottom would look square).
const SPARKLE_MASK =
  "radial-gradient(ellipse 500px 650px at top, white 25%, transparent)";

export default function IntegrationHero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-white dark:bg-black flex items-center">
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <span className="relative z-10 inline-block px-3 py-1 mb-4 text-sm rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white scale-[1.3] origin-center">
          Wtyczka{" "}
          <span className="font-bold" style={{ color: ACCENT_GREEN }}>
            Cashub
          </span>{" "}
          - do każdej przeglądarki
        </span>

        {/* Lines + bleeding sparkles — lines take only h-3 of flow,
            sparkles are absolute and bleed downward + sideways over the rest */}
        <div className="relative mx-auto w-[40rem] max-w-full h-3">
          {/* Sparkles wrapper — height matches mask vertical radius so the bottom
              fades as a visible oval curve, ending a bit below the gallery */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] max-w-[100vw] h-[650px] pointer-events-none z-0"
            style={{
              maskImage: SPARKLE_MASK,
              WebkitMaskImage: SPARKLE_MASK,
            }}
          >
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={200}
              particleColor="#000000"
              speed={1}
              className="w-full h-full"
            />
          </div>

          {/* Green gradient lines on top of sparkles */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-600 to-transparent h-[2px] w-3/4 blur-sm z-10" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-600 to-transparent h-px w-3/4 z-10" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm z-10" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4 z-10" />
        </div>

        {/* Title — sits right under the line, sparkles bleed behind it */}
        <h1 className="relative z-10 mt-4 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center leading-tight">
          Zarabiaj cashback na zakupach{" "}
          <TextRotate
            texts={[
              "prywatnych",
              "firmowych",
              "prezentów",
              "dla rodziny",
              "dla ciebie",
            ]}
            mainClassName="inline-flex align-text-bottom text-black dark:text-white overflow-hidden justify-start w-[6.5em] h-[1.2em] leading-tight"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            staggerDuration={0.015}
            splitLevelClassName="overflow-hidden"
            transition={TITLE_TRANSITION}
            rotationInterval={2400}
            animatePresenceMode="popLayout"
          />
        </h1>

        <p className="relative z-10 mt-4 text-lg text-gray-700 dark:text-white max-w-xl mx-auto">
          Wtyczka aktywnie wyszukuje kody rabatowe w ponad 50 sklepach
        </p>

        <div className="relative z-10 mt-8 inline-block">
          <Button
            asChild
            size="lg"
            className="group text-white font-medium hover:brightness-95"
            style={{ backgroundColor: ACCENT_GREEN }}
          >
            <a
              href="https://chromewebstore.google.com/detail/wtyczka-cashback/ilafemiekdndmopekgefoomphnkokhdh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dodaj wtyczkę - za darmo
              <ArrowRight
                className="-me-1 ms-2 opacity-80 transition-transform group-hover:translate-x-0.5"
                size={18}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </Button>
        </div>

        {/* Carousel */}
        <div className="relative z-10 mt-12 overflow-hidden pb-2">
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center"
              >
                <img src={src} alt="logo" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          <div className="flex gap-10 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center"
              >
                <img src={src} alt="logo" className="h-10 w-10 object-contain" />
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
