'use client'
import { motion } from "motion/react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Project = () => {
    const projects = [
        {
            "id": 1,
            "title": "Parcel Logic",
            "subtitle": "A Delivery Management System",
            "description": "Parcel Logic simplifies delivery tracking with real-time updates, secure payments, and automated notifications, making logistics more efficient for businesses and individuals.",
            "image": "",
            "icon": ""
        },
        {
            "id": 2,
            "title": "Equi Store",
            "subtitle": "An E-commerce Platform",
            "description": "Equi Store streamlines online shopping with Firebase authentication, real-time data storage, and engaging UI elements like animations and interactive effects for a seamless user experience.",
            "image": "",
            "icon": ""
        },
        {
            "id": 3,
            "title": "Language Club",
            "subtitle": "A Platform for Language Learners",
            "description": "Language Club connects learners and educators through real-time updates, interactive content, and a user-friendly interface, making language learning more engaging and accessible.",
            "image": "",
            "icon": ""
        }d
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
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="2011 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{project?.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle"></h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                        )
                    }
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Project;