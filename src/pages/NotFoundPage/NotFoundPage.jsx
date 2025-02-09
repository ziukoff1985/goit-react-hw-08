// Link для навігації між сторінками
import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';

// Сторінка 404
const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <div className={s.gif}>
        {/* Відображаємо GIF-зображення, яке ілюструє помилку 404 */}
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className={s.content}>
        {/* Основний заголовок сторінки */}
        <h2 className={s.mainHeading}>This page is gone.</h2>
        {/* Повідомлення про можливу причину помилки */}
        <p className={s.message}>
          ...maybe the page you are looking for is not found or never existed.
        </p>
        {/* Кнопка для повернення на головну сторінку */}
        <Link to="/" className={s.back_link}>
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
