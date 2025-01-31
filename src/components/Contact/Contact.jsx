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
      <div className={styles.buttonWrap}>
        <button className={styles.button} type="button" onClick={handleDelete}>
          Delete
        </button>
        <button className={styles.button} type="button">
          Edit
        </button>
      </div>
    </li>
  );
};

export default Contact;
