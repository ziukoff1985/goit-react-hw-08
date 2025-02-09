// 'useSelector' для отримання стану з Redux
import { useSelector } from 'react-redux';

// Селектор - який перевіряє, чи користувач авторизований
import { selectIsLoggedIn } from '../../redux/auth/selectors';

// Компоненти анімованого тексту
import TypingEffectMessageIsLoggedIn from '../../components/TypingEffectMessage/TypingEffectMessageIsLoggedIn';
import TypingEffectMessageIsLoggedOut from '../../components/TypingEffectMessage/TypingEffectMessageIsLoggedOut';

// Сторінка 'HomePage'
const HomePage = () => {
  // Отримуємо стан авторизації
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {/* Якщо користувач авторизований - показуємо одне повідомлення, якщо ні - інше */}
      {isLoggedIn ? (
        <TypingEffectMessageIsLoggedIn />
      ) : (
        <TypingEffectMessageIsLoggedOut />
      )}
    </div>
  );
};

export default HomePage;
