import styles from './SearchBox.module.css'; // Стилі CSS
import { useDispatch, useSelector } from 'react-redux'; // Хуки для взаємодії з Redux

// Екшен для оновлення значення фільтру (імені) в Redux-стані.
import { changeFilter } from '../../redux/filtersSlice';

// Xук useId для створення унікальних ID
import { useId } from 'react';

// Селектор для отримання поточного значення фільтра
import { selectNameFilter } from '../../redux/selectors';

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
