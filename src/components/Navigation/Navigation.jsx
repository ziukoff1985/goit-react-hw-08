import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(s.navLink, isActive && s.navActive);

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={buildLinkClass}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
