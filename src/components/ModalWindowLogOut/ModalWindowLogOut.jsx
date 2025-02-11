// import { useState } from 'react';
import { Modal } from 'antd';
import s from './ModalWindowLogOut.module.css';

const ModalWindowLogOut = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <>
      <Modal
        title="Log Out"
        open={isOpen}
        onOk={onConfirm}
        onCancel={onCancel}
        className={s.modal}
      >
        <p className={s.message}>Are you sure want to quit the App😕?</p>
      </Modal>
    </>
  );
};
export default ModalWindowLogOut;
