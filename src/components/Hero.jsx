import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import img from '/src/assets/headshot.png'


export const Hero = () => {
    return(
        <div className="flex justify-center items-center h-screen mx-48 px-10">
            <div className="flex">
                <div className="w-1/2 flex flex-col">
                    <h1 className="text-6xl pb-5 font-bold">Front-End React Developer</h1>
                    <p className="pb-5 leading-relaxed">Hello! I'm Bailey Henderson and I am Front-End React <span className="line-through">addict</span> Developer currently based in Laveen, Arizona 🌵</p>
                    <div className="flex pb-5 justify-start items-center ">
                        <a href="https://github.com/BaileyKH" target="_blank"><IconBrandGithub stroke={1} className="w-12 h-12 pr-1 cursor-pointer"/></a>
                        <a><IconBrandLinkedin stroke={1} className="w-12 h-12" /></a>
                    </div>
                    <div className="flex items-start">
                    <a href="./filepath/filename.pdf" download><button className="bg-primaryRed px-3 py-2 rounded-lg text-backgroundWhite">Download Resume</button></a>
                    </div>
                    <div className="mt-24">
                        <h2 className="font-semibold ">Stack |</h2>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-start">
                    <img src={img} className="rounded-3xl border-4 border-primaryRed"/>
                </div>
            </div>
        </div>
    );
}

