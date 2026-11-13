"use client";

import { useState } from "react";
import s from "./Marquee.module.css";

/** Faixa amarela rolando com os produtos. Tem botão de pausa (conteúdo que se move sozinho). */
export function Marquee({ items }: { items: string[] }) {
  const [paused, setPaused] = useState(false);
  const row = (hidden: boolean) => (
    <ul className={s.row} aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it}>
          <span>{it}</span>
          <span className={s.sep} aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <section className={s.marquee} data-paused={paused} aria-label="O que a RB vende">
      <div className={s.track}>
        {row(false)}
        {row(true)}
      </div>
      <button type="button" className={s.pause} onClick={() => setPaused((p) => !p)} aria-pressed={paused}>
        <span className="sr-only">{paused ? "Continuar a faixa" : "Pausar a faixa"}</span>
        <span aria-hidden="true" className={paused ? s.playIcon : s.pauseIcon} />
      </button>
    </section>
  );
}
