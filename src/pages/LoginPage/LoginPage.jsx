// Компонент форми входу
import { LoginForm } from '../../components/LoginForm/LoginForm';

// Сторінка входу
const LoginPage = () => {
  return (
    <div>
      {/* Компонент LoginForm для введення логіна та пароля */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
