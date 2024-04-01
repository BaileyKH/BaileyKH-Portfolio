import { projects } from "./ProjectData";

export const Projects = () => {

    const filteredProjects = projects.filter((project) => project.id <= 2);

    return(
        <div id="projects" className="flex flex-col">
            <div className="mx-40 my-28">
                <h2 className=" text-primaryRed font-semibold">Projects</h2>
                <p>Elegant Code, Engaging Designs</p>
                <div className="flex">
                {filteredProjects.map((project) => (
                    
                ))}
                </div>
            </div>
        </div>
    );
}