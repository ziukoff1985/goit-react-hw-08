// хуки useDispatch, useSelector
import { useDispatch, useSelector } from 'react-redux';
// Селектор для отримання даних користувача
import { selectUser } from '../../redux/auth/selectors';
// Асинхронна операцію для виходу з акаунту
import { logOutThunk } from '../../redux/auth/operations';
import s from './UserMenu.module.css';

// Компонент UserMenu
const UserMenu = () => {
  // Отримуємо дані про користувача зі стану Redux
  const user = useSelector(selectUser);
  // 'Dispatch' для відправки екшену
  const dispatch = useDispatch();

  return (
    <div>
      <div className={s.userMenu}>
        {/* Відображаємо ім'я користувача */}
        <span className={s.userName}>Welcome, {user.name}</span>
        {/* Кнопка для виходу з акаунту */}
        <button onClick={() => dispatch(logOutThunk())} className={s.button}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
