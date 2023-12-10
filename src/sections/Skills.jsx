import React from 'react'
import { experienceCard, skillSet } from '../assets/constants'

const Skills = () => {
  return (
    <div id='' className='max-container  flex flex-col items-center max-md:mt-16'>
      <div className='grid grid-cols-3 grid-rows-2 gap-8 max-md:grid-cols-1 max-md:grid-rows-4 '>
        {
          experienceCard.map((card)=>(
            <div className='border border-secondary rounded-xl p-6 flex flex-col items-center border-opacity-50 hover:bg-secondary hover:bg-opacity-20 justify-center gap-1'>
              <img src={card.logo} width={40} alt="" />
              <p className='text-white text-opacity-70  text-sm font-extralight'>{card.description}</p>
              <h3 className='text-white font-bold text-2xl'>{card.field}</h3>
            </div>
          ))
        }
        <div className='bg-secondary  rounded-xl flex flex-row max-md:flex-col justify-between px-6 py-4  items-center w-auto col-start-1 col-end-4 max-md:col-span-1 max-md:gap-8 h-fit bg-opacity-20'>
        {
          skillSet.map((skill)=>(
            <div>
              <p className='text-xs font-light text-secondary text-opacity-70'>{skill.description}</p>
              <h4 className='text-secondary text-2xl font-bold'>{skill.field}</h4>
            </div>
          ))
        }
      </div>
      </div>
      
      
    </div>
  )
}

export default Skills
