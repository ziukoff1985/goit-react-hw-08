// NavLink для створення навігаційних посилань
import { NavLink } from 'react-router-dom';

// Бібліотека clsx для динамічного додавання класів
import clsx from 'clsx';
import s from './AuthNav.module.css';

// компонент AuthNav - посилання Register і Login
const AuthNav = () => {
  // Функція для динамічного додавання класів до посилання
  const buildLinkClass = ({ isActive }) =>
    // Якщо посилання активне, додаємо додатковий клас
    clsx(s.navLink, isActive && s.navActive);

  return (
    <div className={s.authNav}>
      {/* Посилання на сторінку реєстрації */}
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      {/* Посилання на сторінку входу */}
      <NavLink to="/login" className={buildLinkClass}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
