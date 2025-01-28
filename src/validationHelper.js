import * as Yup from 'yup';

// Валідаційна схема для форми (бібліотека Yup) в компоненті 'ContactForm'
const FormValidationSchema = Yup.object().shape({
  name: Yup.string() // Поле "name"
    .min(3, '"Too Short!') // Мінімальна довжина — 3 символи
    .max(50, 'Too Long Name!') // Максимальна довжина — 50 символів
    .required('Required'), // Поле обов'язкове для заповнення
  number: Yup.string() // Поле "number"
    .matches(/^\d+$/, 'Only digits are allowed') // Перевірка, щоб це були лише цифри
    .min(3, '"Too Short!') // Мінімальна довжина — 3 символи
    .max(50, 'Too Long Number!') // Максимальна довжина — 50 символів
    .required('Required'), // Поле обов'язкове для заповнення
});

export default FormValidationSchema;
