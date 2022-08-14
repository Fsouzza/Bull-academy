import { Footer } from 'components/footer';
import { Menu } from 'components/menu';
import { Outlet } from 'react-router-dom';


export const PagePadrao = () => {
  return(
    <>
      <Menu />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};