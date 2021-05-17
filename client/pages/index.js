import { LeftSidebar, RightSidebar, TweetCard } from '../components/molecules';
import { TweetFeed } from '../components/molecules/Feed';
import styles from '../styles/pages/Home.module.scss';
import { tweets } from '../tweets';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left_sidebar}>
        <LeftSidebar fill={'white'} />
      </div>
      <main>
        <div className={styles.feed}>
          <TweetFeed tweets={tweets} />
        </div>
        <div className={styles.right_sidebar}>
          <RightSidebar />
        </div>
      </main>
    </div>
  );
}
