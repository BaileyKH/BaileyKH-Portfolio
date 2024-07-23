import React from "react";

import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

import homeHero from '/src/assets/home-hero.webp'
import headShot from '/src/assets/headshot.jpg'
import ghost from '/src/assets/hero-ghost-2.png'

import aboutImg from '/src/assets/aboutme.avif'
import spider from '/src/assets/about-spider.png'
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export const Home = () => {
    return(
        <main>
            <section>
                <div className="flex justify-center items-center w-full shadow-lg">
                    <div className="relative w-full">
                        <img src={homeHero} className="brightness-50 w-full"/>
                    </div>
                    <div className="absolute z-10 flex justify-center items-center w-full">
                        <div className="relative w-1/2 flex flex-col items-start justify-center hero-gradient ml-16 px-12 py-12 rounded-md shadow-xl">
                            <div className="absolute -top-12 -right-12 z-10">
                                <img src={ghost} className="bounce drop-shadow-md"/>
                            </div>
                            <h1 className="font-creepster text-primaryAccent text-5xl tracking-wider drop-shadow-lg">Front-End React Developer</h1>
                            <p className="text-primaryText text-lg font-light tracking-wide leading-relaxed pb-4 pt-2">Hello! I'm Bailey Henderson and I am a passionate Front-End React Developer currently based in Laveen, Arizona 🌵</p>
                            <div className="flex pb-6 justify-start items-center ">
                                <a href="https://github.com/BaileyKH" target="_blank">
                                    <IconBrandGithub stroke={1} className="text-primaryAccent hover:text-orange-700 w-12 h-12 pr-1 cursor-pointer" alt="github logo that directs to Bailey Hendersons Github"/>
                                </a>
                                <a href="https://www.linkedin.com/in/baileykh/" target="_blank">
                                    <IconBrandLinkedin stroke={1} className="text-primaryAccent hover:text-orange-700 w-12 h-12 cursor-pointer" alt="linked-in logo that directs to Bailey Hendersons Linked-In"/>
                                </a>
                            </div>
                            <div className="mt-16 flex justify-start items-center w-full space-x-5">
                                <div className="border-r-2 border-r-primaryAccent">
                                    <p className="font-creepster tracking-widest text-primaryAccent text-3xl pr-4">Stack</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <FontAwesomeIcon icon={faHtml5} style={{color: "#e54c26",}} className="icon" alt="html logo"/>
                                    <FontAwesomeIcon icon={faCss3Alt} style={{color: "#264de4",}} className="icon" alt="css logo"/>
                                    <FontAwesomeIcon icon={faJs} style={{color: "#f0db4f",}} className="icon" alt="javascript logo"/>
                                    <FontAwesomeIcon icon={faReact} style={{color: "#61dbfb",}} className="icon" alt="react logo"/>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-[42px] w-[42px] icon" alt="tailwind css logo"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center mr-16">
                            <div className="w-max h-max image-container">
                                <div className="image-border"></div>
                                <img src={headShot} className="w-[300px] animated-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="relative my-24 mx-32">
                    <div className="flex justify-center items-center object-contain overflow-hidden background-gradient w-full rounded-md shadow-lg ">
                        <div className="absolute -top-12 -right-12 z-10">
                            <img src={spider} className="bounce drop-shadow-md"/>
                        </div>
                        <div className="flex flex-col justify-center items-start p-[40px]">
                            <h2 className="font-creepster tracking-widest text-4xl text-primaryAccent font-semibold pb-4">ABOUT ME</h2>
                            <h2 className="font-bold text-lg text-primaryText">Front-End React Developer</h2>
                            <h2 className="text-lg text-primaryText pb-6">Based in Laveen, Arizona 🌵</h2>
                            <p className="font-light text-primaryText pb-4">Hey there! My name is Bailey Henderson and I am a passionate Front-End React Developer who specializes in bringing creative concepts to life through clean, efficient, and accessible code. </p>
                            <p className="font-light text-primaryText">My tech stack currently consists of React, JavaScript, and Tailwind CSS</p>
                        </div>
                        <div className="p-[40px]">
                            <img src={aboutImg} className="rounded-md w-[1200px]"/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Projects />
            </section>
            <section>
                <Contact />
            </section>
        </main>
    );
}