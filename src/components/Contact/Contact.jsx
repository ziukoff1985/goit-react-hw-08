import { FaUser, FaPhoneAlt } from 'react-icons/fa'; // Імпортуємо іконки
import { useDispatch } from 'react-redux'; // 'useDispatch' для відправки екшенів
import { useState } from 'react';

// Асинхронна операція для видалення контакту (з файлу /contacts/operations.js)
import {
  deleteContactThunk,
  editContactThunk,
} from '../../redux/contacts/operations';

import styles from './Contact.module.css'; // Стилі CSS
import ModalWindowEditContact from '../ModalWindowEditContact/ModalWindowEditContact';

// Компонент для відображення одного контакту
const Contact = ({ name, number, id }) => {
  // 'Dispatch' для відправки екшену
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  // Функція-обробник для видалення контакту
  const handleDelete = () => {
    // Виклик deleteContactThunk з переданим id контакту
    dispatch(deleteContactThunk(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (newName, newNumber) => {
    dispatch(
      editContactThunk({ id, editData: { name: newName, number: newNumber } })
    );
    setIsEditing(false);
  };

  return (
    // Елемент списку для одного контакту
    <li className={styles.contactCard}>
      {/* Обгортка */}
      <div className={styles.contactCardWrap}>
        {/* Ім'я контакту з іконкою */}
        <p className={styles.contactCardItem}>
          <FaUser className={styles.iconUser} />
          {name}
        </p>
        {/* Номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          <FaPhoneAlt className={styles.iconPhone} />
          {number}
        </p>
      </div>
      <div className={styles.buttonWrap}>
        {/* Кнопка для видалення контакту */}
        <button
          className={styles.button}
          type="button"
          // Виклик 'handleDelete' при кліку
          onClick={handleDelete}
        >
          Delete
        </button>
        <button className={styles.button} type="button" onClick={handleEdit}>
          Edit
        </button>
      </div>
      {/* Модальне вікно Material-UI */}
      <ModalWindowEditContact
        open={isEditing}
        name={name}
        number={number}
        onSave={handleSave}
        onClose={() => setIsEditing(false)}
      />
    </li>
  );
};

export default Contact; // Експорт
