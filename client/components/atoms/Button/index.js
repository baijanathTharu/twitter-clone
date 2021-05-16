import styles from './Button.module.scss';

export function Button({ text }) {
  return <button className={styles.button}>{text}</button>;
}

export function SecondaryButton({ text }) {
  return <button className={styles.secondary_button}>{text}</button>;
}
