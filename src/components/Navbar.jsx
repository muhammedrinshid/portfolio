import React from 'react'
import { logo } from '../assets/images'
import { menuLinks } from '../assets/constants'

const Navbar = () => {
  return (
    <nav className='flex flex-row py-4 px-8 bg-secondary bg-opacity-10  rounded-xl justify-between text-white sticky top-6 max-sm:hidden '>  
      <img src={logo} alt="log image" width={23}  />

      <ul className='flex text-opacity-50 text-white gap-4 text-lg font-Raleway justify-between items-center'>
        {
          menuLinks.map((menu)=>(
            <li className='hover:text-secondary transition duration-500 cursor-pointer ease-in-out hover:font-bold text-base font-light' ><a href={menu.id} >{menu.name}</a></li>
          ))
        }
      </ul>
      
    </nav>
  )
}

export default Navbar
