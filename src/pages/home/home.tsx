import Planos from 'pages/planos/planos';
import Banner from './banner';
import Recomendados from './MostPopular';
import NewsLetter from './newsLetter';

const Home = () => {
  return(
    <main>
      <Banner />
      <Recomendados />
      <Planos />
      <NewsLetter />
    </main>
  );
};

export default Home;