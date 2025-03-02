// - `useEffect` для виконання побічних дій
// - `useRef` для збереження стійкого значення між рендерами.
import { useEffect, useRef } from 'react';

// Імпорт бібліотеки `react-hot-toast`
import toast from 'react-hot-toast';

const Error = () => {
  // Створюємо реф для відстеження, чи було вже показане сповіщення. Початкове значення — false.
  const hasToastShown = useRef(false);

  // 'useEffect' після рендеру компонента.
  // Викликається лише один раз після першого рендеру.
  useEffect(() => {
    if (!hasToastShown.current) {
      // Якщо сповіщення ще не було показано:
      // Показуємо сповіщення про помилку.
      toast.error('Something went wrong 🤦‍♂️, try again...');
      // Оновлюємо реф, щоб позначити, що сповіщення вже було показано.
      hasToastShown.current = true;
    }
  }, []); // Порожній масив залежностей - `useEffect` виконається лише один раз після першого рендеру.

  return null; // Компонент нічого не рендерить у DOM.
};

export default Error; // Експорт
