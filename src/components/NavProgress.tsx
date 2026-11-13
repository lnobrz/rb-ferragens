"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import s from "./NavProgress.module.css";

/**
 * Barrinha amarela de 2px no topo durante a troca de página.
 * Só aparece se a navegação passar de 150ms (em conexão boa, nem aparece). Sem pre-loader de tela cheia.
 */
const DELAY = 150;

export function NavProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const timer = useRef<number | undefined>(undefined);
  const hide = useRef<number | undefined>(undefined);
  const pending = useRef(false);

  // Começa no clique em link interno que troca de página.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      let url: URL;
      try {
        url = new URL(href, location.href);
      } catch {
        return;
      }
      if (url.origin !== location.origin || url.pathname === location.pathname) return;

      pending.current = true;
      window.clearTimeout(timer.current);
      window.clearTimeout(hide.current);
      timer.current = window.setTimeout(() => {
        if (pending.current) setState("loading");
      }, DELAY);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Termina quando a nova página entra.
  useEffect(() => {
    if (!pending.current) return;
    pending.current = false;
    window.clearTimeout(timer.current);
    setState((prev) => {
      if (prev !== "loading") return "idle";
      hide.current = window.setTimeout(() => setState("idle"), 400);
      return "done";
    });
  }, [pathname]);

  useEffect(
    () => () => {
      window.clearTimeout(timer.current);
      window.clearTimeout(hide.current);
    },
    [],
  );

  return <div className={s.bar} data-state={state} aria-hidden="true" />;
}
