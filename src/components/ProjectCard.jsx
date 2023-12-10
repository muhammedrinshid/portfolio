import React from 'react'

const ProjectCard = ({project}) => {
    return (
        <div className='border border-secondary border-opacity-50 rounded-lg flex flex-col items-start p-4 hover:bg-secondary hover:bg-opacity-20 cursor-pointer' onClick={() => {
            window.open(project.projecLink, '_blank', 'noreferrer');

        }}>
            <h3 className='text-white text-xl font-semibold mb-4'>{project.name}</h3>
            <p className='text-white text-xs font-light text-opacity-50 text-left max-h-20 overflow-hidden text-ellipsis mb-8 '>{project.discription}</p>
            <div className='flex'>
                {
                    project.tags.map((tag) => (
                        <p className='text-secondary px-2 mx-1 my-3 rounded-md bg-secondary bg-opacity-20 text-sm max-md:text-xs font-semibold'>{tag}</p>
                    ))
                }
            </div>
            <div className='relative'>
                <img src={project.img} className='rounded-md w-full relative ' alt="" />
                <div className='absolute top-0 left-0 bg-secondary w-full h-full rounded-md bg-opacity-30'></div>
            </div>

        </div>
    )
}

export default ProjectCard
