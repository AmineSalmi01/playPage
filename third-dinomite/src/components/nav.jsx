import React, { useState } from 'react';
import logo from '../images/logo.png';
import user from '../images/user.png'
import Button from './button';

function Nav() {
    const [open, setOpen] = useState(false);
    let Links = [
        {name:'HOME', Link:'/'},
        {name:'ABOUT', Link:'/'},
        {name:'HOW TO', Link:'/'},
        {name:'CONTACT', Link:'/'},
    ]
  return (
    <div className='shadow-md w-full top-0 left-0'>
        <div className='md:flex items-center justify-between bg-[#60B49C] py-4 md:px-3'>
            <div>
                <img className='w-20 cursor-pointer' src={logo}/>
            </div>
            <div onClick={()=>{setOpen(!open)}} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
             <ion-icon name={open ? 'close': 'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12
             md:static absolute  bg-[#60B49C] md:z-auto z-[-1]
              left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
              duration-500 ease-in ${open ? 'top-20':'top-[-490px]'} md:opacity-100`}>
                {
                    Links.map((link)=>( 
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href={link.Link} className='hover:text-[#FFB951] duration-500 text-white'>{link.name}</a>
                        </li>
                     ))
                }
                <Button>
                     Buy a Pass
                </Button>
                <Button>
                      Play Games
                </Button>
            </ul>
            <div className='flex'>
                <img src={user} className='w-9'/>
                <div className='text-white'>
                  <ion-icon name="log-in-outline"></ion-icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav
