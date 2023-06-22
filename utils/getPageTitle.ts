const getPageTitle = (routerQuery: string | string[] | undefined) => {
  return routerQuery
    ?.toString()
    .split(" ")
    .map((item) => item[0].toUpperCase().concat(item.slice(1)))
    .toString()
    .replaceAll(",", " ")
    .concat(" | RB Ferragens");
};

export default getPageTitle;
