import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { addContactThunk } from '../../redux/contacts/contactsOperations';
import { FormValidationSchema } from '../../ValidationHelpers/validationHelper';

const initialValues = { name: '', number: '' };

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContactThunk(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormValidationSchema}
    >
      <Form className={styles.form}>
        <div className={styles.labelErrorWrap}>
          <label htmlFor={nameFieldId} className={styles.label}>
            Name
          </label>
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>
        <Field
          className={styles.formInput}
          type="text"
          name="name"
          id={nameFieldId}
        ></Field>
        <div className={styles.labelErrorWrap}>
          <label htmlFor={numberFieldId} className={styles.label}>
            Number
          </label>
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>
        <Field
          className={styles.formInput}
          type="text"
          name="number"
          id={numberFieldId}
        ></Field>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
