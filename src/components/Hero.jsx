import { IconBrandGithub } from '@tabler/icons-react';

export const Hero = () => {
    return(
        <div className="flex justify-center items-center h-screen mx-52 px-10">
            <div className="w-2/3 flex flex-col">
                <h1 className="text-6xl pb-5 font-bold">Front-End Developer</h1>
                <p className="pb-5 leading-relaxed">Hello! I'm Bailey Henderson and I am Front-End React <span>addict</span> Developer currently based in Laveen, Arizona</p>
                <div className="flex pb-5">
                    <IconBrandGithub stroke={1} className="pr-4"/>
                    <p>Linked-In</p>
                </div>
                <div className="flex items-start">
                <button className="bg-primaryRed px-3 py-2 rounded-lg text-backgroundWhite">Download Resume</button>
                </div>
            </div>
            <div className="w-1/3">

            </div>

        </div>
    );
}

