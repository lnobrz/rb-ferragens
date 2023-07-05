export type props = {
  pageTitle: string;
  pageContent: {
    id: number;
    name: string;
    shortDescription: string;
    fullDescription: string;
    recomendations: string;
    imageUrl: string;
    optionLink: string;
  }[];
};
