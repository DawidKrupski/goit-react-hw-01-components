import React from 'react';
import { PropTypes } from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className="item">
      <span className="status">{isOnline}</span>
      {avatar && (
        <img className="avatar" src={avatar.src} alt={avatar.alt} width="48" />
      )}
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
