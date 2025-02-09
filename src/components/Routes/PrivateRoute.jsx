// Компонент Navigate для перенаправлення користувача
import { Navigate } from 'react-router-dom';

// хук useSelector для доступу до стану Redux
import { useSelector } from 'react-redux';

// Селектор, який перевіряє, чи користувач залогінений
import { selectIsLoggedIn } from '../../redux/auth/selectors';

// Компонент PrivateRoute
// Приймає:
// - `component`: компонент, який має відображатися у разі входу користувача
// - `redirectTo`: шлях для перенаправлення, якщо користувач не авторизований (за замовчуванням "/")
const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // Отримуємо стан авторизації з Redux
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Якщо користувач залогінений — відображаємо переданий компонент
  // Якщо ні — перенаправляємо на вказаний маршрут (redirectTo)
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute; // Експорт

// *** Варіант з children:
// Компонент PrivateRoute обмежує доступ до сторінок для незалогінених користувачів
// const PrivateRoute = ({ children }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

// Якщо користувач залогінений — показуємо контент (children)
// Якщо ні — перенаправляємо на сторінку входу
//   return isLoggedIn ? children : <Navigate to="/login" />;
// };

// Тоді в Арр.jsx:
{
  /* <PrivateRoute>
  <ContactsPage />
</PrivateRoute> */
}
