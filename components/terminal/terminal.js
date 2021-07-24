import styles from './terminal.module.css';

export default function (){
    return(
        <section className={styles['terminal-section']}>
            <div className={styles['terminal-header']}>
                <p className={styles['terminal-text']}>./chat.sh</p>
            </div>
            <div className={styles['terminal-main']}>
                <p>Hi, I am a chatbot powered by some sort of NLP. I will be talking to you on behalf of Ajit Singh. I can help you finding Ajit's Personal Projects, Skill, Certifications etc. So what you wanted to know?</p>
                <p>$ who are you?</p>
                <p>I am a chatbot and I can give information about Ajit Singh.</p>
                <p>$ tell me about his skills</p>
                <p>Ajit has 5+ years of experience, let me show it to you...</p>
                <p>$</p>
            </div>
        </section>
    )
}