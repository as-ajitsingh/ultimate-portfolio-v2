import styles from './project-card.module.css';

const getLink = (iconType, url) => {
    switch (iconType) {
        case 'github':
            return <a className={styles['social-link']} key={url} href={url} target='_blank'>
                <img className={styles['github-image']} src='images/github-icon.svg'/>
            </a>;
        case 'video':
            return <a className={styles['social-link']} key={url} href={url} target='_blank'>
                <img className={styles['video-image']} src='images/video-icon.svg'/>
            </a>;
        case 'website':
            return <a className={styles['social-link']} key={url} href={url} target='_blank'>
                <img className={styles['article-image']} src='images/website-icon.svg'/>
            </a>;
        case 'article':
            return <a className={styles['social-link']} key={url} href={url} target='_blank'>
                <img className={styles['website-image']} src='images/article-icon.svg'/>
            </a>;
    }
}

export default function ({icon, name, description, weblink, links}) {
    return (
        <div key={name} className={styles['project-card']}>
            <img className={styles['project-icon']} src={icon} alt="project icon"/>
            <header>{name}</header>
            <p>{description}</p>
            <div
                className={styles['social-links']}> {Object.entries(links).map(([key, value]) => getLink(key, value))}</div>
        </div>
    );
}
