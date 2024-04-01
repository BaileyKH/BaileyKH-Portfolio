import { projects } from "./ProjectData";

import { IconExternalLink, IconCode } from '@tabler/icons-react';

export const Projects = () => {

    const filteredProjects = projects.filter((project) => project.id <= 2);

    return(
        <div id="projects" className="flex flex-col">
            <div className="mx-40 my-28 ">
                <h2 className=" text-primaryRed font-semibold">Projects</h2>
                <p>Elegant Code, Engaging Designs</p>
                {filteredProjects.map((project) => (
                <div className="flex py-10 justify-evenly items-center bg-white mt-8 pl-8 rounded-lg">
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={project.img} className="w-fit h-auto rounded-lg"/>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center px-8">
                        <h3 className="text-xl text-primaryRed font-semibold pb-4">{project.title}</h3>
                        <p className="font-light text-center">{project.description}</p>
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