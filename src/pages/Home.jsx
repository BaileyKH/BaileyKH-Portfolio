import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { ContactMe } from "../components/ContactMe";

export const Home = () => {
    return(
        <div>
            <Hero />
            <AboutMe />
            <Projects />
            {/* <ContactMe /> */}
        </div>
    );
}