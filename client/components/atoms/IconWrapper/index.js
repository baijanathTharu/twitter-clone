import styles from './IconWrapper.module.scss';

export function IconWrapper({ children }) {
  return <div className={styles.container}>{children}</div>;
}
