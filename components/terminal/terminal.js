import styles from './terminal.module.css';
import {useState} from "react";

export default () => {

    const [chats, setChats] = useState([{question: 'Hello', answer: 'Yes'}]);

    const inputHandler = (key, value, that) => {
        if (key === 'Enter')
            setChats([...chats, {
                question: value,
                answer: Math.random()
            }])
    }

    return (
        <section className={styles['terminal-section']} onClick={() => document.getElementById('inputBox').focus()}>
            <div className={styles['terminal-header']}>
                <p className={styles['terminal-text']}>./chat.sh</p>
            </div>
            <div className={styles['terminal-main']}>
                <p>Hi, I am a chatbot powered by some sort of NLP. I will be talking to you on behalf of Ajit Singh. I
                    can
                    help you finding Ajit's Personal Projects, Skill, Certifications etc. So what you wanted to
                    know?</p>
                {chats.map((chat, i) => (<>
                    <p><span className={styles['prompt-text']}>$</span> {chat.question}</p>
                    <p key={i}>{chat.answer}</p>
                </>))}
                <p>
                    <span className={styles['prompt-text']}>$ </span>
                    <input id='inputBox' className={styles['input-box']}
                           onKeyUp={({key, target: {value}}) => inputHandler(key, value, this)}/>
                </p>
            </div>
        </section>
    );
}
