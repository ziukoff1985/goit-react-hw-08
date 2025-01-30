import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/authSelectors';
import { logOutThunk } from '../../redux/auth/authOperations';

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.navLink, isActive && s.navActive);
  };
  // borys123456@mail.com.ua
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      {/* <h2 className={s.title}>Phonebook</h2> */}
      {isLoggedIn && <h2 className={s.title_name}>Welcome, {user.name}</h2>}
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
        {isLoggedIn ? (
          <button onClick={() => dispatch(logOutThunk())} className={s.button}>
            Log out
          </button>
        ) : (
          <>
            <NavLink to="/register" className={buildLinkClass}>
              Register
            </NavLink>
            <NavLink to="/login" className={buildLinkClass}>
              Login
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
