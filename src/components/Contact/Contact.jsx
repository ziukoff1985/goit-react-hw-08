import { FaUser, FaPhoneAlt } from 'react-icons/fa'; // Імпортуємо іконки
import { useDispatch } from 'react-redux'; // 'useDispatch' для відправки екшенів
import { useState } from 'react'; // 'useState' для управління станом модального вікна

// Асинхронні операції для видалення та редагування контакту (з файлу /contacts/operations.js)
import {
  deleteContactThunk,
  editContactThunk,
} from '../../redux/contacts/operations';

// Компонент модального вікна для редагування контакту
import ModalWindowEditContact from '../ModalWindowEditContact/ModalWindowEditContact';

// Стилі CSS
import styles from './Contact.module.css';

// Компонент 'Contact' відображає один контакт у списку
const Contact = ({ name, number, id }) => {
  // 'Dispatch' для відправки екшенів до Redux
  const dispatch = useDispatch();
  // Стан, який контролює відкриття та закриття модального вікна редагування
  const [isEditing, setIsEditing] = useState(false);

  // Функція-обробник для видалення контакту
  const handleDelete = () => {
    // Виклик deleteContactThunk з переданим id контакту
    dispatch(deleteContactThunk(id));
  };

  // Функція-обробник для відкриття модального вікна редагування
  const handleEdit = () => {
    // Встановлюємо 'isEditing' у 'true', відкриваючи модальне вікно
    setIsEditing(true);
  };

  // Функція-обробник для збереження змінених даних контакту
  const handleSave = (newName, newNumber) => {
    // Викликаємо 'editContactThunk', передаючи 'id' контакту та нові дані
    dispatch(
      editContactThunk({ id, editData: { name: newName, number: newNumber } })
    );
    // Встановлюємо 'isEditing' у 'false', закриваючи модальне вікно після збереження
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
        {/* Кнопка для редагування контакту */}
        <button
          className={styles.button}
          type="button"
          // Викликаємо 'handleEdit' при кліку
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
      {/* Модальне вікно редагування контакту з 'Material-UI' */}
      <ModalWindowEditContact
        open={isEditing} // Відкривається при 'isEditing === true'
        name={name} // Передаємо поточне ім'я контакту
        number={number} // Передаємо поточний номер телефону
        onSave={handleSave} // Викликається при збереженні змін
        onClose={() => setIsEditing(false)} // Закриває модальне вікно при закритті
      />
    </li>
  );
};

export default Contact; // Експорт
