import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";

export const Home = () => {
    return(
        <div>
            <Hero />
            <AboutMe />
            <Projects />
        </div>
    );
}