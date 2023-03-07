import React from 'react';
import styles from '@/styles/Card.module.css';
import { useRouter } from 'next/router';

function Card(props) {
    const router = useRouter();

    const handleClick = () => {
        router.push({
            pathname: '/details',
            query: { film: JSON.stringify(props) }
        });
    }

    return (
        <div className={styles.cardContainer} onClick={handleClick}>
            {props.poster != "N/A" ? <img className={styles.poster} src={props.poster} alt="Affiche du film"></img> : null}
            <h2>{props.title}</h2>
            <p>{props.year}</p>
        </div>
    )
}

export default Card;
