'use client'

import Image from 'next/image'

const Footer = () => {
  return (
    <div className="max-w-[1000px] mx-auto py-12 px-[6%] sm:px-[4%]">
      <div className="flex gap-3 mb-6">
        <Image src="/assets/facebook_icon.png" alt="Facebook" width={30} height={30} className="cursor-pointer" />
        <Image src="/assets/instagram_icon.png" alt="Instagram" width={30} height={30} className="cursor-pointer" />
        <Image src="/assets/twitter_icon.png" alt="Twitter" width={30} height={30} className="cursor-pointer" />
        <Image src="/assets/youtube_icon.png" alt="YouTube" width={30} height={30} className="cursor-pointer" />
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 text-sm text-gray-400">
        <li className="cursor-pointer hover:underline">Audio Description</li>
        <li className="cursor-pointer hover:underline">Help Center</li>
        <li className="cursor-pointer hover:underline">Gift Cards</li>
        <li className="cursor-pointer hover:underline">Media Center</li>
        <li className="cursor-pointer hover:underline">Investor Relations</li>
        <li className="cursor-pointer hover:underline">Jobs</li>
        <li className="cursor-pointer hover:underline">Terms of Use</li>
        <li className="cursor-pointer hover:underline">Privacy</li>
        <li className="cursor-pointer hover:underline">Legal Notices</li>
        <li className="cursor-pointer hover:underline">Cookie Preferences</li>
        <li className="cursor-pointer hover:underline">Corporate Information</li>
        <li className="cursor-pointer hover:underline">Contact Us</li>
      </ul>
      <p className="text-sm text-gray-500">© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
