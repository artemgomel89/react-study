import { CONSTANTS } from './state';

const initialState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  totalUsersCount: 20,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.FOLLOW_TOGGLE:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userId) {
            return { ...e, isFollowed: !e.isFollowed };
          }
          return e;
        }),
      };
    case CONSTANTS.SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case CONSTANTS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export const followToggleAC = (userId) => ({
  type: CONSTANTS.FOLLOW_TOGGLE,
  userId: userId,
});

export const setUsersAC = (users) => ({
  type: CONSTANTS.SET_USERS,
  users: users,
});

export const setCurrentPageAC = (page) => ({
  type: CONSTANTS.SET_CURRENT_PAGE,
  currentPage: page,
});

export default usersReducer;
