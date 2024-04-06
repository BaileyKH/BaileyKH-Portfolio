import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import img from '/src/assets/headshot.avif'


export const Hero = () => {
    return(
        <div className="flex justify-center items-center h-screen md:mx-52 mt-12 px-10">
            <div className="flex">
                <div className="w-full md:w-2/3 flex flex-col md:mr-8">
                    <h1 className="text-6xl pb-5 font-bold">Front-End React Developer</h1>
                    <p className="pb-8 text-lg font-light leading-relaxed">Hello! I'm Bailey Henderson and I am a passionate Front-End React Developer currently based in Laveen, Arizona 🌵</p>
                    <div className="flex pb-6 justify-start items-center ">
                        <a href="https://github.com/BaileyKH" target="_blank">
                            <IconBrandGithub stroke={1} className="w-12 h-12 pr-1 cursor-pointer" alt="github logo that directs to Bailey Hendersons Github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/baileykh/" target="_blank">
                            <IconBrandLinkedin stroke={1} className="w-12 h-12" alt="linked-in logo that directs to Bailey Hendersons Linked-In"/>
                        </a>
                    </div>
                    <div className="flex items-start">
                    </div>
                    <div className="mt-14 md:mt-24 flex justify-start items-center">
                        <h1 className="font-light md:font-semibold mr-4">Stack <span className="hidden md:inline">|</span></h1>
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#e54c26",}} className="icon" alt="html logo"/>
                        <FontAwesomeIcon icon={faCss3Alt} style={{color: "#264de4",}} className="icon" alt="css logo"/>
                        <FontAwesomeIcon icon={faJs} style={{color: "#f0db4f",}} className="icon" alt="javascript logo"/>
                        <FontAwesomeIcon icon={faReact} style={{color: "#61dbfb",}} className="icon" alt="react logo"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-[31.5px] w-[31.5px] icon" alt="tailwind css logo"/>
                    </div>
                </div>
                <div className="md:w-1/3 hidden md:flex justify-end items-start">
                    <img src={img} className="rounded-full border-4 border-primaryGray" alt="headshot of Bailey Henderson"/>
                </div>
            </div>
        </div>
    );
}

