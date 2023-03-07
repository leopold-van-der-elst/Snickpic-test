import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Card from '../components/Card'

export default function Home() {


  interface MovieData {
    Title: string;
    Year: string;
    Poster: string;
  }


  const [text, setText] = useState("")
  const [moviesData, setMoviesData] = useState<MovieData[]>([])


  function handleSearch() {
    text &&
      fetch(`http://www.omdbapi.com/?apikey=d37dede0&s=${text}&type=movie&page=1&limit=10`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setMoviesData(data.Search)
        })
        .catch(err => console.log(err));
  }


  const movies = moviesData && moviesData.map((e, i) => {
    console.log(e)
    return <Card key={i} title={e.Title} year={e.Year} poster={e.Poster} />
  })

  return (
    <div className={styles.container}>
      <div>
        <input value={text} type="text" placeholder="Search for a movie" onChange={(e) => setText(e.target.value)} />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      {movies}
    </div>
  )
}
