import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/Friends';
import { FriendListItem } from './FriendList/FriendListItem/FriendListItem';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/FriendListItem/friends.json';

export const App = () => {
  return (
    <div>
      <Statistics stats={data.stats} title={data.title} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.profileStats}
      />
      <FriendList friends={friends} />
    </div>
  );
};
