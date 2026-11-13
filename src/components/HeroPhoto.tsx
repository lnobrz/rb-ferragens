"use client";

import { useEffect, useRef, useState } from "react";

const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

type ImgProps = { src: string; srcSet?: string; sizes?: string; width?: number | string; height?: number | string };

/**
 * Foto do topo (Home e páginas internas).
 * Desktop: carrega na hora, como sempre.
 * Celular: o hero abre com a cor sólida da marca e a foto só começa a baixar depois que a página terminou
 * de carregar; quando chega, entra com um fade + leve zoom. Assim o texto é o primeiro conteúdo grande da tela.
 */
export function HeroPhoto({
  desk,
  mob,
  alt,
  className,
  shownClassName,
}: {
  desk: ImgProps;
  mob?: ImgProps;
  alt: string;
  className: string;
  shownClassName: string;
}) {
  const [mobileReady, setMobileReady] = useState(false);
  const [shown, setShown] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 699px)").matches;
    if (!isMobile) {
      setShown(true);
      return;
    }
    const start = () => requestAnimationFrame(() => setMobileReady(true));
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  // A foto pode já estar em cache quando o React hidrata.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 1 && !img.currentSrc.startsWith("data:")) setShown(true);
  }, [mobileReady]);

  return (
    <picture>
      <source
        media="(max-width: 699px)"
        srcSet={mobileReady ? (mob ?? desk).srcSet ?? (mob ?? desk).src : BLANK}
        sizes={(mob ?? desk).sizes}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={desk.src}
        srcSet={desk.srcSet}
        sizes={desk.sizes}
        alt={alt}
        decoding="async"
        fetchPriority="high"
        className={`${className} ${shown ? shownClassName : ""}`}
        onLoad={(e) => {
          if (!e.currentTarget.currentSrc.startsWith("data:")) setShown(true);
        }}
      />
    </picture>
  );
}
