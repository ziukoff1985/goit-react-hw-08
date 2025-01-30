import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import s from './LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { logInThunk } from '../../redux/auth/authOperations';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(logInThunk(values))
      .unwrap()
      .then(() => navigate('/'));
    actions.resetForm();
  };

  return (
    <div className={s.wrap}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <p className={s.title}>Log In</p>
          <p className={s.message}>Log in to access all features!</p>
          <label className={s.textInputWrapper}>
            <Field className={s.textInput} name="email" placeholder="Email" />
          </label>
          <label className={s.textInputWrapper}>
            <Field
              className={s.textInput}
              type="password"
              name="password"
              placeholder="Password"
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
