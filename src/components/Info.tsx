import React, {useContext, useEffect, useState} from 'react';
import { useRefContext } from '../context/RefContext'
import Logo from '../images/logo.png'
import InfoGraphic from '../images/info-graphic.png'
import { Link } from 'react-router-dom';
import { LuHelpCircle } from 'react-icons/lu'
import { SiApplemusic } from 'react-icons/si'
import { BsSpotify, BsMusicNote } from 'react-icons/bs';

//@ts-ignore
const scrollToDiv = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

const Info = () => {
  //@ts-ignore
  const { heroRef, discRef } = useRefContext()

  //@ts-ignore
  const [ref, setRef] = useState();

  useEffect(() => {
    //@ts-ignore
    setRef(discRef);
    console.log(discRef)
  }, [discRef]);

  const isScroll = () => scrollToDiv(ref);

  return (
  
  <div className='bg-contrast w-full h-fit md:h-screen' ref={heroRef}>
    {/* @ts-ignore */}
    <div className='flex flex-col justify-center items-center'>
    <h1 className='md:text-5xl text-3xl  text-center p-8 md:p-14 '>Jay  <span className='text-primary drop-shadow-xl'>METRO</span>  Beats</h1>
      <button className="flex font-medium items-center justify-center gap-2 btn w-[225px] bg-primary text-white rounded-lg shadow-lg mt-10 text-2xl  ">
          <BsMusicNote size={30}/>
              More Metro
      </button>
    </div>
    

    <div className='justify-center items-center w-full  flex sm:flex-col md:flex-row md:gap-14'>
      <div className='bg-primary  sm:mx-auto sm:h-[400px]  md:h-[600px] my-20 w-[400px] rounded-xl shadow-xl flex flex-col'>
          <p className=' font-semibold text-xs mt-2 md:text-md  text-gray-500 text-center md:mt-5'>ALBUM DLX</p>
            <h1 className=' text-white justify-center text-3xl font-bold mt-1 text-center mx-16 '>
              NO ESCXPE 2
            </h1>
            <p className='sm:invisible md:visible font-semibold text-md text-white text-center'>Released: 8/4/23</p>
        
          <img src='https://media.discordapp.net/attachments/904850052177072169/1140514125756256276/58EBA3AD-8940-43F3-A623-28FEE7CD1BA7.png?width=671&height=671' className='sm:scale-50 sm:mt-[-100px] md:mt-0 md:scale-75 bg-white p-7 rounded-xl drop-shadow-lg' alt='/' ></img>
          
          <div className="flex justify-center space-x-10 py-4">
              <a href='https://open.spotify.com/artist/3jkrQmA97PXfpwQtL40zNg?si=HPxZMJl9R6qPb_-cr3hvzA
' rel="noopener noreferrer" target="_blank">
                  <button className="flex items-center mt-[-90px] md:mt-0 justify-center gap-3 btn font-bold bg-[#1DB954] text-white rounded-lg shadow-lg  text-2xl ">
                    <BsSpotify size={40}/>
                  </button>
              </a>
              <a href='https://music.apple.com/us/artist/jay-metro/1534592156
' rel="noopener noreferrer" target="_blank">
                <button className="flex font-medium mt-[-90px] md:mt-0 items-center justify-center gap-2 btn bg-white text-fuchsia-300 rounded-lg shadow-lg  text-2xl  " >
                <SiApplemusic size={40}/>
                  </button>
              </a>
          </div>
      </div>

      <div className='bg-primary  sm:mx-auto sm:h-[400px]  md:h-[600px] my-20 w-[400px] rounded-xl shadow-xl flex flex-col'>
          <p className=' font-semibold text-xs mt-2 md:text-md  text-gray-500 text-center md:mt-5'>SINGLE</p>
            <h1 className=' text-white justify-center text-3xl font-bold mt-1 text-center mx-16 '>
              Spafe Travels
            </h1>
            <p className='invisible md:visible font-semibold text-md text-white text-center'>Released: 8/4/23</p>
        
          <img src='https://media.discordapp.net/attachments/904850052177072169/1140514292093943961/26B81C67-E433-4157-AE27-64F4949D225D.png?width=671&height=671' className='scale-50 mt-[-100px] md:mt-0 md:scale-75 bg-white p-7 rounded-xl drop-shadow-lg' alt='/' ></img>
          
          <div className="flex justify-center space-x-10 py-4">
          <a href='https://open.spotify.com/artist/3jkrQmA97PXfpwQtL40zNg?si=HPxZMJl9R6qPb_-cr3hvzA
' rel="noopener noreferrer" target="_blank">
                  <button className="flex items-center mt-[-90px] md:mt-0 justify-center gap-3 btn font-bold bg-[#1DB954] text-white rounded-lg shadow-lg  text-2xl ">
                    <BsSpotify size={40}/>
                  </button>
              </a>
              <a href='https://music.apple.com/us/artist/jay-metro/1534592156
' rel="noopener noreferrer" target="_blank">
                <button className="flex font-medium mt-[-90px] md:mt-0 items-center justify-center gap-2 btn bg-white text-fuchsia-300 rounded-lg shadow-lg  text-2xl  " >
                <SiApplemusic size={40}/>
                  </button>
              </a>
          </div>
      </div>

      <div className='bg-primary  mx-auto h-[400px]  md:h-[600px] my-20 w-[400px] rounded-xl drop-shadow-xl flex flex-col'>
          <p className=' font-semibold text-xs mt-2 md:text-md  text-gray-500 text-center md:mt-5'>SINGLE</p>
            <h1 className=' text-white justify-center text-3xl font-bold mt-1 text-center mx-16 '>
              NO ESCXPE
            </h1>
            <p className='invisible md:visible font-semibold text-md text-white text-center'>Released: 8/4/23</p>
        
          <img src='https://media.discordapp.net/attachments/904850052177072169/1140514543185952819/IMG_1236.png?width=686&height=671' className='scale-50 mt-[-100px] md:mt-0 md:scale-75 bg-white p-7 rounded-xl drop-shadow-lg' alt='/' ></img>
          
          <div className="flex justify-center space-x-10 py-4">
          <a href='https://open.spotify.com/artist/3jkrQmA97PXfpwQtL40zNg?si=HPxZMJl9R6qPb_-cr3hvzA
' rel="noopener noreferrer" target="_blank">
                  <button className="flex items-center mt-[-90px] md:mt-0 justify-center gap-3 btn font-bold bg-[#1DB954] text-white rounded-lg shadow-lg  text-2xl ">
                    <BsSpotify size={40}/>
                  </button>
              </a>
              <a href='https://music.apple.com/us/artist/jay-metro/1534592156
' rel="noopener noreferrer" target="_blank">
                <button className="flex font-medium mt-[-90px] md:mt-0 items-center justify-center gap-2 btn bg-white text-fuchsia-300 rounded-lg shadow-lg  text-2xl  " >
                <SiApplemusic size={40}/>
                  </button>
              </a>
          </div>
      </div>

      <div className='bg-primary  mx-auto h-[400px]  md:h-[600px] my-20 w-[400px] rounded-xl drop-shadow-xl flex flex-col'>
          <p className=' font-semibold text-xs mt-2 md:text-md  text-gray-500 text-center md:mt-5'>ALBUM DLX</p>
            <h1 className=' text-white justify-center text-3xl font-bold mt-1 text-center mx-16 '>
              JAY METRO CUTZ
            </h1>
            <p className='invisible md:visible font-semibold text-md text-white text-center'>Released: 8/4/23</p>
        
          <img src='https://media.discordapp.net/attachments/904850052177072169/1140514145867935754/IMG_0812.png?width=670&height=671' className='scale-50 mt-[-100px] md:mt-0 md:scale-75 bg-white p-7 rounded-xl drop-shadow-lg' alt='/' ></img>
          
          <div className="flex justify-center space-x-10 py-4">
          <a href='https://open.spotify.com/artist/3jkrQmA97PXfpwQtL40zNg?si=HPxZMJl9R6qPb_-cr3hvzA
' rel="noopener noreferrer" target="_blank">
                  <button className="flex items-center mt-[-90px] md:mt-0 justify-center gap-3 btn font-bold bg-[#1DB954] text-white rounded-lg shadow-lg  text-2xl ">
                    <BsSpotify size={40}/>
                  </button>
              </a>
              <a href='https://music.apple.com/us/artist/jay-metro/1534592156
' rel="noopener noreferrer" target="_blank">
                <button className="flex font-medium mt-[-90px] md:mt-0 items-center justify-center gap-2 btn bg-white text-fuchsia-300 rounded-lg shadow-lg  text-2xl  " >
                <SiApplemusic size={40}/>
                  </button>
              </a>
          </div>
      </div>
    </div>
  </div>
  )
}

{/* <p className='text-primary font-bold'>GLOW BOT DASHBOARD</p>
<h1 className='md:text-4xl sm:tesxt-3xl text-2xl font-bold py-2'>Increase Online Wellness</h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores veniam illum esse deleniti alias fugiat. Minus ad facere sit at quod recusandae necessitatibus magni, explicabo nesciunt natus itaque eius?
</p>
<button className="flex font-medium items-center justify-center gap-4  btn w-[225px] bg-primary text-white rounded-lg shadow-lg mt-10 text-2xl mx-auto md:mx-0">
  Get Started
  <BsArrowRightShort size={30} className='mt-1'/>
</button> */}

export default Info
