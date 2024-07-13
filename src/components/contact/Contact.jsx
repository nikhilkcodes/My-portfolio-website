import React, { useState, useEffect } from "react";
import './style.css';
import ContentWrapper from './../contentWrapper/ContentWrapper';
import { CiLocationArrow1 } from "react-icons/ci";
import SubmitJSON from 'submitjson'
import useTheme from "../../Context/Theme";
import { Button, Flex } from 'antd';

const Contact = ({ style }) => {
    const { themeMode } = useTheme(); 

	const apiKey = import.meta.env.VITE_SUBMIT_JSON_API_KEY
	const endpoint = import.meta.env.VITE_SUBMIT_JSON_ENDPOINT

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const sj = new SubmitJSON({
				apiKey: apiKey,
				endpoint: endpoint
			});

			const data = await sj.submit({
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				subject: formData.subject,
				message: formData.message
			});

			toast.success('Your Message has been submitted ! 🎉')

			setFormData({
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: ''
			});
		} catch (error) {
			toast.error('Form submission error please try again 😔')
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
	};


	return (
		<div className={`contact-body ${themeMode === 'dark' ? 'bg-slate-700' : 'bg-white'}`}>
            <ContentWrapper>
                <div className="flex justify-center items-center">
                    <div className="max-w-lg w-full p-6 rounded-lg shadow-lg">
                        <h1 className={`text-black text-center pb-1 ${themeMode === 'dark' ? 'text-white' : ''}`} data-aos="fade-left">
                            <u>Any Question?</u> Feel Free to Contact
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-black dark:text-white">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="input-field bg-slate-200 dark:bg-white"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-black dark:text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="input-field bg-slate-200 dark:bg-white"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phone" className="text-black dark:text-white">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="input-field bg-slate-200 dark:bg-white"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="subject" className="text-black dark:text-white">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="input-field bg-slate-200 dark:bg-white"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-black dark:text-white">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="input-field bg-slate-200 dark:bg-white"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <Button type="submit" className="border-black dark:border-white dark:text-white">
                                    Submit <CiLocationArrow1 className="ml-2" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </ContentWrapper>
        </div>
	);
};

export default Contact;
