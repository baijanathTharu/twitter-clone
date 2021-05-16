import { SearchIcon } from '../../icons';
import { IconWrapper } from '../../atoms';
import styles from './SearchForm.module.scss';

export function SearchForm() {
  return (
    <div className={styles.search_form}>
      <form action='#'>
        <div className={styles.text}>
          <div className={styles.search_icon}>
            <IconWrapper>
              <SearchIcon />
            </IconWrapper>
          </div>
          <input type='text' placeholder='Search Twitter' />
        </div>
      </form>
    </div>
  );
}
