// NavLink для створення навігаційних посилань
import { NavLink } from 'react-router-dom';
// бібліотеку clsx для керування класами CSS
import clsx from 'clsx';
import s from './Navigation.module.css';
// Селектор - перевірка, чи користувач залогінений
import { selectIsLoggedIn } from '../../redux/auth/selectors';
// useSelector для доступу до глобального стану Redux
import { useSelector } from 'react-redux';

// Компонент навігації
const Navigation = () => {
  // Функція для визначення CSS-класу активного посилання
  const buildLinkClass = ({ isActive }) =>
    clsx(s.navLink, isActive && s.navActive);

  // Отримуємо з Redux стан аутентифікації користувача
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      {/* Посилання на головну сторінку */}
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {/* Якщо користувач залогінений, відображаємо посилання "Contacts" */}
      {isLoggedIn ? (
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      ) : null}
    </nav>
  );
};

export default Navigation;
