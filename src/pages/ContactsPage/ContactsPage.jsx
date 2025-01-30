import { Toaster } from 'react-hot-toast';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import s from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../../redux/selectors';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import { fetchContactsThunk } from '../../redux/contactsOps';
import { useEffect } from 'react';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError); // Cтан помилки
  const isLoading = useSelector(selectIsLoading); // Cтан завантаження

  useEffect(() => {
    dispatch(fetchContactsThunk()); // Виклик операції для завантаження списоку контактів із сервера (наявних)
  }, [dispatch]); // Викликається один раз, оскільки `dispatch` стабільний (не змінюється).

  return (
    <div className={s.wrap_contacts_page}>
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <Error />}
      {isLoading && <Loader />}
      {!isLoading && <ContactList />}
    </div>
  );
};

export default ContactsPage;
