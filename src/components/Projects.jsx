import { projects } from "./ProjectData";

import { IconExternalLink, IconCode } from '@tabler/icons-react';

export const Projects = () => {

    return(
        <div id="projects" className="flex flex-col">
            <div className="mx-4 md:mx-40 my-28 ">
                <h2 className=" text-primaryRed font-semibold">Projects</h2>
                <p>Elegant Code, Engaging Designs</p>
                {projects.map((project) => (
                <div key={project.id} className="flex flex-col md:flex-row md:py-10 justify-evenly items-center bg-white mt-8 md:pl-8 rounded-lg">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img src={project.img} className="w-fit h-auto rounded-lg"/>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-6 md:py-0">
                        <h3 className="text-xl text-primaryRed font-semibold pb-4">{project.title}</h3>
                        <p className="font-light text-center">{project.description}</p>
                        <div className="flex flex-col justify-center items-center mt-4">
                            <h3 className="font-bold text-md tracking-wide">Made With</h3>
                            <div className="flex">
                                <p className="font-normal text-md px-1">React</p>
                                <p className="font-normal text-md px-1">CSS</p>
                            </div>
                            <p className="font-light text-sm text-center">(Currently being converted from CSS to Tailwind CSS)</p>
                        </div>
                        <div className="flex justify-evenly mt-8">
                            <div className="flex justify-center items-center bg-primaryGray text-white rounded-lg mx-2 py-1 px-2"><a href={project.demo} target="_blank" className="flex justify-center items-center">
                                <IconExternalLink stroke={1} className="pr-1"/>
                                <p className="font-extralight text-sm">Demo</p>
                                </a>
                            </div>
                            <div className="flex bg-primaryGray text-white rounded-lg mx-2 py-1 px-2"><a href={project.code} target="_blank" className="flex justify-center items-center">
                                <IconCode stroke={1} className="pr-1"/>
                                <p className="font-extralight text-sm">Code</p>
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