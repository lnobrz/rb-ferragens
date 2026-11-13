"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/content/site";
import { Icon } from "./Icon";
import { OpenStatus } from "./OpenStatus";
import s from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={s.header} data-scrolled={scrolled} data-open={open}>
      <div className={s.topbar}>
        <div className={`container ${s.topbarInner}`}>
          <OpenStatus className={s.status} />
          <span className={s.topbarRight}>
            <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a>
            <span aria-hidden="true">·</span>
            <span>Entrega em Fortaleza e região metropolitana</span>
          </span>
        </div>
      </div>

      <div className={`container ${s.wrap}`}>
        <div className={s.bar}>
          <Link href="/" prefetch={false} className={s.logo} aria-label="RB Ferragens, página inicial">
            <Image src="/images/logo.png" alt="" width={1080} height={640} priority sizes="96px" />
          </Link>

          <nav aria-label="Menu principal" className={s.desktopNav}>
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} prefetch={false} aria-current={isActive(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>


          <button
            type="button"
            className={s.toggle}
            aria-expanded={open}
            aria-controls="menu-celular"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <span className={s.burger} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="menu-celular" className={s.sheet} hidden={!open}>
        <nav aria-label="Menu principal no celular" className="container">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <Link href={item.href} prefetch={false} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                  <Icon name="seta" size={22} />
                </Link>
              </li>
            ))}
          </ul>
          <div className={s.sheetFoot}>
            <OpenStatus className={s.status} />
            <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
