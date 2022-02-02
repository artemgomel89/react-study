import React from 'react';
import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item}`}>
        <NavLink
          to="profile"
          className={(navData) => (navData.isActive ? `${s.active}` : 'none')}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="dialogs"
          className={(navData) => (navData.isActive ? `${s.active}` : 'none')}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="news"
          className={(navData) => (navData.isActive ? `${s.active}` : 'none')}
        >
          News{' '}
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="music"
          className={(navData) => (navData.isActive ? `${s.active}` : 'none')}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="settings"
          className={(navData) => (navData.isActive ? `${s.active}` : 'none')}
        >
          Settings
        </NavLink>
      </div>
      {(store) => <Friends friends={store.getState().sideBar.friends} />}
    </nav>
  );
};

export default Navbar;
