import img2 from '/src/assets/aboutme.jpg'

export const AboutMe = () => {
    return(
        <div className="bg-white">
            <div className="w-screen">
                <div className="flex px-12 py-20 drop-shadow-lg">
                    <div className="w-1/2">
                        <img src={img2} className="rounded-l-xl"/>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-start bg-primaryGray pl-8 rounded-r-xl">
                        <h2 className="about-me text-lg">ABOUT ME</h2>
                        <h2 className="about-me font-bold">Front-End React Developer</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}