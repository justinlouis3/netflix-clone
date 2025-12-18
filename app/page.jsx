'use client'

import { AuthProvider } from '@/lib/AuthContext'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import TitleCards from '@/components/TitleCards'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Navbar />
        <div className="relative">
          <Image 
            src="/assets/hero_banner.jpg" 
            alt="Hero Banner" 
            width={1920}
            height={1080}
            priority
            className="w-full object-cover"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 75%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 75%)'
            }}
          />
          <div className="absolute bottom-0 w-full pl-[6%] sm:pl-[4%]">
            <Image 
              src="/assets/hero_title.png" 
              alt="Hero Title" 
              width={420}
              height={150}
              className="w-[90%] max-w-[420px] mb-7 sm:mb-2.5 max-[500px]:hidden"
            />
            <p className="max-w-[700px] text-[17px] mb-5 sm:text-xs sm:mb-2.5">
              Discovering his ties to a secret ancient order, a young man living
              in modern Istanbul embarks on a quest to save the city from an
              immortal enemy.
            </p>
            <div className="flex gap-2.5 mb-12 sm:mb-7">
              <button className="border-0 px-5 py-2 inline-flex items-center gap-2.5 text-[15px] font-semibold bg-white text-black rounded hover:bg-white/75 transition max-[500px]:px-2.5 max-[500px]:py-1 max-[500px]:text-[10px] max-[500px]:gap-1.5">
                <Image src="/assets/play_icon.png" alt="Play" width={25} height={25} className="max-[500px]:w-[15px]" />
                Play
              </button>
              <button className="border-0 px-5 py-2 inline-flex items-center gap-2.5 text-[15px] font-semibold bg-[#6d6d6eb3] text-white rounded hover:bg-[#6d6d6e66] transition max-[500px]:px-2.5 max-[500px]:py-1 max-[500px]:text-[10px] max-[500px]:gap-1.5">
                <Image src="/assets/info_icon.png" alt="Info" width={25} height={25} className="max-[500px]:w-[15px]" />
                More Info
              </button>
            </div>
            <div className="hidden lg:block">
              <TitleCards />
            </div>
          </div>
        </div>
        <div className="pl-[6%] sm:pl-[4%] mt-8">
          <TitleCards title="Blockbuster Movies" category="top_rated" />
          <TitleCards title="Only on Netflix" category="popular" />
          <TitleCards title="Upcoming" category="upcoming" />
          <TitleCards title="Top Picks for You" category="now_playing" />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  )
}
