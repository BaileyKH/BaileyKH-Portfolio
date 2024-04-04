import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import img from '/src/assets/headshot.jpg'


export const Hero = () => {
    return(
        <div className="flex justify-center items-center h-screen mx-52 mt-12 px-10">
            <div className="flex">
                <div className="w-2/3 flex flex-col mr-8">
                    <h1 className="text-6xl pb-5 font-bold">Front-End React Developer</h1>
                    <p className="pb-8 text-lg font-light leading-relaxed">Hello! I'm Bailey Henderson and I am Front-End React <span className="line-through">addict</span> Developer currently based in Laveen, Arizona 🌵</p>
                    <div className="flex pb-6 justify-start items-center ">
                        <a href="https://github.com/BaileyKH" target="_blank"><IconBrandGithub stroke={1} className="w-12 h-12 pr-1 cursor-pointer"/></a>
                        <a href="https://www.linkedin.com/in/baileykh/" target="_blank"><IconBrandLinkedin stroke={1} className="w-12 h-12" /></a>
                    </div>
                    <div className="flex items-start">
                    </div>
                    <div className="mt-24 flex justify-start items-center">
                        <h1 className="font-semibold mr-4">Stack |</h1>
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#e54c26",}} className="icon"/>
                        <FontAwesomeIcon icon={faCss3Alt} style={{color: "#264de4",}} className="icon"/>
                        <FontAwesomeIcon icon={faJs} style={{color: "#f0db4f",}} className="icon"/>
                        <FontAwesomeIcon icon={faReact} style={{color: "#61dbfb",}} className="icon"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-[31.5px] w-[31.5px] icon"/>
                    </div>
                </div>
                <div className="w-1/3 flex justify-end items-start">
                    <img src={img} className="rounded-full border-4 border-primaryGray" alt="headshot of Bailey Henderson"/>
                </div>
            </div>
        </div>
    );
}

