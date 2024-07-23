import { useState, useEffect } from "react";

import emailjs from '@emailjs/browser';

import { IconMail, IconBrandLinkedin } from '@tabler/icons-react';

export const Contact = () => {

    const [time, setTime] = useState('');

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const [submit, setSubmit] = useState(false);


    // Display current time in: Phoenix, AZ
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

    // Form Validation
    const isValidEmail = (email) => {
        const validEmail = /^\S+@\S+\.\S+$/;
        return validEmail.test(email);
    }

    const validateForm = () => {

        let newErrors = {};

        if (!formData.firstName) {
            newErrors.firstName = "Please enter your first name."
        }
        if (!formData.lastName) {
            newErrors.lastName = "Please enter your last name."
        }
        if (!formData.companyName) {
            newErrors.companyName = "Please leave the name of your business or company"
        }
        if (!formData.email) {
            newErrors.email = "Please enter an email address"
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Invalid email format"
        }
        if (!formData.message) {
            newErrors.message = "Please enter a short message on why you're looking to get in touch :)"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0;
    }

    // Submit Handling for Contact Form / EmailJS
    const handleSubmit = async (e) => {
        e.preventDefault()

        const isValid = validateForm();

        if (isValid) {
            console.log("Form Submitted", formData)
            // EmailJS Keys
            const serviceId = 'service_uptzmv2'
            const templateKey = 'template_1jpp6bb'
            const publicKey = 'gtV00-4thiXjz-TXJ'

            // EmailJS object for template params
            const templateParams = {
                to_name: 'Bailey',
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                from_company: formData.companyName,
                message: formData.message
            };

            // Send email using EmailJS
            emailjs.send(serviceId, templateKey, templateParams, publicKey)
                .then((res) => {
                    console.log("Email sent successfully!", res);
                    setFormData({
                        ...formData,
                        firstName: "",
                        lastName: "",
                        email: "",
                        companyName: "",
                        message: ""
                    })
            })
            .catch((error) => {
                console.error('Error sending email:', error)
            });

            setSubmit(true);
        } else {
            console.log("Form Validation Failed")           
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleClose() {
        setSubmit(false);
        document.getElementById("contact-form").reset();
        navigate(to, { replace: true });
    }

    return(
        <div id="contact" className="background-gradient">
            <div className="">
                <div className="flex flex-col px-4 md:px-40 py-14 md:py-28 drop-shadow-lg items-center md:items-start">
                    <div>
                        <h2 className="text-primaryAccent font-creepster tracking-widest text-4xl pb-6 md:pb-2 text-center md:text-start">Contact Me!</h2>
                        <p className="font-light text-primaryText text-center md:text-start">It is currently <span className="font-semibold text-primaryAccent">{time}</span>, but please feel free to get in contact with me at your earliest convenience. I am always available!</p>
                    </div>
                    <div className="relative w-full">
                        <div className="my-12 md:w-[700px] lg:w-[800px]">
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="border-2 border-primaryAccent rounded-md p-4">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="first-name"
                                                className="block text-sm font-medium leading-6 text-white/90"
                                            >
                                                First name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="first-name"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    autoComplete="given-name"
                                                    className={`block w-full rounded-md border-0 p-1.5 text-white/90 shadow-sm ring-1 ring-inset ${errors.firstName ? `ring-red-500` : `ring-white/60`} bg-white/10 focus:ring-2 focus:ring-inset ${errors.firstName ? 'focus:ring-red-500' : 'focus:ring-primaryAccent'} sm:text-sm sm:leading-6`}
                                                />
                                                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="last-name"
                                                className="block text-sm font-medium leading-6 text-white/90"
                                            >
                                                Last name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="last-name"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    autoComplete="family-name"
                                                    className={`block w-full rounded-md border-0 p-1.5 text-white/90 shadow-sm ring-1 ring-inset ${errors.lastName ? `ring-red-500` : `ring-white/60`} bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.lastName ? 'focus:ring-red-500' : 'focus:ring-primaryAccent'} sm:text-sm sm:leading-6`}
                                                />
                                                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium leading-6 text-white/90"
                                            >
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    autoComplete="email"
                                                    placeholder="your@email"
                                                    className={`block w-full rounded-md border-0 p-1.5 text-white/90 shadow-sm ring-1 ring-inset ${errors.email ? `ring-red-500` : `ring-white/60`} bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.email ? 'focus:ring-red-500' : 'focus:ring-primaryAccent'} sm:text-sm sm:leading-6`}
                                                />
                                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="companyName"
                                                className="block text-sm font-medium leading-6 text-white/90"
                                            >
                                                Company Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    id="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    className={`block w-full rounded-md border-0 p-1.5 text-white/90 shadow-sm ring-1 ring-inset ${errors.companyName ? `ring-red-500` : `ring-white/60`} bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.companyName ? 'focus:ring-red-500' : 'focus:ring-primaryAccent'} sm:text-sm sm:leading-6`}
                                                />
                                                {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mt-8">
                                        <div className="col-span-full">
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium leading-6 text-white/90"
                                            >
                                                Message
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={6}
                                                    className={`block w-full rounded-md border-0 p-1.5 text-white/90 shadow-sm ring-1 ring-inset ${errors.message ? `ring-red-500` : `ring-white/60`} bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.message ? 'focus:ring-red-500' : 'focus:ring-primaryAccent'} sm:text-sm sm:leading-6`}
                                                />
                                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex items-center justify-center gap-x-6">
                                        <button
                                            type="submit"
                                            aria-label="submit contact info"
                                            className="rounded-md bg-primaryAccent px-6 py-3 font-semibold tracking-wider text-white shadow-sm transition-colors duration-200 ease-in-out hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {submit ? (
                            <div className="absolute top-0 flex flex-col justify-center items-center w-full h-full">
                                <div className="flex flex-col items-center bg-purple-950/90 backdrop-blur-lg w-[300px] h-max px-2 py-4 rounded-lg border border-white/60">
                                    <div className="flex flex-col justify-center items-center p-2">
                                        <svg width="50" height="50">
                                            <circle
                                                fill="none"
                                                stroke="#68E534"
                                                strokeWidth="2.5" 
                                                cx="25"
                                                cy="25"
                                                r="23.75" 
                                                strokeLinecap="round"
                                                transform="rotate(-90 25 25)"
                                                className="circle"
                                            />
                                            <polyline
                                                fill="none"
                                                stroke="#68E534"
                                                points="11,26.75 21.625,35.5 38,17.25" 
                                                strokeWidth="3" 
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tick"
                                            />
                                        </svg>
                                        <p className="text-[#68E534] success">Success</p>
                                    </div>
                                    <p className="text-primaryAccent font-bold text-lg">
                                        Thank You {formData.firstName.charAt(0).toUpperCase() + formData.firstName.slice(1).toLowerCase()}
                                    </p>
                                    <p className="text-white text-sm text-center my-2">
                                        I appreciate you considering me for an opportunity to be a part of your team! I will be in contact with you as soon as possible.
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        aria-label="close button"
                                        className="text-white/90 px-2 py-1 bg-primaryAccent hover:bg-orange-700 rounded-md mt-4"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
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
        </div>
    );
}