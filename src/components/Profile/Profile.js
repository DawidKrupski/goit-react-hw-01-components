import { PropTypes } from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar.src} alt={avatar.alt} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        {location && <p className={css.location}>{location}</p>}
      </div>

      <ul className={css['stats']}>
        {stats.followers && (
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
        )}
        {stats.views && (
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
        )}
        {stats.likes && (
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
