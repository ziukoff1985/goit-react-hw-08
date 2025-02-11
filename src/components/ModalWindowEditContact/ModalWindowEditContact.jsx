import { useEffect, useState } from 'react';

// Компоненти з Material-UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorSnackbar from '../ErrorSnackbarEditContact/ErrorSnackbarEditContact';

// Компонент модального вікна для редагування контакту
// Викликається в Contact.jsx + Пропси
export default function ModalWindowEditContact({
  open, // Стан відкриття/закриття модального вікна
  name, // Початкове значення імені контакту (з бекенда)
  number, // Початкове значення номера телефону (з бекенда)
  onSave, // Функція, яка викликається при збереженні змін
  onClose, // Функція, яка викликається при закритті модального вікна
}) {
  // Локальний стан для редагованих даних контакту (name і number)
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const [errorMessage, setErrorMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Оновлюємо локальний стан, якщо змінюється передане значення 'name' або 'number'
  // Також оновлюємо локальний стан щоразу при відкритті модального вікна
  useEffect(() => {
    if (open) {
      setNewName(name);
      setNewNumber(number);
    }
  }, [open, name, number]);

  // Функція-обробник відправки форми
  const handleSubmit = event => {
    event.preventDefault();
    if (newName.trim() === '' || newNumber.trim() === '') {
      setErrorMessage('Both fields are required!');
      setOpenSnackbar(true);
      return;
    }
    // Передаємо оновлені дані контакту у функцію 'onSave'
    onSave(newName, newNumber);
  };

  return (
    <>
      {/*Компонент модального вікна*/}
      <Dialog open={open} onClose={onClose}>
        {/* Заголовок модального вікна */}
        <DialogTitle>Edit Contact</DialogTitle>
        {/* Контент модального вікна */}
        <DialogContent>
          {/* Поле введення для редагування імені */}
          <TextField
            autoFocus // Автоматично фокусується при відкритті
            required // Поле є обов'язковим
            margin="dense" // Додає відступи між полями
            id="name" // Унікальний ідентифікатор
            label="Name" // Підпис для поля
            type="text" // Текстове поле
            fullWidth // Займає всю ширину контейнера
            variant="standard" // Використовує стандартний стиль
            value={newName} // Поточне значення імені
            // Оновлює стан при введенні нового значення
            onChange={e => setNewName(e.target.value)}
          />
          {/* Поле введення для редагування номера телефону */}
          <TextField
            required
            margin="dense"
            id="number"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="standard"
            value={newNumber} // Поточне значення номера телефону
            // Оновлює стан при введенні нового значення
            onChange={e => setNewNumber(e.target.value)}
          />
        </DialogContent>
        {/* Блок кнопок у модальному вікні */}
        <DialogActions>
          {/* Кнопка для скасування редагування */}
          <Button onClick={onClose} color="error">
            Cancel
          </Button>
          {/* Кнопка для збереження змін */}
          <Button onClick={handleSubmit} type="submit">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <ErrorSnackbar
        open={openSnackbar}
        message={errorMessage}
        onClose={() => setOpenSnackbar(false)}
      />
    </>
  );
}
