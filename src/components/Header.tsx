"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, MSG, waLink } from "@/content/site";
import { Icon } from "./Icon";
import s from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={s.header}>
      <div className={`container ${s.bar}`}>
        <Link href="/" className={s.logo} aria-label="RB Ferragens, página inicial">
          <Image src="/images/logo.png" alt="RB Ferragens" width={1080} height={640} priority sizes="120px" />
        </Link>

        <button
          type="button"
          className={s.toggle}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={s.burger} aria-hidden="true" data-open={open} />
          <span>{open ? "Fechar" : "Menu"}</span>
        </button>

        <nav id="menu-principal" aria-label="Menu principal" className={s.nav} data-open={open}>
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className={s.wa} href={waLink(MSG.geral)} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} />
            Orçamento no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
