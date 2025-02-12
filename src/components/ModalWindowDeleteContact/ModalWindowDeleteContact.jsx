// Компонент модального вікна з бібліотеки Ant Design
import { Modal } from 'antd';

// Стилі CSS
import s from './ModalWindowDeleteContact.module.css';

// Компонент ModalWindowLogOut (модальне вікно для підтвердження видалення контакту)
// Викликається в Contact.jsx + Пропси
const ModalWindowDeleteContact = ({
  isOpen, // Cтан відкриття модального вікна (true — відкрите, false — закрите)
  onDelete, // Функція, яка викликається при підтвердженні видалення контакту
  onClose, // Функція, яка закриває модальне вікно при скасуванні (Cancel)
}) => {
  return (
    <>
      <Modal
        title="❗❗❗ Warning ❗❗❗" // Заголовок модального вікна
        open={isOpen} // Визначає, чи відкрите вікно
        onOk={() => {
          onDelete(); // Викликаємо функцію видалення контакту
          onClose(); /// Закриваємо модальне вікно після підтвердження
        }}
        onCancel={onClose} // Закриває модальне вікно при натисканні "Cancel"
      >
        {/* Повідомлення у вікні */}
        <p className={s.message}>Do you really want to delete this contact?</p>
      </Modal>
    </>
  );
};
export default ModalWindowDeleteContact;
