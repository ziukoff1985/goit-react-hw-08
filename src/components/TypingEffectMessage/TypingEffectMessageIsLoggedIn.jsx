import styles from './TypingEffectMessage.module.css';
import TypingEffect from 'react-typing-effect';

const TypingEffectMessageIsLoggedIn = () => {
  return (
    <div className={styles.typingTextWrap}>
      <TypingEffect
        text={[
          'Welcome back to your Phonebook App 📱!',
          'You are logged in.',
          'Manage your contacts easily and securely!',
        ]}
        cursor="|"
        speed={80}
        eraseSpeed={80}
        typingDelay={0}
        className={styles.typingEffect}
        displayTextRenderer={text => <h1 className={styles.h1}>{text}</h1>}
      />
    </div>
  );
};
export default TypingEffectMessageIsLoggedIn;
