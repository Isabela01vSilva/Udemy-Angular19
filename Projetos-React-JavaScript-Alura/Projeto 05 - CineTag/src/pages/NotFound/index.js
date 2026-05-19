import styles from './NotFound.module.css'

export default function NotFound() {
    return (
        <>
            <section className={styles.container}>
                <h1>Ops...</h1>
                <p>A Página que você procura não foi encontrada</p>
            </section>
        </>
    )
}