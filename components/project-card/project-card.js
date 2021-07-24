import styles from './project-card.module.css';

const getLink = (iconType, url) => {
    switch (iconType){
        case 'github': return <a key={url} href={url}><img src='/github.svg'/></a>;
    }
}

export default function ({icon, name, description, weblink, links}) {
    return (
        <div key={name} className={styles['project-card']}>
            <img src={icon}/>
            <heading>{name}</heading>
            <p>{description}</p>
            {Object.entries(links).map(([key,value]) => getLink(key, value))}
            <a href={weblink}><img src='/weblink.svg'/></a>
        </div>
    );
}