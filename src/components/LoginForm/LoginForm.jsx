// Компоненти Formik
import { Field, Form, Formik } from 'formik';
// useDispatch для відправки екшенів у Redux
import { useDispatch } from 'react-redux';
import s from './LoginForm.module.css';
// Компонент Link для навігації між сторінками
import { Link } from 'react-router-dom';
// Асинхронна операцію для входу користувача
import { logInThunk } from '../../redux/auth/operations';

// Початкові значення полів форми
const initialValues = { email: '', password: '' };

// Компонент форми входу
export const LoginForm = () => {
  // 'Dispatch' для відправки екшену
  const dispatch = useDispatch();

  // Функція-обробник відправки форми
  const handleSubmit = (values, actions) => {
    // Викликаємо logInThunk з даними форми
    dispatch(logInThunk(values));
    actions.resetForm(); // Скидаємо форму після відправки
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
          <p className={s.title}>Log In</p>
          <p className={s.message}>Log in to access all features!</p>
          {/* Поле для введення email */}
          <label className={s.textInputWrapper}>
            <Field
              className={s.textInput}
              type="email"
              name="email" // Назва поля
              placeholder="Email"
              autoComplete="email" // Автозаповнення браузером
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
          {/* Посилання на сторінку реєстрації */}
          <p>
            No account yet?{' '}
            <Link className={s.link} to="/register">
              Lets create one!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
