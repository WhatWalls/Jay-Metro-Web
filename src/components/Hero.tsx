import React, { useRef, useEffect, useContext, useState} from 'react'
import { RiDiscordLine } from 'react-icons/ri'
import { FiArrowDownCircle } from 'react-icons/fi'
import { BsSpotify } from 'react-icons/bs'
import { SiApplemusic } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { useRefContext } from '../context/RefContext';
import Discord from '../components/Discord'
import { MdNavigateNext } from 'react-icons/md'

//@ts-ignore
const scrollToDiv = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });


const Hero = () => {
  //@ts-ignore
  const { heroRef } = useRefContext()

  //@ts-ignore
  const [ref, setRef] = useState();

  window.addEventListener('scroll', function() {
    const downArrow = document.querySelector('.down-arrow');

    if (this.scrollY >= 300) downArrow?.classList.add('hide-down-arrow');
    else downArrow?.classList.remove('hide-down-arrow')
  })

  useEffect(() => {
    //@ts-ignore
    setRef(heroRef);
  }, [heroRef]);

  const isScroll = () => scrollToDiv(ref);

  console.log(ref)
  return (
    <div className='text-white h-[calc(100dvh)]'>

      <div className='max-w-[800px] mt-[-126px] text-center flex flex-col justify-center w-fit h-[calc(100dvh)]  mx-auto'>
        <p className='text-white font-bold text-2xl'>DO YOU LIKE GOOD MUSIC...</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Listen to <br></br><span className='text-primary drop-shadow-glow'>JAY METRO</span></h1>

          <div className="flex justify-center mt-3 space-x-10">
              <a href='https://open.spotify.com/artist/3jkrQmA97PXfpwQtL40zNg?si=HPxZMJl9R6qPb_-cr3hvzA
' rel="noopener noreferrer" target="_blank">
                  <button className="flex items-center justify-center gap-3 btn w-[200px] font-bold bg-[#1DB954] text-white rounded-lg shadow-lg mt-10 text-2xl ">
                    <BsSpotify size={30}/>
                    Spotify
                  </button>
              </a>
              <a href='https://music.apple.com/us/artist/jay-metro/1534592156
' rel="noopener noreferrer" target="_blank" >
                <button className="flex font-medium items-center justify-center gap-2 btn w-[225px] bg-white text-fuchsia-300 rounded-lg shadow-lg mt-10 text-2xl  ">
                <SiApplemusic size={30}/>
                  Apple Music
                  </button>
              </a>
          </div>
        </div>
        {/* @ts-ignore */}
        <button className='flex mt-[-70px] text-white mx-auto hover:drop-shadow-glow duration-300 down-arrow' onClick={isScroll}>
          <FiArrowDownCircle size={40} className='animate-bounce'/>
        </button>
        

    </div>
  )
}

export default Hero
