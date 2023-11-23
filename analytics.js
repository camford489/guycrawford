import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-JFRT80BF3L');
  console.log('GA init');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};