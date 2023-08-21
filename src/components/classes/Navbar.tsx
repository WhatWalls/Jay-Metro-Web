import React, { MouseEventHandler, Component, Fragment } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import {FiChevronDown} from 'react-icons/fi'
import INav from '../interfaces/IMobileNav'
import { Menu, Transition } from '@headlessui/react'

interface IProps {
}

export default class Navbar extends Component<IProps, INav> {

  constructor(props: IProps) {
    super(props)

    this.state = {
      mobile: false
    }

    this.handleNav = this.handleNav.bind(this);
    this.MobileNav = this.MobileNav.bind(this)
  }

  render() {
    //@ts-ignore
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ');
    }

    return (
      <div className="flex justify-between items-center">
        <Link to="/" className="flex justify-center gap-2 w-36 md:w-52 p-4">
          <img src={logo} alt="" className="scale-150 mb-5 cursor-pointer  w-16" />
          <h1 className="w-full h-24 py-2 justify-center text-3xl font-bold text-primary tracking-wider text hover:drop-shadow-glow">
            JAY
            METRO
          </h1>
        </Link>
  
        <div className="my-auto ml-auto md:inline">
          <ul className="hidden md:flex gap-6 mr-6 text-2xl font-bold">
            <li className="my-auto hover:rotate-6 hover:text-3xl hover:drop-shadow-glow text-white duration-150">
              <Link to="/links">Links</Link>
            </li>
            <li className="my-auto fill text-white hover:rotate-6 hover:text-3xl hover:drop-shadow-glow duration-150">
              <Link to="/merch">Merch</Link>
            </li>
            <li className="my-auto fill text-white hover:rotate-6 hover:text-3xl hover:drop-shadow-glow duration-150">
              <Link to="/blog">Metro Blog</Link>
            </li>
            <Link to="/signin">
                <li className="my-auto cursor-pointer btn bg-primary text-white mt-1 hover:drop-shadow-glow">
                  Download Beats
                </li>
              </Link>
          </ul>
        </div>
  
        <this.MobileNav />
  
      </div>
    )

  }

  handleNav() {
    this.setState((prevState, props) => ({
      mobile: !prevState.mobile
    }))
  }

  MobileNav() {
    //@ts-ignore
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ');
    }

    return (
      <div>
        <div onClick={this.handleNav} className='block cursor-pointer p-4 md:hidden'>
          {!this.state.mobile ? <AiOutlineClose className='text-white' size={30}/> : <AiOutlineMenu className='text-white' size={30}/>}
        </div>
        
        <div className={!this.state.mobile ? 'md:hidden fixed bg-tertiary left-0 top-0 w-[60%] h-full rounded-lg border-r border-r-gray-900 max-w-[1240px] ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
          <Link to="/" className="flex gap-2 w-36 md:w-52 p-4">
          <img src={logo} alt="" className="cursor-pointer my-auto w-16 p-2" />
          <h1 className="w-full h-24 py-2 justify-center text-3xl font-bold text-primary tracking-wider text">
              GLOW
              PROJECT
            </h1>
          </Link>
          
          <ul className='uppercase p-4'>
            <li className="text-white p-4 border-b border-gray-600 hover:border-primary duration-300">
              <Link to="/links">Links</Link>
            </li>
            <li className="text-white p-4 border-b border-gray-600 hover:border-primary duration-300">
              <Link to="/merch">Merch</Link>
            </li>
            <li className="text-white p-4 border-b border-gray-600 hover:border-primary duration-300">
              <Link to="/opportunities">Metro Blog</Link>
            </li>
                   
          <Link to="/signin">
                <li className="mt-5 text-center cursor-pointer btn bg-primary text-white shadow-lg">
                  Download Beats
                </li>
          </Link>
          </ul>
          
        </div>
      </div>
    )
  }

  
}
