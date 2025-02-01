import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useId } from 'react';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchId = useId();

  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <label htmlFor={searchId} className={styles.inputLabel}>
        Find contacts by name
      </label>
      <div className={styles.inputWrap}>
        <input
          className={styles.input}
          id={searchId}
          type="text"
          name="search"
          value={filter}
          onChange={handleChangeFilter}
        />
      </div>
    </>
  );
};

export default SearchBox;
