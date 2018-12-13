import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  state = {
    newUser: {
      firstName: '',
      lastName: '',
      userName: '',
      gamesPlayed: 0
    },
  };

  updateNewUser = (event) => {
    const { name, value } = event.target;

    this.setState(currState => ({
      newUser: {
        ...currState.newUser,
        [name]: value,
      },
    }));
  };

  clearUser = () => {
    this.setState({
      newUser: {
        firstName: '',
        lastName: '',
        userName: '',
        gamesPlayed: 0
      }
    });
  }

  addUser = () => {
    for(const user of this.props.users) {
      if(user.userName === this.state.newUser.userName) {
        alert(`User ${this.state.newUser.userName} already exists.`);
        return;
      }
    }
    
    this.props.addUser(this.state.newUser);
    this.clearUser();
  }

  isDisabled = () => {
    let {firstName, lastName, userName} = this.state.newUser;
    return firstName === '' || lastName === '' || userName === '';
  }

  render() { 
    return (
      <div>
        <h2> Add User </h2>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value = {this.state.newUser.firstName}
          onChange = {this.updateNewUser}
        />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value = {this.state.newUser.lastName}
          onChange = {this.updateNewUser}
        />
        <input
          type='text'
          name='userName'
          placeholder='Enter username'
          value = {this.state.newUser.userName}
          onChange = {this.updateNewUser}
        />
        <button name='addUser' onClick={() => this.addUser()} disabled={this.isDisabled()}>Add</button>
      </div>
    );
  }
}

export default AddUser;