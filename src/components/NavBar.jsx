import React from "react";

export const NavBar = () => {
    return(
        <nav className="fixed z-50 top-2 md:top-4 flex justify-center items-center w-full">
            <div className="flex justify-between items-center w-[350px] md:w-[600px] lg:w-[800px] px-2 lg:px-4 py-1 lg:py-2 backdrop-blur-lg border-2 rounded-3xl border-white/50">
                <div className="">
                    <a href="#" aria-label="redirects you to the home page" className="font-bold tracking-wider text-primaryAccent text-xs md:text-sm lg:text-base">BaileyKH</a>
                </div>
                <div className="flex space-x-3">
                    <a href="#about" aria-label="redirects you to the about section" className="nav-links">About</a>
                    <a href="#projects" aria-label="redirects you to the projects section" className="nav-links border-x border-white/50 px-3">Projects</a>
                    <a href="#contact" aria-label="redirects you to the contact section" className="nav-links">Contact</a>
                </div>
            </div>
        </nav>
    );
}
