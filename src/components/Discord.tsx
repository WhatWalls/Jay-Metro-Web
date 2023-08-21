import React, {useContext} from 'react';
import { useRefContext } from '../context/RefContext';
import InfoGraphic from '../images/dashboard.png'
import Logo from '../images/logo.png'
import Chillin from '../images/chillin.png'
import { Link } from 'react-router-dom';
import { PiSoundcloudLogoFill } from 'react-icons/pi'
import { MdNavigateNext } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs'

const Discord = () => {
  //@ts-ignore
  const { discRef } = useRefContext()

  return (
    //@ts-ignore
    <div className='bg-tertiary p-5 my-10 h-[calc(100dvh)]' ref={discRef}>
      {/* @ts-ignore */}
      <div className='p-10 mx-20 mt-10 gap-16 md:mr-20 md:mt-0 flex flex-col-reverse items-center md:flex-row-reverse'>
        <div className='md:ml-10 text-center md:mt-[100px]'>
        <p className='text-primary text-1xl font-bold'>JAYMETRO.COM</p>
        <h1 className='md:text-5xl sm:tesxt-3xl text-2xl font-bold py-2 text-white'>Support Metro</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-3xl text-sm font-bold md:pl-4 pl-2 text-primary'>
            All Music Platforms
          </p>
        </div>

        <p className='text-white my-5 text-xl'>
          Jay Metro is a soul, sample producer from New York City. Find more Jay Metro content and updates on socials.
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-3 items-center gap-5">
              <a href='https://www.youtube.com/channel/UC-nnKjUvYAHWzE4m_2R4N0g
' rel="noopener noreferrer" target="_blank">
                  <button className="flex items-center justify-center md:text-2xl gap-2 btn w-[200px] font-bold bg-white text-black rounded-lg shadow-lg md:mt-10 text-1xl ">
                    <BsYoutube size={30} className='text-red-600 mt-1'/>
                    YouTube
                  </button>
              </a>
              <a href='https://soundcloud.com/user-409842486-509252939
' rel="noopener noreferrer" target="_blank">
                  <button className="flex items-center justify-center md:text-2xl gap-3 btn w-[200px] font-bold bg-white text-orange-400 rounded-lg shadow-lg md:mt-10 text-1xl ">
                    <PiSoundcloudLogoFill size={30} className='mt-1 scale-[3]'/>
                    SoundCloud
                  </button>
              </a>
          </div>
        
        </div>
        <img src={Logo} alt="" className="mx-auto w-full md:w3/5 max-h-[700px] lg:w-[25%] md:mt-20 mb-10 object-contain" />
      </div>
    </div>
  )
}

export default Discord
