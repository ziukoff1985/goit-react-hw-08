// Компоненти Snackbar і Alert з бібліотеки Ant Design
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Компонент для відображення повідомлення про помилку у вигляді спливаючого вікна (Snackbar)
// Викликається в ModalWindowEditContact.jsx + Пропси
export default function ErrorSnackbar({
  open, // Стан відкриття сповіщення
  message, // Текст помилки
  onClose, // Функція для закриття сповіщення
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000} // Закриється через 3 сек
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Розташування по центру зверху
    >
      <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
