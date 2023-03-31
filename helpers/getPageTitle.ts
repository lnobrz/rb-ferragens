const getPageTitle = (routerQuery: string | string[] | undefined) => {
  return typeof routerQuery
    ? routerQuery
        ?.toString()[0]
        .toUpperCase()
        .concat(routerQuery?.toString().slice(1))
        .concat(" | RB Ferragens")
    : undefined;
};

export default getPageTitle;
