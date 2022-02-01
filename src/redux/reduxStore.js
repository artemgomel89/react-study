import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sideBarReducer from './sideBar-reducer';

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebar: sideBarReducer,
});

const store = createStore(reducers);

export default store;
