'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter, useParams } from 'next/navigation'

export default function Player() {
  const params = useParams()
  const router = useRouter()
  const id = params.id

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmVmZTkyZDYzNjU0NGI2Y2NlMmQxZWE0ZDI1MjRmYiIsIm5iZiI6MTc1NzYxMDMyNS4xNTEsInN1YiI6IjY4YzMwMTU1MTIyYzgzNmZjNzRlNzU3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FHnRN9jVshiuUjuXR5BM94ufe5Z2ucQKSRbaitoFGYQ'
    }
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err))
  }, [id])

  return (
    <div className="h-screen flex flex-col items-center justify-center p-[2%]">
      <Image 
        src="/assets/back_arrow_icon.png" 
        alt="Back" 
        width={50} 
        height={50}
        onClick={() => router.push('/')}
        className="absolute top-5 left-5 w-[50px] cursor-pointer z-10"
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        className="rounded"
      />
      <div className="flex gap-5 mt-5 text-sm">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}
