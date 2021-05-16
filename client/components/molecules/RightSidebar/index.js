import { SearchForm } from '../../atoms';
import { Card } from '../Card';
import styles from './RightSidebar.module.scss';

export function RightSidebar() {
  return (
    <div className={styles.right_sidebar}>
      <div className={styles.search}>
        <SearchForm />
      </div>
      <div className='topics'>
        <Card />
      </div>
    </div>
  );
}
