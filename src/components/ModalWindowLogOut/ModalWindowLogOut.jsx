// Компонент модального вікна з бібліотеки Ant Design
import { Modal } from 'antd';

// Стилі CSS
import s from './ModalWindowLogOut.module.css';

// Компонент ModalWindowLogOut (модальне вікно для підтвердження 'Log Out')
// Викликається в UserMenu.jsx + Пропси
const ModalWindowLogOut = ({
  isOpen, // Cтан відкриття модального вікна (відкрито/закрито)
  onConfirm, // Функція виходу при підтвердженні
  onCancel, // Закриваємо вікно при скасуванні
}) => {
  return (
    <>
      <Modal
        title="Log Out" // Заголовок модального вікна
        open={isOpen} // Визначає, чи відкрите вікно
        onOk={onConfirm} // Викликає функцію виходу при натисканні "ОК"
        onCancel={onCancel} // Закриває модальне вікно при натисканні "Cancel"
      >
        {/* Повідомлення у вікні */}
        <p className={s.message}>Are you sure want to quit the App😕?</p>
      </Modal>
    </>
  );
};
export default ModalWindowLogOut;
