import Link from 'next/link'
import React from 'react'
import SocialLinks from './SocialLinks'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='mb-5'>
      <nav className='flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4'>
        <div className='hidden sm:block'><SocialLinks /></div>
        <div className='flex items-center justify-between gap-10 '>
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
      <div className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
        <div className='basis-2/3 md:mt-3'>
           <h1 className='text-3xl font-bold md:text-5xl'>BLOG OF THE FUTURE</h1>
           <p className='mt-3 text-sm'>Join us on this thrilling expedition as we unravel the synergies between Artificial Intelligence and Web3, paving the way for a smarter, decentralized future.</p>
        </div>
        <div className=' basis-full relative w-auto h-32'>
        <Image fill alt="Ad image" src="/assets/ad-1.jpg" style={{objectFit : "cover"}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      </div>
      <hr className='border-1 mx-10' />
    </header>
  )
}

export default Navbar