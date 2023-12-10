import React from 'react'
import { ProfilePic } from '../assets/images'

const About = () => {
  return (
    <div id='about' className='flex justify-between items-center max-container  gap-10 py-14 max-md:flex-col'>
      <div className='p-4'>
      <img src={ProfilePic} width={300} alt="" />

      </div>
      <div className='flex flex-col items-start gap-4'>
        <p className='covering'>🧐 About Me</p>
        <h2 className='text-white text-3xl  font-bold max-md:text-left'>Muhammed Rinshid Adhikarath</h2>
        <p className='text-white text-left max-w-2xl text-sm font-light text-opacity-50'>


          Hey there! 👋 I'm Muhammed Rinshid Adhikarath, but you can just call me Rinshi. <br />
          <br />

          🌟 I hold a degree in Computer Science from Calicut University. <br />

          🎓 For the past 2 years, I've been immersed in the world of crafting Django-React combo websites, weaving together seamless user experiences. <br />

          💻 My passion lies in developing full-stack wonders with Django and React. <br />

          🚀 Beyond web-devlopment, I find joy in problem-solving <br />

          🧠 and unraveling the mysteries of data structures. <br />
          <br />

          Let's embark on this exciting journey of turning ideas into digital realities! 🌐✨


        </p>
      </div>

    </div>
  )
}

export default About
