import { IconSpider } from '@tabler/icons-react';

export const NavBar = () => {
    return(
        <nav className="bg-white w-screen p-6 flex justify-between items-center shadow-md fixed z-10 top-0">
            <div className='flex justify-between items-center'>
                <h1><a href="#" className="text-4xl hover:text-primaryGray">BaileyKH</a></h1>
                <IconSpider stroke={1} className="w-8 h-8"/>
            </div>
            <div className="flex gap-6 justify-end items-center text-lg">
                <a href="#aboutme">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
            </div>
        </nav>
    );
}