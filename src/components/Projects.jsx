import React from "react";

import house from '/src/assets/project-house.png'

import { projects } from "/src/ProjectData.js";

import { IconExternalLink, IconCode } from '@tabler/icons-react';

export const Projects = () => {

    return(
        <div id="projects" className="flex flex-col">
            <div className="mx-4 md:mx-16 xl:mx-24 mt-6 lg:mt-14 mb-16 ">
                <div className="flex justify-start items-center space-x-6">
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="font-creepster tracking-widest text-2xl md:text-4xl text-primaryAccent">Projects</h2>
                        <p className="text-primaryText text-sm md:text-base">Elegant Code, Engaging Designs</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={house}/>
                    </div>
                </div>
                {projects.map((project) => (
                <div key={project.id} className="flex flex-col lg:flex-row md:pb-8 lg:py-10 justify-evenly items-center project-gradient mt-8 lg:pl-8 rounded-lg">
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img src={project.img} className="w-fit h-auto rounded-lg" alt={project.title}/>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-3 md:px-6 py-6 md:py-0 md:mt-4 lg:mt-0">
                        <h3 className="text-xl text-primaryAccent font-semibold pb-4">{project.title}</h3>
                        <p className="text-primaryText text-sm md:text-base font-light text-center drop-shadow-lg tracking-wide">{project.description}</p>
                        <div className="flex flex-col justify-center items-center mt-4">
                            <h3 className="text-primaryAccent font-bold text-md tracking-wider">Made With</h3>
                            <div className="flex">
                                <p className="text-primaryText text-base px-1">{project.structure}</p>
                                <p className="text-primaryText text-base px-1">{project.style}</p>
                            </div>
                        </div>
                        <div className="flex justify-evenly mt-8">
                            <div className="flex justify-center items-center hero-gradient text-white hover:text-primaryAccent rounded-lg mx-2 py-1 px-2 shadow-md"><a href={project.demo} target="_blank" className="flex justify-center items-center">
                                <IconExternalLink stroke={1} className="pr-1"/>
                                <p className="font-extralight text-sm">Demo</p>
                                </a>
                            </div>
                            <div className="flex justify-center items-center hero-gradient text-white hover:text-primaryAccent rounded-lg mx-2 py-1 px-2 shadow-md"><a href={project.code} target="_blank" className="flex justify-center items-center">
                                <IconCode stroke={1} className="pr-1"/>
                                <p className="font-extralight text-sm">{project.code ? 'Code' : 'Code: Unavailable'}</p>
                            </a>
                            </div>
                        </div>
                    </div> 
                </div>
                ))}
            </div>
        </div>
    );
}