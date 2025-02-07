import React from 'react';
import Email from './components/Email';

const Contact = () => {
    return (
        <section id='contact' className="py-5 md:py-10 bg-black/10 backdrop-blur-3xl relative border border-white/50 shadow-lg rounded-lg mx-auto my-5">
            <div className='text-center mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold'>
                <h3>Contact Me</h3>
            </div>
            <Email></Email>
        </section>
    );
};

export default Contact;