import portfolioImage from "@/public/bannerImage.jpg"
import Image from "next/image";
const Banner = () => {
    return (
        <section id="home" className="bg-black/10 backdrop-blur-3xl   relative border border-white/20 shadow-lg rounded-lg p-8 mx-auto mt-10">
            <div className="md:flex ">
                <div className="w-full md:w-1/2 flex justify-end" >
                    <Image src={portfolioImage} placeholder="blur" alt="riazull Jannat" width={500} className="rounded-3xl"></Image>
                </div>
                <div className="w-full flex flex-col">
                    <h1 className="text-2xl lg:text-6xl  font-extrabold ">Hi, I'm <span className="text-h_text">Riazull Jannat</span></h1>
                    <p className="my-2 text-l_text text-xl"> Passionate MERN stack and full-stack developer.</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;