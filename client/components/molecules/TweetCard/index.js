import Image from 'next/image';
import { SimpleMoreIcon } from '../../icons';
import styles from './TweetCard.module.scss';

export function TweetCard({ user, tweet }) {
  return (
    <div className={styles.tweet_card}>
      <div className={styles.avatar}>
        <Image src={`/assets/photos/${user.avatar}`} width='50' height='50' />
      </div>
      <div className={styles.tweet}>
        <div className={styles.user}>
          <h2>
            {user.name}
            <span>@{user.username}</span>
          </h2>
        </div>
        <div className={styles.description}>
          <p>{tweet.description}</p>
        </div>
      </div>
      <div className={styles.more}>
        <SimpleMoreIcon />
      </div>
    </div>
  );
}

TweetCard.prototype = {
  user: {
    name: String,
    username: String,
    avatar: String,
  },
  tweet: {
    description: String,
    topic: String,
  },
};
