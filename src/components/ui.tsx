import Link from "next/link";
import Image, { getImageProps } from "next/image";
import { HeroPhoto } from "./HeroPhoto";
import { Icon } from "./Icon";
import { waLink } from "@/content/site";
import s from "./ui.module.css";

type Tone = "paper" | "white" | "gray" | "dark";
const toneClass: Record<Tone, string> = { paper: "", white: "bg-white", gray: "bg-gray", dark: "bg-dark" };

/* ---------- Botões (pílula com seta em círculo) ---------- */

type BtnVariant = "ink" | "yellow" | "ghost" | "light";

function BtnInner({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <>
      <span className={s.btnLabel}>{children}</span>
      <span className={s.btnIcon} aria-hidden="true">
        <Icon name={icon} size={18} />
      </span>
    </>
  );
}

export function WaButton({
  message,
  children,
  variant = "yellow",
}: {
  message: string;
  children: React.ReactNode;
  variant?: BtnVariant;
}) {
  return (
    <a className={`${s.btn} ${s[variant]}`} href={waLink(message)} target="_blank" rel="noopener noreferrer">
      <BtnInner icon="whatsapp">{children}</BtnInner>
      <span className="sr-only"> (abre o WhatsApp)</span>
    </a>
  );
}

export function LinkButton({
  href,
  children,
  variant = "ghost",
  prefetch,
}: {
  href: string;
  children: React.ReactNode;
  variant?: BtnVariant;
  prefetch?: boolean;
}) {
  return (
    <Link className={`${s.btn} ${s[variant]}`} href={href} prefetch={prefetch}>
      <BtnInner icon="seta">{children}</BtnInner>
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className={s.textLink} href={href}>
      {children}
      <Icon name="seta" size={16} />
    </Link>
  );
}

