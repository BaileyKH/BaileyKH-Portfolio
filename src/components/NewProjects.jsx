import { newprojects } from "./NewProjectData";

import { IconCode } from '@tabler/icons-react';


export const NewProjects = () => {
    return(
        <div id="newprojects" className="flex flex-col">
            <div className="mx-4 md:mx-40 mb-8 ">
                <h2 className=" text-primaryRed font-semibold mt-8">New Projects</h2>
                <p>Currently Under Development</p>
                {newprojects.map((newproject) => (
                <div key={newproject.id} className="flex flex-col md:flex-row md:py-10 justify-evenly items-center bg-white mt-8 md:pl-8 rounded-lg">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img src={newproject.img} className="w-fit h-auto rounded-lg" alt={newproject.title}/>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-6 md:py-0">
                        <h3 className="text-xl text-primaryRed font-semibold pb-4">{newproject.title}</h3>
                        <p className="font-light text-center">{newproject.description}</p>
                        <div className="flex flex-col justify-center items-center mt-4">
                            <h3 className="font-bold text-md tracking-wide">Made With</h3>
                            <div className="flex">
                                <p className="font-normal text-md px-1">React</p>
                                <p className="font-normal text-md px-1">Tailwind</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <div className="flex bg-primaryGray text-white rounded-lg mx-2 py-1 px-2"><a href={newproject.code} target="_blank" className="flex justify-center items-center">
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