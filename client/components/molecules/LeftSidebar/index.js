import Image from 'next/image';
import { Button, IconWrapper } from '../../atoms';
import {
  BookmarkIcon,
  HashIcon,
  HomeIcon,
  ListIcon,
  MessageIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  SimpleMoreIcon,
  TwitterIcon,
} from '../../icons';
import styles from './LeftSidebar.module.scss';

export function LeftSidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <IconWrapper>
          <TwitterIcon fill={'white'} />
        </IconWrapper>
      </div>
      <div className={styles.navLinks}>
        <div className={styles.navItem}>
          <IconWrapper>
            <HomeIcon fill={'white'} />
          </IconWrapper>
          <h2>Home</h2>
        </div>
        <div className={styles.navItem}>
          <IconWrapper>
            <HashIcon fill={'white'} />
          </IconWrapper>
          <h2>Explore</h2>
        </div>
        <div className={styles.navItem}>
          <IconWrapper>
            <NotificationIcon fill={'white'} />
          </IconWrapper>
          <h2>Notifications</h2>
        </div>
        <div className={styles.navItem}>
          <IconWrapper>
            <MessageIcon fill={'white'} />
          </IconWrapper>
          <h2>Messages</h2>
        </div>
        <div className={styles.navItem}>
          <IconWrapper>
            <BookmarkIcon fill={'white'} />
          </IconWrapper>
          <h2>Bookmarks</h2>
        </div>
        <div className={styles.navItem}>
          <IconWrapper>
            <ListIcon fill={'white'} />
          </IconWrapper>
          <h2>Lists</h2>
        </div>
        <div className={styles.navItem}>
          <IconWrapper>
            <ProfileIcon fill={'white'} />
          </IconWrapper>
          <h2>Profile</h2>
        </div>
        <div className={styles.navItem}>
          <IconWrapper>
            <MoreIcon fill={'white'} />
          </IconWrapper>
          <h2>More</h2>
        </div>
      </div>
      <div className={styles.tweetBtn}>
        <Button text={'Tweet'} />
      </div>
      <div className={styles.profile}>
        <div className={styles.image}>
          <Image src='/assets/photos/profile-icon.jpg' width='80' height='80' />
        </div>
        <div className={styles.name}>
          <h3>Baijanath Tharu</h3>
          <p>@baijanaththaru</p>
        </div>
        <div className={styles.moreIcon}>
          <IconWrapper>
            <SimpleMoreIcon fill={'white'} />
          </IconWrapper>
        </div>
      </div>
    </div>
  );
}
