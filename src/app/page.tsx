import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { MSG, RMF_CITIES } from "@/content/site";
import { HOME_PRODUCTS } from "@/content/products";
import { Actions, CtaBand, LinkButton, Section, WaButton } from "@/components/ui";
import { ProductCards } from "@/components/ProductCards";
import { Marquee } from "@/components/Marquee";
import { CountUp } from "@/components/Motion";
import { Icon } from "@/components/Icon";
import s from "./home.module.css";

export const metadata = pageMeta({
  title: "Ferro e Aço para Obra em Fortaleza | Corte e Dobra | RB Ferragens",
  description:
    "Treliça, vergalhão, colunas e malhas com corte e dobra sob medida. Entrega na obra em Fortaleza e região metropolitana. Peça orçamento no WhatsApp.",
  keywords: "ferro para construção, loja de ferragens, treliça, vergalhão, corte e dobra, ferragem, Fortaleza",
  path: "/",
});

const TRUST = [
  { icon: "calendario", strong: "10 anos", text: "na Lagoa Redonda" },
  { icon: "corte", strong: "Corte e dobra", text: "sob medida" },
  { icon: "caminhao", strong: "Entrega", text: "em Fortaleza e RMF" },
  { icon: "cartao", strong: "Pagamento", text: "no cartão" },
];

