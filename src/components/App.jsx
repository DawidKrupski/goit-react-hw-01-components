import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';

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
    </div>
  );
};
