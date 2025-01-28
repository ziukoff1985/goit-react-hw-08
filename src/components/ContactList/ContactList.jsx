// Імпорт компонента `Contact`
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css'; // Cтилі CSS

// 'useSelector' для отримання даних із Redux
import { useSelector } from 'react-redux';

// Селектор для отримання відфільтрованих контактів (з файлу 'selectors.js')
import { selectFilteredContacts } from '../../redux/selectors';

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
