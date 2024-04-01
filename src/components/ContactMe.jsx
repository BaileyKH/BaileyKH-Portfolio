import { useState, useEffect } from "react";

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
            <div className="flex flex-col px-12 py-20 drop-shadow-lg">
                <div>
                    <h2 className="text-primaryRed font-semibold">Contact Me!</h2>
                    <p className="font-light">It is currently {time}, but please feel free to get in contact with me at your earliest convenience. I am always available!</p>
                </div>
                <div></div>
            </div>
        </div>
    );
}