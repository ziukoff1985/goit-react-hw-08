import styles from './TypingEffectMessage.module.css';
import TypingEffect from 'react-typing-effect';

const TypingEffectMessageIsLoggedOut = () => {
  return (
    <div className={styles.typingTextWrap}>
      <TypingEffect
        text={[
          'Welcome to your Phonebook App 📱.',
          'Please Log in 🔑 or Sign up ✨ to get started.',
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
export default TypingEffectMessageIsLoggedOut;
