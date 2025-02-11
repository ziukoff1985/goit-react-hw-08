import Loader from '../../components/Loader/Loader'; // Компонент Loader

// Redux-хуки і useEffect
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Операція для отримання контактів з бекенду (з файлу /contacts/operations)
import { fetchContactsThunk } from '../../redux/contacts/operations';

// Селектор - отримання стану 'isLoading' (для контактів)
import { selectIsLoading } from '../../redux/contacts/selectors';

// Компоненти: ContactForm, ContactList, SearchBox
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

// Стилі
import s from './ContactsPage.module.css';

// Сторінка 'ContactsPage'
const ContactsPage = () => {
  // 'dispatch' для відправки екшенів
  const dispatch = useDispatch();

  // Cтан 'isLoading' (для контактів) з Redux
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    // Викликаємо операцію отримання контактів при завантаженні сторінки
    dispatch(fetchContactsThunk());
  }, [dispatch]); // Залежність dispatch

  return (
    <div className={s.wrap_contacts_page}>
      <h1 className="title">Phonebook</h1>
      {/* Форма для додавання нового контакту */}
      <ContactForm />
      {/* Поле пошуку серед контактів */}
      <SearchBox />
      {/* Якщо контакти завантажуються - показуємо 'Loader' */}
      {isLoading && <Loader />}
      {/* Якщо завантаження завершилось - показуємо список контактів */}
      {!isLoading && <ContactList />}
    </div>
  );
};

export default ContactsPage;
