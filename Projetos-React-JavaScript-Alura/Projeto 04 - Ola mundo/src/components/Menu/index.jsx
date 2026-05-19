import React from 'react'
import styles from './Menu.module.css'
import { Link, useLocation } from 'react-router-dom'
import MenuLink from '../MenuLink';

export default function Menu() {

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/" children="Início" />
        <MenuLink to="/sobremim" children="Sobre Mim" />
      </nav>
    </header>
  )
}
