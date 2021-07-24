import Head from 'next/head'
import Terminal from '../components/terminal';
import ProjectCard from '../components/project-card';
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <nav className={styles.navbar}>
                <img src="/logo.svg" alt="Ajit Singh logo" className={styles.logo}/>
            </nav>
            <div id="first-container" className={styles['first-container']}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main className={styles.main}>
                    <h1 className={styles.heading}>Hi, my name is Ajit.</h1>
                    <p className={styles.subtext}>Wanted to know more, <a href="#second-container">click here</a></p>
                </main>
            </div>
            <div id="second-container" className={styles['second-container']}>
                <section className={styles['chatbot-section']}>
                    <h2 className={styles['chatbot-heading']}>ask the chatbot.</h2>
                    <Terminal/>
                </section>
            </div>
            <div id="third-container" className={styles['third-container']}>
                <section className={styles['projects-section']}>
                <h2 className={styles['projects-section-heading']}>personal projects</h2>
                    <section className={styles['project-cards-section']}>
                        {[{
                            icon: '/logo.svg',
                            name: 'Sample Project',
                            description: 'The Retro App is an open source applicaiton developed by a bunch on enthusiatic developers (Bored Engineers) in order to provide a solution to online Retrospective Meetings. To use this application you can navigate to https://theretroapp.com',
                            weblink: 'https://theretroapp.com',
                            links: {
                                github: 'https://github.com/bored-engineers/the-retro-app'
                            }
                        }].map(ProjectCard)}
                    </section>
                </section>
            </div>

        </>
    )
}
