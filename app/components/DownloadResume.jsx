import { IoCloudDownloadSharp } from "react-icons/io5";
const DownloadResume = () => {
    return (
        <div>
            <a
                className=" capitalize font-semibold text-base text-center transition-all hover:bg-root text-l_text md:px-4 py-1 rounded-xl cursor-pointer flex items-center gap-2"
                href={'/public/rjannat-resume.pdf'}
                download={'rjannat-resume.pdf'}
            >   <span><IoCloudDownloadSharp /></span>
                <span className="hidden md:block">Download Resume</span>
            </a>
        </div>
    );
};

export default DownloadResume;