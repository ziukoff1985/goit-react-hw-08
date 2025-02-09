// Компоненти Formik
import { Field, Form, Formik } from 'formik';
// useDispatch для відправки екшенів у Redux
import { useDispatch } from 'react-redux';
import s from './RegistrationForm.module.css';
// Компонент Link для навігації між сторінками
import { Link } from 'react-router-dom';
// Асинхронна операцію для реєстрації користувача
import { registerThunk } from '../../redux/auth/operations';

// Компонент форми реєстрації
export const RegistrationForm = () => {
  // Початкові значення полів форми
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  // 'Dispatch' для відправки екшену
  const dispatch = useDispatch();

  // Функція-обробник відправки форми
  const handleSubmit = (values, action) => {
    // Викликаємо registerThunk з даними форми для реєстрації
    dispatch(registerThunk(values));
    action.resetForm();
  };

  return (
    <div className={s.wrap}>
      <Formik
        initialValues={initialValues}
        // Виклик 'handleSubmit' при сабміті
        onSubmit={handleSubmit}
      >
        {/* Форма для введення даних */}
        <Form className={s.form}>
          <p className={s.title}>Register </p>
          <p className={s.message}>Create an account for full access!</p>
          {/* Поле для введення імені */}
          <label className={s.textInputWrapper}>
            <Field
              className={s.textInput}
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
          {/* Поле для введення email */}
          <label className={s.textInputWrapper}>
            <Field
              className={s.textInput}
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
            />
          </label>
          {/* Поле для введення пароля */}
          <label className={s.textInputWrapper}>
            <Field
              className={s.textInput}
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </label>
          {/* Кнопка відправки форми */}
          <button className={s.button} type="submit">
            Submit
          </button>
          {/* Посилання на сторінку входу */}
          <p>
            Already have an account?{' '}
            <Link className={s.link} to="/login">
              Log in here!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
