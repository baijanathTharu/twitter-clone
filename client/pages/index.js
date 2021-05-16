import { LeftSidebar, RightSidebar } from '../components/molecules';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left_sidebar}>
        <LeftSidebar fill={'white'} />
      </div>
      <main>
        <div className={styles.feed}></div>
        <div className={styles.right_sidebar}>
          <RightSidebar />
        </div>
      </main>
    </div>
  );
}
