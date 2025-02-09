// Бібліотека для анімації тексту
import TypingEffect from 'react-typing-effect';
import styles from './TypingEffectMessage.module.css';

// Компонент анімації тексту для стану IsLoggedOut
const TypingEffectMessageIsLoggedOut = () => {
  return (
    // Обгортка для анімованого тексту
    <div className={styles.typingTextWrap}>
      {/* Компонент TypingEffect анімує текст по черзі */}
      <TypingEffect
        // Текст анімації
        text={[
          'Welcome to your Phonebook App 📱',
          'Please Log in 🔑 or Sign up 📑 to get started😉',
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
export default TypingEffectMessageIsLoggedOut;
