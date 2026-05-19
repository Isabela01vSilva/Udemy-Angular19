import React from 'react'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import styles from './Rodape.module.scss'

export default function Rodape() { 
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="https://www.facebook.com/AluraCursosOnline/">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://twitter.com/aluraonline?lang=en">
          <img src={twitter} alt="twiiter" />
        </a>
        <a href="https://www.instagram.com/aluraonline/?hl=en">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
      <p>Desenvolvido por Alura - Aluna Isabela - 2023</p>
    </footer>
  )
}
