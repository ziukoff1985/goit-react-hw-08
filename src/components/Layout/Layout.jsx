import { Outlet } from 'react-router-dom'; // Компонент для відображення вкладених маршрутів
import s from './Layout.module.css';
import AppBar from '../AppBar/AppBar'; // Компонент верхньої панелі (AppBar)

// Компонент Layout, який визначає основну структуру сторінки
const Layout = () => {
  return (
    // Основна обгортка з класом з CSS-модуля
    <div className={s.wrap}>
      {/* Верхня панель (AppBar), яка залишається постійною на всіх сторінках */}
      <AppBar />
      {/* Outlet - використовується для відображення вмісту вкладених маршрутів. */}
      <Outlet />
    </div>
  );
};

export default Layout;
