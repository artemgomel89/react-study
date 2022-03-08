import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sideBarReducer from './sideBar-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers);

export default store;
