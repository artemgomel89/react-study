import { CONSTANTS } from './state';

const initialState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  totalUsersCount: 20,
  isLoading: false,
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
    case CONSTANTS.SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case CONSTANTS.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
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

export const setTotalCountAC = (totalCount) => ({
  type: CONSTANTS.SET_TOTAL_COUNT,
  totalCount: totalCount,
});

export const setIsLoadingAC = (bool) => ({
  type: CONSTANTS.SET_IS_LOADING,
  isLoading: bool,
});

export default usersReducer;
