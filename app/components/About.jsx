const About = () => {
    return (
        <div id="about" className=" py-5 md:py-10 bg-black/10 backdrop-blur-3xl relative border border-white/50 shadow-lg rounded-lg mx-auto my-5 px-4">
            <div className='text-center mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold'>
                <h3 className="text-l_text">About Me</h3>
            </div>
            <div>
                <p className="md:text-xl text-center">
                    Hey, I’m <strong className="text-xl md:text-2xl">Riazull Jannat</strong>, a <strong>MERN Stack Developer</strong>  who’s passionate about turning ideas into functional, user-friendly web experiences.
                </p>
            </div>
            <div className="text-center my-5">
                <h4 className="text-l_text text-xl md:text-2xl font-bold" >Why I Love to Code</h4>
                <p className="md:text-xl">It all started with curiosity—how do websites come to life? That simple question pulled me into a world where logic meets creativity. I love the thrill of solving complex problems, the challenge of debugging, and the satisfaction of seeing an idea turn into something real and functional.

                    Coding isn’t just about writing lines of code—it’s about creating experiences, building solutions, and constantly evolving. Every project teaches me something new, every bug makes me think deeper, and every successful build fuels my passion even more.</p>
            </div>
        </div>
    );
};

export default About;