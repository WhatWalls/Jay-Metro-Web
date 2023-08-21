import React from "react";
import { Link } from "react-router-dom";
import { BsSpotify } from 'react-icons/bs'
import { SiApplemusic } from 'react-icons/si'
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="px-6 pt-6 pb-10  flex flex-col lg:flex-row bg-contrast">

        <div className="lg:my-8 mt-10 ">
        <h1 className="text-4xl font-bold text-black">Socials</h1>
        <ul className="mt-2 flex gap-2">
          <BsSpotify size={30} className="cursor-pointer hover:-rotate-45 duration-200 w-14 text-black"/>
          <SiApplemusic size={30} className="cursor-pointer hover:rotate-45 duration-200 w-14 text-black"  />
          <BsInstagram size={30} className="cursor-pointer hover:rotate-180  duration-200 text-black" />
        </ul>
      </div>

      <div className="mt-4 lg:my-8 lg:mx-16">
        <h1 className="text-4xl font-bold text-black ">
          Latest Jay Metro
        </h1>
        <form action="" className="flex flex-col">
          <input
            className="mt-6 w-4/5 text-2xl bg-black rounded-lg pl-4 py-2 text-white placeholder:text-white outline-none drop-shadow-lg"
            placeholder="Email Address"
            type="email"
            name="email"
            id="email"
          />
          <button className="mt-4 btn w-4/5 shadow-lg text-center bg-black">
            <span className="text-2xl w-4/5 text-white">Subscribe</span>
          </button>
        </form>
      </div>

      <div className="my-8 flex flex-col md:flex-row gap-10">
        <div className="mr-16">
          <h1 className="text-4xl font-bold text-black ">Navigation</h1>
          <ul>
            <Link to="/links">
              <li className="text-xl text-black cursor-pointer mt-2 hover:animate-pulse duration-300">
                Links
              </li>
            </Link>
            <Link to="/merch">
              <li className="text-xl text-black cursor-pointer mt-2 hover:animate-pulse duration-300">
                Merch
              </li>
            </Link>
            <Link to="/MetroBlog">
              <li className="text-xl text-black cursor-pointer mt-2 hover:animate-pulse duration-300">
                Metro Blog
              </li>
            </Link>
            
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;