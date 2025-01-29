import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.wrap}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
