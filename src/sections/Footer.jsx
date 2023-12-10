import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { FaCopy, FaCopyright, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='padding-x  bg-secondary bg-opacity-20 grid grid-cols-2 max-md:grid-cols-none max-md:grid-rows-2 max-md:gap-6 py-6'>
<div className='flex justify-start max-md:items-center items-center'>
  
  <p className='text-white text-opacity-50 max-md:text-center max-md:w-full text-base font-light'>Copyright <BiCopyright className='inline'/> Muhammed Rinshid Adhikarath · 2023</p>
  </div>      
  <div className='flex justify-center text-3xl gap-4 text-white text-opacity-50 '>
    <FaLinkedin  onClick={()=>{
      window.open("https://www.linkedin.com/in/muhammed-rinshid-adhikarathil","_blank")
    }} className='hover:text-white cursor-pointer'/>
    <FaGithub  onClick={()=>{
      window.open("https://github.com/muhammedrinshid","_blank")
    }} className='hover:text-white cursor-pointer'/>
  </div>
    </div>
  )
}

export default Footer
