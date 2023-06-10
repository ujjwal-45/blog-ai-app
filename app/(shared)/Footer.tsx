import React from 'react'


const Footer = () => {
  return (
   <footer className='bg-wh-900 text-wh-10 py-10 px-10'>
    <div className='justify-between mx-auto sm:flex gap-16'>
        {/* First Column */}
        <div className='basis-1/2 mt-16 sm:mt-0'>
            <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
            <hr className='border-1' />
            <p className='my-5'>Whether you&apos;re an AI expert, blockchain developer, or simply curious about the future of technology, our blog provides valuable insights and knowledge to inspire, inform, and spark your imagination</p>
            <p>© 2023 Blog of the Future. All rights reserved.</p>
        </div>

        {/* Second Column */}
        <div className='basis-1/4 mt-16 sm:mt-0'>
            <h4 className='font-bold'>LINKS</h4>
            <hr className='border-1 ' />
            <nav>
    <ul className='my-5'>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/terms">Terms of Service</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
    </ul>
  </nav>
        </div>
    </div>
   </footer>
  )
}

export default Footer