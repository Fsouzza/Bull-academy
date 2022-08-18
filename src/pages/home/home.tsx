import { Planos } from 'pages/planos/planos';
import { Banner } from './banner';
import { Recomendados } from './MostPopular';

export const Home = () => {
  return(
    <main>
      <Banner />
      <Recomendados />
      <Planos />
    </main>
  );
};