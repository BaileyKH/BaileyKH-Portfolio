import { useState, useEffect } from "react";

import { IconMail, IconBrandLinkedin } from '@tabler/icons-react';

export const Contact = () => {

    const [time, setTime] = useState('');

  useEffect(() => {
    const updateArizonaTime = () => {
      const currentDate = new Date();
      const arizonaTime = currentDate.toLocaleTimeString('en-US', {
        timeZone: 'America/Phoenix',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true, 
      });
      setTime(arizonaTime);
    };

    updateArizonaTime();

    const intervalId = setInterval(updateArizonaTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

    return(
        <div id="contact" className="background-gradient">
            <div className="flex flex-col px-4 md:px-40 py-14 md:py-28 drop-shadow-lg md:w-2/3 items-center md:items-start">
                <div>
                    <h2 className="text-primaryAccent font-creepster tracking-widest text-4xl pb-6 md:pb-2 text-center md:text-start">Contact Me!</h2>
                    <p className="font-light text-primaryText text-center md:text-start">It is currently <span className="font-semibold text-primaryAccent">{time}</span>, but please feel free to get in contact with me at your earliest convenience. I am always available!</p>
                </div>
                
                <div className="flex flex-col md:flex-row mt-8 md:mt-16 md:justify-between md:items-center">
                    <div className="flex mr-8 my-4 md:my-0 items-center">
                        <IconMail stroke={1} className="w-12 h-12 p-2 mr-4 hero-gradient text-primaryText rounded-full"/>
                        <div className="flex flex-col">
                            <p className="text-primaryAccent">E-Mail</p>
                            <a href="mailto:hen.baileyk@gmail.com" className="font-light text-primaryText">hen.baileyk@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex mr-8 my-4 md:my-0 items-center">
                        <IconBrandLinkedin stroke={1} className="w-12 h-12 p-2 mr-4 hero-gradient text-primaryText rounded-full" />
                        <div className="flex flex-col">
                            <p className="text-primaryAccent">Linked-In</p>
                            <a href="https://www.linkedin.com/in/baileykh/" target="_blank" className="font-light text-primaryText">Bailey Henderson</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}