export function Actions({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return <div className={`${s.actions} ${center ? s.actionsCenter : ""}`}>{children}</div>;
}

/* ---------- Hero das páginas internas ----------
   Com foto: card de foto arredondado com o título por cima (mesma linha da Home, refs Wave Wood e Mountain).
   Sem foto: só o bloco de texto, compacto. */

const pick = (p: { src: string; srcSet?: string; sizes?: string }) => ({ src: p.src, srcSet: p.srcSet, sizes: p.sizes });

export function PageHero({
  title,
  subtitle,
  eyebrow,
  children,
  image,
  imageAlt = "",
  chip,
  crumbs,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  chip?: string;
  crumbs?: { href?: string; label: string }[];
}) {
  if (!image) {
    return (
      <section className={s.hero}>
        <div className="container">
          {crumbs && <Breadcrumb items={crumbs} />}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className={s.heroTitle}>{title}</h1>
          <p className={s.heroSub}>{subtitle}</p>
          {children}
        </div>
      </section>
    );
  }
  return (
    <section className={s.heroWrap}>
      <div className={s.heroCard}>
        <HeroPhoto
          alt={imageAlt}
          desk={pick(getImageProps({ src: image, alt: imageAlt, fill: true, sizes: "100vw", quality: 60 }).props)}
          className={s.heroImg}
          shownClassName={s.heroImgShown}
        />
        <div className={s.heroCardTop}>
          {crumbs && <Breadcrumb items={crumbs} light />}
          {chip && <span className={s.heroMeta}>{chip}</span>}
        </div>
        <div className={s.heroCardBody}>
          <div>
            {eyebrow && <p className={`eyebrow ${s.heroEyebrowLight}`}>{eyebrow}</p>}
            <h1 className={s.heroCardTitle}>{title}</h1>
          </div>
          <div className={s.heroCardSide}>
            <p className={s.heroCardSub}>{subtitle}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Seções ---------- */

export function Section({
  title,
  eyebrow,
  intro,
  children,
  tone = "paper",
  split,
  id,
  tight,
}: {
  title?: React.ReactNode;
  eyebrow?: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  tone?: Tone;
  split?: boolean;
  id?: string;
  tight?: boolean;
}) {
  return (
    <section className={`${tight ? "section-tight" : "section"} ${toneClass[tone]}`} id={id}>
      <div className="container">
        {(title || eyebrow || intro) && (
          <div className={`head ${split ? "head-split" : ""}`}>
            <div>
              {eyebrow && (
                <p className="eyebrow" data-reveal>
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 data-reveal style={{ "--d": 1 } as React.CSSProperties}>
                  {title}
                </h2>
              )}
            </div>
            {intro && (
              <div className="lead" data-reveal style={{ "--d": 2 } as React.CSSProperties}>
                {intro}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/** Cards brancos com ícone num círculo amarelo. */
export function FeatureGrid({
  items,
  columns = 2,
}: {
  items: { title: string; text?: string; icon?: string }[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <ul className={`${s.features} ${s[`cols${columns}`]}`}>
      {items.map((it, i) => (
        <li key={it.title} className={s.feature} data-reveal style={{ "--d": i } as React.CSSProperties}>
          {it.icon && (
            <span className={s.featureIcon} aria-hidden="true">
              <Icon name={it.icon} size={24} />
            </span>
          )}
          <h3 className={s.featureTitle}>{it.title}</h3>
          {it.text && <p>{it.text}</p>}
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 | 3 }) {
  return (
    <ul className={`${s.checks} ${s[`checkCols${columns}`]}`}>
      {items.map((it, i) => (
        <li key={it} data-reveal style={{ "--d": i } as React.CSSProperties}>
          <span className={s.checkIcon} aria-hidden="true">
            <Icon name="check" size={16} />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Passos em cards; o primeiro amarelo, o último escuro (bento do Hamza). */
export function Steps({ items }: { items: { title?: string; text: string }[] }) {
  return (
    <ol className={`${s.steps} ${items.length === 3 ? s.steps3 : ""}`}>
      {items.map((it, i) => (
        <li key={i} className={s.step} data-reveal style={{ "--d": i } as React.CSSProperties}>
          <span className={s.stepNum} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            {it.title && <h3 className={s.stepTitle}>{it.title}</h3>}
            <p>{it.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DataTable({
  caption,
  head,
  rows,
  note,
}: {
  caption: string;
  head: string[];
  rows: string[][];
  note?: string;
}) {
  return (
    <div className={s.tableWrap} data-reveal>
      <div className={s.tableScroll} role="region" aria-label={caption} tabIndex={0}>
        <table className={s.table}>
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              {head.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                {r.map((c, i) =>
                  i === 0 ? (
                    <th key={i} scope="row">
                      {c}
                    </th>
                  ) : (
                    <td key={i}>{c}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className={s.tableNote}>{note}</p>}
    </div>
  );
}

export type FaqItem = { q: string; a: string };

export function Faq({ items, title = "Perguntas frequentes" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="section bg-white">
      <div className={`container ${s.faqGrid}`}>
        <div className={s.faqHead}>
          <p className="eyebrow" data-reveal>
            Dúvidas
          </p>
          <h2 data-reveal style={{ "--d": 1 } as React.CSSProperties}>
            {title}
          </h2>
          <p className="muted" data-reveal style={{ "--d": 2 } as React.CSSProperties}>
            Não achou sua resposta? Pergunte no WhatsApp, quem responde entende de ferro.
          </p>
        </div>
        <div className={s.faq}>
          {items.map((it, i) => (
            <details key={it.q} className={s.faqItem} data-reveal style={{ "--d": i } as React.CSSProperties}>
              <summary>
                <h3 className={s.faqQ}>{it.q}</h3>
                <span className={s.faqToggle} aria-hidden="true" />
              </summary>
              <div className={s.faqA}>
                <p>{it.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a },
            })),
          }),
        }}
      />
    </section>
  );
}

/** Chamada final: card amarelo grande, arredondado, com foto. */
export function CtaBand({
  title,
  text,
  message,
  button,
  links,
  image = "/images/fotos/pecas-separadas.jpg",
}: {
  title?: string;
  text?: string;
  message: string;
  button: string;
  links?: { href: string; label: string }[];
  image?: string;
}) {
  return (
    <section className={s.ctaSection}>
      <div className="container">
        <div className={s.cta} data-reveal="scale">
          <div className={s.ctaBody}>
            <p className={`eyebrow ${s.ctaEyebrow}`}>Orçamento no WhatsApp</p>
            {title && <h2 className={s.ctaTitle}>{title}</h2>}
            {text && <p className={s.ctaText}>{text}</p>}
            <Actions>
              <WaButton message={message} variant="ink">
                {button}
              </WaButton>
            </Actions>
            {links && links.length > 0 && (
              <ul className={s.ctaLinks}>
                {links.map((l) => (
                  <li key={l.href}>
                    <TextLink href={l.href}>{l.label}</TextLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={s.ctaMedia}>
            <Image src={image} alt="" fill sizes="(min-width: 900px) 40vw, 90vw" className={s.cover} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Faixa curta com texto + link. */
export function Band({ text, href, label }: { text: string; href: string; label: string }) {
  return (
    <div className={s.band} data-reveal>
      <p>{text}</p>
      <LinkButton href={href} variant="yellow">
        {label}
      </LinkButton>
    </div>
  );
}

/** Texto + foto arredondada. */
export function Split({
  children,
  image,
  alt,
  reverse,
}: {
  children: React.ReactNode;
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <div className={`${s.split} ${reverse ? s.splitReverse : ""}`}>
      <div className={s.splitText} data-reveal>
        {children}
      </div>
      <div className={s.splitMedia} data-reveal="scale" style={{ "--d": 1 } as React.CSSProperties}>
        <Image src={image} alt={alt} fill sizes="(min-width: 900px) 46vw, 92vw" className={s.cover} />
      </div>
    </div>
  );
}

export function Breadcrumb({ items, light }: { items: { href?: string; label: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Você está em" className={`${s.crumbs} ${light ? s.crumbsLight : ""}`}>
      <ol>
        <li>
          <Link href="/">Início</Link>
        </li>
        {items.map((it) => (
          <li key={it.label}>
            {it.href ? <Link href={it.href}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
