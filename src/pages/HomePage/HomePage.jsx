import { useSelector } from 'react-redux';
import TypingEffectMessageIsLoggedIn from '../../components/TypingEffectMessage/TypingEffectMessageIsLoggedIn';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import TypingEffectMessageIsLoggedOut from '../../components/TypingEffectMessage/TypingEffectMessageIsLoggedOut';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <TypingEffectMessageIsLoggedIn />
      ) : (
        <TypingEffectMessageIsLoggedOut />
      )}
    </div>
  );
};

export default HomePage;
