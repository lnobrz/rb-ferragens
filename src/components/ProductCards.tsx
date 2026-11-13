import Link from "next/link";
import { Icon } from "./Icon";
import type { ProductCard } from "@/content/products";
import s from "./ProductCards.module.css";

export function ProductCards({ items }: { items: ProductCard[] }) {
  return (
    <ul className={s.grid}>
      {items.map((p) => (
        <li key={p.title} className={s.card}>
          <div className={s.media} aria-hidden="true">
            <Icon name={p.icon} size={56} />
          </div>
          <h3 className={s.title}>{p.title}</h3>
          <p className={s.text}>{p.text}</p>
          <Link href={p.href} className={s.link}>
            {p.link}
            <Icon name="seta" size={18} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
