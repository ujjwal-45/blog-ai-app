import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Image from 'next/image'
import Ad2 from 'public/assets/ad-2.png'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
           <h4 className='font-bold text-xs bg-wh-900 py-3 px-5 text-center text-wh-50'>
                Subscribe and Follow
            </h4>
            <div className='my-5 mx-5'>
            <SocialLinks isDark />
            </div>
            <Subscribe />
            <div ><Image className='hidden md:block my-8 w-full' alt="Ad image-2" src={Ad2} width={500} height={1000}  /></div>
            <h4 className='font-bold text-xs text-center bg-wh-900 py-2 px-5 text-wh-50'>
                About the Blog
            </h4>   
            <div className='bg-wh-50 py-2 flex justify-center'>profile image</div>

            <h4 className='font-bold text-xs text-center  py-2 px-5 text-wh-900'>
               albert einstien
            </h4> 
            <p className='text-center text-wh-500 text-sm'>
                some text
            </p>
           
    </section>
        
  )
}

export default Sidebar