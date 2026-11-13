import s from "./Decor.module.css";

/**
 * Grafismos técnicos de fundo, no traço de prancha de projeto estrutural.
 * Sempre decorativos (aria-hidden), em traço fino e opacidade baixa: dão textura sem competir com o conteúdo.
 */
export type DecorName = "trelica" | "vergalhao" | "estribo";

export function Decor({ name, className = "" }: { name: DecorName; className?: string }) {
  return (
    <svg
      className={`${s.decor} ${s[name]} ${className}`}
      viewBox={VIEWBOX[name]}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      vectorEffect="non-scaling-stroke"
      aria-hidden="true"
      focusable="false"
    >
      {DRAW[name]}
    </svg>
  );
}

const VIEWBOX: Record<DecorName, string> = {
  trelica: "0 0 720 200",
  vergalhao: "0 0 420 260",
  estribo: "0 0 300 300",
};

/* Treliça em elevação: banzo superior, dois inferiores, diagonais soldadas e cotas. */
const trelica = (() => {
  const nodes: React.ReactNode[] = [];
  const top = 40,
    bottom = 150,
    step = 40;
  for (let x = 20; x < 700; x += step) {
    nodes.push(<path key={`d${x}`} d={`M${x} ${bottom} L${x + step / 2} ${top} L${x + step} ${bottom}`} />);
    nodes.push(<circle key={`n${x}`} cx={x + step / 2} cy={top} r={2.5} />);
  }
  return (
    <>
      <path d={`M10 ${top} H710`} strokeWidth={1.6} />
      <path d={`M10 ${bottom} H710`} strokeWidth={1.6} />
      <path d={`M10 ${bottom + 6} H710`} />
      {nodes}
      {/* cota de altura */}
      <path d={`M716 ${top} V${bottom}`} strokeDasharray="3 4" />
      <path d={`M712 ${top} H720 M712 ${bottom} H720`} />
      {/* cota de passo */}
      <path d={`M20 185 H60 M20 180 V190 M60 180 V190`} />
      <text x="28" y="178" fontSize="11" fill="currentColor" stroke="none" fontFamily="inherit">
        20 cm
      </text>
      <text x="676" y="100" fontSize="11" fill="currentColor" stroke="none" fontFamily="inherit">
        H8
      </text>
    </>
  );
})();

/* Cortes de vergalhão (bitolas) com nervuras e linha de cota. */
const vergalhao = (
  <>
    {[
      { cx: 60, r: 16, label: "Ø 6,3" },
      { cx: 150, r: 22, label: "Ø 8,0" },
      { cx: 250, r: 28, label: "Ø 10,0" },
      { cx: 360, r: 36, label: "Ø 12,5" },
    ].map((b) => (
      <g key={b.cx}>
        <circle cx={b.cx} cy={110} r={b.r} strokeWidth={1.4} />
        <circle cx={b.cx} cy={110} r={b.r - 5} strokeDasharray="2 5" />
        <path d={`M${b.cx - b.r} ${170} H${b.cx + b.r} M${b.cx - b.r} 164 V176 M${b.cx + b.r} 164 V176`} />
        <text x={b.cx - 16} y={196} fontSize="11" fill="currentColor" stroke="none" fontFamily="inherit">
          {b.label}
        </text>
      </g>
    ))}
    <path d="M20 40 H400" strokeDasharray="6 6" />
    <text x="20" y="30" fontSize="11" fill="currentColor" stroke="none" fontFamily="inherit">
      CORTE A-A · CA-50
    </text>
  </>
);

/* Estribo com ganchos a 135° e cotas. */
const estribo = (
  <>
    <rect x="70" y="70" width="160" height="160" rx="10" strokeWidth={1.6} />
    <path d="M80 80 L60 100 M90 74 L70 54" strokeWidth={1.6} />
    <circle cx="86" cy="86" r="6" />
    <circle cx="214" cy="86" r="6" />
    <circle cx="86" cy="214" r="6" />
    <circle cx="214" cy="214" r="6" />
    <path d="M70 262 H230 M70 256 V268 M230 256 V268" />
    <path d="M262 70 V230 M256 70 H268 M256 230 H268" />
    <text x="128" y="284" fontSize="11" fill="currentColor" stroke="none" fontFamily="inherit">
      15 cm
    </text>
    <text x="272" y="154" fontSize="11" fill="currentColor" stroke="none" fontFamily="inherit">
      15
    </text>
  </>
);

const DRAW: Record<DecorName, React.ReactNode> = { trelica, vergalhao, estribo };
