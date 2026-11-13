import { Actions, LinkButton, PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero title="Página não encontrada" subtitle="O endereço pode ter mudado. Veja nossos produtos ou volte pro início.">
      <Actions>
        <LinkButton href="/produtos">Ver produtos</LinkButton>
        <LinkButton href="/">Página inicial</LinkButton>
      </Actions>
    </PageHero>
  );
}
