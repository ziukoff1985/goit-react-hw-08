import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import s from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import { logInThunk } from '../../redux/auth/operations';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logInThunk(values));
    actions.resetForm();
  };

  return (
    <div className={s.wrap}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <p className={s.title}>Log In</p>
          <p className={s.message}>Log in to access all features!</p>
          <label className={s.textInputWrapper}>
            <Field
              className={s.textInput}
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
            />
          </label>
          <label className={s.textInputWrapper}>
            <Field
              className={s.textInput}
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </label>
          <button className={s.button} type="submit">
            Submit
          </button>
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
