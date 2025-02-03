import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Імпорт `Provider` для підключення Redux до застосунку
import { PersistGate } from 'redux-persist/integration/react'; // Для збереження стану Redux в localStorage
import { BrowserRouter } from 'react-router-dom'; // Маршрутизація додатка
import 'modern-normalize';

import App from './App.jsx';

// persistor - для збереження стану між сесіями в localStorage, store - (стан Redux)
import { persistor, store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider надає всім компонентам доступ до глобального стану Redux */}
    <Provider store={store}>
      {/* PersistGate забезпечує відновлення стану з redux-persist перед рендером додатка */}
      <PersistGate loading={null} persistor={persistor}>
        {/* BrowserRouter для маршрутизації (огортає Арр) */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