const GUIDES = [
  { href: "/guia/qual-trelica-usar", label: "Qual treliça usar" },
  { href: "/guia/tabela-de-bitolas", label: "Tabela de bitolas" },
  { href: "/guia/ca-50-x-ca-60", label: "CA-50 ou CA-60" },
  { href: "/guia/malha-pop-x-tela-q92", label: "Malha POP ou tela Q92" },
];

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      {/* Hero: foto em card arredondado, texto por cima, números em vidro no pé. */}
      <section className={s.heroWrap}>
        <div className={s.hero}>
          <Image
            className={s.heroBg}
            src="/images/fotos/obra-hero.jpg"
            alt="Armador amarrando a ferragem de uma laje numa obra em Fortaleza"
            fill
            priority
            sizes="100vw"
          />
          <div className={s.heroInner}>
            <p className={`eyebrow ${s.heroEyebrow}`} data-reveal>
              RB Ferragens · Lagoa Redonda, Fortaleza
            </p>
            <h1 className={s.heroTitle} data-reveal style={d(1)}>
              Ferro e aço para sua obra, cortado e dobrado do jeito do seu projeto
            </h1>
            <p className={s.heroSub} data-reveal style={d(2)}>
              Treliça, vergalhão, colunas e malhas com entrega na obra em Fortaleza e região metropolitana. Há 10 anos
              na Lagoa Redonda.
            </p>
            <div data-reveal style={d(3)}>
              <Actions>
                <WaButton message={MSG.geral}>Pedir orçamento no WhatsApp</WaButton>
                <LinkButton href="/produtos" variant="light">
                  Ver produtos
                </LinkButton>
              </Actions>
            </div>
          </div>

          <ul className={s.trust} aria-label="Por que confiar na RB">
            {TRUST.map((t, i) => (
              <li key={t.strong} data-reveal style={d(4 + i)}>
                <Icon name={t.icon} size={26} />
                <span>
                  <strong>{t.strong}</strong> {t.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={s.marqueeWrap}>
        <Marquee
          items={[
            "Treliça TG8 e TG12",
            "Vergalhão CA-50",
            "CA-60",
            "Coluna armada",
            "Estribos",
            "Malha POP",
            "Tela Q92",
            "Tubo galvanizado",
            "Arame recozido",
            "Corte e dobra",
          ]}
        />
      </div>


      <Section
        eyebrow="Produtos"
        title="Tudo de ferro pra estrutura da sua obra"
        intro="Do vergalhão em barra à coluna pronta pra concretar. O que a sua obra precisa, num pedido só."
        split
      >
        <ProductCards items={HOME_PRODUCTS} featured />
      </Section>

      {/* Corte e dobra: seção escura, bento com foto. */}
      <section className={`section bg-dark ${s.corte}`}>
        <div className={`container ${s.bento}`}>
          <div className={s.bentoText} data-reveal>
            <p className="eyebrow">Corte e dobra</p>
            <h2>
              Mande a lista, a gente entrega o ferro <span className="mark">pronto pra montar</span>
            </h2>
            <p className="lead">
              Você manda o projeto ou a lista do seu mestre pelo WhatsApp. A gente faz o orçamento, corta e dobra cada
              peça na medida e entrega na obra. Vale pra obra grande e pra casa pequena.
            </p>
            <Actions>
              <LinkButton href="/corte-e-dobra" variant="yellow">
                Como funciona o corte e dobra
              </LinkButton>
            </Actions>
          </div>
          <div className={`${s.tile} ${s.tilePhoto}`} data-reveal="scale" style={d(1)}>
            <Image
              src="/images/fotos/corte-dobra-maquina.jpg"
              alt="Funcionário dobrando vergalhão na máquina de dobra, com estribos prontos ao lado"
              fill
              sizes="(min-width: 1000px) 40vw, 92vw"
              className={s.cover}
            />
          </div>
          <ul className={s.tiles}>
            {[
              { n: "01", t: "Menos perda de ferro" },
              { n: "02", t: "Sem máquina no canteiro" },
              { n: "03", t: "Sem tempo do pedreiro cortando barra" },
            ].map((x, i) => (
              <li key={x.n} className={s.tile} data-reveal style={d(2 + i)}>
                <span className={s.tileNum}>{x.n}</span>
                <span className={s.tileText}>{x.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section tone="paper">
        <div className={s.delivery}>
          <div className={s.deliveryMedia} data-reveal="scale">
            <Image
              src="/images/fotos/entrega-caminhao.jpg"
              alt="Caminhão descarregando vergalhões numa obra de casa"
              fill
              sizes="(min-width: 900px) 50vw, 92vw"
              className={s.cover}
            />
            <span className={s.floatChip}>
              <span className={s.chipDot} aria-hidden="true" />
              Saindo da Lagoa Redonda
            </span>
          </div>
          <div data-reveal style={d(1)}>
            <p className="eyebrow">Entrega</p>
            <h2>Entregamos na sua obra</h2>
            <p className="lead">
              Atendemos toda Fortaleza e a região metropolitana. Pra cidades mais distantes, a entrega depende do tamanho
              do pedido ou da rota da semana. Tem frete grátis em condições especiais.
            </p>
            <ul className={s.cities} aria-label="Cidades atendidas">
              <li className={s.cityStrong}>Fortaleza</li>
              {RMF_CITIES.slice(0, -1).map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <Actions>
              <LinkButton href="/entrega" variant="ink">
                Ver regras de entrega
              </LinkButton>
            </Actions>
          </div>
        </div>
      </Section>

      <Section eyebrow="Por que comprar na RB" title="Ferro na medida, com gente do outro lado" tone="white">
        <div className={s.why}>
          <div className={`${s.whyCard} ${s.whyPhoto}`} data-reveal="scale">
            <Image
              src="/images/fotos/mestre-projeto.jpg"
              alt="Mestre de obras e dono da casa conferindo o projeto estrutural sobre os vergalhões"
              fill
              sizes="(min-width: 1000px) 45vw, 92vw"
              className={s.cover}
            />
            <div className={s.whyOverlay}>
              <h3>Atendimento de gente</h3>
              <p>Você fala direto com quem entende de ferro, no WhatsApp ou no balcão.</p>
            </div>
          </div>
          <div className={`${s.whyCard} ${s.whyYellow}`} data-reveal style={d(1)}>
            <Icon name="casa" size={30} />
            <div>
              <h3>Pedido pequeno também</h3>
              <p>Não precisa ser construtora pra ter corte e dobra.</p>
            </div>
          </div>
          <div className={`${s.whyCard} ${s.whyPaper}`} data-reveal style={d(2)}>
            <Icon name="pin" size={30} />
            <div>
              <h3>Perto da zona leste</h3>
              <p>Estamos na Lagoa Redonda, do lado de Messejana, Eusébio e Aquiraz.</p>
            </div>
          </div>
          <div className={`${s.whyCard} ${s.whyInk}`} data-reveal style={d(3)}>
            <Icon name="lista" size={30} />
            <div>
              <h3>Ajuda com a lista</h3>
              <p>Se tiver dúvida de bitola ou modelo, a gente lê seu projeto com você.</p>
            </div>
          </div>
        </div>

        <dl className={s.stats}>
          <div data-reveal>
            <dt>Anos na Lagoa Redonda</dt>
            <dd>
              <CountUp to={10} />
            </dd>
          </div>
          <div data-reveal style={d(1)}>
            <dt>Cidades da região metropolitana</dt>
            <dd>
              <CountUp to={RMF_CITIES.length} />
            </dd>
          </div>
          <div data-reveal style={d(2)}>
            <dt>Linhas de produto</dt>
            <dd>
              <CountUp to={6} />
            </dd>
          </div>
          <div data-reveal style={d(3)}>
            <dt>Abre às</dt>
            <dd>
              <CountUp to={7} suffix="h" />
            </dd>
          </div>
        </dl>
      </Section>

      <Section eyebrow="Guia da obra" title="Tire suas dúvidas antes de comprar" split intro={<TextLinkAll />}>
        <ul className={s.guides}>
          {GUIDES.map((g, i) => (
            <li key={g.href} data-reveal style={d(i)}>
              <Link href={g.href}>
                <span className={s.guideNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={s.guideLabel}>{g.label}</span>
                <span className={s.guideArrow} aria-hidden="true">
                  <Icon name="seta" size={20} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Tem a lista na mão? Manda pra gente"
        text="Mande a lista ou o projeto e o bairro da obra."
        message={MSG.geral}
        button="Pedir orçamento no WhatsApp"
        image="/images/fotos/pecas-cortadas.jpg"
      />
    </>
  );
}

function TextLinkAll() {
  return (
    <Link href="/guia" className={s.allGuides}>
      Ver todos os guias <Icon name="seta" size={18} />
    </Link>
  );
}
