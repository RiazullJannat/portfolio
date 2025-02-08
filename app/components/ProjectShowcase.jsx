'use client'
import Image from 'next/image';
import React from 'react';

const ProjectShowcase = ({project}) => {
    const handleClick=()=>{
        window.open(project.link, '_blank');
    }
    return (
        <div className='cursor-pointer' onClick={handleClick}>
            <div>
                <h3 className="vertical-timeline-element-title">{project?.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{project?.subtitle}</h4>
                <p>
                    {project?.description}
                </p>
            </div>
            <div className="">
                <Image
                    src={project.image}
                    alt={project.title}
                />
            </div>
        </div>
    );
};

export default ProjectShowcase;