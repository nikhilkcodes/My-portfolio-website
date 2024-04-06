import React, { useState, useEffect } from "react";
import './style.css';
import ContentWrapper from './../contentWrapper/ContentWrapper';
import { CiLocationArrow1 } from "react-icons/ci";
import SubmitJSON from 'submitjson'
import {toast} from 'react-hot-toast';

const Contact = ({style}) => {
	const apiKey = import.meta.env.VITE_SUBMIT_JSON_API_KEY
	const endpoint = import.meta.env.VITE_SUBMIT_JSON_ENDPOINT

	const [formData, setFormData] = useState({
		name:'',
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
		<div className="contact-body">
			<ContentWrapper>
				<div className="container text-start" style={style}>
					<h1 className="text-black text-center pb-1" data-aos="fade-left"> <u>Any Question?</u> Feel Free to Contact</h1>
					<div className="row align-items-start">
						<div className="col" data-aos="fade-left">
							<form onSubmit={handleSubmit} className="row g-3">
								<div className="col-md-6">
									<label className="form-label text-black">Name</label>
									<input type="text" name="name" className="form-control bg-transparent text-black border border-black" value={formData.name} onChange={handleChange} />
								</div>
								<div className="col-md-6">
									<label className="form-label text-black">Email</label>
									<input type="email" name="email" className="form-control bg-transparent text-black border border-black" value={formData.email} onChange={handleChange} />
								</div>
								<div className="col-12">
									<label className="form-label text-black">Phone</label>
									<input type="text" name="phone" className="form-control bg-transparent text-black border border-black" value={formData.phone} onChange={handleChange} />
								</div>
								<div className="col-12">
									<label className="form-label text-black">Subject</label>
									<input type="text" name="subject" className="form-control bg-transparent text-black border border-black" value={formData.subject} onChange={handleChange} />
								</div>
								<div className="mb-3">
									<label className="form-label text-black">Your Message</label>
									<textarea name="message" className="form-control bg-transparent text-black border border-black" rows="3" value={formData.message} onChange={handleChange}></textarea>
								</div>
								<div className="col-12">
									<button type="submit" className="btn btn-outline-dark">
										Submit <CiLocationArrow1 />
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default Contact;
