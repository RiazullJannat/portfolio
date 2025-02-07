import portfolioImage from "@/public/bannerImage.jpg"
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const Banner = () => {
    return (
        <section id="home" className="bg-black/10 backdrop-blur-3xl relative border border-white/20 shadow-lg rounded-lg mx-auto my-5">
            <div className="md:flex md:flex-row-reverse md:justify-between">
                <div className="w-full  md:w-1/2 flex justify-center lg:justify-end" >
                    <Image src={portfolioImage} placeholder="blur" alt="riazull Jannat" width={500} className="rounded-3xl"></Image>
                </div>
                <div className="flex justify-center items-center border-red-600 my-4 w-full">
                    <div className="w-full flex flex-col text-center ">
                        <h1 className="text-3xl md:text-5xl lg:text-7xl  font-extrabold ">Hi, I'm <br /> <span className="text-l_text">Riazull Jannat</span></h1>
                        <p className="my-2  text-sm md:text-xl"> Passionate MERN stack and full-stack developer.</p>
                        <ul className="flex gap-3 md:gap-5 text-xl md:text-3xl mx-auto">
                            <li><a href="https://github.com/RiazullJannat" target="_blanc"><FaGithub /></a></li>
                            <li><a href="https://www.linkedin.com/in/riazull-jannat/" target="_blanc"><FaLinkedin /></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100088792816712" target="_blanc"><FaFacebook /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;