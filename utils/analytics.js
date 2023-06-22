import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-QBQEF2MB65"); // Substitua pelo seu ID de acompanhamento
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
