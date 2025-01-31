import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(s.navLink, isActive && s.navActive);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLoggedIn ? (
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      ) : null}
    </nav>
  );
};

export default Navigation;
