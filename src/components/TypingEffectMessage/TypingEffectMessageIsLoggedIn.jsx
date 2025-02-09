// Бібліотека для анімації тексту
import TypingEffect from 'react-typing-effect';
import styles from './TypingEffectMessage.module.css';

// Компонент анімації тексту для стану IsLoggedIn
const TypingEffectMessageIsLoggedIn = () => {
  return (
    // Обгортка для анімованого тексту
    <div className={styles.typingTextWrap}>
      {/* Компонент TypingEffect анімує текст по черзі */}
      <TypingEffect
        // Текст анімації
        text={[
          'Welcome back to your Phonebook App 📱!',
          'You are logged in ✅',
          'Manage your contacts easily and securely 🔐',
        ]}
        cursor="|" // Символ курсора (|)
        speed={80} // Швидкість друку символів
        eraseSpeed={80} // Швидкість видалення символів
        typingDelay={0} // Затримка перед початком друку
        className={styles.typingEffect} // Стилі до анімованого тексту
      />
    </div>
  );
};
export default TypingEffectMessageIsLoggedIn;
