import { FaUser, FaPhoneAlt } from 'react-icons/fa'; // Імпортуємо іконки

import styles from './Contact.module.css'; // Стилі CSS

// 'useDispatch' для відправки екшенів
import { useDispatch } from 'react-redux';

// Асинхронна операція для видалення контакту (з файлу contactsOps.js)
import { deleteContactThunk } from '../../redux/contactsOps';

// Компонент для відображення одного контакту
const Contact = ({ name, number, id }) => {
  // 'Dispatch' для відправки екшену
  const dispatch = useDispatch();

  // Функція-обробник для видалення контакту
  const handleDelete = () => {
    // Виклик deleteContactThunk з переданим id контакту
    dispatch(deleteContactThunk(id));
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
      {/* Кнопка для видалення контакту */}
      <button
        className={styles.deleteButton}
        type="button"
        // Виклик 'handleDelete' при кліку
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact; // Експорт
