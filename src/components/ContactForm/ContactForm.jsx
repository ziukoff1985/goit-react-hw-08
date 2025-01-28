// Rомпоненти та функції бібліотеки Formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css'; // Cтилі CSS

// 'useDispatch' для відправки екшенів
import { useDispatch } from 'react-redux';

// Xук useId для створення унікальних ID
import { useId } from 'react';

// Cхемa валідації для форми
import FormValidationSchema from '../../validationHelper';

// Асинхронна операція для додавання нового контакту (з файлу contactsOps.js)
import { addContactThunk } from '../../redux/contactsOps';

// Компонент форми
const ContactForm = () => {
  // 'Dispatch' для відправки екшену
  const dispatch = useDispatch();

  // Створюємо унікальні ID для полів форми
  const nameFieldId = useId();
  const numberFieldId = useId();

  // Функція-обробник відправки форми
  const handleSubmit = (values, actions) => {
    // Викликаємо addContactThunk з даними форми
    dispatch(addContactThunk(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }} // Початкові значення форми
      onSubmit={handleSubmit} // Виклик 'handleSubmit' при сабміті
      validationSchema={FormValidationSchema} // Cхемa валідації
    >
      {/* Форма для введення даних */}
      <Form className={styles.form}>
        {/* Група для поля і помилки вводу імені */}
        <div className={styles.labelErrorWrap}>
          <label htmlFor={nameFieldId} className={styles.label}>
            Name
          </label>
          {/* Відображення помилки валідації для поля імені */}
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>
        {/* Поле вводу для імені */}
        <Field
          className={styles.formInput}
          type="text"
          name="name"
          id={nameFieldId}
        ></Field>
        {/* Група для поля і помилки вводу номера */}
        <div className={styles.labelErrorWrap}>
          <label htmlFor={numberFieldId} className={styles.label}>
            Number
          </label>
          {/* Відображення помилки валідації для поля номера */}
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>
        {/* Поле вводу для номера телефону */}
        <Field
          className={styles.formInput}
          type="text"
          name="number"
          id={numberFieldId}
        ></Field>
        {/* Кнопка для сабміту форми */}
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm; // Експорт
