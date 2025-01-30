import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import s from './RegistrationForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/authOperations';

export const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate('/'));
    action.resetForm();
  };

  return (
    <div className={s.wrap}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <p className={s.title}>Register </p>
          <p className={s.message}>Create an account for full access!</p>
          <label className={s.textInputWrapper}>
            <Field
              className={s.textInput}
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
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
