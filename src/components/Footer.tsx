import Link from "next/link";
import Image from "next/image";
import { SITE, FULL_ADDRESS, NAV, MSG, waLink } from "@/content/site";
import { Icon } from "./Icon";
import { OpenStatus } from "./OpenStatus";
import s from "./Footer.module.css";

const PRODUCT_LINKS = [
  { href: "/produtos/trelicas", label: "Treliças" },
  { href: "/produtos/vergalhoes", label: "Vergalhões" },
  { href: "/produtos/colunas-vigas-estribos", label: "Colunas, vigas e estribos" },
  { href: "/produtos/telas-malhas-radier", label: "Telas, malhas e radier" },
  { href: "/produtos/tubos-galvanizados", label: "Tubos galvanizados" },
  { href: "/produtos/arames-pregos", label: "Arames e pregos" },
];

export function Footer() {
  return (
    <footer className={`bg-dark ${s.footer}`}>
      <div className={`container ${s.top}`}>
        <div className={s.brand}>
          <Image src="/images/logo.png" alt="RB Ferragens" width={1080} height={640} sizes="150px" className={s.logo} />
          <p className={s.tagline}>Venda, corte e dobra de ferro e aço. Há 8 anos na Lagoa Redonda.</p>
          <OpenStatus className={s.status} />
        </div>

        <div className={s.cols}>
          <div>
            <h2 className={s.title}>Contato</h2>
            <ul className={s.list}>
              <li>
                <a href={waLink(MSG.geral)} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={18} /> WhatsApp {SITE.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.tel}`}>
                  <Icon name="telefone" size={18} /> Telefone {SITE.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>
                  <Icon name="email" size={18} /> {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="pin" size={18} /> {FULL_ADDRESS}
                </a>
              </li>
              <li className={s.hours}>
                <Icon name="relogio" size={18} />
                <span>
                  Segunda a sexta, das 7h às 18h
                  <br />
                  Sábado, das 7h às 12h
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={s.title}>Produtos</h2>
            <ul className={s.links}>
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={s.title}>A RB</h2>
            <ul className={s.links}>
              {NAV.filter((n) => n.href !== "/produtos").map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <p className={s.giant} aria-hidden="true">
          RB Ferragens
        </p>
        <div className={s.bottom}>
          <p>© 2026 RB Ferragens</p>
          <p>Lagoa Redonda · Fortaleza · CE</p>
        </div>
      </div>
    </footer>
  );
}

/** Botão fixo de WhatsApp (canto inferior direito). */
export function FloatingWa() {
  return (
    <a className={s.float} href={waLink(MSG.geral)} target="_blank" rel="noopener noreferrer" aria-label="Pedir orçamento no WhatsApp">
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
