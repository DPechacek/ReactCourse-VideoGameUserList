import React from 'react';
import PropTypes from 'prop-types';

function UserRow(props) {
  return (
    <li key={props.user.userName}>
      <p>Username: {props.user.userName}</p>
      <p>{props.user.userName} played {props.showGamesPlayed ? props.user.gamesPlayed : '*'} games.</p>
    </li>
  );
};

UserRow.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserRow;