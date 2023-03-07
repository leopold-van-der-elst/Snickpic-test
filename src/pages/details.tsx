import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function details({ film }) {
    const parsedFilm = JSON.parse(film);
    const title = parsedFilm.title

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=d37dede0&t=${title}&type=movie&page=1&limit=10`)
            .then(response => response.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h2>{parsedFilm.title}</h2>
            <p>{parsedFilm.year}</p>

        </div>
    )
}

export async function getServerSideProps({ query }) {
    return {
        props: {
            film: query.film
        }
    }
}

export default details;
