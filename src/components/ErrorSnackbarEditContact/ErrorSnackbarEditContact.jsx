import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function ErrorSnackbar({ open, message, onClose }) {
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
