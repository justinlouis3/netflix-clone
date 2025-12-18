'use client'

import { useState } from 'react'
import Image from 'next/image'
import { login, signup } from '@/lib/firebase'

export default function Login() {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault()
    setLoading(true)
    if (signState === "Sign In") {
      await login(email, password)
    } else {
      await signup(name, email, password)
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Image src="/assets/netflix_spinner.gif" alt="Loading" width={100} height={100} />
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/hero_banner.jpg')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <Image 
        src="/assets/logo.png" 
        alt="Netflix" 
        width={150} 
        height={50}
        className="absolute top-5 left-[6%] w-[150px] z-10"
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[450px] bg-black/75 rounded px-16 py-12 mx-5">
          <h1 className="text-3xl font-semibold mb-7">{signState}</h1>
          <form onSubmit={user_auth} className="flex flex-col gap-4">
            {signState === "Sign Up" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="w-full h-[50px] bg-[#333] border-0 outline-0 rounded px-5 text-white"
              />
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full h-[50px] bg-[#333] border-0 outline-0 rounded px-5 text-white"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full h-[50px] bg-[#333] border-0 outline-0 rounded px-5 text-white"
              required
            />
            <button 
              type="submit"
              className="w-full h-[50px] bg-[#e50914] text-white rounded font-semibold hover:bg-[#c40812] transition"
            >
              {signState}
            </button>
            <div className="flex justify-between items-center text-sm text-[#b3b3b3]">
              <div className="flex gap-2 items-center">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <p className="cursor-pointer hover:underline">Need Help?</p>
            </div>
          </form>
          <div className="mt-10 text-[#737373]">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{' '}
                <span
                  onClick={() => setSignState("Sign Up")}
                  className="text-white font-medium cursor-pointer hover:underline"
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have account?{' '}
                <span
                  onClick={() => setSignState("Sign In")}
                  className="text-white font-medium cursor-pointer hover:underline"
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
