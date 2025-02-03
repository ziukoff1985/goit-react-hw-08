import { Route, Routes } from 'react-router-dom'; // Компоненти для маршрутизації
import { Toaster } from 'react-hot-toast'; // Бібліотека react-hot-toast
import { useDispatch, useSelector } from 'react-redux'; // Хуки для роботи з Redux
import { lazy, Suspense, useEffect } from 'react'; // lazy() - динамічний імпорт сторінок, Suspense - показує Loader, поки компоненти не завантажені.

import Layout from './components/Layout/Layout'; // Компонент Layout (огортає всі компоненти додатка)
import PrivateRoute from './components/Routes/PrivateRoute'; // Компонент PrivateRoute (доступ лише для авторизованих користувачів)
import RestrictedRoute from './components/Routes/RestrictedRoute'; // Компонент RestrictedRoute (доступ для всіх користувачів)
import Loader from './components/Loader/Loader'; // Компонент Loader

import { refreshUserThunk } from './redux/auth/operations'; // Операція для оновлення користувача (при перезавантаженні)
import { selectIsRefrishing } from './redux/auth/selectors'; // Селектор для отримання статусу оновлення користувача

import './App.css'; // Файл стилів CSS

// Динамічне завантаження для оптимізації продуктивності
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch(); // dispatch для відправки actions в Redux
  const isRefreshing = useSelector(selectIsRefrishing); // Отримуємо стан isRefreshing з Redux (true/false)
  // 🔹 Використовуємо `useEffect`, щоб оновити дані користувача при завантаженні додатка
  useEffect(() => {
    // Викликаємо `refreshUserThunk`, щоб отримати актуальні дані про користувача
    dispatch(refreshUserThunk());
  }, [dispatch]); // Ефект запускається при першому рендері або перезавантаженні сторінки

  // Якщо триває оновлення користувача (isRefreshing === true), то нічого не рендеримо (null)
  // Якщо isRefreshing === false - рендеримо розмітку
  return isRefreshing ? null : (
    <>
      {/* 🔹 Сповіщення (Toaster) - для повідомлень react-hot-toast */}
      <Toaster position="top-center" reverseOrder={false} />
      {/* 🔹 `Suspense` - для відкладеного завантаження компонентів */}
      {/*  поки компонент завантажується, показується `Loader` */}
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Компонент Layout - огортає всі маршрути додатка */}
          <Route path="/" element={<Layout />}>
            {/* Головна сторінка (відображається за замовчуванням) */}
            <Route index element={<HomePage />} />
            {/* 🔹 PrivateRoute - доступний тільки для авторизованих користувачів */}
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  // Якщо користувач НЕ авторизований - перенаправляємо сторінку '/login'
                  redirectTo="/login"
                  // Якщо користувач авторизований - рендеримо '<ContactsPage />'
                  component={<ContactsPage />}
                />
              }
            />
            {/* 🔹 RestrictedRoute - доступний для всіх */}
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  // Якщо користувач авторизований - перенаправляємо сторінку '/contacts'
                  redirectTo="/contacts"
                  // Якщо користувач НЕ авторизований - рендеримо '<LoginPage />'
                  component={<LoginPage />}
                />
              }
            />
            {/* 🔹 RestrictedRoute - доступний для всіх */}
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  // Якщо користувач авторизований - перенаправляємо сторінку '/contacts'
                  redirectTo="/contacts"
                  // Якщо користувач НЕ авторизований - рендеримо '<LoginPage />'
                  component={<RegistrationPage />}
                />
              }
            />
            {/* 🔹 Сторінка 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App; // Експорт
