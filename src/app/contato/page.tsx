import { pageMeta } from "@/lib/seo";
import { FULL_ADDRESS, MSG, SITE, waLink } from "@/content/site";
import { Actions, CtaBand, PageHero, Section, WaButton } from "@/components/ui";
import { Icon } from "@/components/Icon";
import s from "./contato.module.css";

export const metadata = pageMeta({
  title: "Contato RB Ferragens | Endereço, WhatsApp e Horário",
  description:
    "RB Ferragens na Travessa Precabura, 79, Lagoa Redonda, Fortaleza. WhatsApp (85) 99727-1762. Segunda a sexta das 7h às 18h, sábado das 7h às 12h.",
  keywords: "RB Ferragens, RB Ferragens contato, RB Ferragens telefone, ferragens Lagoa Redonda",
  path: "/contato",
});

export default function Contato() {
  const q = encodeURIComponent(SITE.mapsQuery);
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contato" }]}
        title="Fale com a RB Ferragens"
        subtitle="O jeito mais rápido de pedir orçamento é pelo WhatsApp. Mande a lista ou o projeto e o bairro da obra."
      >
        <Actions>
          <WaButton message={MSG.geral}>Chamar no WhatsApp</WaButton>
        </Actions>
      </PageHero>

      <Section>
        <div className={s.grid}>
          <div className={s.panel} data-reveal>
            <p className="eyebrow">Dados</p>
            <h2 className="sr-only">Dados de contato</h2>
            <dl className={s.data}>
              <div>
                <dt>
                  <Icon name="whatsapp" /> WhatsApp
                </dt>
                <dd>
                  <a href={waLink(MSG.geral)} target="_blank" rel="noopener noreferrer">
                    {SITE.whatsapp.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt>
                  <Icon name="telefone" /> Telefone
                </dt>
                <dd>
                  <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a>
                </dd>
              </div>
              <div>
                <dt>
                  <Icon name="email" /> E-mail
                </dt>
                <dd>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </dd>
              </div>
              <div>
                <dt>
                  <Icon name="pin" /> Endereço
                </dt>
                <dd>{FULL_ADDRESS}</dd>
              </div>
              <div>
                <dt>
                  <Icon name="relogio" /> Horário
                </dt>
                <dd>
                  <ul className={s.hours}>
                    {SITE.hours.map((h) => (
                      <li key={h.label}>
                        <span>{h.label}</span> <span>{h.value}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <div className={s.mapCard} data-reveal="scale" style={{ "--d": 1 } as React.CSSProperties}>
            <h2 className="sr-only">Mapa</h2>
            <iframe
              title="Mapa com a localização da RB Ferragens na Lagoa Redonda"
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className={s.directions}
              href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={s.directionsIcon} aria-hidden="true">
                <Icon name="pin" size={20} />
              </span>
              Como chegar
            </a>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Vai passar aqui?"
        image="/images/fotos/patio-estoque.jpg"
        text="Mande uma mensagem antes que a gente separa seu pedido."
        message={MSG.geral}
        button="Chamar no WhatsApp"
      />
    </>
  );
}
