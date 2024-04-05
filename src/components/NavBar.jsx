import { useState } from 'react';
import { IconSpider } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white w-screen md:w-full p-4 md:p-6 flex justify-between items-center shadow-md fixed z-10 top-0 ">
            <div className='flex justify-between items-center'>
                <h1><a href="#" className="text-2xl md:text-4xl hover:text-primaryGray">BaileyKH</a></h1>
                <IconSpider stroke={1} className="w-6 h-6 md:w-8 md:h-8"/>
            </div>
            <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FontAwesomeIcon icon={faBars} className="text-xl"/>
            </div>
            <div className={`fixed top-16 right-0 w-1/3 h-1/5 bg-white shadow-md z-20 rounded-bl-lg transform ease-in-out transition-all duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                <div className="flex flex-col gap-6 justify-start items-start text-s p-4">
                    <a href="#aboutme" onClick={() => setIsMenuOpen(false)}>About Me</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Me</a>
                </div>
            </div>
            <div className="hidden md:flex gap-6 justify-end items-center text-lg">
                <a href="#aboutme">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
            </div>
        </nav>
    );
};
