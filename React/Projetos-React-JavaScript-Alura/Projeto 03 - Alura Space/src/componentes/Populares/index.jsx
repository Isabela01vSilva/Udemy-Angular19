import React from 'react'
import fotosPopulares from './fotos-populares.json'
import styles from './Populares.module.scss'
import Cards from './Cards'

export default function Populares() {
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <Cards itens={fotosPopulares} styles={styles} />
            <button>Ver mais fotos</button>
        </aside>
    )
}
