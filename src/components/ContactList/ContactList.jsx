// Імпорт компонента `Contact`
import { selectFilteredContacts } from '../../redux/contacts/contactsSelectors';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
