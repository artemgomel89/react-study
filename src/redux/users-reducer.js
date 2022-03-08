import { CONSTANTS } from './state';

const initialState = {
  users: [],
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
        users: [...state.users, ...action.users],
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

export default usersReducer;
