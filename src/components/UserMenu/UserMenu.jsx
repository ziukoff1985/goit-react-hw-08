// хуки useDispatch, useSelector, useState
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// Селектор для отримання даних користувача
import { selectUser } from '../../redux/auth/selectors';
// Асинхронна операцію для виходу з акаунту
import { logOutThunk } from '../../redux/auth/operations';
// Компонент 'ModalWindow'

import s from './UserMenu.module.css';
import ModalWindowLogOut from '../ModalWindowLogOut/ModalWindowLogOut';

// Компонент UserMenu
const UserMenu = () => {
  // Отримуємо дані про користувача зі стану Redux
  const user = useSelector(selectUser);
  // 'Dispatch' для відправки екшену
  const dispatch = useDispatch();
  // Стан для 'ModalWindow' (open/close)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функція для відкриття модального вікна
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Функція для виходу з акаунту після підтвердження
  const handleLogOut = () => {
    dispatch(logOutThunk());
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={s.userMenu}>
        {/* Відображаємо ім'я користувача */}
        <span className={s.userName}>Welcome, {user.name}</span>
        {/* Кнопка для виходу з акаунту */}
        <button onClick={showModal} className={s.button}>
          Log out
        </button>
        <div>
          <ModalWindowLogOut
            isOpen={isModalOpen}
            onConfirm={handleLogOut}
            onCancel={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
