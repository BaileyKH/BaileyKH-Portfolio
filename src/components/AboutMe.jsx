import img2 from '/src/assets/aboutme.avif'

export const AboutMe = () => {
    return(
        <div className="bg-white">
            <div className="w-screen">
                <div className="flex flex-col md:flex-row md:px-12 md:py-20 drop-shadow-lg">
                    <div id="aboutme" className="md:w-1/2">
                        <img src={img2} className="md:rounded-l-xl" alt="laptop sitting on desk"/>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center items-start bg-primaryGray py-8 md:py-0 px-8 md:rounded-r-xl">
                        <h2 className="about-me text-lg text-primaryRed font-semibold pb-4">ABOUT ME</h2>
                        <h2 className="about-me font-bold">Front-End React Developer</h2>
                        <h2 className="about-me text-lg pb-8">Based in Laveen, Arizona 🌵</h2>
                        <p className="about-me font-light text-[#dfdfdf] pb-4">Hey there! My name is Bailey Henderson and I am a passionate Front-End React Developer who specializes in bringing creative concepts to life through clean, efficient, and accessible code. </p>
                        <p className="about-me font-light text-[#dfdfdf]">My tech stack currently consists of React, JavaScript, and Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}