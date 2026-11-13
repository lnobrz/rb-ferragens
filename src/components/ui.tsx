import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";
import { waLink } from "@/content/site";
import s from "./ui.module.css";

/* ---------- Botões ---------- */

export function WaButton({
  message,
  children,
  variant = "primary",
}: {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  return (
    <a
      className={`${s.btn} ${variant === "primary" ? s.btnPrimary : s.btnOutline}`}
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="whatsapp" size={22} />
      <span>{children}</span>
      <span className="sr-only"> (abre o WhatsApp)</span>
    </a>
  );
}

export function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className={`${s.btn} ${s.btnOutline}`} href={href}>
      <span>{children}</span>
      <Icon name="seta" size={20} />
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className={s.textLink} href={href}>
      {children}
      <Icon name="seta" size={18} />
    </Link>
  );
}

export function Actions({ children }: { children: React.ReactNode }) {
  return <div className={s.actions}>{children}</div>;
}

/* ---------- Hero das páginas ---------- */

export function PageHero({
  title,
  subtitle,
  eyebrow,
  children,
  image = true,
  crumbs,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
  children?: React.ReactNode;
  image?: boolean;
  crumbs?: { href?: string; label: string }[];
}) {
  return (
    <section className={`${s.hero} ${image ? s.heroImage : ""}`}>
      {image && (
        <Image
          className={s.heroBg}
          src="/images/ferragem-armada-obra.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      )}
      <div className={`container ${s.heroInner}`}>
        {crumbs && <Breadcrumb items={crumbs} />}
        {eyebrow &&<p className={s.eyebrow}>{eyebrow}</p>}
        <h1 className={s.heroTitle}>{title}</h1>
        <p className={s.heroSub}>{subtitle}</p>
        {children}
      </div>
    </section>
  );
}

/* ---------- Seções ---------- */

export function Section({
  title,
  intro,
  children,
  alt,
  id,
}: {
  title?: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section className={`section ${alt ? "section-alt" : ""}`} id={id}>
      <div className="container">
        {title && <h2 className="deco-title">{title}</h2>}
        {intro && <div className={`lead ${s.intro}`}>{intro}</div>}
        {children}
      </div>
    </section>
  );
}

/** Lista de itens com título em destaque (ex.: "Por que comprar na RB"). */
export function FeatureGrid({
  items,
  columns = 2,
}: {
  items: { title: string; text?: string; icon?: string }[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <ul className={`${s.features} ${s[`cols${columns}`]}`}>
      {items.map((it) => (
        <li key={it.title} className={s.feature}>
          {it.icon && <Icon name={it.icon} size={30} className={s.featureIcon} />}
          <h3 className={s.featureTitle}>{it.title}</h3>
          {it.text && <p>{it.text}</p>}
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className={s.checks}>
      {items.map((it) => (
        <li key={it}>
          <Icon name="check" size={20} className={s.checkIcon} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: { title?: string; text: string }[] }) {
  return (
    <ol className={s.steps}>
      {items.map((it, i) => (
        <li key={i} className={s.step}>
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
    <div className={s.tableWrap}>
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
    <Section title={title} alt>
      <div className={s.faq}>
        {items.map((it) => (
          <details key={it.q} className={s.faqItem}>
            <summary>
              <h3 className={s.faqQ}>{it.q}</h3>
            </summary>
            <p>{it.a}</p>
          </details>
        ))}
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
    </Section>
  );
}

/** Chamada final de cada página. */
export function CtaBand({
  title,
  text,
  message,
  button,
  links,
}: {
  title?: string;
  text?: string;
  message: string;
  button: string;
  links?: { href: string; label: string }[];
}) {
  return (
    <section className={s.cta}>
      <div className={`container ${s.ctaInner}`}>
        <div>
          {title && <h2 className={s.ctaTitle}>{title}</h2>}
          {text && <p className={s.ctaText}>{text}</p>}
        </div>
        <div className={s.ctaSide}>
          <WaButton message={message}>{button}</WaButton>
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
      </div>
    </section>
  );
}

/** Faixa curta com texto + link (ex.: "Não achou a peça que precisa?"). */
export function Band({ text, href, label }: { text: string; href: string; label: string }) {
  return (
    <div className={s.band}>
      <p>{text}</p>
      <LinkButton href={href}>{label}</LinkButton>
    </div>
  );
}

export function Split({ children, image, alt }: { children: React.ReactNode; image: string; alt: string }) {
  return (
    <div className={s.split}>
      <div>{children}</div>
      <div className={s.splitMedia}>
        <Image src={image} alt={alt} width={681} height={611} sizes="(min-width: 900px) 40vw, 90vw" />
      </div>
    </div>
  );
}

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Você está em" className={s.crumbs}>
      <ol>
        <li>
          <Link href="/">Início</Link>
        </li>
        {items.map((it) => (
          <li key={it.label}>{it.href ? <Link href={it.href}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}
