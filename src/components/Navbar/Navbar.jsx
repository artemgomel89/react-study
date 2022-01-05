import React from 'react'
import s from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item}`}>
        <a href="profile" className={s.active}>
          Profile
        </a>
      </div>
      <div className={s.item}>
        <a href="dialogs">Messages</a>
      </div>
      <div className={s.item}>
        <a href="news">News </a>
      </div>
      <div className={s.item}>
        <a href="music">Music</a>
      </div>
      <div className={s.item}>
        <a href="settings">Settings</a>
      </div>
    </nav>
  )
}

export default Navbar
