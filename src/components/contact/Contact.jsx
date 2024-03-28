import React, { useState, useEffect } from "react";
import './style.css';
import ContentWrapper from './../contentWrapper/ContentWrapper';
import { useForm, ValidationError } from '@formspree/react';
import { MdAttachEmail } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
const Contact = () => {
	const [redirect, handleRedirect] = useState({
		succeeded: false,
	});
	const [state, handleSubmit] = useForm("xrgnzlbe");

	useEffect(() => {
		if(state.succeeded) {
			setTimeout(() => {
				window.location.reload();
			}, 5000)
		}
	}, [state.succeeded])

	return (
		<div className="contact-body">
			<ContentWrapper>
				<div className="container text-start">
					<h1 className="text-black text-center pb-3" data-aos="fade-left">Any Question? Feel Free to Contact</h1>
					<div className="row align-items-start">
						<div className="col">
							<form onSubmit={handleSubmit} className="row g-3">
								<div className="col-md-6" data-aos="zoom-in">
									<label className="form-label text-black">Name</label>
									<input type="text" name="name" className="form-control bg-transparent text-black border border-black" />
								</div>
								<div className="col-md-6" data-aos="zoom-in">
									<label className="form-label text-black">Email</label>
									<input type="email" name="_replyto" className="form-control bg-transparent text-black border border-black" />
									<ValidationError prefix="Email" field="email" errors={state.errors} />
								</div>
								<div className="col-12" data-aos="zoom-in">
									<label className="form-label text-black">Phone</label>
									<input type="text" name="phone" className="form-control bg-transparent text-black border border-black" />
								</div>
								<div className="col-12" data-aos="zoom-in">
									<label className="form-label text-black">Subject</label>
									<input type="text" name="subject" className="form-control bg-transparent text-black border border-black" />
								</div>
								<div className="mb-3" data-aos="zoom-in">
									<label className="form-label text-black">Your Message</label>
									<textarea name="message" className="form-control bg-transparent text-black border border-black" rows="3"></textarea>
								</div>
								<div className="col-12" data-aos="zoom-in">
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
