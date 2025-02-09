import styles from './SearchBox.module.css'; // Стилі CSS

import { useDispatch, useSelector } from 'react-redux'; // Хуки для взаємодії з Redux
import { useId } from 'react'; // Xук useId для створення унікальних ID

// Екшен для оновлення значення фільтру (ім'я і телефону) в Redux-стані.
import { selectNameFilter } from '../../redux/filters/selectors';

// Селектор для отримання поточного значення фільтра
import { changeFilter } from '../../redux/filters/slice';

// Компонент поля пошуку
const SearchBox = () => {
  // Отримуємо доступ до поточного значення фільтра з Redux
  const filter = useSelector(selectNameFilter);
  // Доступ до функції 'dispatch'
  const dispatch = useDispatch();
  // Унікальний ідентифікатор для поля пошуку
  const searchId = useId();

  // Функція-обробник зміни значення поля пошуку.
  const handleChangeFilter = event => {
    // Відправляємо екшен для оновлення значення фільтру в Redux-стані
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <label htmlFor={searchId} className={styles.inputLabel}>
        Find contacts by name
      </label>
      <div className={styles.inputWrap}>
        {/* Поле вводу для пошуку контактів */}
        <input
          className={styles.input}
          id={searchId} // Унікальний 'id'
          type="text"
          name="search" // Ім'я поля
          value={filter} // Поточне значення, отримане з Redux-стану
          onChange={handleChangeFilter} // Обробник події зміни значення
        />
      </div>
    </>
  );
};

export default SearchBox; // Експорт
