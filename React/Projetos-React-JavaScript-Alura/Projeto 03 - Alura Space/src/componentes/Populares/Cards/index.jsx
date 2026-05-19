import React from 'react'

export default function Cards({ itens, styles }) {
  return (
    <ul className={styles.populares__imagens}>
    {itens.map((itens) => {
        return (
            <li key={itens.id}>
                <img src={itens.path} alt={itens.path} />
            </li>
        )
    })}
</ul>
  )
}
