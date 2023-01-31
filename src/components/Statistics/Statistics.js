import React from 'react';
import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';

function getDarkColor() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        <li style={{ background: getDarkColor() }} className={css.item}>
          <span className={css.label}>.docx</span>
          <span className={css.percentage}>{stats.docx}%</span>
        </li>
        <li style={{ background: getDarkColor() }} className={css.item}>
          <span className={css.label}>.mp3</span>
          <span className={css.percentage}>{stats.mp3}%</span>
        </li>
        <li style={{ background: getDarkColor() }} className={css.item}>
          <span className={css.label}>.pdf</span>
          <span className={css.percentage}>{stats.pdf}%</span>
        </li>
        <li style={{ background: getDarkColor() }} className={css.item}>
          <span className={css.label}>.mp4</span>
          <span className={css.percentage}>{stats.mp4}%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    docx: PropTypes.number,
    mp3: PropTypes.number,
    pdf: PropTypes.number,
    mp4: PropTypes.number,
  }).isRequired,
  title: PropTypes.string,
};
