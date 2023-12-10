import React from 'react'
import { CiMail } from 'react-icons/ci'
import { IoCopyOutline } from 'react-icons/io5'
import { FaArrowUp, FaCopy, FaMailchimp, FaVoicemail, FaWhatsapp } from 'react-icons/fa'

const Connext = () => {
    const copyText=()=>{
        var text="mrappt2001@gmail.com"
        navigator.clipboard.writeText(text)
        document.execCommand("Copied")

    }
    return (
        <div id='connext' className='max-container   pb-16'>
            <p className='covering '>📬 Contact</p>
            <h2 className='text-white font-bold text-4xl my-8 mb-16 max-sm:text-3xl'>Exchange Words</h2>
            <div className='flex max-sm:flex-col justify-around items-center gap-8 mb-10'>
                <div className='transition duration-500 ease-in-out hover:text-white cursor-pointer hover:bg-secondary hover:border-white text-xl leading-10 border h-fit border-secondary text-secondary px-5 rounded-xl flex justify-around items-center'>
                    <FaWhatsapp onClick={()=>{
                        alert("kdj")
                        window.open("https://api.whatsapp.com/send?phone=918606544874",'_blank')
                    }} className='inline mr-2 ' />
                    <p>Let's talk</p>

                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <CiMail className='text-secondary text-opacity-50 text-4xl max-md:text-3xl ' />
                    <p className='text-secondary text-xl'>E-mail:</p>
                    <p className='text-white text-opacity-50 text-xl font-light'>mrappt2001@gmail.com</p>
                    <IoCopyOutline onClick={()=>copyText()}  className='text-secondary cursor-pointer text-opacity-40 text-3xl mt-4 font-light hover:scale-110 hover:text-opacity-100 duration-500'/>
                </div>
            </div>
            <a href='#hero' className='text-secondary  hover:text-opacity-50 cursor-pointer'>Take me to top <FaArrowUp className='text-xl inline' /></a>

        </div>
    )
}

export default Connext
