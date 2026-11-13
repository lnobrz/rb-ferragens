/** Ícones de traço (1.5px), desenhados pra este site. Decorativos: sempre aria-hidden. */
const PATHS: Record<string, React.ReactNode> = {
  trelica: (
    <>
      <path d="M3 18h18M3 8h18" />
      <path d="M3 18l3-10 3 10 3-10 3 10 3-10 3 10" />
    </>
  ),
  vergalhao: (
    <>
      <path d="M3 7h18M3 12h18M3 17h18" />
      <path d="M6 5.5l1 3M10 5.5l1 3M14 5.5l1 3M18 5.5l1 3M6 10.5l1 3M10 10.5l1 3M14 10.5l1 3M18 10.5l1 3M6 15.5l1 3M10 15.5l1 3M14 15.5l1 3M18 15.5l1 3" />
    </>
  ),
  coluna: (
    <>
      <path d="M8 2v20M16 2v20" />
      <path d="M7 5h10v2H7zM7 10h10v2H7zM7 15h10v2H7z" />
    </>
  ),
  malha: (
    <>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </>
  ),
  tubo: (
    <>
      <circle cx="7" cy="8" r="4" />
      <circle cx="17" cy="8" r="4" />
      <circle cx="12" cy="17" r="4" />
      <circle cx="7" cy="8" r="2" />
      <circle cx="17" cy="8" r="2" />
      <circle cx="12" cy="17" r="2" />
    </>
  ),
  arame: (
    <>
      <ellipse cx="12" cy="12" rx="9" ry="5" />
      <ellipse cx="12" cy="12" rx="6" ry="3" />
      <path d="M21 12c0 2 1 4 2 5" />
    </>
  ),
  corte: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M8.2 8.2L20 20M8.2 15.8L20 4" />
    </>
  ),
  caminhao: (
    <>
      <path d="M2 6h12v10H2zM14 9h4l3 3v4h-7" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  cartao: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  calendario: (
    <>
      <rect x="3" y="5" width="18" height="16" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  telefone: (
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
  ),
  relogio: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 6l9 7 9-7" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 1a4 4 0 0 1-2.5-2.5l1-1-1-2z" />
    </>
  ),
  prego: <path d="M7 3h10M12 3v14l-1 4h2l-1-4" />,
  check: <path d="M4 12l5 5L20 6" />,
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
  pessoa: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  lista: <path d="M9 6h12M9 12h12M9 18h12M4 6h1M4 12h1M4 18h1" />,
  casa: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
    </>
  ),
};

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 24, className }: { name: string; size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
