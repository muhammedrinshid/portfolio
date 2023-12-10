import React from 'react'
import { certificates } from '../assets/constants'

const Certifications = () => {
  return (
    <div className='max-container  py-24 text-left max-xl:text-center'>
        <h2 className='text-white text-3xl  font-bold '>Certifications and Licenses</h2>
        <p className='text-white text-opacity-50 font-light text-base mb-11'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='flex flex-wrap justify-center gap-8'>
            {
                certificates.map((certificate)=>(
                    <div className='border border-secondary border-opacity-50 rounded-lg md:basis-1/3 xl:basis-1/4 basis-1/2  p-4 hover:bg-secondary hover:bg-opacity-20 cursor-pointer max-sm:basis-full'
                        onClick={()=>{
                            window.open(certificate.certificateLink, '_blank', 'noreferrer');
                        }}>
                        <img src={certificate.img} className='w-full' alt="" />
                        <div className='flex flex-row justify-between text-white my-2'>
                            <h6 className='font-semibold text-base'>{certificate.issuer}</h6>
                            <p className='px-2 text-xs py-1 bg-secondary text-secondary bg-opacity-20 font-semibold rounded-md'>{certificate.topic}</p>
                        </div>
                        <p className='text-xs font-light text-white uppercase text-opacity-50 text-left'>{certificate.credId}</p>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Certifications
