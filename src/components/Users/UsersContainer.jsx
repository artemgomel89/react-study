import React from 'react';
import { followToggleAC, setUsersAC } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followToggle: (userId) => {
      dispatch(followToggleAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
