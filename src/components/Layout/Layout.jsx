import { Outlet } from 'react-router-dom';
// import Header from '../Header/Header';
import s from './Layout.module.css';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div className={s.wrap}>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
