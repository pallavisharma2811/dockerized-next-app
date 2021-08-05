import React from 'react'
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css'
const Nav = () => {
  return (
    <div className= {navStyles.nav}>
      <ul className= {navStyles.ul}>
        <li className= {navStyles.li}>
          <Link href="/">
          Home
          </Link>
         
        </li>
        <li className= {navStyles.li}>
          <Link href="/about">
          About
          </Link>
         
        </li>
      </ul>
    </div>
  )
}

export default Nav
