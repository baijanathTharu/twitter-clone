import { TweetCard } from '../TweetCard';
import styles from './Feed.module.scss';

export function TweetFeed({ tweets }) {
  return (
    <>
      {tweets.map((t, id) => {
        return <TweetCard key={id} user={t.user} tweet={t.tweet} />;
      })}
    </>
  );
}
