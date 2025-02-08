import Image from "next/image";
import { technologies } from "../constants";
const Skill = () => {
    return (
        <div id="skills" className="py-5 md:py-10 bg-black/10 backdrop-blur-3xl relative border border-white/50 shadow-lg rounded-lg mx-auto my-5">
            <div className='text-center mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold'>
                <h3>Skills</h3>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
                {
                    technologies.map(technology =>
                        <div key={technology.name} className="">
                            <Image src={technology.icon} alt={technology.name} width={100} height={100} />
                        </div>)
                }
            </div>
        </div>
    );
};

export default Skill;