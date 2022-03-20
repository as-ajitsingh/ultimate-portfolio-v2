import styles from './blog-card.module.css';

export default function ({ id, title, link, enclosures }) {
    return (
        <a href={link} target='_blank' className={styles['card-link']}>
            <div className={styles['project-card']} style={{
                backgroundImage: `url(${enclosures[0].url})`,
                // backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover  ',
                width: '250px',
                height: '250px'
            }}>
                <header>{title}</header>
            </div>
        </a>
    );
}
