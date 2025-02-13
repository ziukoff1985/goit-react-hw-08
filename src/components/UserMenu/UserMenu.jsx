// хуки useDispatch, useSelector, useState
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// Компонент Spoiler, який приховує або відкриває свій вміст при кліку або наведенні
import { Spoiler } from 'spoiled';

// Селектор для отримання даних користувача
import { selectUser } from '../../redux/auth/selectors';

// Асинхронна операцію для виходу з акаунту
import { logOutThunk } from '../../redux/auth/operations';

// Компонент модального вікна для підтвердження виходу
import ModalWindowLogOut from '../ModalWindowLogOut/ModalWindowLogOut';

// Стилі CSS
import s from './UserMenu.module.css';

// Компонент UserMenu
const UserMenu = () => {
  // Отримуємо дані про користувача зі стану Redux
  const user = useSelector(selectUser);
  // 'Dispatch' для відправки екшену
  const dispatch = useDispatch();
  // Стан для 'ModalWindowLogOut' (open/close)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функція для відкриття модального вікна
  const showModal = () => {
    // Встановлюємо 'isModalOpen' у 'true', відкриваючи модальне вікно
    setIsModalOpen(true);
  };

  // Функція для виходу з акаунту після підтвердження
  const handleLogOut = () => {
    // Викликаємо екшен виходу через 'logOutThunk'
    dispatch(logOutThunk());
    // Встановлюємо 'isModalOpen' у 'false', закриваючи модальне вікно
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={s.userMenu}>
        {/* Відображаємо ім'я користувача */}
        <span className={s.userName}>Welcome, {user.name}</span>
        {/* Компонент Spoiler, який приховує або відкриває свій вміст при кліку або наведенні.*/}
        <Spoiler>
          {/* Кнопка 'Log out' для відкриття модального вікна виходу */}
          <button onClick={showModal} className={s.button}>
            Log out
          </button>
        </Spoiler>
        {/* Модальне вікно для підтвердження виходу */}
        <div>
          <ModalWindowLogOut
            isOpen={isModalOpen} // Передаємо стан відкриття
            onConfirm={handleLogOut} // Функція виходу при підтвердженні
            onCancel={() => setIsModalOpen(false)} // Закриваємо вікно при скасуванні
          />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
