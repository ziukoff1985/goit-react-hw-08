// useSelector для отримання стану з Redux
import { useSelector } from 'react-redux';

// Селектор, який перевіряє, чи користувач авторизований
import { selectIsLoggedIn } from '../../redux/auth/selectors';

// Компоненти: Navigation, UserMenu, AuthNav
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

// Стилі
import s from './AppBar.module.css';

// компонент AppBar - хедер з навігацією
const AppBar = () => {
  // Отримуємо стан авторизації з Redux
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <header className={s.header}>
        {/* Головна навігація (Home i Contacts) */}
        <Navigation />
        {/* Якщо користувач авторизований - показуємо меню користувача, якщо ні - панель входу */}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};

export default AppBar;
