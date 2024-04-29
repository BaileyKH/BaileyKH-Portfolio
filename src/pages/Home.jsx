import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { NewProjects } from "../components/NewProjects";
import { ContactMe } from "../components/ContactMe";
import { Jsprojects } from "../components/Jsprojects";

export const Home = () => {
    return(
        <div>
            <Hero />
            <AboutMe />
            <Projects />
            <NewProjects />
            <Jsprojects />
            <ContactMe />
        </div>
    );
}