import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <nav className={styles.navbar}>
                <img src="/logo.svg" alt="Ajit Singh logo" className={styles.logo}/>
            </nav>
            <div className={styles['first-container']}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main className={styles.main}>
                    <h1 className={styles.heading}>Hi, my name is Ajit</h1>
                    <p className={styles.subtext}>wanted to know more, <a href="#">click here</a></p>
                </main>
            </div>
            <div className={styles['first-container']}>
                <main className={styles.main}>
                    <h1 className={styles.heading}>Hi, my name is Ajit</h1>
                    <p className={styles.subtext}>wanted to know more, <a href="#">click here</a></p>
                </main>
            </div>
        </>
    )
}
