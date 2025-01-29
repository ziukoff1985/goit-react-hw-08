// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import { fetchContactsThunk } from './redux/contactsOps'; // thunk-операція (завантаження контактів з сервера)
import Layout from './components/Layout/Layout';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContactsThunk()); // Виклик операції для завантаження списоку контактів із сервера (наявних)
  // }, [dispatch]); // Викликається один раз, оскільки `dispatch` стабільний (не змінюється).

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
