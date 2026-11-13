"use client";

import { useEffect, useState } from "react";

/** "Aberto agora" pelo horário de Fortaleza (seg–sex 7h–18h, sáb 7h–12h). */
function status(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Fortaleza",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = get("weekday");
  const h = Number(get("hour")) % 24;
  const m = Number(get("minute"));
  const mins = h * 60 + m;
  const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(day);
  const open = (weekday && mins >= 420 && mins < 1080) || (day === "Sat" && mins >= 420 && mins < 720);
  const time = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  return { open, time };
}

export function OpenStatus({ className }: { className?: string }) {
  const [s, setS] = useState<{ open: boolean; time: string } | null>(null);

  useEffect(() => {
    const tick = () => setS(status(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} data-open={s?.open ?? undefined}>
      <span aria-hidden="true" data-dot />
      <span>Fortaleza</span>
      {s && (
        <>
          <span aria-hidden="true">·</span>
          <span>{s.time}</span>
          <span aria-hidden="true">·</span>
          <span>{s.open ? "Aberto agora" : "Fechado agora"}</span>
        </>
      )}
    </span>
  );
}
