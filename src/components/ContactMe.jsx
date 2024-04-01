import { useState, useEffect } from "react";

import { IconMail, IconBrandLinkedin } from '@tabler/icons-react';

export const ContactMe = () => {

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
        <div id="contact" className="bg-white">
            <div className="flex flex-col px-40 py-28 drop-shadow-lg w-1/2">
                <div>
                    <h2 className="text-primaryRed font-semibold pb-2">Contact Me!</h2>
                    <p className="font-light">It is currently <span className="font-semibold">{time}</span>, but please feel free to get in contact with me at your earliest convenience. I am always available!</p>
                </div>
                <div className="flex mt-16">
                    <div className="flex mr-8">
                        <IconMail stroke={1} className="w-12 h-12 p-2 mr-4 bg-backgroundWhite rounded-full"/>
                        <div className="flex flex-col">
                            <p className="text-primaryRed">E-Mail</p>
                            <a href="mailto:hen.baileyk@gmail.com" className="font-light">hen.baileyk@gmail.com</a>
                        </div>
                    </div>
                    <div>
                        <IconBrandLinkedin stroke={1} className="w-12 h-12 p-2 mr-4 bg-backgroundWhite rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}