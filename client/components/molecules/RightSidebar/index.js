import { SearchForm } from '../../atoms';
import { TopicCard } from '../TopicCard';
import styles from './RightSidebar.module.scss';

export function RightSidebar() {
  return (
    <div className={styles.right_sidebar}>
      <div className={styles.search}>
        <SearchForm />
      </div>
      <div className='topics'>
        <TopicCard />
      </div>
    </div>
  );
}
