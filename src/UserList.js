import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserRow from './UserRow';

class UserList extends Component {
  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayed = () => {
    this.setState((currentState) => ({
      showGamesPlayed: !currentState.showGamesPlayed
    }));
  };

  render() {
    let { users } = this.props;
    return (
      <div>
        <h1>Users</h1>
        {users && users.length === 0 ? '' : (
          <div> 
            <button onClick={this.toggleGamesPlayed}>
              {this.state.showGamesPlayed ? 'Hide ' : 'Show '} the Number of Games Played
            </button>
          </div>
        )}
        <div>
          <ol>
            {users.map(user => (
              <UserRow user={user} showGamesPlayed={this.state.showGamesPlayed} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;