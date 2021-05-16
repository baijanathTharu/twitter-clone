import { HomeIcon, TwitterIcon } from '../components/icons';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello world</h1>
      <div className={styles.icons}>
        <TwitterIcon fill='black' />
        <HomeIcon />
      </div>
    </div>
  );
}
