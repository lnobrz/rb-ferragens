import Link from "next/link";
import Image from "next/image";
import { SITE, FULL_ADDRESS, NAV, MSG, waLink } from "@/content/site";
import { Icon } from "./Icon";
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
    <footer className={s.footer}>
      <div className={`container ${s.grid}`}>
        <div className={s.brand}>
          <Image src="/images/logo.png" alt="RB Ferragens" width={1080} height={640} sizes="140px" className={s.logo} />
          <p>Venda, corte e dobra de ferro e aço. Há 10 anos na Lagoa Redonda.</p>
        </div>

        <div>
          <h2 className={s.title}>Contato</h2>
          <ul className={s.list}>
            <li>
              <Icon name="pin" size={20} />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {FULL_ADDRESS}
              </a>
            </li>
            <li>
              <Icon name="telefone" size={20} />
              <span>
                Telefone: <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a>
              </span>
            </li>
            <li>
              <Icon name="whatsapp" size={20} />
              <span>
                WhatsApp:{" "}
                <a href={waLink(MSG.geral)} target="_blank" rel="noopener noreferrer">
                  {SITE.whatsapp.display}
                </a>
              </span>
            </li>
            <li>
              <Icon name="email" size={20} />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <Icon name="relogio" size={20} />
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

      <div className={`container ${s.bottom}`}>
        <p>© 2026 RB Ferragens</p>
      </div>
    </footer>
  );
}

/** Botão fixo de WhatsApp (canto inferior direito). */
export function FloatingWa() {
  return (
    <a className={s.float} href={waLink(MSG.geral)} target="_blank" rel="noopener noreferrer" aria-label="Pedir orçamento no WhatsApp">
      <Icon name="whatsapp" size={30} />
    </a>
  );
}
