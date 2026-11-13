"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Foto abaixo da dobra que só começa a baixar quando chega a ~400px da tela.
 * O lazy nativo do navegador baixa tudo que está a até ~2500px, o que disputa banda com a foto do hero.
 */
export function InViewImage(props: ImageProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <span ref={ref} aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      {show ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image {...props} />
      ) : (
        <span role="img" aria-label={typeof props.alt === "string" ? props.alt : ""} style={{ position: "absolute", inset: 0 }} />
      )}
      <noscript>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...props} />
      </noscript>
    </>
  );
}
