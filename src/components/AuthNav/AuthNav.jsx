import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './AuthNav.module.css';

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(s.navLink, isActive && s.navActive);

  return (
    <div className={s.authNav}>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
