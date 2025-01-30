import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { logOutThunk } from '../../redux/auth/authOperations';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={s.userMenu}>
        <span className={s.userName}>Welcome, {user.name}</span>
        <button onClick={() => dispatch(logOutThunk())} className={s.button}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
