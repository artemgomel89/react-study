import {
  followToggleAC,
  setCurrentPageAC,
  setIsLoadingAC,
  setTotalCountAC,
  setUsersAC,
} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import React from 'react';
import axios from 'axios';

class UsersAPI extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((resp) => {
        this.props.setIsLoading(false);
        this.props.setUsers(resp.data.items);
      });
  }

  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.props.setIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((resp) => {
        this.props.setIsLoading(false);
        this.props.setUsers(resp.data.items);
      });
  };

  render = () => {
    return (
      <Users
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        followToggle={this.props.followToggle}
        isLoading={this.props.isLoading}
      />
    );
  };
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    isLoading: state.usersPage.isLoading,
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
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
    setIsLoading: (bool) => {
      dispatch(setIsLoadingAC(bool));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
