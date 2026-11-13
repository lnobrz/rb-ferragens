import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { MSG, RMF_CITIES } from "@/content/site";
import { HOME_PRODUCTS } from "@/content/products";
import { Actions, FeatureGrid, LinkButton, Section, WaButton } from "@/components/ui";
import { ProductCards } from "@/components/ProductCards";
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

export default function Home() {
  return (
    <>
      <section className={s.hero}>
        <picture>
          <source media="(max-width: 699px)" srcSet="/images/ferragem-armada-obra-mobile.jpg" />
          <Image
            className={s.heroBg}
            src="/images/ferragem-armada-obra.jpg"
            alt="Armador amarrando a ferragem de uma laje na obra"
            fill
            priority
            sizes="100vw"
          />
        </picture>
        <div className={`container ${s.heroInner}`}>
          <p className={s.eyebrow}>RB Ferragens · Lagoa Redonda, Fortaleza</p>
          <h1 className={s.heroTitle}>Ferro e aço para sua obra, cortado e dobrado do jeito do seu projeto</h1>
          <p className={s.heroSub}>
            Treliça, vergalhão, colunas e malhas com entrega na obra em Fortaleza e região metropolitana. Há 10 anos na
            Lagoa Redonda.
          </p>
          <Actions>
            <WaButton message={MSG.geral}>Pedir orçamento no WhatsApp</WaButton>
            <LinkButton href="/produtos">Ver produtos</LinkButton>
          </Actions>
        </div>
      </section>

      <section aria-label="Por que confiar na RB" className={s.trust}>
        <ul className={`container ${s.trustList}`}>
          {TRUST.map((t) => (
            <li key={t.strong}>
              <Icon name={t.icon} size={32} />
              <span>
                <strong>{t.strong}</strong> {t.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <Section title="Tudo de ferro pra estrutura da sua obra">
        <ProductCards items={HOME_PRODUCTS} />
      </Section>

      <Section alt>
        <div className={s.split}>
          <div>
            <p className={s.kicker}>Corte e dobra</p>
            <h2 className="deco-title">Mande a lista, a gente entrega o ferro pronto pra montar</h2>
            <p className="lead">
              Você manda o projeto ou a lista do seu mestre pelo WhatsApp. A gente faz o orçamento, corta e dobra cada
              peça na medida e entrega na obra. Menos perda de ferro, sem máquina no canteiro e sem tempo do pedreiro
              cortando barra. Vale pra obra grande e pra casa pequena.
            </p>
            <Actions>
              <LinkButton href="/corte-e-dobra">Como funciona o corte e dobra</LinkButton>
            </Actions>
          </div>
          <Image
            src="/images/ferro-e-aco.png"
            alt="Colagem de fotos: ferragem armada de coluna, estrutura metálica e barras de aço"
            width={681}
            height={611}
            sizes="(min-width: 900px) 40vw, 90vw"
            className={s.splitImg}
          />
        </div>
      </Section>

      <Section>
        <div className={`${s.split} ${s.splitReverse}`}>
          <Image
            src="/images/tubos-e-estrutura.png"
            alt="Tubos de aço empilhados e detalhe de estrutura metálica"
            width={533}
            height={785}
            sizes="(min-width: 900px) 30vw, 70vw"
            className={s.splitImgTall}
          />
          <div>
            <p className={s.kicker}>Entrega</p>
            <h2 className="deco-title">Entregamos na sua obra</h2>
            <p className="lead">
              Atendemos toda Fortaleza e a região metropolitana: {RMF_CITIES.slice(0, -1).join(", ")}. Pra cidades mais
              distantes, a entrega depende do tamanho do pedido ou da rota da semana. Tem frete grátis em condições
              especiais.
            </p>
            <Actions>
              <LinkButton href="/entrega">Ver regras de entrega</LinkButton>
            </Actions>
          </div>
        </div>
      </Section>

      <Section title="Por que comprar na RB" alt>
        <FeatureGrid
          columns={4}
          items={[
            { icon: "pessoa", title: "Atendimento de gente", text: "Você fala direto com quem entende de ferro, no WhatsApp ou no balcão." },
            { icon: "casa", title: "Pedido pequeno também", text: "Não precisa ser construtora pra ter corte e dobra." },
            { icon: "pin", title: "Perto da zona leste", text: "Estamos na Lagoa Redonda, do lado de Messejana, Eusébio e Aquiraz." },
            { icon: "lista", title: "Ajuda com a lista", text: "Se tiver dúvida de bitola ou modelo, a gente lê seu projeto com você." },
          ]}
        />
      </Section>

      <Section title="Tire suas dúvidas antes de comprar">
        <ul className={s.guides}>
          {GUIDES.map((g) => (
            <li key={g.href}>
              <Link href={g.href}>
                <span>{g.label}</span>
                <Icon name="seta" size={20} />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
