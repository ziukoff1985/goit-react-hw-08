// Компонент Navigate для перенаправлення користувача
import { Navigate } from 'react-router-dom';

// хук useSelector для доступу до стану Redux
import { useSelector } from 'react-redux';

// Селектор, який перевіряє, чи користувач залогінений
import { selectIsLoggedIn } from '../../redux/auth/selectors';

// Оголошуємо компонент RestrictedRoute
// Приймає:
// - `component`: компонент, який має відображатися у разі виходу користувача
// - `redirectTo`: шлях для перенаправлення, якщо користувач авторизований (за замовчуванням "/")
const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // Отримуємо стан авторизації з Redux
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Якщо користувач залогінений — перенаправляємо його на `redirectTo`
  // Якщо ні — відображаємо переданий компонент
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute; // Експорт

// *** Варіант з children:
// Компонент RestrictedRoute обмежує доступ до сторінок для залогінених користувачів
// const RestrictedRoute = ({ children }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

// Якщо користувач залогінений — перенаправляємо його на головну сторінку
// Якщо ні — показуємо контент (children)
//   return isLoggedIn ? <Navigate to="/" /> : children;
// };

// Тоді в Арр.jsx:
{
  /* <RestrictedRoute>
  <LoginPage />
</RestrictedRoute> */
}
