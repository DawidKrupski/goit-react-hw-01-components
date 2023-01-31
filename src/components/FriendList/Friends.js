import { PropTypes } from 'prop-types';
import css from './Friends.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  const list = friends.map(f => {
    return (
      <FriendListItem
        key={f.id}
        id={f.id}
        avatar={f.avatar}
        name={f.name}
        isOnline={f.isOnline}
      />
    );
  });
  return <ul className={css['friend-list']}>{list}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
