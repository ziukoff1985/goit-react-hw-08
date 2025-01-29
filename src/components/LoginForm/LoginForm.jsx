// import { Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';
import s from './LoginForm.module.css';
import { Link } from 'react-router-dom';
const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  //   const dispatch = useDispatch();

  const handleSubmit = () => {
    // dispatch(logIn(value));
    // action.resetForm();
  };

  return (
    <div className={s.wrap}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <p className={s.title}>Log In</p>
          <p className={s.message}>
            Log in now and get full access to our app.
          </p>
          <label className={s.textInputWrapper}>
            <Field
              className={s.textInput}
              //   type="email"
              name="email"
              placeholder="Email"
            />
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
            Do not have account?{' '}
            <Link className={s.link} to="/register">
              Lets create one!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
