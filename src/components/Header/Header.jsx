import React from 'react'
import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Tu-sofia-logo.svg/1200px-Tu-sofia-logo.svg.png"
        alt="main-logo"
      />
    </header>
  )
}

export default Header
