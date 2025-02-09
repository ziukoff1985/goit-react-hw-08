import styles from './ContactList.module.css'; // Cтилі CSS

import { useSelector } from 'react-redux'; // 'useSelector' для отримання даних із Redux

import Contact from '../Contact/Contact'; // Імпорт компонента `Contact`

// Селектор для отримання відфільтрованих контактів (з файлу /contacts/selectors.js)
import { selectFilteredContacts } from '../../redux/contacts/selectors';

// Компонент списку контактів
const ContactList = () => {
  // Отримуємо доступ до масиву відфільтрованих контактів для відображення із Redux-стану
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {/* Ітеруємося по масиву відфільтрованих контактів і створюємо компонент `Contact` для кожного. */}
      {filteredContacts.map(contact => (
        // Передаємо всі властивості контакту як пропси (...contact)
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList; // Експорт
