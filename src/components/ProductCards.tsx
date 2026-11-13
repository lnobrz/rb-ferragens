import Link from "next/link";
import { InViewImage } from "./InViewImage";
import { Icon } from "./Icon";
import type { ProductCard } from "@/content/products";
import s from "./ProductCards.module.css";

/** Card de produto com foto e botão "encaixado" no canto (recorte côncavo, à la Wave Wood). */
export function ProductCards({ items, featured }: { items: ProductCard[]; featured?: boolean }) {
  return (
    <ul className={`${s.grid} ${featured ? s.featured : ""}`}>
      {items.map((p, i) => (
        <li key={p.title} className={s.card} data-reveal style={{ "--d": i % 3 } as React.CSSProperties}>
          <div className={s.media}>
            <InViewImage src={p.image} alt={p.alt} fill quality={70} sizes="(min-width: 1000px) 33vw, (min-width: 640px) 50vw, 92vw" className={s.img} />
            <span className={s.notch} aria-hidden="true">
              <span className={s.notchBtn}>
                <Icon name="seta" size={20} />
              </span>
            </span>
          </div>
          <div className={s.body}>
            <h3 className={s.title}>
              <Link href={p.href} className={s.link}>
                {p.title}
              </Link>
            </h3>
            <p className={s.text}>{p.text}</p>
            <span className={s.more} aria-hidden="true">
              {p.link}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
