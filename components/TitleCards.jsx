'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmVmZTkyZDYzNjU0NGI2Y2NlMmQxZWE0ZDI1MjRmYiIsIm5iZiI6MTc1NzYxMDMyNS4xNTEsInN1YiI6IjY4YzMwMTU1MTIyYzgzNmZjNzRlNzU3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FHnRN9jVshiuUjuXR5BM94ufe5Z2ucQKSRbaitoFGYQ'
    }
  }

  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err))

    const cardsList = cardsRef.current
    cardsList?.addEventListener("wheel", handleWheel)
    return () => cardsList?.removeEventListener("wheel", handleWheel)
  }, [category])

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title ? title : "Popular on Netflix"}</h2>
      <div 
        ref={cardsRef} 
        className="flex gap-2.5 overflow-x-scroll scrollbar-hide"
      >
        {apiData.map((card, index) => (
          <Link 
            href={`/player/${card.id}`} 
            key={index}
            className="relative min-w-[240px] cursor-pointer transition-transform hover:scale-105"
          >
            <Image 
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title}
              width={240}
              height={135}
              className="rounded"
            />
            <p className="mt-1 text-sm">{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
