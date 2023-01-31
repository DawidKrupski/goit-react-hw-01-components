import { PropTypes } from 'prop-types';
import css from './Friends.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  const list = friends.map(friend => {
    return (
      <FriendListItem
        key={friend.id}
        id={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    );
  });
  return <ul className={css['friend-list']}>{list}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
