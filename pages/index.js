import Head from 'next/head'
import Terminal from '../components/terminal';
import ProjectCard from '../components/project-card';
import styles from '../styles/Home.module.css'
import {getAllProjects} from "./api/projects-service";
// import SkillsChart from "../components/skills-chart/skills-chart";
import ContactForm from "../components/contact-form/contact-form";

export default function Home() {
    return (
        <>
            <nav className={styles.navbar}>
                <img src='images/logo.svg' alt="Ajit Singh logo" className={styles.logo}/>
            </nav>
            <div id="main" className={styles['first-container']}>
                <Head>
                    <title>Ajit Singh</title>
                    <link rel="icon" href="images/favicon.ico"/>
                    {/* <base href={`/${packageJson.name}/`}/> */}
                </Head>
                <main className={styles.main}>
                    <h1 className={styles.heading}>Hi, my name is Ajit.</h1>
                    <p className={styles.subtext}>Wanted to know more, <a href="#chatbot">click here</a></p>
                </main>
                <img className={styles.waves} src='images/waves2.svg' alt='waves-border-image'/>
            </div>
            <div id="chatbot" className={styles['second-container']}>
                <section className={styles['chatbot-section']}>
                    <h2 className={styles['chatbot-heading']}>ask the chatbot.</h2>
                    <Terminal/>
                </section>
            </div>
            <div id="project-list" className={styles['third-container']}>
                <section className={styles['projects-section']}>
                    <h2 className={styles['section-heading']}>personal projects</h2>
                    <section className={styles['project-cards-section']}>
                        {getAllProjects().map(ProjectCard)}
                    </section>
                </section>
            </div>
            {/* <div id="skills" className={styles['fourth-container']}>
                <section className={styles['skills-section']}>
                    <h2 className={styles['section-heading']}>technical skills</h2>
                    <SkillsChart/>
                </section>
            </div> */}
            <div id="contact" className={styles['fifth-container']}>
                <section className={styles['contact-section']}>
                    <ContactForm/>
                </section>
            </div>
        </>
    )
}
