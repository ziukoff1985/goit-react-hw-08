import styles from './TypingEffectMessage.module.css';
import TypingEffect from 'react-typing-effect';

const TypingEffectMessageIsLoggedIn = () => {
  return (
    <div className={styles.typingTextWrap}>
      <TypingEffect
        text={[
          'Welcome back to your Phonebook App 📱!',
          'You are logged in.',
          'Enjoy managing your contacts!',
        ]}
        cursor="|"
        speed={100}
        eraseSpeed={100}
        typingDelay={0}
        className={styles.typingEffect}
        displayTextRenderer={text => <h1 className={styles.h1}>{text}</h1>}
      />
    </div>
  );
};
export default TypingEffectMessageIsLoggedIn;
