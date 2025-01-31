import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import s from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/Loader/Loader';

import { useEffect } from 'react';
import { fetchContactsThunk } from '../../redux/contacts/contactsOperations';
import {
  selectIsLoading,
} from '../../redux/contacts/contactsSelectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={s.wrap_contacts_page}>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {!isLoading && <ContactList />}
    </div>
  );
};

export default ContactsPage;
