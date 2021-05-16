import styles from './Card.module.scss';
import { Button, SecondaryButton } from '../../atoms';
import { CrossIcon } from '../../icons';

const topics = [
  'Science',
  'Mathematics',
  'Programming',
  'Technology',
  'Politics',
  'Philosophy',
];

export function Topic({ name }) {
  return (
    <div className={styles.topic}>
      <div className={styles.name}>
        <h3>{name}</h3>
      </div>
      <div className={styles.follow}>
        <SecondaryButton text={'Follow'} />
      </div>
      <div className={styles.cross}>
        <CrossIcon />
      </div>
    </div>
  );
}

export function Card() {
  return (
    <div className={styles.card}>
      <h2>Topics To Follow</h2>
      <ul>
        {topics.map((topic, id) => {
          return <Topic key={id} name={topic} />;
        })}
      </ul>
      <div className={styles.show_more}>
        <p>Show More</p>
      </div>
    </div>
  );
}
