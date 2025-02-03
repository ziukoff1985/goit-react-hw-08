// Селектори для отримання частин стану `auth` у Redux

// Отримуємо дані користувача (name та email) з Redux-стану
export const selectUser = state => state.auth.user;

// Перевіряємо, чи користувач авторизований
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// Перевіряємо, чи зараз виконується оновлення користувача
export const selectIsRefrishing = state => state.auth.isRefreshing;
