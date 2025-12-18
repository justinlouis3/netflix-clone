'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { logout } from '@/lib/firebase'

const Navbar = () => {
  const navRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current?.classList.add('bg-[#141414]')
        navRef.current?.classList.remove('bg-gradient-to-b')
      } else {
        navRef.current?.classList.remove('bg-[#141414]')
        navRef.current?.classList.add('bg-gradient-to-b')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      ref={navRef} 
      className="w-full px-[6%] py-5 flex justify-between fixed top-0 text-sm text-[#e5e5e5] bg-gradient-to-b from-black/70 to-transparent z-10 transition-colors duration-300"
    >
      <div className="flex items-center gap-12">
        <Image src="/assets/logo.png" alt="Netflix" width={90} height={30} className="w-[90px]" />
        <ul className="hidden md:flex list-none gap-5">
          <li className="cursor-pointer hover:text-white">Home</li>
          <li className="cursor-pointer hover:text-white">TV Shows</li>
          <li className="cursor-pointer hover:text-white">Movies</li>
          <li className="cursor-pointer hover:text-white">New & Popular</li>
          <li className="cursor-pointer hover:text-white">My List</li>
          <li className="cursor-pointer hover:text-white">Browse by Languages</li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <Image src="/assets/search_icon.svg" alt="Search" width={20} height={20} className="cursor-pointer" />
        <p className="hidden sm:block">Children</p>
        <Image src="/assets/bell_icon.svg" alt="Notifications" width={20} height={20} className="cursor-pointer" />
        <div className="flex items-center gap-2.5 cursor-pointer relative group">
          <Image src="/assets/profile_img.png" alt="Profile" width={25} height={25} className="rounded" />
          <Image src="/assets/caret_icon.svg" alt="Menu" width={12} height={12} />
          <div className="hidden group-hover:block absolute top-full right-0 w-max bg-[#191919] px-5 py-4 rounded-sm underline z-10">
            <p className="text-[13px] cursor-pointer" onClick={() => logout()}>
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
