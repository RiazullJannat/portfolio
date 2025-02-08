'use client'
import { motion } from "motion/react";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import parcelLogicBanner from '@/public/parcelLogic.png'
import parcelLogicIcon from '@/public/parcel-logic.png'
import languageClubBanner from '@/public/languageClub.png'
import equiStoreBanner from '@/public/equiStore.png'
import ProjectShowcase from "./ProjectShowcase";
const Project = () => {
    const projects = [
        {
            "id": 1,
            "title": "Parcel Logic",
            "subtitle": "A Delivery Management System",
            "description": "Parcel Logic simplifies delivery tracking with real-time updates, secure payments, and automated notifications, making logistics more efficient for businesses and individuals.",
            "image": parcelLogicBanner,
            "icon": 'https://i.ibb.co.com/ch1VcrmM/parcel-logic.pnghttps://i.ibb.co.com/3m6RjKRt/parcel-logic.png',
            "link": 'https://parcel-logic.web.app/'
        },
        {
            "id": 2,
            "title": "Equi Store",
            "subtitle": "An E-commerce Platform",
            "description": "Equi Store streamlines online shopping with Firebase authentication, real-time data storage, and engaging UI elements like animations and interactive effects for a seamless user experience.",
            "image": equiStoreBanner,
            "icon": parcelLogicIcon,
            "link": 'https://assignment-10-d1cd0.web.app/'
        },
        {
            "id": 3,
            "title": "Language Club",
            "subtitle": "A Platform for Language Learners",
            "description": "Language Club connects learners and educators through real-time updates, interactive content, and a user-friendly interface, making language learning more engaging and accessible.",
            "image": languageClubBanner,
            "icon": parcelLogicIcon,
            "link": 'https://language-club-b10ab.web.app/'
        }
    ]
    return (
        <div id="projects" className="py-5 md:py-10 bg-black/10 backdrop-blur-3xl relative border border-white/50 shadow-lg rounded-lg mx-auto my-5">
            <div className='text-center mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold'>
                <h3>Projects</h3>
            </div>
            <div>
                <VerticalTimeline>
                    {
                        projects.map(project =>
                            <VerticalTimelineElement
                                key={project.id}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgba(0, 0, 0, 0.1)', color: '#fff', backdropFilter: 'blur(24px)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(243, 213, 181)' }}
                                date="2011 - present"
                                iconStyle={{ background: 'rgba(0, 0, 0, 0.1)', color: '#fff' }}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img src={project?.icon} alt={project?.title} className=" rounded-full"  />
                                    </div>}
                            >
                                <ProjectShowcase project={project}></ProjectShowcase>
                            </VerticalTimelineElement>
                        )
                    }
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Project;