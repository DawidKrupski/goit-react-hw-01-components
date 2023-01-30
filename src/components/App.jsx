import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const stats = {
    docx: 4,
    mp3: 14,
    pdf: 41,
    mp4: 12,
  };

  return (
    <div>
      <Statistics stats={stats} title={'Upload stats'} />
    </div>
  );
};
