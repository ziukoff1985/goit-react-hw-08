import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/contactsOperations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <li className={styles.contactCard}>
      <div className={styles.contactCardWrap}>
        <p className={styles.contactCardItem}>
          <FaUser className={styles.iconUser} />
          {name}
        </p>
        <p className={styles.contactCardItem}>
          <FaPhoneAlt className={styles.iconPhone} />
          {number}
        </p>
      </div>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
