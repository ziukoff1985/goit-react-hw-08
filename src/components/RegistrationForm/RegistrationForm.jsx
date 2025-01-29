import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import s from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/authOperations';

export const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(registerThunk(values));
    action.resetForm();
  };

  return (
    <div className={s.wrap}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <p className={s.title}>Register </p>
          <p className={s.message}>
            Signup now and get full access to our app.{' '}
          </p>
          <label className={s.textInputWrapper}>
            <Field
              className={s.textInput}
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
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
            You already have account?{' '}
            <Link className={s.link} to="/login">
              Login!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
