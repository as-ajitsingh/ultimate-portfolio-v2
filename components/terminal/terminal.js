import styles from './terminal.module.css';
import {useEffect, useRef, useState} from "react";
import {sendMessage} from "../../pages/api/chatbot-service";


export default () => {
    const elementRef = useRef();
    const [chats, setChats] = useState([]);
    const [currentInput, setCurrentInput] = useState('');

    useEffect(() => {
        if (chats.length !== 0)
            elementRef.current.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})
    }, [chats]);

    const inputHandler = async (key, value) => {
        if (key === 'Enter' && value) {
            const response = await sendMessage(value);
            setChats([...chats, {question: value.trim(), answer: response.text}])
            setCurrentInput('');
        }
    }


    return (
        <section className={styles['terminal-section']} onClick={() => document.getElementById('inputBox').focus()}>
            <div className={styles['terminal-header']}>
                <p className={styles['terminal-text']}>./chat.sh</p>
            </div>
            <div id='terminalMain' className={styles['terminal-main']}>
                <p>Hi, I am a chatbot powered by some sort of NLP. I will be talking to you on behalf of Ajit Singh. I
                    can help you finding Ajit's Personal Projects, Skill, Certifications etc. So what you wanted to
                    know?</p>
                {chats.map((chat, i) => (<>
                    <p><span className={styles['prompt-text']}>$</span> {chat.question}</p>
                    <p key={i}>{chat.answer}</p>
                </>))}
                <p>
                    <span className={styles['prompt-text']}>$ </span>
                    <input id='inputBox'
                           className={styles['input-box']}
                           onKeyUp={({key, target: {value}}) => inputHandler(key, value)}
                           ref={elementRef}
                           value={currentInput}
                           onChange={({target: {value}}) => setCurrentInput(value)}
                    />
                </p>
            </div>
        </section>
    );
}
