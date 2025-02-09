import { DNA } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrap}>
      <DNA
        visible={true} // Loader завжди відображається.
        height="200" // Висота Loader 200px.
        width="200" // Ширина Loader 200px.
        ariaLabel="dna-loading" // Опис для доступності.
        wrapperStyle={{}} // Порожній об'єкт для інлайн-стилів.
        wrapperClass="dna-wrapper" // Клас для стилізації обгортки.
      />
    </div>
  );
};

export default Loader;
